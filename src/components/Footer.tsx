export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-gradient-bar" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a href="#top" className="footer-brand" data-cursor-hover>
              <img src="/logo.png" alt="ONE PRODUCTION" className="footer-logo" />
              <span className="footer-brand-text">
                ONE <span className="text-primary">PRODUCTION</span>
              </span>
            </a>
            <p className="footer-desc">「システムで、ビジネスを加速する。」</p>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">お問い合わせ</h4>
            <p className="footer-subtext">プロジェクトのご相談や業務DX診断など、お気軽にお問い合わせください。</p>
            <ul className="footer-links">
              <li>
                <a href="mailto:oneproductionjp@gmail.com" className="footer-link footer-email" data-cursor-hover>
                  oneproductionjp@gmail.com
                </a>
              </li>
              <li className="footer-text">Kyoto, Japan</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 ONE PRODUCTION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
