import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Services', path: '/services', icon: 'design_services' },
    { name: 'Case Studies', path: '/case-studies', icon: 'trending_up' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
  ];

  const menuVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1, duration: 0.2 }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.15 } }
  };

  return (
    <>
      {/* Navbar Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => { navigate('/'); setIsOpen(false); }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.filter(l => l.path !== '/contact').map((link) => (
                <Link
                  key={link.path}
                  className={`group relative text-sm font-bold font-display tracking-tight transition-all ${isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
                  to={link.path}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-full"
                    initial={false}
                    animate={{ width: isActive(link.path) ? '100%' : '0' }}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { navigate('/contact'); setIsOpen(false); }}
                className="hidden md:block bg-primary hover:bg-primary-dark text-white text-xs font-black font-display uppercase tracking-widest py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary/20"
              >
                Book Strategy Call
              </motion.button>

              {/* Mobile Menu Toggle — Animated Hamburger */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl active:bg-slate-100/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="block w-5 h-[2px] bg-slate-800 rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-5 h-[2px] bg-slate-800 rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="block w-5 h-[2px] bg-slate-800 rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay — rendered OUTSIDE nav to avoid stacking issues */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[99] bg-white"
            style={{ top: '56px' }}
          >
            {/* Subtle background decoration */}
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-20 left-0 w-48 h-48 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="flex flex-col h-full px-5 pt-4 pb-6 relative z-10 overflow-y-auto"
            >
              {/* Nav Links */}
              <div className="flex-1 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={linkVariants}>
                    <Link
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-all active:scale-[0.98] ${isActive(link.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-700 active:bg-slate-50'
                        }`}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${isActive(link.path) ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-slate-100 text-slate-500'
                        }`}>
                        <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                      </div>
                      <span>{link.name}</span>
                      {isActive(link.path) && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section */}
              <motion.div variants={linkVariants} className="space-y-3 pt-4 mt-2 border-t border-slate-100">
                {/* CTA Button */}
                <button
                  onClick={() => { navigate('/contact'); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  Book Strategy Call
                </button>

                {/* WhatsApp Quick Action */}
                <a
                  href={`https://wa.me/919959194226?text=${encodeURIComponent("Hello flowreach Marketing Solutions! I'm interested in your marketing services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] font-semibold text-sm transition-all active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013l-1.704 6.223 6.365-1.67a11.813 11.813 0 005.77 1.503h.005c6.636 0 12.032-5.393 12.035-12.032a11.772 11.772 0 00-3.411-8.506z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Phone number */}
                <a
                  href="tel:9959194226"
                  className="flex items-center justify-center gap-2 text-slate-400 text-xs font-medium pt-1"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  +91 99591 94226
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
