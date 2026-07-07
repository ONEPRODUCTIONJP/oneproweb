import { useEffect } from 'react'

/** Reveals any [data-fade] element once it scrolls into view. */
export function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-fade]')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
