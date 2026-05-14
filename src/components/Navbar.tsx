import { useState, useEffect } from 'react';
import type { FC } from 'react';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-brand group">
          <img 
            src="/logo.png" 
            alt="ONE PRODUCTION" 
            className="navbar-logo group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="logo-fallback hidden">
            <span>O</span>
          </div>
          <span className="brand-text">
            ONE <span className="text-primary-color">PRODUCTION</span>
          </span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#" className="nav-item">Home</a></li>
            <li><a href="#services" className="nav-item">Services</a></li>
            <li><a href="#about" className="nav-item">About</a></li>
            <li><a href="#contact" className="nav-item btn-contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background: rgba(3, 3, 3, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 5.5rem;
          transition: height 0.3s;
        }

        .navbar-scrolled .navbar-container {
          height: 4.5rem;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          text-decoration: none;
          cursor: pointer;
        }

        .navbar-logo {
          width: 38px;
          height: 38px;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(0, 255, 102, 0.3));
          transition: transform 0.3s ease;
        }

        .group:hover .navbar-logo {
          transform: scale(1.1);
        }

        .logo-fallback {
          width: 36px;
          height: 36px;
          background: var(--primary);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          border-radius: 12px;
          font-size: 1.1rem;
        }

        .hidden {
          display: none !important;
        }

        .brand-text {
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .text-primary-color {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-item {
          color: var(--text-dim);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: #ffffff;
        }

        .btn-contact {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.6rem 1.25rem;
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .btn-contact:hover {
          background: var(--primary);
          color: #000000;
          border-color: var(--primary);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
