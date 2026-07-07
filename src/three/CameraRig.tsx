import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { director } from './director'
import { useStore } from '../store/useStore'

export default function CameraRig() {
  const { camera } = useThree()
  const idleOffset = useRef(new THREE.Vector3())
  const pointerNDC = useStore((s) => s.pointerNDC)

  useFrame(() => {
    const persp = camera as THREE.PerspectiveCamera

    idleOffset.current.x += (pointerNDC.x * 0.4 - idleOffset.current.x) * 0.03
    idleOffset.current.y += (pointerNDC.y * 0.25 - idleOffset.current.y) * 0.03

    persp.position.set(director.camPos.x + idleOffset.current.x, director.camPos.y + idleOffset.current.y, director.camPos.z)
    persp.lookAt(director.camLook)
  })

  return null
}
