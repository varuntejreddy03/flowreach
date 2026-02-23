import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    industry: "Education Consultants",
    icon: "school",
    challenge: "Inconsistent enquiries from unstructured social media posting and generic ads with poor targeting.",
    solution: "Structured Meta ad funnels with AI-driven audience segmentation, retargeting sequences, and conversion-optimised landing pages.",
    results: [
      { metric: "3x", label: "Lead Volume" },
      { metric: "45%", label: "Lower CPL" },
      { metric: "2 Weeks", label: "To First Results" },
    ],
    quote: "FlowReach turned our random posting into a predictable enquiry machine.",
  },
  {
    industry: "Real Estate Developer",
    icon: "apartment",
    challenge: "High cost-per-lead from broad Google Ads campaigns with low-quality walk-in enquiries.",
    solution: "Hyper-local Google Search + Meta retargeting system targeting high-intent property seekers in specific pin codes.",
    results: [
      { metric: "60%", label: "Cost Reduction" },
      { metric: "4x", label: "Qualified Visits" },
      { metric: "₹12L+", label: "Monthly Pipeline" },
    ],
    quote: "We went from random walk-ins to qualified, intent-driven buyers within weeks.",
  },
  {
    industry: "Gym & Fitness Centre",
    icon: "fitness_center",
    challenge: "Seasonal drop-offs and no system to generate consistent memberships year-round.",
    solution: "Offer-based Meta campaigns with lead magnet funnels (free trial passes), automated follow-up sequences, and location-based targeting.",
    results: [
      { metric: "85+", label: "New Members/Month" },
      { metric: "₹120", label: "Avg. Cost Per Lead" },
      { metric: "30%", label: "Retention Boost" },
    ],
    quote: "Every month now feels like January — consistent signups all year round.",
  },
  {
    industry: "Restaurant & Café",
    icon: "restaurant",
    challenge: "Low visibility on social media with no clear strategy to drive footfall and online orders.",
    solution: "Instagram reels strategy + location-targeted ads + Google Maps optimisation for discovery-based traffic.",
    results: [
      { metric: "2.5x", label: "Footfall Increase" },
      { metric: "40%", label: "Online Order Growth" },
      { metric: "10K+", label: "Monthly Reach" },
    ],
    quote: "Our tables are full on weekdays now — something we never achieved before FlowReach.",
  },
];

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full pt-14 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 bg-slate-50/50">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-4 shadow-sm"
          >
            <span className="flex size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(22,163,74,0.4)]"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Performance Metrics Live</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-3 sm:mb-4"
          >
            Data-Backed Growth for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Local Leaders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xs sm:text-sm text-slate-600 leading-relaxed font-light px-2"
          >
            We don't just run ads; we engineer revenue pipelines. Explore the results we deliver through structured lead generation systems.
          </motion.p>
        </div>
      </section>

      {/* Results Summary Strip */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "4+", label: "Industries Served" },
              { value: "3x", label: "Avg. Lead Increase" },
              { value: "45%", label: "Lower Acquisition Cost" },
              { value: "2-4 Wk", label: "Time to Results" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center py-3"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display">{stat.value}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
          {caseStudies.map((cs, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-xl sm:rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left - Info */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-lg sm:text-xl">{cs.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900">{cs.industry}</h3>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Case Study</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 sm:mb-4">
                    <div className="bg-red-50/50 border border-red-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="text-red-500 font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">warning</span> Challenge
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">check_circle</span> Solution
                      </h4>
                      <p className="text-slate-700 text-xs leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg sm:rounded-xl p-3 border border-slate-100">
                    <p className="text-slate-500 text-xs italic leading-relaxed">"{cs.quote}"</p>
                  </div>
                </div>

                {/* Right - Results */}
                <div className="lg:w-64 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-100 p-4 sm:p-6 flex flex-row lg:flex-col justify-around items-center gap-3 sm:gap-4">
                  {cs.results.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <p className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-display">{r.metric}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{r.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">Our Proven Methodology</h2>
            <p className="text-slate-400 text-sm">The framework behind every successful campaign.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { step: "01", title: "Audit & Research", desc: "Deep-dive into your market, competitors, and audience behaviour to find high-intent segments.", icon: "search" },
              { step: "02", title: "System Architecture", desc: "Build structured ad funnels with conversion tracking, retargeting pixels, and A/B testing frameworks.", icon: "architecture" },
              { step: "03", title: "Launch & Optimise", desc: "Go live with aggressive testing. AI identifies winning creatives and audiences within 72 hours.", icon: "rocket_launch" },
              { step: "04", title: "Scale & Report", desc: "Double down on what works. Weekly reports with real metrics — CPL, ROAS, and qualified enquiry count.", icon: "trending_up" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-lg sm:rounded-xl p-4 sm:p-5 group hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-black">{item.step}</div>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">Want Results Like These?</h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Every business is unique. Let us audit your current marketing and show you exactly how we'd build your predictable lead system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
              Get Your Free Audit
            </button>
            <a
              href={`https://wa.me/919959194226?text=${encodeURIComponent("Hi FlowReach! I saw your case studies and I'm interested in getting similar results for my business.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-white rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013l-1.704 6.223 6.365-1.67a11.813 11.813 0 005.77 1.503h.005c6.636 0 12.032-5.393 12.035-12.032a11.772 11.772 0 00-3.411-8.506z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
