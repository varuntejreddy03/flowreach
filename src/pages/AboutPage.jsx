import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full pt-20 bg-white">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">flag</span> Global Standards. Local Impact.
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6">
                Performance-Driven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Precision & Results</span>
              </h1>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  FlowReach Marketing Solutions is a performance-driven digital marketing agency focused on helping local businesses generate consistent, high-quality enquiries through structured advertising systems.
                </p>
                <p>
                  Founded by a marketing professional with international exposure and experience in <strong className="text-slate-900 font-semibold font-display">Singapore's competitive business environment</strong>, FlowReach brings a global standard of strategy, precision, and execution to local markets.
                </p>
                <p>
                  Working in Singapore provided hands-on experience in fast-paced, performance-oriented marketing environments where accountability, measurable ROI, and strategic optimization are critical. That experience now shapes the foundation of FlowReach.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-100 pt-8">
                <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                  <h4 className="text-3xl font-black text-slate-900 mb-1">Global</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Methodology</p>
                </div>
                <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                  <h4 className="text-3xl font-black text-slate-900 mb-1">100%</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Accountability</p>
                </div>
                <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                  <h4 className="text-3xl font-black text-slate-900 mb-1">Hyderabad</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">HQ Location</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl aspect-[4/5] lg:aspect-[3/4] bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Modern office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-10 bg-white/95 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl">
                  <p className="text-slate-900 font-bold italic leading-relaxed text-lg">"At FlowReach, marketing is not about impressions or likes — it is about real business outcomes."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 aspect-video group">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategic Planning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Predictable Lead-Generation Systems</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
                <p>
                  We specialize in supporting real estate agencies, gyms, restaurants, and cafés by transforming their online presence into predictable lead-generation systems. Our approach goes beyond social media posting — we design structured campaigns focused on targeted local advertising and data-driven optimization.
                </p>
                <p>
                  Every campaign is built with a results-first mindset, ensuring businesses see measurable growth through enquiries, calls, memberships, bookings, and site visits.
                </p>
                <p>
                  FlowReach Marketing Solutions exists to be a long-term growth partner for ambitious local businesses ready to move from random marketing efforts to structured, predictable growth systems.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary-dark text-white font-black py-5 px-10 rounded-2xl transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-sm"
              >
                Start Your Growth Journey
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
