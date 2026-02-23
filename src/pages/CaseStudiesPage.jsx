import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full pt-20 bg-white">
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 bg-slate-50/50">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-6 shadow-sm"
          >
            <span className="flex size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(22,163,74,0.4)]"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Performance Metrics Live</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6"
          >
            Data-Backed Growth for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Local Leaders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed font-light"
          >
            We don't just run ads; we engineer revenue pipelines. Explore the results we deliver through structured lead generation systems.
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Real case results focused description */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20 p-8 lg:p-12"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary ring-1 ring-inset ring-primary/20">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> Case Study Focus
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Predictable Lead Generation Systems</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our systems are designed to move businesses away from random marketing efforts. By implementing structured Facebook and Google ad funnels, we've helped industries like <strong className="text-slate-900">Real Estate</strong> and <strong className="text-slate-900">Local Fitness Centers</strong> achieve a consistent flow of high-intent enquiries.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h4 className="text-slate-900 font-bold mb-2">The Challenge</h4>
                  <p className="text-slate-500 text-sm">High cost-per-lead and low-quality enquiries from broad, unstructured campaigns.</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <h4 className="text-primary font-bold mb-2">The Results</h4>
                  <p className="text-slate-700 text-sm font-medium">A reduction in wasted ad spend and a significant increase in lead quality through AI-driven targeting.</p>
                </div>
              </div>
              <button onClick={() => navigate('/contact')} className="mt-10 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md">
                View Your Potential ROI
              </button>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
