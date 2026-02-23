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
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-slate-50/50">
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.15em] mb-10 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Built for Performance
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8 max-w-5xl"
            >
              Predictable <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Revenue
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-2 bg-primary/10 -z-10 rounded-full"
                ></motion.span>
              </span> <br className="hidden md:block" /> Pipelines
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-slate-600 max-w-3xl mb-12 leading-relaxed font-light"
            >
              We design structured ad frameworks for Real Estate agencies, Gyms, and Restaurants that turn clicks into consistent high-intent enquiries.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 w-full justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(22 163 74 / 0.1), 0 8px 10px -6px rgb(22 163 74 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white text-lg font-bold py-5 px-10 rounded-2xl transition-all shadow-xl shadow-primary/20 min-w-[280px]"
              >
                <span>Request Free Audit</span>
                <span className="material-symbols-outlined">analytics</span>
              </motion.button>

              <Link to="/services" className="flex items-center justify-center gap-2 group px-10 py-5 rounded-2xl text-lg font-bold text-slate-700 hover:text-primary transition-colors border border-slate-200 hover:border-primary/30">
                View Services
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
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

      {/* Stats Bar */}
      <section className="relative z-20 -mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <StatItem label="Mindset" value="Performance-First" sub="No Vanity Metrics" delay={0.1} />
              <StatItem label="Technology" value="AI-Driven" sub="Real-time Scaling" delay={0.2} />
              <StatItem label="Exposure" value="Global Strategy" sub="Singapore Standard" delay={0.3} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">Beyond Simple Posting. <span className="text-primary italic">Engineered Growth.</span></h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light">
                Most agencies focus on content. We focus on conversion. We design the infrastructure that captures attention and converts it into profit.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all shadow-xl shadow-slate-900/10" to="/about">
                Our Story <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="grid_view"
              title="Built-in Frameworks"
              description="Battle-tested ad structures that eliminate guesswork from day one."
              delay={0.1}
            />
            <FeatureCard
              icon="monitoring"
              title="Precision Scaling"
              description="Our AI identifies high-margin audiences and scales them automatically."
              delay={0.2}
            />
            <FeatureCard
              icon="verified_user"
              title="Full Accountability"
              description="Real-time ROI dashboards. No hidden fees, no opaque reporting."
              delay={0.3}
            />
            <FeatureCard
              icon="generating_tokens"
              title="High Intent Leads"
              description="We filter out the noise to deliver leads ready to talk business."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
            >
              Dominating Local Markets
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1.5 bg-primary mx-auto rounded-full"
            ></motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryData.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-100 p-10 rounded-[2.5rem] flex flex-col items-center text-center gap-6 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all cursor-default group"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-[15deg] shadow-inner">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium 24/7 Support Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-50 border border-slate-100 rounded-[3.5rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl shadow-slate-200/50">
            <div className="absolute inset-0 bg-grid-pattern-overlay opacity-20"></div>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-[1.2] space-y-10 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-primary/20 shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">24/7 Support Active</span>
                </div>

                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tight font-display">
                    Round-the-Clock <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Support for Your Business</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body">
                    From early mornings to late nights, we're just a message or call away. Our 24/7 customer support ensures you get help whenever you need it.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-slate-900/10 flex items-center gap-3 group"
                  >
                    Contact Us
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
                  </button>
                  <a
                    href="https://wa.me/919959194226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-xl shadow-green-500/20 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 3.176-1.237 6.161-3.48 8.404-2.244 2.244-5.229 3.481-8.404 3.481-1.936 0-3.834-.473-5.534-1.371l-5.854 1.5l.473-6.195zm5.534-1.428l.325.192c1.455.859 3.132 1.313 4.881 1.313 5.432 0 9.849-4.417 9.849-9.849 0-2.63-1.025-5.101-2.887-6.963s-4.333-2.887-6.962-2.887c-5.433 0-9.85 4.417-9.85 9.85 0 2.052.64 4.045 1.849 5.717l.217.301-.849 3.102 3.277-.839zm12.915-11.53c-.229-.115-1.352-.667-1.562-.743-.21-.076-.363-.115-.516.115-.152.23-.591.743-.725.897-.133.152-.267.171-.497.057-.23-.115-.968-.357-1.844-1.138-.682-.609-1.142-1.36-1.275-1.591-.134-.23-.014-.354.101-.469l.41-.479c.115-.133.152-.229.229-.382.076-.153.038-.287-.019-.401-.057-.115-.516-1.243-.706-1.701-.184-.445-.372-.384-.516-.391l-.441-.008c-.152 0-.401.057-.611.287-.21.23-.801.783-.801 1.911s.821 2.217.935 2.37c.115.153 1.615 2.466 3.914 3.457.547.236.974.377 1.307.483.55.174 1.051.15 1.446.091.44-.066 1.352-.553 1.543-1.087.191-.535.191-.993.134-1.087-.057-.115-.21-.171-.44-.286z" /></svg>
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
                <div className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl p-10 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl font-bold">support_agent</span>
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
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-primary animate-bounce">
                  <span className="material-symbols-outlined font-bold">chat</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-emerald-500 rotate-12">
                  <span className="material-symbols-outlined font-bold text-3xl">verified</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value, sub, delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 px-4 py-6 md:py-0"
  >
    <h4 className="text-primary font-black tracking-[0.2em] uppercase text-[10px] mb-2">{label}</h4>
    <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{value}</p>
    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{sub}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white border border-slate-100 rounded-[2rem] p-10 flex flex-col gap-8 group hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:bg-slate-50/50"
  >
    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 group-hover:-rotate-6 shadow-sm">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-black text-slate-900 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
  </motion.div>
);

const industryData = [
  { name: "Real Estate", icon: "apartment", desc: "Consultants & Agencies" },
  { name: "Gyms", icon: "fitness_center", desc: "Fitness & Studios" },
  { name: "Restaurants", icon: "restaurant", desc: "Fine Dining & Fast Food" },
  { name: "Cafés", icon: "coffee", desc: "Boutique Coffee Shops" }
];

export default HomePage;
