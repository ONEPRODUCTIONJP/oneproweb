import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Cpu, Rocket } from 'lucide-react';

const Services: FC = () => {
  const services = [
    {
      title: '業務効率化アプリ開発',
      description: '現場のワークフローを徹底的に分析し、在庫管理や発注業務に特化した使いやすい専用アプリを開発します。',
      icon: <Zap className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      features: ['専用モバイル/Webアプリ', '発注業務の自動化', 'UI/UX最適化']
    },
    {
      title: '店舗・飲食店DX支援',
      description: '紙やスプレッドシートによるアナログな管理フローをデジタル化し、ミスや確認の手間を劇的に削減します。',
      icon: <Rocket className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      features: ['ペーパーレス化', '在庫ロスの削減', '現場ヒアリング']
    },
    {
      title: 'プロセス連携・自動化',
      description: '既存のPOSレジや社内ツールとデータをシームレスに連携し、二重入力を防ぐ自動化環境を構築します。',
      icon: <Cpu className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      features: ['API連携', '二重入力防止', 'データ同期']
    },
    {
      title: 'データ分析・経営可視化',
      description: '日々の発注状況やコスト状況をリアルタイムで可視化し、正確でスピーディーな経営判断をサポートします。',
      icon: <BarChart3 className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
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
            className="section-tag inline-block uppercase font-black text-xs text-primary tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6 border border-primary/20"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title font-black text-white"
          >
            ビジネスを支える<span className="text-gradient-primary">コア・テクノロジー</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description text-text-dim"
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
              className="glass-card group p-10 flex flex-col justify-between"
            >
              <div>
                <div className="service-icon-wrapper mb-8">
                  {service.icon}
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="service-card-title text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="service-card-description text-text-dim text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div className="service-features flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {service.features.map(feature => (
                  <span key={feature} className="feature-tag text-xs font-medium text-text-dim bg-white/5 px-3 py-1.5 rounded-full border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-all">
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

        .section-title {
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .section-description {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
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
          transition: all 0.3s ease;
        }

        .glass-card:hover .service-icon-wrapper {
          background: rgba(0, 255, 102, 0.15);
          border-color: rgba(0, 255, 102, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Services;
