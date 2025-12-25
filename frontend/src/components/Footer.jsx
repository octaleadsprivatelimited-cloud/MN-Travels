import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerBgImage = '/images/footer-bg.jpeg';

  return (
    <footer 
      className="relative text-white overflow-hidden bg-navy"
      style={{
        backgroundImage: `url(${footerBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-navy/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/footer-logo.png"
                alt="MN Travels Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-silver-gray text-sm mb-4">
              Corporate Commute, Simplified. Trusted Travel Partner for MNCs.
            </p>
            <p className="text-silver-gray text-sm">
              Premium Transport for Corporate Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-silver-gray text-sm">
              <li>
                <Link to="/" className="hover:text-royal-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-royal-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-royal-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-royal-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-royal-blue transition-colors" target="_blank" rel="noopener noreferrer">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-silver-gray text-sm">
              <li>Employee Transportation</li>
              <li>Airport Transfers</li>
              <li>Hotel Adhoc Transport</li>
              <li>Local & Outstation</li>
              <li>Premium Car Hire</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-silver-gray text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-0.5 text-white md:text-royal-blue flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919900109686" className="hover:text-royal-blue transition-colors">+91 99001 09686</a>
                  <a href="tel:+919743484699" className="hover:text-royal-blue transition-colors">+91 97434 84699</a>
                  <a href="tel:+918951635782" className="hover:text-royal-blue transition-colors">+91 89516 35782</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-0.5 text-white md:text-royal-blue flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@mntravels.in" className="hover:text-royal-blue transition-colors">info@mntravels.in</a>
                  <a href="mailto:prasad@mntravels.in" className="hover:text-royal-blue transition-colors">prasad@mntravels.in</a>
                  <a href="mailto:nagaveni@mntravels.in" className="hover:text-royal-blue transition-colors">nagaveni@mntravels.in</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-white md:text-royal-blue flex-shrink-0" />
                <span>123 Business Park, Sector 18<br />Gurgaon, Haryana - 122015</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-0.5 text-white md:text-royal-blue flex-shrink-0" />
                <span>24/7 Operations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-blue mt-8 pt-8 text-center text-silver-gray text-sm">
          <p>
            &copy; {currentYear} MN Travels. All rights reserved. | Developed by{' '}
            <a 
              href="https://www.octaleads.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-royal-blue transition-colors font-medium"
            >
              Octaleads Private Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

