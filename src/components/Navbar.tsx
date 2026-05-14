import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
    >
      <div className="container nav-container">
        <div className="nav-brand">
          <div className="logo-icon">
            <span>O</span>
          </div>
          <span className="brand-text">
            ONE <span className="text-primary">PRODUCTION</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <button className="btn btn-primary btn-sm">
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile-menu"
          >
            <div className="mobile-menu-content">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn btn-primary w-full mt-4">
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .nav-scrolled {
          padding: 1rem 0;
          background: rgba(3, 3, 3, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: var(--primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          color: #000;
          font-size: 1.25rem;
        }

        .brand-text {
          font-size: 1.125rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-dim);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #fff;
        }

        .nav-mobile-toggle {
          display: none;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
        }

        .btn-sm {
          padding: 0.6rem 1.25rem;
          font-size: 0.875rem;
          border-radius: 10px;
        }

        .nav-mobile-menu {
          background: #0a0a0a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .mobile-menu-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          font-size: 1.125rem;
          font-weight: 600;
          color: #fff;
        }

        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-mobile-toggle { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
