import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold">MN Travels</div>
              <div className="w-6 h-6 border-2 border-royal-blue rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-royal-blue rounded-full"></div>
              </div>
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
                <Phone size={18} className="mt-0.5 text-royal-blue flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-0.5 text-royal-blue flex-shrink-0" />
                <span>info@mntravels.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-royal-blue flex-shrink-0" />
                <span>123 Business Park, Sector 18<br />Gurgaon, Haryana - 122015</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-0.5 text-royal-blue flex-shrink-0" />
                <span>24/7 Operations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-blue mt-8 pt-8 text-center text-silver-gray text-sm">
          <p>&copy; {currentYear} MN Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

