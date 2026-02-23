import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
            {navLinks.map((link) => (
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

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
              className="hidden sm:block bg-primary hover:bg-primary-dark text-white text-xs font-black font-display uppercase tracking-widest py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary/20"
            >
              Book Strategy Call
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-slate-800 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  className={`block px-3 py-4 rounded-lg text-base font-medium transition-colors ${isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:text-primary'}`}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => { navigate('/contact'); setIsOpen(false); }}
                  className="w-full bg-primary hover:bg-primary/90 text-white text-base font-bold py-4 rounded-lg transition-all"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
