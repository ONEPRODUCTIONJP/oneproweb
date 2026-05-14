import type { FC } from 'react';
import { motion } from 'framer-motion';


const Services: FC = () => {
  const services = [
    {
      title: '現場に寄り添うアプリ開発',
      description: '毎日使う現場の皆様が心地よく操作できるよう、お話を丁寧に伺いながら、業務に馴染むアプリをお作りします。'
    },
    {
      title: '業務プロセスの見直し',
      description: '紙やエクセルでの管理にかかる負担を和らげます。あらゆる業務の負担を減らし、スムーズな運用をお手伝いします。'
    },
    {
      title: '一緒に歩むパートナーとして',
      description: '納品して終わりではなく、導入後のお困りごとやご要望の変化に合わせて、ビジネスの成長を継続的にサポートいたします。'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title font-black"
          >
            CORE <span className="text-gradient-primary font-black">SERVICES</span>
          </motion.h2>
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
                <h3 className="service-card-title font-bold mb-4">{service.title}</h3>
                <p className="service-card-description font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 8rem 0;
          background: var(--bg);
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
