import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Cpu, Rocket } from 'lucide-react';

const Services: FC = () => {
  const services = [
    {
      title: '業務効率化アプリ開発',
      description: '現場のワークフローを徹底的に分析し、在庫管理や発注業務に特化した使いやすい専用アプリを開発します。',
      icon: <Zap className="service-icon" size={26} />,
      features: ['専用モバイル/Webアプリ', '発注業務の自動化', 'UI/UX最適化']
    },
    {
      title: '店舗・飲食店DX支援',
      description: '紙やスプレッドシートによるアナログな管理フローをデジタル化し、ミスや確認の手間を劇的に削減します。',
      icon: <Rocket className="service-icon" size={26} />,
      features: ['ペーパーレス化', '在庫ロスの削減', '現場ヒアリング']
    },
    {
      title: 'プロセス連携・自動化',
      description: '既存のPOSレジや社内ツールとデータをシームレスに連携し、二重入力を防ぐ自動化環境を構築します。',
      icon: <Cpu className="service-icon" size={26} />,
      features: ['API連携', '二重入力防止', 'データ同期']
    },
    {
      title: 'データ分析・経営可視化',
      description: '日々の発注状況やコスト状況をリアルタイムで可視化し、正確でスピーディーな経営判断をサポートします。',
      icon: <BarChart3 className="service-icon" size={26} />,
      features: ['リアルタイム集計', 'コスト可視化', 'BIツール導入']
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
            className="section-title font-black"
          >
            ビジネスを支える<br /><span className="text-gradient-primary font-black">コア・テクノロジー</span>
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
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card service-card"
            >
              <div className="service-content">
                <div className="service-icon-wrapper">
                  {service.icon}
                  <div className="service-icon-glow"></div>
                </div>
                <h3 className="service-card-title font-bold">{service.title}</h3>
                <p className="service-card-description mb-8">
                  {service.description}
                </p>
              </div>
              <div className="service-features">
                {service.features.map(feature => (
                  <span key={feature} className="feature-tag font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 10rem 0;
          background: var(--surface);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 6rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
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
          margin-bottom: 1.5rem;
          border: 1px solid rgba(0, 255, 102, 0.25);
        }

        .section-title {
          font-size: clamp(2.2rem, 5.5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .section-description {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
          color: var(--text-dim);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .service-icon-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
          background: rgba(0, 255, 102, 0.08);
          border: 1px solid rgba(0, 255, 102, 0.2);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .service-icon {
          color: var(--primary);
          transition: transform 0.3s;
        }

        .service-card:hover .service-icon {
          transform: scale(1.15);
        }

        .service-card:hover .service-icon-wrapper {
          background: rgba(0, 255, 102, 0.15);
          border-color: rgba(0, 255, 102, 0.4);
          transform: translateY(-2px);
        }

        .service-icon-glow {
          position: absolute;
          inset: 0;
          background: rgba(0, 255, 102, 0.2);
          border-radius: 18px;
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .service-card:hover .service-icon-glow {
          opacity: 1;
        }

        .service-card-title {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .service-card-description {
          color: var(--text-dim);
          line-height: 1.7;
          font-size: 1rem;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1.5rem;
          border-t: 1px solid rgba(255, 255, 255, 0.05);
        }

        .feature-tag {
          font-size: 0.75rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.4rem 0.8rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s;
        }

        .service-card:hover .feature-tag {
          border-color: rgba(0, 255, 102, 0.2);
          color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default Services;
