import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import ParticleField from './ParticleField'
import CameraRig from './CameraRig'
import PostFX from './PostFX'
import { useStore } from '../store/useStore'
import { downgrade, FpsWatchdog, QUALITY_PRESETS } from '../lib/quality'

function QualityWatchdog() {
  const quality = useStore((s) => s.quality)
  const setQuality = useStore((s) => s.setQuality)
  const setFps = useStore((s) => s.setFps)
  const watchdog = useRef(new FpsWatchdog())
  const lastDowngrade = useRef(0)

  useFrame((state, delta) => {
    const avg = watchdog.current.tick(delta)
    setFps(Math.round(avg))
    if (quality === 'low') return
    const now = state.clock.elapsedTime
    if (watchdog.current.shouldDowngrade() && now - lastDowngrade.current > 4) {
      lastDowngrade.current = now
      setQuality(downgrade(quality))
    }
  })

  return null
}

export default function Scene() {
  const quality = useStore((s) => s.quality)
  const preset = QUALITY_PRESETS[quality]

  return (
    <Canvas
      dpr={preset.dpr}
      gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <Suspense fallback={null}>
        <ParticleField gridSize={preset.particleGridSize} />
      </Suspense>
      <CameraRig />
      <QualityWatchdog />
      <PostFX />
    </Canvas>
  )
}
