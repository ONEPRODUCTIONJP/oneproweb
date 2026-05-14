import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
    >
      <div className="container nav-container">
        <a href="#" className="nav-brand flex items-center gap-3 no-underline group">
          <img 
            src="/logo.png" 
            alt="ONE PRODUCTION" 
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]"
            onError={(e) => {
              // 画像がない場合のフォールバック表示
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="logo-icon hidden items-center justify-center font-black">
            <span>O</span>
          </div>
          <span className="brand-text font-extrabold tracking-tight text-white">
            ONE <span className="text-primary">PRODUCTION</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-desktop flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link text-sm font-medium text-text-dim hover:text-white transition-colors no-underline"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary btn-sm no-underline text-sm font-bold">
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-mobile-toggle block md:hidden text-white bg-transparent border-none cursor-pointer p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
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
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu bg-surface border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold text-white no-underline py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary w-full text-center mt-4 no-underline font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-scrolled {
          padding: 1rem 0;
          background: rgba(3, 3, 3, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          background: var(--primary);
          border-radius: 12px;
          color: #000;
          font-size: 1.25rem;
          box-shadow: 0 0 20px rgba(0, 255, 102, 0.3);
          transition: transform 0.3s ease;
        }

        .nav-brand:hover .logo-icon {
          transform: rotate(-10deg) scale(1.05);
        }

        .brand-text {
          font-size: 1.25rem;
        }

        .btn-sm {
          padding: 0.6rem 1.4rem;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
