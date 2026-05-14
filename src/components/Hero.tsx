import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section className="hero-section">
      <div className="bg-glow bg-glow-primary"></div>
      <div className="bg-glow bg-glow-cyan"></div>
      <div className="grid-overlay"></div>

      <div className="container hero-container">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title font-black"
        >
          システムで、<br />
          <span className="text-gradient-primary">ビジネスを加速する。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hero-description font-medium"
        >
          経営の効率化と、現場の使いやすさを両立するアプリ開発。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hero-actions"
        >
          <a href="#contact" className="btn btn-primary btn-hero">
            お問い合わせ
            <ArrowRight size={20} className="btn-icon" />
          </a>
          <a href="#services" className="btn btn-secondary btn-hero">
            サービス内容
          </a>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 8rem 0 4rem;
          background-color: var(--bg);
        }

        .bg-glow {
          position: absolute;
          width: 50vw;
          height: 50vw;
          max-width: 600px;
          max-height: 600px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .bg-glow-primary {
          background: rgba(0, 255, 102, 0.12);
          top: -10%;
          left: -10%;
        }

        .bg-glow-cyan {
          background: rgba(0, 184, 255, 0.1);
          bottom: -10%;
          right: -10%;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
          pointer-events: none;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 10;
          max-width: 900px;
        }

        .announcement-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(0, 255, 102, 0.08);
          border: 1px solid rgba(0, 255, 102, 0.25);
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          margin-bottom: 2rem;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .badge-icon {
          color: var(--primary);
        }

        .badge-text {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--primary);
        }

        .hero-title {
          font-size: clamp(2.8rem, 7.5vw, 5.5rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 1.75rem;
          color: #ffffff;
        }

        .hero-description {
          font-size: clamp(1.1rem, 2.2vw, 1.25rem);
          color: var(--text-dim);
          max-width: 700px;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .btn-hero {
          min-width: 180px;
        }

        .btn-icon {
          transition: transform 0.3s;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
