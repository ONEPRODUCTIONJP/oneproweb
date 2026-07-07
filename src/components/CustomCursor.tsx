import { useEffect, useRef } from 'react'
import { useStore } from '../store/useStore'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const pointerDown = useStore((s) => s.pointerDown)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = dotRef.current
    if (!el) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let curX = mouseX
    let curY = mouseY
    let scale = 1
    let targetScale = 1
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      targetScale = target.closest('a, button, [data-cursor-hover]') ? 2.4 : 1
    }

    const tick = () => {
      curX += (mouseX - curX) * 0.22
      curY += (mouseY - curY) * 0.22
      scale += (targetScale - scale) * 0.18
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%) scale(${scale})`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={dotRef} className={`custom-cursor${pointerDown ? ' is-down' : ''}`} aria-hidden="true" />
}
