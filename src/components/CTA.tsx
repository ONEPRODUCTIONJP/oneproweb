export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-card" data-fade>
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-content">
            <h2 className="cta-title">まずは、お気軽にご相談ください</h2>
            <p className="cta-desc">
              「何から相談していいか分からない」「今の業務をもっと楽にしたい」など、どんな些細なお悩みでも大歓迎です。一緒に最適な進め方を考えさせていただきます。
            </p>
            <a href="mailto:oneproductionjp@gmail.com" className="btn btn-primary btn-cta" data-cursor-hover>
              お問い合わせ
              <span className="btn-icon" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
