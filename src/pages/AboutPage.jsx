import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full pt-14 sm:pt-20 bg-white">
      {/* Hero */}
      <section className="relative pt-10 sm:pt-12 pb-8 sm:pb-10 overflow-hidden bg-slate-50/50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-sm">flag</span> Global Standards. Local Impact.
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[0.95] mb-3 sm:mb-4">
                Performance-Driven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Precision & Results</span>
              </h1>
              <p className="text-slate-600 font-light leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                flowreach Marketing Solutions is a performance-driven digital marketing agency focused on helping local businesses generate consistent, high-quality enquiries through structured advertising systems.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Founded by a marketing professional with international exposure in <strong className="text-slate-900 font-semibold">Singapore's competitive business environment</strong>, we bring global-standard strategy to local markets.
              </p>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">Global</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Methodology</p>
                </div>
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">100%</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Accountability</p>
                </div>
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">Hyderabad</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">HQ Location</p>
                </div>
                <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">AI-Driven</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Technology</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-xl aspect-[4/3] bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Modern office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-5 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-lg">
                  <p className="text-slate-900 font-bold italic leading-relaxed text-xs sm:text-sm">"At flowreach Marketing Solutions, marketing is not about impressions or likes — it is about real business outcomes."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">What Drives Us</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: "target", title: "Results Over Vanity", desc: "We measure success by enquiries and revenue, never by likes or followers." },
              { icon: "psychology", title: "AI-Powered Strategy", desc: "Machine learning identifies winning audiences and creatives in real-time." },
              { icon: "handshake", title: "Full Transparency", desc: "Real-time dashboards show exactly where every rupee is spent and what it returns." },
              { icon: "speed", title: "Speed of Execution", desc: "Campaigns go live within 48 hours. We test fast, learn fast, and scale fast." },
              { icon: "diversity_3", title: "Partner Mindset", desc: "We're not a vendor — we're an extension of your team invested in your growth." },
              { icon: "public", title: "Global Framework", desc: "Singapore-trained methodology applied to local markets for world-class performance." },
              { icon: "verified", title: "Proven Systems", desc: "Structured frameworks tested across 10+ industries with consistent results." },
              { icon: "support_agent", title: "24/7 Availability", desc: "Round-the-clock support — we're always just a message away, day or night." },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-5 group hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm mb-2 sm:mb-3">
                  <span className="material-symbols-outlined text-lg sm:text-xl">{v.icon}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 mb-0.5 sm:mb-1">{v.title}</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-video group"
            >
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategic Planning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Predictable Lead-Generation Systems</h2>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                We specialize in supporting real estate agencies, gyms, restaurants, and cafés by transforming their online presence into predictable lead-generation systems. Our approach goes beyond social media posting — we design structured campaigns focused on targeted local advertising and data-driven optimization.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Every campaign is built with a results-first mindset, ensuring businesses see measurable growth through enquiries, calls, memberships, bookings, and site visits.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                flowreach Marketing Solutions exists to be a long-term growth partner for ambitious local businesses ready to move from random marketing efforts to structured, predictable growth systems.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-5 sm:px-6 rounded-xl transition-all shadow-lg shadow-primary/20 text-sm mt-2 w-full sm:w-auto text-center"
              >
                Start Your Growth Journey
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">person</span> Meet the Founder
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Built on Real-World Experience</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our founder's journey started in Singapore's hyper-competitive marketing landscape, where performance metrics aren't optional — they're survival. Working with established brands in one of Asia's most demanding markets provided an unmatched foundation in:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Data-driven campaign architecture",
                  "AI-powered audience optimisation",
                  "Conversion funnel engineering",
                  "ROAS-focused budget allocation",
                  "Cross-platform attribution",
                  "Rapid A/B testing frameworks"
                ].map((skill, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    {skill}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs leading-relaxed italic border-l-4 border-primary/20 pl-4">
                "That level of rigour is now the standard at flowreach Marketing Solutions — no vanity metrics, no guesswork, just structured performance systems that deliver results."
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Singapore", sub: "Trained", icon: "flight" },
                    { label: "Hyderabad", sub: "Based", icon: "location_on" },
                    { label: "10+", sub: "Industries", icon: "category" },
                    { label: "500+", sub: "Leads/Month", icon: "group" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 text-center shadow-sm">
                      <span className="material-symbols-outlined text-primary text-xl mb-1">{stat.icon}</span>
                      <p className="font-black text-slate-900 text-lg">{stat.label}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Our Promise</p>
                  <p className="text-slate-700 text-sm font-medium">Every campaign is accountable. Every rupee is tracked. Every result is real.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Us */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3">Why Businesses Trust flowreach Marketing Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { title: "No Long-Term Lock-Ins", desc: "Month-to-month flexibility. Our results keep clients, not contracts.", icon: "lock_open" },
              { title: "Real-Time Dashboards", desc: "See your campaign performance live — leads, costs, and ROI updated daily.", icon: "dashboard" },
              { title: "Dedicated Account Manager", desc: "One point of contact who knows your business inside-out and is always available.", icon: "person_pin" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-xl p-4 sm:p-6 text-center hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-black text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">Ready to Partner with flowreach Marketing Solutions?</h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Whether you're just starting out or looking to scale, we have a structured growth system designed for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
              Book Your Free Audit
            </button>
            <button onClick={() => navigate('/services')} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-primary/30 hover:text-primary transition-all shadow-sm w-full sm:w-auto">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
