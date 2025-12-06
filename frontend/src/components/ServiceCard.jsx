import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-royal-blue/30 overflow-hidden"
    >
      <div className="p-8">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <service.icon className="text-white" size={32} />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-royal-blue transition-colors">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-base">
          {service.description}
        </p>
        
        {/* Learn More Link */}
        <div className="flex items-center text-royal-blue font-semibold text-sm group-hover:gap-2 transition-all">
          <span>Learn more</span>
          <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
