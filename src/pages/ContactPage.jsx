import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    industry: 'Real Estate'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `Hello FlowReach team! 🚀\n\nI'm interested in a strategy session.\n\n*Details:*\n👤 Name: ${formData.name}\n🏢 Company: ${formData.company}\n📧 Email: ${formData.email}\n🎯 Industry: ${formData.industry}\n\nLooking forward to hearing from you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919959194226?text=${encodedMessage}`;

    setSubmitted(true);

    // Redirect after a short delay to show success state
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full pt-14 sm:pt-20 bg-white">
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-8 order-2 lg:order-1"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20 mb-4">
                  High-Performance Lead Gen
                </span>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
                  Scale Your Growth with FlowReach
                </h1>
                <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-slate-600 font-light">
                  Specializing in premium lead generation for Restaurants, Real Estate, and Gyms in Hyderabad. Ready to transform your strategy into revenue?
                </p>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary-light to-primary"></div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Redirecting to WhatsApp...</h3>
                    <p className="text-slate-600">Our performance team is ready to chat. Opening your message now.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-8 text-primary hover:underline text-sm font-bold">Back to form</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule Your Strategy Call</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold leading-6 text-slate-700">Name</label>
                        <input name="name" value={formData.name} onChange={handleInputChange} required className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none sm:text-sm transition-all" placeholder="Jane Doe" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold leading-6 text-slate-700">Company</label>
                        <input name="company" value={formData.company} onChange={handleInputChange} required className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none sm:text-sm transition-all" placeholder="Acme Corp" type="text" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold leading-6 text-slate-700">Work Email</label>
                      <input name="email" value={formData.email} onChange={handleInputChange} required className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none sm:text-sm transition-all" placeholder="jane@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold leading-6 text-slate-700">Industry</label>
                      <select name="industry" value={formData.industry} onChange={handleInputChange} className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none sm:text-sm appearance-none transition-all cursor-pointer">
                        <option>Real Estate</option>
                        <option>Gym / Fitness</option>
                        <option>Restaurant / Café</option>
                        <option>Education</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button className="mt-3 sm:mt-4 flex w-full justify-center items-center gap-2 rounded-lg bg-[#25D366] px-3 py-4 sm:py-5 text-sm sm:text-base font-bold leading-6 text-white shadow-lg hover:bg-[#128C7E] transition-all duration-200 uppercase tracking-widest transform hover:scale-[1.01]" type="submit">
                      <span>Send Message on WhatsApp</span>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 3.176-1.237 6.161-3.48 8.404-2.244 2.244-5.229 3.481-8.404 3.481-1.936 0-3.834-.473-5.534-1.371l-5.854 1.5l.473-6.195zm5.534-1.428l.325.192c1.455.859 3.132 1.313 4.881 1.313 5.432 0 9.849-4.417 9.849-9.849 0-2.63-1.025-5.101-2.887-6.963s-4.333-2.887-6.962-2.887c-5.433 0-9.85 4.417-9.85 9.85 0 2.052.64 4.045 1.849 5.717l.217.301-.849 3.102 3.277-.839zm12.915-11.53c-.229-.115-1.352-.667-1.562-.743-.21-.076-.363-.115-.516.115-.152.23-.591.743-.725.897-.133.152-.267.171-.497.057-.23-.115-.968-.357-1.844-1.138-.682-.609-1.142-1.36-1.275-1.591-.134-.23-.014-.354.101-.469l.41-.479c.115-.133.152-.229.229-.382.076-.153.038-.287-.019-.401-.057-.115-.516-1.243-.706-1.701-.184-.445-.372-.384-.516-.391l-.441-.008c-.152 0-.401.057-.611.287-.21.23-.801.783-.801 1.911s.821 2.217.935 2.37c.115.153 1.615 2.466 3.914 3.457.547.236.974.377 1.307.483.55.174 1.051.15 1.446.091.44-.066 1.352-.553 1.543-1.087.191-.535.191-.993.134-1.087-.057-.115-.21-.171-.44-.286z" /></svg>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-6 lg:pt-16 order-1 lg:order-2"
            >
              <div className="grid grid-cols-1 gap-4">
                <a className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5 hover:border-primary/50 hover:bg-white hover:shadow-md transition-all" href="tel:9959194226">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Call Us Directly</p>
                    <p className="text-lg sm:text-lg font-bold text-slate-900 group-hover:text-primary">+91 9959194226</p>
                  </div>
                </a>
                <a className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5 hover:border-primary/50 hover:bg-white hover:shadow-md transition-all" href="mailto:flowreachmarketingsolutions@gmail.com">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Email Us</p>
                    <p className="text-sm sm:text-lg font-bold text-slate-900 group-hover:text-primary break-all">flowreachmarketingsolutions@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 sm:gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center rounded-lg bg-primary/10">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Visit Our HQ</p>
                    <p className="text-lg font-bold text-slate-900">Gachibowli</p>
                    <p className="text-sm text-slate-500 font-medium">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4635887205466!2d78.36545631487673!3d17.44222088804561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688eb5c550c27a!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin"
                  className="w-full h-full border-0 map-filter grayscale contrast-125"
                  allowFullScreen=""
                  loading="lazy"
                  title="HQ Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
