import { useEffect } from 'react'
import Lenis from 'lenis'
import { useStore } from '../store/useStore'

/** Standard smooth-scroll feel for a normal-flow business site (no scroll-jacking or pinned sections). */
export function useSmoothScroll() {
  const reducedMotion = useStore((s) => s.reducedMotion)
  const loaded = useStore((s) => s.loaded)

  useEffect(() => {
    if (!loaded || reducedMotion) return

    const lenis = new Lenis({ duration: 1.0, smoothWheel: true })
    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [loaded, reducedMotion])
}
