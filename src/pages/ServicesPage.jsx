import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "01",
      title: "Performance Marketing",
      subtitle: "Lead Generation",
      problem: "Wasted Ad Spend",
      problemDesc: "Generic campaigns bleed budget on low-intent clicks without delivering qualified leads.",
      solution: "Structured Ad Systems",
      solutionDesc: "We build systems that generate qualified leads consistently using Meta Ads and Google Ads with hyper-targeting.",
      tag: "CORE SERVICE",
      icon: "rocket_launch",
      highlights: {
        meta: [
          "Campaign setup & management",
          "Audience research",
          "Interest & behavior targeting",
          "Retargeting campaigns",
          "Lead form ads",
          "Conversion-focused ad copy",
          "Creative direction",
          "Daily optimisation",
          "A/B testing"
        ],
        google: [
          "Search & Display campaigns",
          "Keyword research",
          "Competitor analysis",
          "Conversion tracking",
          "Call ads",
          "Landing page alignment",
          "Budget optimisation"
        ]
      }
    },
    {
      id: "02",
      title: "AI-Powered Optimization",
      subtitle: "Smart Ad Spending",
      problem: "Static Campaign Management",
      problemDesc: "Relying on manual updates alone leads to missed opportunities in fast-paced ad auctions.",
      solution: "Advanced Automation",
      solutionDesc: "We use advanced automation & AI-driven systems to ensure smarter ad spending and better ROI.",
      tag: "INNOVATION",
      icon: "psychology",
      points: [
        "Automatically optimise budget allocation",
        "Identify high-performing audiences",
        "Improve click-through rates",
        "Reduce cost per lead",
        "Test multiple creatives efficiently",
        "Scale winning ads faster"
      ]
    },
    {
      id: "03",
      title: "Social Media Management",
      subtitle: "Authority & Trust",
      problem: "Inconsistent Presence",
      problemDesc: "Empty or unprofessional profiles lose credibility with potential high-value clients.",
      solution: "Content & Branding",
      solutionDesc: "Best for education consultants & real estate agencies building credibility through consistent authority.",
      tag: "BRANDING",
      icon: "share",
      points: [
        "Content calendar creation",
        "8–12 professional posts per month",
        "Strategic caption writing",
        "Hashtag & keyword research",
        "Profile & Bio optimisation",
        "Engagement strategy",
        "Visual branding guidance",
        "Monthly insights report"
      ]
    },
    {
      id: "04",
      title: "Full Funnel Strategy",
      subtitle: "Conversion Systems",
      problem: "Leads Not Converting",
      problemDesc: "Capturing a lead is only half the battle; many fall through the cracks without a follow-up structure.",
      solution: "End-to-End Systems",
      solutionDesc: "We don't just run ads — we build end-to-end systems designed to turn leads into revenue.",
      tag: "STRATEGY",
      icon: "filter_list",
      points: [
        "Lead capture setup",
        "Funnel structure design",
        "Retargeting strategy",
        "Audience journey mapping",
        "WhatsApp / Call follow-up structure",
        "Landing page guidance",
        "Conversion tracking setup"
      ]
    },
    {
      id: "05",
      title: "Analytics & Reporting",
      subtitle: "Transparency",
      problem: "Marketing Blind Spots",
      problemDesc: "Not knowing exactly which ads are driving profit leads to inefficient budget allocation.",
      solution: "Transparent Tracking",
      solutionDesc: "Monthly ROI analysis and cost-per-lead tracking. You always know exactly where your money goes.",
      tag: "TRANSPARENCY",
      icon: "monitoring",
      points: [
        "Monthly performance reports",
        "Detailed cost per lead tracking",
        "Conversion metrics analysis",
        "Clear ROI analysis",
        "Strategy review call"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full pt-20 bg-white">
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Performance-First Agency
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.95]"
        >
          Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Growth</span> Systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-3xl mx-auto text-lg md:text-2xl text-slate-600 font-light leading-relaxed mb-12"
        >
          We build systems that turn impressions into qualified enquiries for local market leaders in Hyderabad.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button onClick={() => {
            const el = document.getElementById('services-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} className="flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-primary px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-slate-900/10">
            Explore Services
            <span className="material-symbols-outlined">arrow_downward</span>
          </button>
          <button onClick={() => navigate('/contact')} className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-lg font-bold text-slate-700 hover:text-primary border border-slate-200 hover:border-primary/30 transition-all bg-white shadow-sm">
            Book Free Audit
          </button>
        </motion.div>
      </section>

      <section id="services-grid" className="relative py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} space-y-10`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">{service.tag} {service.id}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{service.title}</h3>
                    <p className="text-xl text-slate-500 font-light">{service.subtitle}</p>
                  </div>

                  <div className="space-y-8">
                    <div className="border-l-4 border-red-500/20 pl-6 py-1">
                      <h4 className="text-red-500 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">warning</span> The Problem
                      </h4>
                      <h5 className="text-slate-900 text-xl font-bold mb-1">{service.problem}</h5>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.problemDesc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6 py-1">
                      <h4 className="text-primary font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">check_circle</span> Reach Solution
                      </h4>
                      <p className="text-slate-700 text-lg leading-relaxed font-medium">
                        {service.solutionDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <span className="material-symbols-outlined text-[12rem]">{service.icon}</span>
                    </div>

                    <h4 className="text-slate-900 font-black text-xl mb-8 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {service.id === "01" ? "1" : service.id === "02" ? "2" : service.id === "03" ? "3" : service.id === "04" ? "4" : "5"}
                      </span>
                      Plan Deliverables
                    </h4>

                    {service.highlights ? (
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <h5 className="text-slate-900 font-bold text-sm mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Meta Ads
                          </h5>
                          <ul className="space-y-3">
                            {service.highlights.meta.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 text-[13px] leading-tight font-medium">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">done_all</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-slate-900 font-bold text-sm mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Google Ads
                          </h5>
                          <ul className="space-y-3">
                            {service.highlights.google.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 text-[13px] leading-tight font-medium">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">done_all</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                        {service.points.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-tight font-medium">
                            <span className="material-symbols-outlined text-primary text-lg">check</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    <button onClick={() => navigate('/contact')} className="mt-12 w-full py-5 rounded-2xl bg-slate-900 text-white text-sm font-black shadow-xl hover:bg-primary transition-all uppercase tracking-widest">
                      Request Strategic Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Banner */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-6">target</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Enquiries Over Clicks.</h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Our single goal across all services is to generate qualified enquiries that turn into revenue. We don't just report numbers; we report growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
