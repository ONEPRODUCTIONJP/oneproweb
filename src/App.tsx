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
        <section id="about" className="about-section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="about-content text-center max-w-4xl mx-auto"
            >
              <h2 className="about-title font-black mb-6">
                現場の声から生まれる、<br /><span className="text-gradient-primary font-black">やさしいシステム</span>
              </h2>
              <p className="about-desc font-medium">
                ONE PRODUCTIONは、システムを通じて日々の業務を楽にしたいと願う開発チームです。現場スタッフの皆様のお声に耳を傾け、あらゆる業界の課題に寄り添い、使いやすいアプリを確かな技術でお作りいたします。
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="cta-section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="cta-card"
            >
              <div className="cta-glow"></div>
              
              <div className="cta-content">
                <h2 className="cta-title font-black">
                  まずは、お気軽にご相談ください
                </h2>
                <p className="cta-desc mb-10 font-medium">
                  「何から相談していいか分からない」「今の業務をもっと楽にしたい」など、どんな些細なお悩みでも大歓迎です。一緒に最適な進め方を考えさせていただきます。
                </p>
                <a href="mailto:oneproductionjp@gmail.com" className="btn btn-primary btn-cta">
                  お問い合わせ
                  <ArrowRight size={22} className="cta-btn-icon" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        /* About Section Styling */
        .about-section {
          padding: 10rem 0;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 6rem;
          align-items: center;
        }

        .section-tag {
          display: inline-block;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 0.75rem;
          color: var(--primary);
          letter-spacing: 0.15em;
          background: rgba(0, 255, 102, 0.1);
          padding: 0.4rem 1.25rem;
          border-radius: 100px;
          border: 1px solid rgba(0, 255, 102, 0.25);
        }

        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-12 { margin-bottom: 3rem; }

        .about-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .about-desc {
          font-size: 1.125rem;
          color: var(--text-dim);
          line-height: 1.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .stat-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .stat-number {
          display: block;
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.5rem;
          line-height: 1;
          transition: color 0.3s;
        }

        .stat-card:hover .group-hover-primary { color: var(--primary); }
        .stat-card:hover .group-hover-cyan { color: var(--cyan); }

        .stat-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
        }

        .text-primary-color { color: var(--primary); }
        .text-cyan-color { color: var(--cyan); }

        .stat-subtext {
          display: block;
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.5;
        }

        .stat-glow {
          position: absolute;
          right: -30px;
          bottom: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        .glow-primary { background: rgba(0, 255, 102, 0.15); }
        .glow-cyan { background: rgba(0, 184, 255, 0.15); }
        .stat-card:hover .stat-glow { opacity: 0.8; }

        .about-visual {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .about-box {
          width: 100%;
          max-width: 480px;
          aspect-ratio: 1 / 1;
          border-radius: 40px;
          background: var(--surface);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.8);
        }

        .about-box-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,255,102,0.1) 0%, transparent 50%, rgba(0,184,255,0.1) 100%);
        }

        .about-watermark {
          font-size: 14rem;
          font-weight: 900;
          color: var(--primary);
          opacity: 0.15;
          transform: rotate(-12deg);
          user-select: none;
          filter: drop-shadow(0 0 40px rgba(0,255,102,0.4));
        }

        .about-box-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 250px;
          height: 250px;
          background: rgba(0,255,102,0.2);
          border-radius: 50%;
          filter: blur(60px);
        }

        .about-box-card {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          right: 2rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          text-align: center;
        }

        .card-tag {
          display: block;
          font-size: 0.75rem;
          font-weight: 900;
          color: var(--primary);
          letter-spacing: 0.15em;
          margin-bottom: 0.25rem;
        }

        .card-text {
          font-size: 0.9rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        /* CTA Section Styling */
        .cta-section {
          padding: 8rem 0 12rem;
          background: var(--surface);
        }

        .cta-card {
          padding: 6rem 4rem;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.8);
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: rgba(0, 255, 102, 0.15);
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .cta-desc {
          font-size: 1.25rem;
          color: var(--text-dim);
          line-height: 1.7;
        }

        .btn-cta {
          padding: 1.25rem 3rem;
          font-size: 1.125rem;
        }

        .cta-btn-icon {
          transition: transform 0.3s;
        }

        .btn-cta:hover .cta-btn-icon {
          transform: translateX(4px);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .cta-card {
            padding: 4rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
