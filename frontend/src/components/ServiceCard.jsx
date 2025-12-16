import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  // Local image paths for different services
  const serviceImages = {
    'Employee Transportation': '/images/employee-transportation.jpg',
    'Airport Pickups / Drops': '/images/airport-pickups-drops.jpg',
    'Hotel Adhoc Transport': '/images/hotel-adhoc-transport.jpg',
    'Local & Outstation Trips': '/images/local-outstation-trips.jpg',
    'Premium Vehicle Fleet': '/images/premium-vehicle-fleet.jpg',
    // For Services page variations
    'Premium & Luxury Car Hire': '/images/premium-vehicle-fleet.jpg'
  };

  const imageUrl = serviceImages[service.title] || '/images/employee-transportation.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-royal-blue/30 overflow-hidden flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-40 md:h-48 lg:h-44 xl:h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        {/* Icon Badge */}
        <div className={`absolute top-2 right-2 lg:top-3 lg:right-3 w-10 h-10 md:w-12 md:h-12 lg:w-11 lg:h-11 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="text-white" size={18} />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative p-3 md:p-4 lg:p-4 xl:p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-sm md:text-base lg:text-sm xl:text-lg font-bold text-navy mb-2 group-hover:text-royal-blue transition-colors leading-tight">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-2 md:mb-3 lg:mb-4 text-xs flex-grow line-clamp-2 md:line-clamp-3">
          {service.description}
        </p>
        
        {/* Features List - Hidden on desktop 5-column, shown on smaller screens */}
        {service.features && (
          <ul className="hidden md:block lg:hidden xl:block space-y-1 mb-3 lg:mb-4">
            {service.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                <CheckCircle className="text-royal-blue flex-shrink-0" size={12} />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Learn More Link */}
        <Link
          to="/services"
          className="flex items-center text-royal-blue font-semibold text-xs group-hover:gap-2 transition-all mt-auto hover:text-blue-600 cursor-pointer"
        >
          <span>Learn more</span>
          <ArrowRight className="ml-1 group-hover:translate-x-2 transition-transform" size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
