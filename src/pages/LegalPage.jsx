import { motion } from 'framer-motion';

const legalSections = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content: [
      'FlowReach Marketing Agency respects your privacy. We collect personal information such as name, email, phone number, and business details when you submit forms on our website.',
      'This information is used to respond to enquiries, provide marketing services, and improve our campaigns. We do not sell or share your personal information with third parties for marketing purposes.',
      'Our website may use cookies and tracking technologies, including Google Ads and Meta Ads pixels, to measure performance and improve advertising effectiveness.',
      'By using this website, you consent to our privacy practices.',
      'For enquiries, contact: flowreachmarketingsolutions@gmail.com'
    ]
  },
  {
    id: 'terms-and-conditions',
    title: 'Terms & Conditions',
    content: [
      'By accessing this website, you agree to comply with these terms.',
      'FlowReach provides branding, advertising, social media management, content creation, influencer marketing, and AI-based marketing services.',
      'Marketing results depend on industry, budget, competition, and market conditions. We do not guarantee specific revenue or lead numbers.',
      'All website content is the property of FlowReach and may not be reproduced without permission.'
    ]
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: [
      'FlowReach provides marketing services designed to improve brand visibility and lead generation. While we use data-driven and AI-optimized systems, we do not guarantee specific business results.',
      'Past performance does not guarantee future results.'
    ]
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    content: [
      'This website uses cookies and tracking technologies to improve user experience and measure advertising performance.',
      'By continuing to use this website, you agree to our use of cookies.'
    ]
  }
];

const LegalPage = () => {
  return (
    <div className="bg-white pt-24 sm:pt-32 pb-14 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-3">
            Legal Information
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            Privacy, Terms, Disclaimer & Cookies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Please read these sections to understand how FlowReach Marketing Agency handles privacy,
            service terms, and website tracking technologies.
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          {legalSections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="glass-card rounded-2xl p-5 sm:p-8 scroll-mt-28"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
