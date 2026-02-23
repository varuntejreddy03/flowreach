import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-10 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
        <div className="flex flex-col gap-6">
          <Logo className="scale-90 origin-left" />
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Performance-driven digital marketing agency helping local businesses generate high-quality enquiries.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">call</span>
              <a href="tel:9959194226" className="hover:text-primary transition-colors">+91 9959194226</a>
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">mail</span>
              <a href="mailto:flowreachmarketingsolutions@gmail.com" className="hover:text-primary transition-colors break-all">flowreachmarketingsolutions@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-sm">
              <span className="material-symbols-outlined text-primary text-lg">location_on</span>
              <span>Gachibowli, Hyderabad, Telangana</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Follow Us</h4>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white hover:shadow-lg transition-all"
              href="https://www.facebook.com/profile.php?id=61587649925960&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white hover:shadow-lg transition-all"
              href="https://www.instagram.com/flowreach.marketing?igsh=dXZxMzJuc3ZwbWY1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-slate-500 text-xs font-medium">
          © 2026 FlowReach Marketing Solutions. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-slate-400 font-medium">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
