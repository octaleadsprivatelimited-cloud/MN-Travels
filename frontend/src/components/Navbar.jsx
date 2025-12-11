import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/fleet', label: 'Fleet' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg'
            : 'bg-navy shadow-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-royal-blue to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-lg md:text-xl">M</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white leading-tight">
                  MN Travels
                </span>
                <span className="text-xs text-gray-300 hidden sm:block">
                  Corporate Travel Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-white underline decoration-royal-blue decoration-2 underline-offset-4'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Phone Number - Desktop */}
              <a
                href="tel:+919900109686"
                className="hidden md:flex items-center space-x-2 text-white hover:text-royal-blue transition-colors font-medium text-sm"
              >
                <Phone size={18} />
                <span>+91 99001 09686</span>
              </a>

              {/* Book Now Button - Desktop */}
              <Link
                to="/contact"
                className="hidden lg:block px-6 py-2.5 bg-navy hover:bg-navy/90 border border-royal-blue/50 text-white rounded-lg transition-all duration-200 font-semibold text-sm"
              >
                Book Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-[10000] relative"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Outside nav element */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Fixed to viewport */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] lg:hidden"
            />
            
            {/* Mobile Menu - Fixed to viewport */}
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-navy shadow-2xl z-[9999] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-royal-blue to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <span className="text-lg font-bold text-white">MN Travels</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-4 rounded-lg transition-all duration-200 ${
                          isActive(link.path)
                            ? 'bg-royal-blue text-white shadow-lg'
                            : 'text-gray-200 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="font-medium text-base">{link.label}</span>
                        {isActive(link.path) && (
                          <motion.div
                            layoutId="mobile-indicator"
                            className="ml-auto w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile CTA Section */}
                <div className="p-4 border-t border-white/10 space-y-3">
                  <a
                    href="tel:+919900109686"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={18} />
                    <span>+91 99001 09686</span>
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 bg-royal-blue hover:bg-blue-600 text-white rounded-lg text-center font-semibold shadow-lg transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

