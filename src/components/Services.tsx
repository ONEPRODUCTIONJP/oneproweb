const SERVICES = [
  {
    title: '現場に寄り添うアプリ開発',
    description:
      '毎日使う現場の皆様が心地よく操作できるよう、お話を丁寧に伺いながら、業務に馴染むアプリをお作りします。',
  },
  {
    title: '業務プロセスの見直し',
    description: '紙やエクセルでの管理にかかる負担を和らげます。あらゆる業務の負担を減らし、スムーズな運用をお手伝いします。',
  },
  {
    title: '一緒に歩むパートナーとして',
    description:
      '納品して終わりではなく、導入後のお困りごとやご要望の変化に合わせて、ビジネスの成長を継続的にサポートいたします。',
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header" data-fade>
          <h2 className="section-title">
            CORE <span className="text-gradient">SERVICES</span>
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="glass-card service-card"
              data-fade
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
