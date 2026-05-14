import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />

        {/* About Section */}
        <section id="about" className="section-padding relative overflow-hidden bg-bg">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <div className="section-tag inline-block uppercase font-black text-xs text-primary tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6 border border-primary/20">
                  OUR MISSION
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight text-white leading-tight">
                  ビジネスの可能性を<br /><span className="text-gradient-primary font-black">最大限に引き出す</span>
                </h2>
                <p className="text-lg text-text-dim leading-relaxed mb-6">
                  ONE PRODUCTIONは、単なるシステム開発会社ではありません。現場のリアルな声に耳を傾け、お客様のビジネス課題を根本から解決するパートナーです。
                </p>
                <p className="text-lg text-text-dim leading-relaxed mb-12">
                  実際の事例として、飲食店の業務効率化プロジェクトにおいて、専用アプリの導入により在庫管理・発注業務の時間を75%削減。発注ミスをゼロにする確かな実績を達成しました。
                </p>
                
                {/* Big Numbers (Social Proof) */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                    <span className="block text-5xl font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors">75%</span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-text-dim uppercase tracking-wider">
                      <CheckCircle2 size={14} className="text-primary" />
                      Time Reduction
                    </div>
                    <span className="block text-xs text-text-dim mt-2">在庫管理・発注業務の時間を劇的に削減</span>
                    <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-cyan/30 transition-all duration-300">
                    <span className="block text-5xl font-black text-white mb-2 tracking-tight group-hover:text-cyan transition-colors">ZERO</span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-text-dim uppercase tracking-wider">
                      <CheckCircle2 size={14} className="text-cyan" />
                      Order Errors
                    </div>
                    <span className="block text-xs text-text-dim mt-2">アナログな発注ミスやトラブルを完全ゼロへ</span>
                    <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-cyan/10 rounded-full blur-xl group-hover:bg-cyan/20 transition-all"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 relative w-full flex justify-center"
              >
                <div className="about-image-wrapper w-full max-w-lg aspect-square rounded-[40px] border border-white/10 bg-surface flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-cyan/10 opacity-50"></div>
                  <div className="about-image-inner text-primary opacity-15 font-black text-[12rem] lg:text-[14rem] select-none transform -rotate-12 tracking-tighter filter drop-shadow-[0_0_50px_rgba(0,255,102,0.5)]">
                    DX
                  </div>
                  <div className="glow-orb absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl -top-10 -right-10 pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-primary block mb-1">ACCELERATION HUB</span>
                    <span className="text-sm text-text-dim font-medium">最新のテクノロジーと確かな戦略でビジネスを牽引</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-surface relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50"></div>
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="cta-card p-12 lg:p-20 rounded-[40px] bg-black border border-white/10 relative overflow-hidden text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="cta-glow absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-8 border border-primary/20">
                  LET'S BUILD TOGETHER
                </span>
                <h2 className="cta-title text-4xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                  READY TO <span className="text-gradient-primary font-black">ACCELERATE?</span>
                </h2>
                <p className="cta-description text-lg lg:text-xl text-text-dim mb-10 leading-relaxed max-w-2xl mx-auto">
                  あなたのビジネスに最適なシステムを。最新のテクノロジースタックで、競争優位性を生み出す開発を始めましょう。
                </p>
                <a href="#contact" className="btn btn-primary btn-lg no-underline text-lg font-bold px-10 py-5">
                  お問い合わせはこちら
                  <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
