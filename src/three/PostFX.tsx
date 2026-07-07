import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { useStore } from '../store/useStore'
import { QUALITY_PRESETS } from '../lib/quality'

export default function PostFX() {
  const quality = useStore((s) => s.quality)
  const preset = QUALITY_PRESETS[quality]

  if (!preset.bloom) return null

  return (
    <EffectComposer multisampling={0}>
      <Bloom intensity={0.25} luminanceThreshold={0.6} luminanceSmoothing={0.15} mipmapBlur />
      <Vignette eskil={false} offset={0.2} darkness={0.55} />
    </EffectComposer>
  )
}
