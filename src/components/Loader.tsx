import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useStore } from '../store/useStore'

const WORD = 'ONE PRODUCTION'
const MAX_LOAD_MS = 1200

export default function Loader() {
  const rootRef = useRef<HTMLDivElement>(null)
  const setLoaded = useStore((s) => s.setLoaded)
  const reducedMotion = useStore((s) => s.reducedMotion)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const letters = root.querySelectorAll<HTMLSpanElement>('.loader-letter')
    const tl = gsap.timeline()

    if (reducedMotion) {
      gsap.set(letters, { opacity: 1, y: 0 })
    } else {
      tl.fromTo(
        letters,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: { each: 0.025, from: 'start' },
        }
      )
    }

    const start = performance.now()
    const finish = () => {
      const elapsed = performance.now() - start
      const wait = Math.max(0, MAX_LOAD_MS - elapsed)
      window.setTimeout(() => {
        const exit = gsap.timeline({
          onComplete: () => setLoaded(true),
        })
        if (reducedMotion) {
          exit.set(root, { opacity: 0 })
        } else {
          exit.to(letters, {
            opacity: 0,
            duration: 0.35,
            ease: 'power2.in',
            stagger: 0.01,
          })
          exit.to(root, { opacity: 0, duration: 0.25 }, '-=0.1')
        }
      }, wait)
    }

    // assets are procedural/synchronous, so "ready" is effectively immediate;
    // the floor time below is what actually makes the loader feel intentional
    finish()

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={rootRef} className="loader" role="status" aria-live="polite">
      <div className="loader-word">
        {WORD.split('').map((ch, i) => (
          <span className="loader-letter" key={i}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </div>
      <span className="visually-hidden">読み込み中</span>
    </div>
  )
}
