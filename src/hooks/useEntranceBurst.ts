import { useEffect } from 'react'
import gsap from 'gsap'
import { director } from '../three/director'
import { useStore } from '../store/useStore'

/**
 * On load, kernels-of-the-mark start scattered (see ParticleField's initial
 * cloud texture) and settle into the swirl formation with a calm, controlled
 * ease -- deliberately no bounce/overshoot, to read as precise rather than playful.
 */
export function useEntranceBurst() {
  const loaded = useStore((s) => s.loaded)
  const reducedMotion = useStore((s) => s.reducedMotion)

  useEffect(() => {
    if (!loaded) return

    if (reducedMotion) {
      director.spring = 1.6
      director.flow = 0.35
      return
    }

    director.spring = 0.15
    director.flow = 1.4

    const tl = gsap.timeline()
    tl.to(director, { spring: 1.6, flow: 0.35, duration: 1.6, ease: 'power3.out' })

    return () => {
      tl.kill()
    }
  }, [loaded, reducedMotion])
}
