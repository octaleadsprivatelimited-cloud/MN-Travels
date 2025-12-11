import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (format: country code + number without +)
  const whatsappNumber = '918951635782';
  const message = encodeURIComponent('Hello, I would like to know more about your corporate transportation services.');

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default WhatsAppButton;

