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
