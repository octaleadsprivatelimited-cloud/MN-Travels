import { motion } from 'framer-motion';
import { useState } from 'react';

const PartnerLogos = () => {
  const [imageErrors, setImageErrors] = useState({});

  const partners = [
    { 
      name: 'Infosys', 
      category: 'IT Services',
      // Add your logo file to: frontend/public/logos/infosys.png
      logo: '/logos/infosys.png'
    },
    { 
      name: 'TCS', 
      category: 'Technology',
      // Add your logo file to: frontend/public/logos/tcs.png
      logo: '/logos/tcs.png'
    },
    { 
      name: 'Wipro', 
      category: 'Enterprise',
      // Add your logo file to: frontend/public/logos/wipro.png
      logo: '/logos/wipro.png'
    },
    { 
      name: 'Accenture', 
      category: 'Multinational',
      // Add your logo file to: frontend/public/logos/accenture.png
      logo: '/logos/accenture.png'
    },
    { 
      name: 'HCL Technologies', 
      category: 'IT Services',
      // Add your logo file to: frontend/public/logos/hcl.png
      logo: '/logos/hcl.png'
    },
    { 
      name: 'Tech Mahindra', 
      category: 'Technology',
      // Add your logo file to: frontend/public/logos/tech-mahindra.png
      logo: '/logos/tech-mahindra.png'
    },
    { 
      name: 'Cognizant', 
      category: 'IT Services',
      // Add your logo file to: frontend/public/logos/cognizant.png
      logo: '/logos/cognizant.png'
    },
    { 
      name: 'Capgemini', 
      category: 'Consulting',
      // Add your logo file to: frontend/public/logos/capgemini.png
      logo: '/logos/capgemini.png'
    },
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="group"
        >
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-royal-blue/30 flex items-center justify-center h-24 md:h-32 relative min-h-[100px]">
            {!imageErrors[index] ? (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-16 md:max-h-20 w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                loading="lazy"
                onError={() => handleImageError(index)}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            ) : (
              <div className="text-center w-full">
                <div className="font-bold text-navy text-sm md:text-base mb-1">
                  {partner.name}
                </div>
                <p className="text-xs text-gray-500">
                  {partner.category}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerLogos;
