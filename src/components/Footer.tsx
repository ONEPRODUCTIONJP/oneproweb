import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-gradient-bar"></div>
      
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a href="#" className="footer-brand group">
              <img 
                src="/logo.png" 
                alt="ONE PRODUCTION" 
                className="footer-logo group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="footer-fallback hidden">
                <span>O</span>
              </div>
              <span className="brand-text uppercase">
                One <span className="text-primary-color">Production</span>
              </span>
            </a>
            <p className="footer-desc">
              「システムで、ビジネスを加速する。」<br />
              現場のリアルな課題に寄り添い、確かな技術と戦略でお客様のビジネスのDX化をサポートします。
            </p>
            <div className="partner-tags">
              <span className="tag-border">TECH PARTNER</span>
              <span className="tag-primary">TOKYO, JAPAN</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links list-none">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Inquiries</h4>
            <ul className="footer-links list-none">
              <li className="footer-text select-all hover-white cursor-pointer">info@oneproduction.com</li>
              <li className="footer-text select-all hover-white cursor-pointer">03-xxxx-xxxx</li>
              <li className="footer-text">Tokyo, Japan</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright text-xs">
            © 2026 ONE PRODUCTION Inc. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#" className="footer-link text-xs">Privacy Policy</a>
            <a href="#" className="footer-link text-xs">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 6rem 0 3rem;
          background: var(--bg);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .footer-gradient-bar {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          opacity: 0.5;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          text-decoration: none;
          margin-bottom: 1.5rem;
          cursor: pointer;
        }

        .footer-logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(0, 255, 102, 0.3));
          transition: transform 0.3s;
        }

        .footer-brand:hover .footer-logo {
          transform: scale(1.1);
        }

        .footer-fallback {
          width: 36px;
          height: 36px;
          background: var(--primary);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          border-radius: 12px;
        }

        .brand-text {
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .text-primary-color { color: var(--primary); }
        .uppercase { text-transform: uppercase; }
        .hidden { display: none !important; }

        .footer-desc {
          color: var(--text-dim);
          line-height: 1.7;
          font-size: 1rem;
          margin-bottom: 2rem;
          max-width: 420px;
        }

        .partner-tags {
          display: flex;
          gap: 1rem;
        }

        .tag-border {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          letter-spacing: 0.05em;
        }

        .tag-primary {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          background: rgba(0, 255, 102, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          border: 1px solid rgba(0, 255, 102, 0.25);
          letter-spacing: 0.05em;
        }

        .footer-heading {
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          list-style: none;
        }

        .footer-link {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-text {
          color: var(--text-dim);
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .hover-white:hover { color: #ffffff; }
        .select-all { user-select: all; }
        .cursor-pointer { cursor: pointer; }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .copyright { color: var(--text-dim); }
        .text-xs { font-size: 0.8rem; }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
