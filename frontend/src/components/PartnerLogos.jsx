import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const PartnerLogos = () => {
  const partners = [
    { name: 'Infosys', category: 'IT Services' },
    { name: 'TCS', category: 'Technology' },
    { name: 'Wipro', category: 'Enterprise' },
    { name: 'Accenture', category: 'Multinational' },
    { name: 'HCL Technologies', category: 'IT Services' },
    { name: 'Tech Mahindra', category: 'Technology' },
    { name: 'Cognizant', category: 'IT Services' },
    { name: 'Capgemini', category: 'Consulting' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 text-center">
            <div className="inline-flex p-3 bg-royal-blue bg-opacity-10 rounded-lg mb-4">
              <Building2 className="text-royal-blue" size={24} />
            </div>
            <h3 className="font-bold text-navy text-sm mb-1">
              {partner.name}
            </h3>
            <p className="text-xs text-gray-500">
              {partner.category}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerLogos;
