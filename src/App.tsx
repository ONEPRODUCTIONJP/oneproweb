import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />

        {/* About Section */}
        <section id="about" className="section-padding relative overflow-hidden bg-[#030303]">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="section-tag">OUR MISSION</div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                  ビジネスの可能性を<br /><span className="text-primary">最大限に引き出す</span>
                </h2>
                <p className="text-lg text-text-dim leading-relaxed mb-6">
                  ONE PRODUCTIONは、単なるシステム開発会社ではありません。私たちは、お客様のビジネスに深く入り込み、共に課題を解決するパートナーです。
                </p>
                <p className="text-lg text-text-dim leading-relaxed mb-10">
                  「システム」を目的とするのではなく、あくまでビジネスを「加速」させるための手段として捉え、最適な技術選定と戦略的なアプローチを提供します。
                </p>
                <div className="flex gap-16">
                  <div>
                    <span className="block text-4xl font-black text-white mb-1">98%</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Satisfaction</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-black text-white mb-1">150+</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Projects</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative"
              >
                <div className="about-image-wrapper">
                  <div className="about-image-inner">
                    <div className="text-primary opacity-10 font-black text-[12rem] select-none transform -rotate-12">
                      DX
                    </div>
                  </div>
                  <div className="glow-orb"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cta-card"
            >
              <div className="cta-content">
                <h2 className="cta-title">
                  READY TO <span className="text-primary">ACCELERATE?</span>
                </h2>
                <p className="cta-description">
                  あなたのビジネスに最適なシステムを。まずは無料相談から始めましょう。
                </p>
                <button className="btn btn-primary btn-lg">
                  お問い合わせはこちら
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="cta-glow"></div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .section-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
        }
        .text-4xl { font-size: 2.5rem; }
        .text-5xl { font-size: 3.5rem; }
        .font-black { font-weight: 900; }
        .tracking-tighter { letter-spacing: -0.04em; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .flex-1 { flex: 1; }
        .gap-20 { gap: 5rem; }
        .gap-16 { gap: 4rem; }
        
        .about-image-wrapper {
          position: relative;
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .about-image-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(0, 255, 102, 0.05) 0%, transparent 70%);
        }

        .glow-orb {
          position: absolute;
          width: 200px;
          height: 200px;
          background: var(--primary);
          filter: blur(100px);
          opacity: 0.1;
          top: -50px;
          right: -50px;
        }

        .cta-card {
          padding: 6rem 4rem;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
        }

        .cta-description {
          font-size: 1.25rem;
          color: var(--text-dim);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-lg {
          padding: 1.25rem 3rem;
          font-size: 1.125rem;
          border-radius: 16px;
        }

        .cta-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: var(--primary);
          filter: blur(150px);
          opacity: 0.05;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .app {
          min-height: 100vh;
        }

        @media (max-width: 768px) {
          .cta-card { padding: 4rem 2rem; }
          .gap-20 { gap: 3rem; }
        }
      `}</style>
    </div>
  );
}

export default App;
