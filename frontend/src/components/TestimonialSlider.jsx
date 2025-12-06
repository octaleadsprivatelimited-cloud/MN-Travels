import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Inc.',
    role: 'HR Director',
    text: 'MN Travels has been our trusted partner for employee transportation for over 3 years. Their punctuality, professional drivers, and 24/7 support have been outstanding. Our employees appreciate the comfortable and safe commute.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Global IT Services',
    role: 'Operations Manager',
    text: 'The fleet quality and driver professionalism at MN Travels exceed our expectations. Their GPS tracking system and real-time updates help us manage our transportation needs efficiently. Highly recommend for corporate transportation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Enterprise Corp',
    role: 'Facilities Head',
    text: 'MN Travels has transformed our corporate transportation. Their 24/7 support, reliable service, and customized solutions make them our go-to choice. The team is responsive and always ready to help.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    company: 'MNC Group',
    role: 'Transportation Manager',
    text: 'Working with MN Travels has been a game-changer. Their premium fleet, safety standards, and commitment to excellence have made them an integral part of our operations. Exceptional service!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    company: 'Corporate Solutions',
    role: 'Admin Head',
    text: 'MN Travels provides seamless airport transfers and corporate travel solutions. Their meet-and-greet services and flight monitoring ensure our executives always arrive on time. Professional and reliable.',
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200"
        >
          {/* Quote Icon */}
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-royal-blue bg-opacity-10 rounded-lg">
              <Quote className="text-royal-blue" size={24} />
            </div>
            <div className="flex gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
              ))}
            </div>
          </div>
          
          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>
          
          {/* Author Info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center text-white font-bold">
              {testimonials[currentIndex].name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-navy">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600 text-sm">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'bg-royal-blue w-8 h-2'
                : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
