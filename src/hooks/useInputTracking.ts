import { useEffect } from 'react'
import { useStore } from '../store/useStore'

/** Unifies mouse, touch, and gyroscope tilt into a single NDC-space pointer signal. */
export function useInputTracking() {
  const setPointerNDC = useStore((s) => s.setPointerNDC)
  const setPointerDown = useStore((s) => s.setPointerDown)

  useEffect(() => {
    const toNDC = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth) * 2 - 1
      const y = -(clientY / window.innerHeight) * 2 + 1
      setPointerNDC(x, y)
    }

    const onMouseMove = (e: MouseEvent) => toNDC(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) toNDC(e.touches[0].clientX, e.touches[0].clientY)
    }
    const onDown = () => setPointerDown(true)
    const onUp = () => setPointerDown(false)

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return
      const x = Math.max(-1, Math.min(1, e.gamma / 30))
      const y = Math.max(-1, Math.min(1, (e.beta - 45) / 30))
      setPointerNDC(x, y)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('touchstart', onDown, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    window.addEventListener('deviceorientation', onOrientation)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('touchstart', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
      window.removeEventListener('deviceorientation', onOrientation)
    }
  }, [setPointerNDC, setPointerDown])
}
