import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <footer 
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* Content */}
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-start mb-1">
              <img 
                src="/images/logo-new.png?v=2"
                alt="MN Travels Logo" 
                className="h-32 md:h-40 w-auto object-contain"
              />
            </div>
            <div className="mt-3">
              <p className="text-gray-300 text-xs mb-1.5 leading-tight line-clamp-2">
                Corporate Commute, Simplified. Trusted Travel Partner for MNCs. Premium Transport for Corporate Excellence.
              </p>
              <div className="space-y-1">
                <div className="flex items-start gap-1.5">
                  <MapPin size={12} className="mt-0.5 text-royal-blue flex-shrink-0" />
                  <span className="text-gray-300 text-xs leading-tight">No 171, K No 342/4, 02nd Cross, Vijaya Bank Colony, Basavanapura Main Road, KR Puram, Bangalore - 560036</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone size={12} className="text-royal-blue flex-shrink-0" />
                  <a href="tel:+919900109686" className="text-gray-300 text-xs hover:text-white transition-colors">+91 99001 09686</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail size={12} className="text-royal-blue flex-shrink-0" />
                  <a href="mailto:info@mntravels.in" className="text-gray-300 text-xs hover:text-white transition-colors">info@mntravels.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <button
              onClick={() => toggleDropdown('quickLinks')}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between md:justify-start font-bold text-base mb-0 text-white relative inline-block pt-0"
            >
              <span className="relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-royal-blue"></span>
              </span>
              <span className="md:hidden ml-2">
                {openDropdown === 'quickLinks' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            <ul className={`space-y-2 text-gray-300 text-sm mt-3 ${openDropdown === 'quickLinks' ? 'block' : 'hidden'} md:block`}>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between md:justify-start font-bold text-base mb-0 text-white relative inline-block pt-0"
            >
              <span className="relative">
                Services
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-royal-blue"></span>
              </span>
              <span className="md:hidden ml-2">
                {openDropdown === 'services' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            <ul className={`space-y-2 text-gray-300 text-sm mt-3 ${openDropdown === 'services' ? 'block' : 'hidden'} md:block`}>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Employee Transportation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Airport Pickups / Drops
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Hotel Adhoc Transport
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Local & Outstation Trips
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Premium & Luxury Car Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <button
              onClick={() => toggleDropdown('stayUpdated')}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between md:justify-start font-bold text-base mb-0 text-white relative inline-block pt-0"
            >
              <span className="relative">
                Stay Updated
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-royal-blue"></span>
              </span>
              <span className="md:hidden ml-2">
                {openDropdown === 'stayUpdated' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            <div className={`mt-3 ${openDropdown === 'stayUpdated' ? 'block' : 'hidden'} md:block`}>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                Subscribe to our newsletter for exclusive travel deals, destination guides, and insider tips delivered to your inbox.
              </p>
              <form action="https://formspree.io/f/xbdrnzzg" method="POST">
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-royal-blue hover:bg-blue-600 rounded-lg text-white transition-colors flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-4 pt-4">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} MN Travels. All Rights Reserved. | Developed by{' '}
              <a 
                href="https://www.octaleads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-royal-blue transition-colors font-semibold"
              >
                Octaleads Private Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

