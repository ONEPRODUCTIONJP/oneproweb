import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 bg-black border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black font-black text-sm">O</span>
              </div>
              <span className="brand text-lg font-bold tracking-tighter uppercase">
                One <span className="text-primary">Production</span>
              </span>
            </div>
            <p className="text-text-dim leading-relaxed mb-8">
              「システムで、ビジネスを加速する。」<br />
              最新のテクノロジーと確かな戦略で、お客様のビジネスのDX化と効率化をサポートします。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Menu</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-dim hover:text-primary text-sm transition-colors">Home</a></li>
                <li><a href="#services" className="text-text-dim hover:text-primary text-sm transition-colors">Services</a></li>
                <li><a href="#about" className="text-text-dim hover:text-primary text-sm transition-colors">About</a></li>
                <li><a href="#contact" className="text-text-dim hover:text-primary text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4">
                <li className="text-text-dim text-sm">info@oneproduction.com</li>
                <li className="text-text-dim text-sm">03-xxxx-xxxx</li>
                <li className="text-text-dim text-sm">Tokyo, Japan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-xs">
            © 2026 ONE PRODUCTION Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-dim hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-dim hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .pb-10 { padding-bottom: 2.5rem; }
        .max-w-sm { max-width: 24rem; }
        .mb-20 { margin-bottom: 5rem; }
        .tracking-widest { letter-spacing: 0.1em; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .text-xs { font-size: 0.75rem; }
        .gap-24 { gap: 6rem; }
        .pt-8 { padding-top: 2rem; }
      `}</style>
    </footer>
  );
};

export default Footer;
