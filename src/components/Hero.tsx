import { useState } from 'react'
import Scene from '../three/Scene'
import FallbackHero from './FallbackHero'
import { useStore } from '../store/useStore'
import { hasWebGL } from '../lib/webgl'

export default function Hero() {
  const reducedMotion = useStore((s) => s.reducedMotion)
  const [webglOk] = useState(() => hasWebGL())

  return (
    <section id="top" className="hero-section" aria-label="ONE PRODUCTION">
      <div className="bg-glow bg-glow-primary" aria-hidden="true" />
      <div className="bg-glow bg-glow-cyan" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <div className="hero-canvas" aria-hidden="true">
        {webglOk && !reducedMotion ? <Scene /> : <FallbackHero />}
      </div>

      <div className="container hero-container">
        <h1 className="hero-title" data-fade>
          システムで、
          <br />
          <span className="text-gradient">ビジネスを加速する。</span>
        </h1>

        <p className="hero-description" data-fade style={{ transitionDelay: '0.1s' }}>
          経営の効率化と、現場の使いやすさを両立するアプリ開発。
        </p>

        <div className="hero-actions" data-fade style={{ transitionDelay: '0.2s' }}>
          <a href="#contact" className="btn btn-primary" data-cursor-hover>
            お問い合わせ
            <span className="btn-icon" aria-hidden="true">
              →
            </span>
          </a>
          <a href="#services" className="btn btn-secondary" data-cursor-hover>
            サービス内容
          </a>
        </div>
      </div>
    </section>
  )
}
