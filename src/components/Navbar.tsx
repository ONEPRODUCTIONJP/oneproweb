import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand" data-cursor-hover>
          <img src="/logo.png" alt="ONE PRODUCTION" className="navbar-logo" />
          <span className="navbar-brand-text">
            ONE <span className="text-primary">PRODUCTION</span>
          </span>
        </a>

        <nav aria-label="メインナビゲーション">
          <ul className="navbar-links">
            <li>
              <a href="#top" className="navbar-link" data-cursor-hover>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="navbar-link" data-cursor-hover>
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link" data-cursor-hover>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link navbar-cta" data-cursor-hover>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
