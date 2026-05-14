import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-bg border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
      
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20">
          <div className="max-w-md">
            <a href="#" className="flex items-center gap-3 mb-6 no-underline group">
              <img 
                src="/logo.png" 
                alt="ONE PRODUCTION" 
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-9 h-9 bg-primary hidden items-center justify-center rounded-xl shadow-[0_0_20px_rgba(0,255,102,0.3)]">
                <span className="text-black font-black text-base">O</span>
              </div>
              <span className="brand text-xl font-extrabold tracking-tight uppercase text-white">
                One <span className="text-primary">Production</span>
              </span>
            </a>
            <p className="text-text-dim text-base leading-relaxed mb-8">
              「システムで、ビジネスを加速する。」<br />
              最新のテクノロジーと確かな戦略で、お客様のビジネスのDX化と効率化をサポートします。
            </p>
            <div className="flex gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-text-dim bg-white/5 px-3 py-1 rounded-full border border-white/5">TECH PARTNER</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">TOKYO, JAPAN</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h4 className="text-white font-extrabold mb-6 text-xs uppercase tracking-widest text-primary">Navigation</h4>
              <ul className="flex flex-col gap-3 list-none">
                <li><a href="#" className="text-text-dim hover:text-white text-sm font-medium transition-colors no-underline">Home</a></li>
                <li><a href="#services" className="text-text-dim hover:text-white text-sm font-medium transition-colors no-underline">Services</a></li>
                <li><a href="#about" className="text-text-dim hover:text-white text-sm font-medium transition-colors no-underline">About</a></li>
                <li><a href="#contact" className="text-text-dim hover:text-white text-sm font-medium transition-colors no-underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-extrabold mb-6 text-xs uppercase tracking-widest text-primary">Inquiries</h4>
              <ul className="flex flex-col gap-3 list-none">
                <li className="text-text-dim text-sm font-medium select-all hover:text-white transition-colors cursor-pointer">info@oneproduction.com</li>
                <li className="text-text-dim text-sm font-medium select-all hover:text-white transition-colors cursor-pointer">03-xxxx-xxxx</li>
                <li className="text-text-dim text-sm font-medium">Tokyo, Japan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-xs font-medium">
            © 2026 ONE PRODUCTION Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-text-dim hover:text-white text-xs font-medium transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-text-dim hover:text-white text-xs font-medium transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
