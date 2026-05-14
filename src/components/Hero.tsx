import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            <span className="badge-text">BUSINESS ACCELERATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title"
          >
            システムで、<br />
            <span className="gradient-text">ビジネスを加速する。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-description"
          >
            私たちは最新のテクノロジーを活用し、業務効率化とDX推進のパートナーとして、あなたのビジネスを次なるステージへと導きます。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-buttons"
          >
            <button className="btn btn-primary">
              サービスを見る
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary">
              会社概要
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          margin-bottom: 2.5rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .badge-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, #00ffaa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          color: var(--text-dim);
          margin-bottom: 3.5rem;
          max-width: 600px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        /* Background Effects */
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }

        .bg-glow-1 {
          width: 600px;
          height: 600px;
          background: rgba(0, 255, 102, 0.05);
          top: -100px;
          right: -100px;
        }

        .bg-glow-2 {
          width: 500px;
          height: 500px;
          background: rgba(0, 204, 255, 0.03);
          bottom: -100px;
          left: -100px;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 60px;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-badge {
            margin-bottom: 1.5rem;
          }
          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
