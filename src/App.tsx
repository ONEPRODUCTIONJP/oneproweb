import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import { useStore } from './store/useStore'
import { useInputTracking } from './hooks/useInputTracking'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useEntranceBurst } from './hooks/useEntranceBurst'
import { useFadeIn } from './hooks/useFadeIn'
import { detectInitialTier } from './lib/quality'

export default function App() {
  const loaded = useStore((s) => s.loaded)
  const setQuality = useStore((s) => s.setQuality)
  const setReducedMotion = useStore((s) => s.setReducedMotion)

  useInputTracking()
  useSmoothScroll()
  useEntranceBurst()
  useFadeIn()

  useEffect(() => {
    setQuality(detectInitialTier())
  }, [setQuality])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [setReducedMotion])

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {!loaded && <Loader />}

      <Navbar />

      <main id="main">
        <Hero />
        <Services />
        <About />
        <CTA />
      </main>

      <Footer />

      <CustomCursor />
    </div>
  )
}
