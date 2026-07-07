import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GPUComputationRenderer, type Variable } from 'three-stdlib'
import positionShader from '../shaders/gpgpu/position.frag.glsl'
import particleVert from '../shaders/particle.vert.glsl'
import particleFrag from '../shaders/particle.frag.glsl'
import { generateCloudTarget, generateMarkTarget } from './targets'
import { useStore } from '../store/useStore'
import { director } from './director'

interface Props {
  gridSize: number
}

function fillTexture(tex: THREE.DataTexture, data: Float32Array) {
  const arr = tex.image.data as unknown as Float32Array
  for (let i = 0; i < data.length / 3; i++) {
    arr[i * 4] = data[i * 3]
    arr[i * 4 + 1] = data[i * 3 + 1]
    arr[i * 4 + 2] = data[i * 3 + 2]
    arr[i * 4 + 3] = 1.0
  }
}

export default function ParticleField({ gridSize }: Props) {
  const { gl } = useThree()
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef = useRef<THREE.Group>(null)
  const gpuComputeRef = useRef<GPUComputationRenderer | null>(null)
  const positionVarRef = useRef<Variable | null>(null)

  const pointerNDC = useStore((s) => s.pointerNDC)

  const count = gridSize * gridSize

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const uv = new Float32Array(count * 2)
    const rnd = new Float32Array(count)
    let p = 0
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        uv[p * 2] = x / (gridSize - 1)
        uv[p * 2 + 1] = y / (gridSize - 1)
        rnd[p] = Math.random()
        p++
      }
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aUv', new THREE.BufferAttribute(uv, 2))
    geo.setAttribute('aRandom', new THREE.BufferAttribute(rnd, 1))
    return geo
  }, [count, gridSize])

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: particleVert,
      fragmentShader: particleFrag,
      uniforms: {
        texturePosition: { value: null },
        uSize: { value: 1.7 },
        uHue: { value: 0.42 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      transparent: true,
      depthWrite: true,
      blending: THREE.NormalBlending,
    })
  }, [])

  useEffect(() => {
    const gpuCompute = new GPUComputationRenderer(gridSize, gridSize, gl)

    const dtPosition = gpuCompute.createTexture()
    fillTexture(dtPosition, generateCloudTarget(count))

    const targetMark = gpuCompute.createTexture()
    fillTexture(targetMark, generateMarkTarget(count))

    const positionVariable = gpuCompute.addVariable('texturePosition', positionShader, dtPosition)
    gpuCompute.setVariableDependencies(positionVariable, [positionVariable])

    const uniforms = positionVariable.material.uniforms
    uniforms.uTime = { value: 0 }
    uniforms.uDelta = { value: 0 }
    uniforms.targetMark = { value: targetMark }
    uniforms.uFlowStrength = { value: 0.35 }
    uniforms.uSpring = { value: 1.6 }
    uniforms.uDamping = { value: 0.93 }
    uniforms.uMouse3D = { value: new THREE.Vector3(9999, 9999, 9999) }
    uniforms.uMouseStrength = { value: 0.9 }
    uniforms.uPointerActive = { value: 0 }

    const error = gpuCompute.init()
    if (error !== null) {
      console.error('GPUComputationRenderer init error:', error)
    }

    gpuComputeRef.current = gpuCompute
    positionVarRef.current = positionVariable

    return () => {
      gpuCompute.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, gridSize, count])

  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const planeZ = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])
  const hitPoint = useMemo(() => new THREE.Vector3(), [])
  const pointerVec2 = useMemo(() => new THREE.Vector2(), [])

  useFrame((state, delta) => {
    const gpuCompute = gpuComputeRef.current
    const positionVariable = positionVarRef.current
    if (!gpuCompute || !positionVariable) return

    const uniforms = positionVariable.material.uniforms
    uniforms.uTime.value = state.clock.elapsedTime
    uniforms.uDelta.value = Math.min(delta, 1 / 30)
    uniforms.uFlowStrength.value = director.flow
    uniforms.uSpring.value = director.spring
    material.uniforms.uHue.value = director.hue

    pointerVec2.set(pointerNDC.x, pointerNDC.y)
    raycaster.setFromCamera(pointerVec2, state.camera)
    if (raycaster.ray.intersectPlane(planeZ, hitPoint)) {
      uniforms.uMouse3D.value.copy(hitPoint)
    }
    uniforms.uPointerActive.value = 1

    gpuCompute.compute()

    material.uniforms.texturePosition.value = gpuCompute.getCurrentRenderTarget(positionVariable).texture

    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geometry} material={material} frustumCulled={false} />
    </group>
  )
}
