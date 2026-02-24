import { useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
    }
  };

  return (
    <div className="flex flex-col w-full bg-white selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center pt-14 md:pt-20 pb-10 md:pb-12 overflow-hidden bg-slate-50/50">
        {/* Animated Background Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"
        ></motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0"
        ></motion.div>

        <div className="absolute inset-0 bg-grid-pattern-overlay opacity-30 z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Built for Performance
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-4 md:mb-6 max-w-5xl"
            >
              From Brand Visibility to <br className="hidden md:block" /><span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Predictable Revenue
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-2 bg-primary/10 -z-10 rounded-full"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base lg:text-xl text-slate-600 max-w-3xl mb-6 md:mb-8 leading-relaxed font-light px-2"
            >
              We design and manage structured advertising and social media systems for Education Consultants, Real Estate, and other businesses to drive predictable enquiries.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 w-full justify-center px-4 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(22 163 74 / 0.1), 0 8px 10px -6px rgb(22 163 74 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold py-3.5 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-primary/20 w-full sm:w-auto"
              >
                <span>Request Free Audit</span>
                <span className="material-symbols-outlined">analytics</span>
              </motion.button>

              <Link to="/services" className="flex items-center justify-center gap-2 group px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm font-bold text-slate-700 hover:text-primary transition-colors border border-slate-200 hover:border-primary/30 w-full sm:w-auto">
                View Services
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </motion.div>

            {/* Floating Metric Cards - below CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-10 px-2"
            >
              {[
                { icon: "ads_click", value: "Meta + Google", label: "Ad Platforms" },
                { icon: "location_on", value: "Hyderabad & Singapore", label: "Market Specialists" },
                { icon: "trending_up", value: "Performance", label: "Results-Only Focus" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.15 }}
                  className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md border border-slate-100 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 shadow-lg"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-lg">{card.icon}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-slate-900 font-black text-xs sm:text-sm leading-tight">{card.value}</p>
                    <p className="text-slate-400 text-[9px] sm:text-[10px] font-medium">{card.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Small Service Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4 px-2"
            >
              {["Social Media Management", "Content & Reels", "Influencer Marketing", "Reporting & Strategy"].map((svc, i) => (
                <Link key={i} to="/services" className="text-[10px] sm:text-xs text-slate-400 hover:text-primary transition-colors font-medium flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                  {svc}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Ticker */}
      <div className="relative z-20 py-6 sm:py-10 bg-white border-y border-slate-50 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Social Media Management</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Performance Marketing</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">AI-Powered Optimization</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Full Funnel Strategy</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Analytics & Reporting</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Education Consultants</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Real Estate</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
              <span className="text-slate-300 font-display font-black text-lg sm:text-2xl tracking-tighter uppercase opacity-50">Local Business</span>
              <span className="text-primary/30 material-symbols-outlined">circle</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us - 3 Pillars */}
      <section className="py-10 sm:py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "target",
                title: "Enquiries, Not Just Clicks",
                desc: "Every campaign is built around one metric: qualified enquiries that can turn into revenue. No vanity numbers.",
                accent: "bg-primary/5 border-primary/20"
              },
              {
                icon: "location_city",
                title: "Hyderabad Market Authority",
                desc: "We specialise in the Hyderabad local market — meaning your ads reach decision-makers in your exact radius.",
                accent: "bg-emerald-50 border-emerald-200/50"
              },
              {
                icon: "psychology",
                title: "AI + Human Intelligence",
                desc: "Our systems combine AI-powered optimisation with hands-on creative direction for maximum performance.",
                accent: "bg-slate-50 border-slate-200"
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${pillar.accent}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base mb-1 sm:mb-2">{pillar.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-[1.1]">
                Performance-First <span className="text-primary">Growth Systems.</span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-lg leading-relaxed font-light italic border-l-4 border-primary pl-4 sm:pl-6 mb-4">
                "We build structured advertising and social media systems that turn attention into predictable, high-intent enquiries."
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                From campaign setup to full social media management, every action is performance-focused and data-driven.
              </p>
              <Link className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 mt-4 sm:mt-6 w-full sm:w-auto justify-center" to="/about">
                Our Method <span className="material-symbols-outlined text-lg">trending_flat</span>
              </Link>
            </motion.div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
              <FeatureCard icon="grid_view" title="Frameworks" description="Audience research + creative execution for consistent visibility." delay={0.1} />
              <FeatureCard icon="monitoring" title="AI Scaling" description="High-margin audiences identified and scaled automatically." delay={0.2} />
              <FeatureCard icon="verified_user" title="Accountability" description="Real-time ROI dashboards. No hidden fees." delay={0.3} />
              <FeatureCard icon="generating_tokens" title="High Intent" description="Leads filtered to deliver people ready to talk business." delay={0.4} />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">Industries We Specialise In</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {industryData.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 border border-slate-100 p-3 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col items-center text-center gap-2 sm:gap-3 hover:border-primary/20 hover:shadow-lg transition-all cursor-default group"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900">{item.name}</h3>
                <p className="text-slate-400 text-[9px] sm:text-[10px] font-medium leading-snug hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Process Section */}
      <section className="py-10 sm:py-14 bg-slate-50 overflow-hidden relative border-t border-slate-100">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">How We Scale Your <span className="text-primary italic">Enquiries</span></h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">A 4-step performance framework designed for local market dominance.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { step: "01", title: "Market Research", desc: "We identify high-intent audiences and competitor gaps in your specific local area.", icon: "search" },
              { step: "02", title: "System Build", desc: "We engineer structured ad frameworks and set up conversion-focused tracking.", icon: "construction" },
              { step: "03", title: "Launch & Test", desc: "We deploy aggressive A/B tests to find the winning creative and audience combinations.", icon: "rocket_launch" },
              { step: "04", title: "Scale Profit", desc: "We use AI to identify high-performing segments and scale them for maximum ROI.", icon: "trending_up" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white border border-slate-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:border-primary/30 transition-all duration-500 h-full shadow-md">
                  <div className="text-primary font-black text-2xl sm:text-4xl mb-3 sm:mb-6 opacity-20 group-hover:opacity-100 transition-opacity font-display">{item.step}</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-6">
                    <span className="material-symbols-outlined text-lg sm:text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-2 sm:mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                    <span className="material-symbols-outlined text-slate-300 text-4xl">chevron_right</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium 24/7 Support Section */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 overflow-hidden relative shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-[1.2] space-y-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-primary/20 shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">24/7 Support Active</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight font-display">
                    Round-the-Clock <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Support</span>
                  </h2>
                  <p className="text-slate-600 text-sm font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    From early mornings to late nights, we're just a message or call away. Our 24/7 customer support ensures you get help whenever you need it.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-5 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group w-full sm:w-auto justify-center"
                  >
                    Contact Us
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
                  </button>
                  <a
                    href={`https://wa.me/919959194226?text=${encodeURIComponent("Hello FlowReach! 🚀 I'm interested in your 24/7 support and lead systems. Can we talk?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20 flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013l-1.704 6.223 6.365-1.67a11.813 11.813 0 005.77 1.503h.005c6.636 0 12.032-5.393 12.035-12.032a11.772 11.772 0 00-3.411-8.506z" />
                    </svg>
                    Message Us
                  </a>
                </div>
              </motion.div>

              {/* Visual Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full relative"
              >
                <div className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-xl p-4 sm:p-6 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 border-b border-slate-50 pb-4 sm:pb-6">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-xl sm:text-3xl font-bold">support_agent</span>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 font-display">Founder's Support</h4>
                        <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                          Online & Ready
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                        <p className="text-sm text-slate-600 font-body">"Hello! How can we help scale your business enquiries today?"</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto">
                        <p className="text-sm text-primary font-bold font-body">"Looking for a predictable lead system for my real estate project."</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="h-[2px] w-full bg-slate-100 rounded-full relative overflow-hidden">
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-primary/30 w-1/3"
                        ></motion.div>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-3 text-center uppercase tracking-widest font-black">Performance Engineering in Progress</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-primary animate-bounce">
                  <span className="material-symbols-outlined font-bold">chat</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-emerald-500 rotate-12">
                  <span className="material-symbols-outlined font-bold text-3xl">verified</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm">Everything you need to know before getting started.</p>
          </div>
          <div className="space-y-3">
            {[
              { q: "What industries do you work with?", a: "We specialize in Education Consultants, Real Estate, Gyms, Restaurants, Clinics, and Coaching Centres. Our frameworks are designed for local businesses that need predictable enquiry flow." },
              { q: "How quickly can I see results?", a: "Most clients begin seeing qualified leads within 2-4 weeks of campaign launch. We focus on high-intent enquiries, not just impressions or clicks." },
              { q: "Do you manage our social media too?", a: "Yes! We offer complete Social Media Management including content strategy, creative design, scheduling, engagement management, and location-based ad targeting." },
              { q: "What platforms do you advertise on?", a: "We run performance campaigns on Meta (Facebook & Instagram), Google Ads, and YouTube. Our AI-powered optimization ensures every rupee is spent efficiently." },
              { q: "What makes FlowReach different from other agencies?", a: "We focus on enquiry generation, not vanity metrics. Every campaign is structured around driving real conversations and conversions, backed by AI-driven optimisation and Singapore-standard strategy." },
              { q: "Is there a minimum contract period?", a: "We offer flexible month-to-month packages. No long-term lock-ins — our results speak for themselves. Custom plans are available based on your business needs." }
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group bg-slate-50 border border-slate-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 font-bold text-slate-900 text-xs sm:text-sm hover:text-primary transition-colors gap-2">
                  {faq.q}
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-lg">expand_more</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4 leading-tight">
                Ready to Turn Attention Into <span className="text-primary italic">Predictable Revenue?</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 max-w-2xl mx-auto">
                Stop guessing. Start growing. Join businesses dominating their local markets with our structured performance systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/contact')} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
                  Book Your Free Audit
                </button>
                <button onClick={() => navigate('/services')} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-primary/30 hover:text-primary transition-all shadow-sm w-full sm:w-auto">
                  Browse Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value, sub, delay, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 px-4 py-6 md:py-0"
  >
    <h4 className={`${isDark ? 'text-primary' : 'text-primary'} font-black tracking-[0.2em] uppercase text-[10px] mb-2`}>{label}</h4>
    <p className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-tight`}>{value}</p>
    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'} font-medium uppercase tracking-widest`}>{sub}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ y: -3 }}
    className="bg-white border border-slate-100 rounded-xl p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 group hover:border-primary/30 hover:shadow-lg transition-all duration-300"
  >
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
      <span className="material-symbols-outlined text-lg sm:text-xl">{icon}</span>
    </div>
    <div className="space-y-1">
      <h3 className="text-xs sm:text-sm font-black text-slate-900">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const industryData = [
  { name: "Real Estate", icon: "apartment", desc: "Agents, Builders & Developers" },
  { name: "Education", icon: "school", desc: "Consultants & Institutions" },
  { name: "Gyms & Fitness", icon: "fitness_center", desc: "Studios & Personal Trainers" },
  { name: "Restaurants", icon: "restaurant", desc: "Cafés, QSR & Fine Dining" },
  { name: "Clinics", icon: "local_hospital", desc: "Dental, Derma & Wellness" },
  { name: "Coaching", icon: "menu_book", desc: "IAS, JEE & Test Prep" }
];

export default HomePage;
