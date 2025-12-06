import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield, Award, TrendingUp, Car, Plane, Building2, Route, Star, Zap, Globe, BarChart3, Sparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import PartnerLogos from '../components/PartnerLogos';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const services = [
    {
      title: 'Employee Transportation',
      description: 'Reliable daily commute solutions for your workforce with dedicated routes, GPS tracking, and professional drivers ensuring punctuality and safety.',
      icon: Users,
      color: 'from-blue-500 via-blue-600 to-blue-700',
      features: ['GPS Tracking', 'Dedicated Routes', '24/7 Support'],
      gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    },
    {
      title: 'Airport Pickups / Drops',
      description: 'Punctual airport transfers for executives and guests with real-time flight monitoring, meet-and-greet services, and premium vehicle options.',
      icon: Plane,
      color: 'from-royal-blue via-blue-600 to-blue-700',
      features: ['Flight Monitoring', 'Meet & Greet', 'Premium Fleet'],
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    },
    {
      title: 'Hotel Adhoc Transport',
      description: 'On-demand transportation services for hotel guests available 24/7 with quick response times and multiple vehicle options for immediate travel needs.',
      icon: Building2,
      color: 'from-purple-500 via-purple-600 to-indigo-700',
      features: ['24/7 Availability', 'Quick Response', 'Flexible Booking'],
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
    },
    {
      title: 'Local & Outstation Trips',
      description: 'Comfortable travel for business trips, conferences, and corporate events with customized packages and professional chauffeurs for seamless journeys.',
      icon: Route,
      color: 'from-green-500 via-emerald-600 to-teal-700',
      features: ['Custom Packages', 'Event Transport', 'Long Distance'],
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
    },
    {
      title: 'Premium Vehicle Fleet',
      description: 'From luxury sedans to spacious buses, we have the perfect vehicle for every need with premium interiors, entertainment systems, and comfort features.',
      icon: Car,
      color: 'from-orange-500 via-amber-600 to-yellow-700',
      features: ['Luxury Options', 'Entertainment', 'Premium Interiors'],
      gradient: 'bg-gradient-to-br from-orange-50 to-amber-50',
    },
  ];

  const highlights = [
    { icon: Users, text: 'Trusted by MNCs & IT Companies', number: '500+', subtext: 'Corporate Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: Clock, text: '24/7 Corporate Transportation', number: '24/7', subtext: 'Always Available', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, text: 'Safety First Approach', number: '100%', subtext: 'Insured Fleet', color: 'from-green-500 to-emerald-500' },
    { icon: Award, text: 'Premium Service Quality', number: '98%', subtext: 'Satisfaction Rate', color: 'from-orange-500 to-amber-500' },
  ];

  const stats = [
    { number: '500+', label: 'Corporate Clients', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { number: '1000+', label: 'Vehicles in Fleet', icon: Car, color: 'from-purple-500 to-pink-500' },
    { number: '50K+', label: 'Daily Commuters', icon: Users, color: 'from-green-500 to-emerald-500' },
    { number: '15+', label: 'Years Experience', icon: TrendingUp, color: 'from-orange-500 to-amber-500' },
  ];

  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Quick response times' },
    { icon: Globe, title: 'Wide Coverage', description: 'Pan-India network' },
    { icon: BarChart3, title: 'Data Driven', description: 'Real-time analytics' },
    { icon: Sparkles, title: 'Premium Quality', description: 'Luxury experience' },
  ];

  return (
    <>
      <Helmet>
        <title>MN Travels - Corporate Transportation Services | Trusted by MNCs</title>
        <meta name="description" content="Premium corporate transportation services. Employee transport, airport transfers, and corporate travel solutions trusted by MNCs and IT companies." />
      </Helmet>

      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-navy via-navy via-royal-blue to-blue-900 text-white overflow-hidden py-20 md:py-24">
        {/* Background Image */}
        {/* 
          To use your own image:
          1. Place your image in frontend/public/images/hero-bg.jpg
          2. Replace the URL below with: '/images/hero-bg.jpg'
          Or use any external image URL
        */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            // Alternative: Use local image - backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        >
          {/* Very Light Overlay for Text Readability - Minimal opacity to show image clearly */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-royal-blue/15 to-blue-900/20"></div>
        </div>

        {/* Simple Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              >
                <span className="block">Corporate</span>
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  Commute, Simplified
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                MN Travels - Your trusted travel partner for MNCs and IT companies. Premium transport solutions for corporate excellence with 24/7 support, GPS tracking, and unmatched reliability. Serving 500+ corporate clients across India.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-600 hover:to-royal-blue rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  Book Service
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl font-bold text-lg transition-all"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Features Bar */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-royal-blue to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-navy mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Scrolling Ticker */}
      <section className="bg-gradient-to-r from-royal-blue via-blue-600 to-cyan-600 text-white py-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-shimmer"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-bold uppercase tracking-widest opacity-90 flex items-center gap-2">
              <Sparkles size={16} />
              Our Services
            </span>
          </div>
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {['Employee Transport', 'Airport Transfers', 'Hotel Adhoc', 'Local & Outstation', 'Premium Vehicles', '24/7 Support', 'GPS Tracking', 'Corporate Events', 'Luxury Fleet', 'Executive Travel'].map((item, index) => (
              <span key={index} className="text-lg font-bold mx-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose MN Travels Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <span className="text-royal-blue font-semibold text-xs md:text-sm uppercase tracking-wide">
                    / Why MN Travels?
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                  The MN Travels
                  <br />
                  Difference
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  For over 15 years, we've been a proud service provider, earning and maintaining the trust of corporate clients across India. We deliver excellence in every journey with reliable, safe, and professional transportation solutions.
                </p>
                <div className="flex flex-col gap-3 pt-2 md:pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-royal-blue font-semibold hover:text-blue-700 transition-colors text-sm md:text-base"
                  >
                    Contact Us
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-royal-blue font-semibold hover:text-blue-700 transition-colors text-sm md:text-base"
                  >
                    View Services
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column - Features List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:border-l lg:border-gray-200 lg:pl-12 pt-6 lg:pt-0"
              >
                <div className="space-y-6 md:space-y-0">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`pb-6 md:pb-8 ${index < highlights.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className={`flex-shrink-0 p-2.5 md:p-3 bg-gradient-to-br ${highlight.color} rounded-lg`}>
                          <highlight.icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-navy mb-2">
                            {highlight.text}
                          </h3>
                          {index === 0 && (
                            <p className="text-gray-600 text-sm md:text-base">
                              MN Travels serves leading MNCs and IT companies including Infosys, TCS, Wipro, and Accenture. We provide reliable and professional transportation solutions that meet the highest standards of corporate excellence with competitive pricing.
                            </p>
                          )}
                          {index === 1 && (
                            <p className="text-gray-600 text-sm md:text-base">
                              MN Travels operates round the clock, ensuring your transportation needs are met at any time. Whether it's early morning employee pickups or late-night airport transfers, MN Travels is always ready with 24/7 support.
                            </p>
                          )}
                          {index === 2 && (
                            <p className="text-gray-600 text-sm md:text-base">
                              Safety is MN Travels' top priority. Every vehicle in our fleet is fully insured, regularly maintained, and driven by verified professionals. We ensure compliance with all safety regulations and standards.
                            </p>
                          )}
                          {index === 3 && (
                            <p className="text-gray-600 text-sm md:text-base">
                              MN Travels maintains the highest standards of service quality, consistently achieving a 98% customer satisfaction rate. Our commitment to excellence is reflected in every journey we facilitate for our corporate clients.
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive transportation solutions tailored for corporate needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-royal-blue text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
            >
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 leading-tight">
                Trusted by leaders
                <br />
                <span className="text-gray-600">from various industries</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto">
                Learn why professionals trust our solutions to complete their corporate transportation needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-navy text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm"
              >
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Industry Leaders Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Partners who trust us with their transportation needs
            </p>
          </motion.div>
          <PartnerLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy to-royal-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Corporate Commute?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
              Get in touch with our team to discuss your transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
              >
                Request Proposal
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-lg font-semibold transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
