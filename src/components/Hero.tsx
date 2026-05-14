import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section className="hero-section">
      {/* Dynamic Background */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="grid-pattern"></div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-badge-wrapper"
          >
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text font-bold">NEXT GEN BUSINESS ACCELERATION</span>
              <Sparkles size={14} className="text-primary ml-1 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title font-black"
          >
            システムで、<br />
            <span className="text-gradient-primary">ビジネスを加速する。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hero-description text-text-dim"
          >
            現場のリアルな課題に寄り添い、圧倒的な業務効率化を実現するアプリ開発スタジオ。発注・在庫管理の時間を劇的に削減し、ミスをなくす確かなシステムを提供します。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="hero-buttons flex items-center gap-6"
          >
            <a href="#services" className="btn btn-primary no-underline text-base font-bold">
              サービスを見る
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn btn-secondary no-underline text-base font-bold">
              会社概要
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          padding-bottom: 80px;
          overflow: hidden;
        }

        .hero-content {
          max-width: 900px;
          position: relative;
          z-index: 10;
        }

        .hero-badge-wrapper {
          margin-bottom: 2.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .hero-badge:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(0, 255, 102, 0.3);
          transform: translateY(-2px);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--primary);
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 12px var(--primary); }
          50% { transform: scale(1.3); opacity: 0.6; box-shadow: 0 0 20px var(--primary); }
        }

        .badge-text {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(3.2rem, 8.5vw, 6.2rem);
          line-height: 1.05;
          margin-bottom: 2.5rem;
          letter-spacing: -0.04em;
        }

        .hero-description {
          font-size: clamp(1.15rem, 2.2vw, 1.4rem);
          margin-bottom: 4rem;
          max-width: 650px;
          line-height: 1.75;
        }

        /* Background Effects */
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
          animation: float-glow 10s ease-in-out infinite alternate;
        }

        .bg-glow-1 {
          width: 700px;
          height: 700px;
          background: rgba(0, 255, 102, 0.07);
          top: -150px;
          right: -100px;
        }

        .bg-glow-2 {
          width: 600px;
          height: 600px;
          background: rgba(0, 204, 255, 0.05);
          bottom: -150px;
          left: -100px;
          animation-delay: -5s;
        }

        @keyframes float-glow {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-30px, 30px) scale(1.1); }
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 45px 45px;
          mask-image: radial-gradient(circle at 40% 40%, black 10%, transparent 80%);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
