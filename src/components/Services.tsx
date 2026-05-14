import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Cpu, Rocket } from 'lucide-react';

const Services: FC = () => {
  const services = [
    {
      title: '業務効率化',
      description: '既存のワークフローを徹底的に分析し、自動化と最適化を通じて、限られたリソースで最大の成果を生み出す環境を構築します。',
      icon: <Zap className="text-primary" size={28} />,
      features: ['プロセス自動化', 'ペーパーレス化', '社内システム最適化']
    },
    {
      title: 'DX推進支援',
      description: 'デジタル技術をビジネスの核に据え、競争優位性を確立するための戦略立案から実装までをトータルにサポートします。',
      icon: <Rocket className="text-primary" size={28} />,
      features: ['クラウド移行', 'データ活用基盤の構築', 'デジタル戦略立案']
    },
    {
      title: 'カスタムシステム開発',
      description: 'お客様独自のビジネスニーズに合わせ、使いやすさと拡張性を兼ね備えたオーダーメイドのシステムを開発します。',
      icon: <Cpu className="text-primary" size={28} />,
      features: ['Webアプリケーション', '社内管理ツール', 'API連携']
    },
    {
      title: 'データ分析・可視化',
      description: '散在するデータを価値ある情報へと変換し、迅速かつ正確な意思決定を支援するダッシュボードを構築します。',
      icon: <BarChart3 className="text-primary" size={28} />,
      features: ['BIツール導入', 'KPI可視化', 'リアルタイム集計']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            ビジネスを支える<span className="text-primary">コア・テクノロジー</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            私たちは、技術の力でビジネスの可能性を広げ、持続的な成長を実現するためのソリューションを提供します。
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">
                {service.description}
              </p>
              <div className="service-features">
                {service.features.map(feature => (
                  <span key={feature} className="feature-tag">{feature}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 10rem 0;
          background: #050505;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-dim);
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 3rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 255, 102, 0.2);
          transform: translateY(-5px);
        }

        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          background: rgba(0, 255, 102, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .service-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .service-card-description {
          color: var(--text-dim);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .feature-tag {
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          color: var(--text-dim);
        }

        .service-card:hover .feature-tag {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Services;
