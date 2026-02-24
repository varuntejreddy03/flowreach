import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "01",
      title: "Social Media Management",
      subtitle: "Authority & Trust",
      problem: "Inconsistent Presence",
      problemDesc: "Empty or unprofessional profiles lose credibility with potential high-value clients.",
      solution: "Content & Branding",
      solutionDesc: "Best for education consultants & real estate agencies building credibility through consistent authority.",
      tag: "BRANDING",
      icon: "share",
      points: [
        "Location based Ad Targeting in kilometres radius",
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
      id: "02",
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
      id: "03",
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
    },
    {
      id: "06",
      title: "Content Creation & Video Strategy",
      subtitle: "Brand Presence & Paid Support",
      problem: "Generic Content",
      problemDesc: "Posting without a strategy weakens your brand and fails to support paid advertising performance.",
      solution: "Strategic Content Systems",
      solutionDesc: "We create strategic, conversion-focused content designed to strengthen your brand presence and support paid advertising performance. Our content approach is built around visibility, engagement, and enquiry generation — not just aesthetics.",
      tag: "CONTENT",
      icon: "videocam",
      points: [
        "Reels & Short-Form Video Strategy",
        "Script & Concept Planning",
        "Promotional Campaign Content",
        "Platform-Optimised Creative Formats",
        "Ad Creative Direction",
        "Content Calendar Alignment"
      ],
      footer: "Every piece of content is aligned with your growth objectives and promotion strategy."
    },
    {
      id: "07",
      title: "Influencer & Promotion Campaigns",
      subtitle: "Credibility & Reach",
      problem: "Low Brand Trust",
      problemDesc: "Without structured influencer collaborations, your brand misses out on credibility and targeted reach.",
      solution: "Strategic Partnerships",
      solutionDesc: "We design structured influencer collaborations to increase brand credibility, targeted reach, and campaign effectiveness. Our approach focuses on strategic partnerships that align with your audience and business goals.",
      tag: "INFLUENCER",
      icon: "group",
      points: [
        "Influencer Identification & Shortlisting",
        "Campaign Strategy & Coordination",
        "Reel & Story Collaborations",
        "Promotion Timeline Planning",
        "Performance Monitoring & Reporting"
      ],
      footer: "We ensure influencer efforts support your broader advertising and brand growth strategy."
    }
  ];

  const packages = [
    {
      tier: "Bronze",
      icon: "🥉",
      title: "Social media starter",
      subtitle: "For Businesses Focused on Brand Presence & Consistency",
      description: "Designed for businesses that want to build a strong digital presence before scaling paid advertising.",
      features: [
        "12 Social Media Posts per Month",
        "Strategic Content Calendar Planning (Regular Posting)",
        "Professional Caption Writing",
        "Hashtag & Reach Strategy",
        "Basic Profile Optimisation",
        "Monthly Performance Report",
        "WhatsApp"
      ],
      positioning: "Build visibility, credibility, and consistent brand presence."
    },
    {
      tier: "Silver",
      icon: "🥈",
      title: "Lead Growth",
      subtitle: "For Businesses Ready to Generate Consistent Enquiries",
      description: "Built for service businesses that want structured lead generation through paid advertising.",
      features: [
        "Meta Ads Management",
        "Google Ads Management (Single Campaign Structure)",
        "Audience & Market Research",
        "Conversion-Focused Ad Copy",
        "Creative Direction & Testing",
        "AI-Based Campaign Optimisation",
        "Location based Ad Targeting in kilometres radius",
        "Conversion Tracking Setup",
        "Monthly Strategy Call",
        "Performance Reporting Dashboard"
      ],
      budget: "Budget guidance provided based on business goals and market.",
      positioning: "A structured lead generation system designed for measurable growth."
    },
    {
      tier: "Gold",
      icon: "🥇",
      title: "Authority & Scale premium",
      subtitle: "For Businesses Ready to Dominate & Expand",
      description: "Designed for serious businesses seeking aggressive growth and market authority.",
      features: [
        "Full Funnel Strategy Development",
        "Meta & Google Ads (Multiple Campaign Structures)",
        "Advanced Retargeting Systems",
        "Landing Page Optimisation Guidance",
        "Social Media Management (8–12 Posts Monthly)",
        "AI-Driven Campaign Optimisation",
        "Location based Ad Targeting in kilometres radius",
        "Weekly Performance Monitoring",
        "Competitor & Market Analysis",
        "Advanced Tracking",
        "Monthly Growth Strategy Meeting"
      ],
      positioning: "Long-term revenue growth partner focused on scalability and efficiency."
    }
  ];

  return (
    <div className="flex flex-col w-full pt-14 sm:pt-20 bg-white">
      <section className="relative pt-10 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-3 sm:mb-4 leading-[0.95]"
          >
            Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Growth</span> Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 max-w-3xl mx-auto text-xs sm:text-base md:text-lg text-slate-600 font-light leading-relaxed mb-6 sm:mb-8 px-2"
          >
            We build systems that turn impressions into qualified enquiries for local market leaders in Hyderabad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0"
          >
            <button onClick={() => {
              const el = document.getElementById('services-grid');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
              Explore Services
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
            <button onClick={() => navigate('/contact')} className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm font-bold text-slate-700 hover:text-primary border border-slate-200 hover:border-primary/30 transition-all bg-white shadow-sm w-full sm:w-auto">
              Book Free Audit
            </button>
          </motion.div>

          {/* Floating Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {[
              { icon: "grid_view", label: "7 Core Services" },
              { icon: "ads_click", label: "Meta & Google Ads" },
              { icon: "psychology", label: "AI-Driven Campaigns" },
              { icon: "location_on", label: "Hyderabad Focused" },
              { icon: "trending_up", label: "Performance First" }
            ].map((pill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-slate-100 rounded-full shadow-sm text-slate-600 text-[10px] sm:text-xs font-bold"
              >
                <span className="material-symbols-outlined text-primary text-sm">{pill.icon}</span>
                {pill.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* vs. Agency Comparison Strip */}
      <section className="bg-slate-50 py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-slate-500 text-xs uppercase tracking-[0.3em] font-bold">FlowReach vs. Generic Agencies</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { them: "Vanity metrics (likes, reach)", us: "Qualified enquiries & revenue", icon: "bar_chart" },
              { them: "Same strategy for every client", us: "Custom-built system for your market", icon: "construction" },
              { them: "Monthly report, no clarity", us: "Weekly monitoring + strategy calls", icon: "monitoring" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-sm mt-0.5">close</span>
                    <p className="text-slate-400 text-sm line-through">{item.them}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                    <p className="text-slate-900 text-sm font-bold">{item.us}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-grid" className="relative py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">{service.tag} {service.id}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">{service.title}</h3>
                    <p className="text-sm text-slate-500 font-light">{service.subtitle}</p>
                  </div>

                  <div className="space-y-4">
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
                  <div className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <span className="material-symbols-outlined text-[12rem]">{service.icon}</span>
                    </div>

                    <h4 className="text-slate-900 font-black text-base mb-5 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {parseInt(service.id)}
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

                    {service.footer && (
                      <p className="mt-4 text-slate-500 text-xs sm:text-sm italic leading-relaxed border-l-2 border-primary/30 pl-3">
                        {service.footer}
                      </p>
                    )}

                    <button onClick={() => navigate('/contact')} className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 rounded-xl bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary-dark transition-all">
                      Request Strategic Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Packages Section */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              Tailored Solutions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
            >
              Our Branding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Packages</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col h-full bg-white border ${idx === 1 ? 'border-primary/30 shadow-xl md:scale-105 z-10' : 'border-slate-100 shadow-lg'} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 relative group hover:border-primary/20 transition-all duration-500`}
              >
                {idx === 1 && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg z-20">
                    Most Popular
                  </div>
                )}

                <div className="text-4xl mb-6">{pkg.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">{pkg.title}</h3>
                <p className="text-primary font-bold text-[10px] uppercase tracking-wider mb-6">{pkg.subtitle}</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">{pkg.description}</p>

                <div className="flex-grow space-y-6 mb-10">
                  <div className="space-y-4">
                    <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                      Includes
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-[13px] leading-tight font-medium">
                          <span className="material-symbols-outlined text-primary text-lg mt-[-2px]">check_circle</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-50 space-y-6">
                  {pkg.budget && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Recommended Ad Budget</p>
                      <p className="text-slate-900 text-[13px] font-bold">{pkg.budget}</p>
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Positioning</p>
                    <p className="text-slate-700 text-[13px] font-medium leading-relaxed italic">"{pkg.positioning}"</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center space-y-2">
                    <p className="text-slate-500 text-[11px] leading-relaxed">Interested in this plan? Contact us for a <span className="text-primary font-bold">custom quote</span> tailored to your business.</p>
                    <a
                      href={`https://wa.me/919959194226?text=${encodeURIComponent(`Hi FlowReach! I'm interested in the ${pkg.title} package. Can you share more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-black text-[#25D366] hover:underline"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013l-1.704 6.223 6.365-1.67a11.813 11.813 0 005.77 1.503h.005c6.636 0 12.032-5.393 12.035-12.032a11.772 11.772 0 00-3.411-8.506z" /></svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Growth Strategy */}
      <section className="py-14 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Brand Growth
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
            >
              Our Branding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Packages</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-sm max-w-2xl mx-auto"
            >
              Beyond advertising — we build complete content and influencer ecosystems that amplify your brand and support paid campaign performance.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Content Creation & Video Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg hover:border-primary/20 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="material-symbols-outlined text-[10rem]">videocam</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">videocam</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">Content Creation & Video Strategy</h3>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Brand Presence & Paid Support</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  We create <strong className="text-slate-900">strategic, conversion-focused content</strong> designed to strengthen your brand presence and support paid advertising performance.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Our content approach is built around <strong className="text-slate-700">visibility, engagement, and enquiry generation</strong> — not just aesthetics.
                </p>

                <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Includes
                </h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "Reels & Short-Form Video Strategy",
                    "Script & Concept Planning",
                    "Promotional Campaign Content",
                    "Platform-Optimised Creative Formats",
                    "Ad Creative Direction",
                    "Content Calendar Alignment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-tight font-medium">
                      <span className="material-symbols-outlined text-primary text-lg mt-[-2px]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-slate-500 text-xs sm:text-sm italic leading-relaxed border-l-2 border-primary/30 pl-3 mb-6">
                  Every piece of content is aligned with your growth objectives and promotion strategy.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center space-y-2">
                  <p className="text-slate-500 text-[11px] leading-relaxed">Interested in this plan? Contact us for a <span className="text-primary font-bold">custom quote</span> tailored to your business.</p>
                  <a
                    href={`https://wa.me/919959194226?text=${encodeURIComponent("Hi FlowReach! I'm interested in the Content Creation & Video Strategy package. Can you share more details?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-black text-[#25D366] hover:underline"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013l-1.704 6.223 6.365-1.67a11.813 11.813 0 005.77 1.503h.005c6.636 0 12.032-5.393 12.035-12.032a11.772 11.772 0 00-3.411-8.506z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Influencer & Promotion Campaigns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg hover:border-primary/20 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="material-symbols-outlined text-[10rem]">group</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">group</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">Influencer & Promotion Campaigns</h3>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Credibility & Reach</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  We design <strong className="text-slate-900">structured influencer collaborations</strong> to increase brand credibility, targeted reach, and campaign effectiveness.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Our approach focuses on <strong className="text-slate-700">strategic partnerships</strong> that align with your audience and business goals.
                </p>

                <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Includes
                </h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "Influencer Identification & Shortlisting",
                    "Campaign Strategy & Coordination",
                    "Reel & Story Collaborations",
                    "Promotion Timeline Planning",
                    "Performance Monitoring & Reporting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-tight font-medium">
                      <span className="material-symbols-outlined text-primary text-lg mt-[-2px]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-slate-500 text-xs sm:text-sm italic leading-relaxed border-l-2 border-primary/30 pl-3 mb-6">
                  We ensure influencer efforts support your broader advertising and brand growth strategy.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center space-y-2">
                  <p className="text-slate-500 text-[11px] leading-relaxed">Interested in this plan? Contact us for a <span className="text-primary font-bold">custom quote</span> tailored to your business.</p>
                  <a
                    href={`https://wa.me/919959194226?text=${encodeURIComponent("Hi FlowReach! I'm interested in the Influencer & Promotion Campaigns package. Can you share more details?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-black text-[#25D366] hover:underline"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013l-1.704 6.223 6.365-1.67a11.813 11.813 0 005.77 1.503h.005c6.636 0 12.032-5.393 12.035-12.032a11.772 11.772 0 00-3.411-8.506z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goal Banner */}
      <section className="py-14 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">target</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Enquiries Over Clicks.</h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
            Our single goal across all services is to generate qualified enquiries that turn into revenue. We don't just report numbers; we report growth.
          </p>
          <button onClick={() => navigate('/contact')} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
            Start Your Growth Journey
          </button>
        </div>
      </section>
    </div >
  );
};

export default ServicesPage;
