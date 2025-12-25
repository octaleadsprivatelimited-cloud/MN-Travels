import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield, Award, TrendingUp, Car, Plane, Building2, Route, Star, Zap, Globe, BarChart3, Sparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

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
    { icon: Users, text: 'Ready to Serve MNCs & IT Companies', number: 'New', subtext: 'Corporate Partner', color: 'from-blue-500 to-cyan-500' },
    { icon: Clock, text: '24/7 Corporate Transportation', number: '24/7', subtext: 'Always Available', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, text: 'Safety First Approach', number: '100%', subtext: 'Insured Fleet', color: 'from-green-500 to-emerald-500' },
    { icon: Award, text: 'Premium Service Quality', number: '98%', subtext: 'Satisfaction Rate', color: 'from-orange-500 to-amber-500' },
  ];

  const stats = [
    { number: 'Ready', label: 'To Serve You', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { number: 'Premium', label: 'Vehicle Fleet', icon: Car, color: 'from-purple-500 to-pink-500' },
    { number: '24/7', label: 'Service Available', icon: Users, color: 'from-green-500 to-emerald-500' },
    { number: '20+', label: 'Years Founder Experience', icon: TrendingUp, color: 'from-orange-500 to-amber-500' },
  ];


  return (
    <>
      <Helmet>
        <title>MN Travels - Premium Corporate Transportation Services | Employee Transport, Airport Transfers | Trusted by MNCs & IT Companies</title>
        <meta name="description" content="MN Travels offers premium corporate transportation services in India. Trusted by MNCs & IT companies for employee transport, airport pickups/drops, hotel adhoc transport, local & outstation trips. Fleet includes Sedans, SUVs, Tempo Traveller, Urbania, Mini Bus (20-50 seater), Premium & Luxury cars. 24/7 service available." />
        <meta name="keywords" content="corporate transportation, employee transport, airport transfers, corporate travel, fleet management, MNC transport, employee transportation services, airport pickup drop, corporate car rental, tempo traveller hire, mini bus rental, premium car hire, luxury car rental, corporate travel solutions, employee commute services, business transportation, IT company transport, corporate fleet management, gurgaon transport, delhi transport, bangalore transport, hyderabad transport, pune transport, mumbai transport, corporate cab services, office cab services, employee cab services, corporate bus services, employee bus services, GPS tracking, 24/7 transport services, reliable corporate transport, safe employee transport, professional chauffeur services, corporate event transport, conference transport, hotel transport services, outstation corporate travel, local corporate travel, sedan rental, SUV rental, innova rental, urbania rental, mini bus rental, luxury sedan rental, premium sedan rental, corporate vehicle rental, business travel solutions, employee transportation company, corporate transport provider, MNC transport services, IT company cab services, employee shuttle services, corporate shuttle services, transportation for companies, business travel management, corporate mobility solutions" />
        <link rel="canonical" href="https://mntravels.in" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mntravels.in" />
        <meta property="og:title" content="MN Travels - Premium Corporate Transportation Services | Employee Transport, Airport Transfers" />
        <meta property="og:description" content="Premium corporate transportation services trusted by MNCs & IT companies. Employee transport, airport transfers, hotel adhoc transport, local & outstation trips. Fleet from 4 to 50 seater vehicles. 24/7 service available." />
        <meta property="og:image" content="https://mntravels.in/images/logo-new.png" />
        <meta property="og:site_name" content="MN Travels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mntravels.in" />
        <meta name="twitter:title" content="MN Travels - Premium Corporate Transportation Services" />
        <meta name="twitter:description" content="Premium corporate transportation services. Employee transport, airport transfers, and corporate travel solutions trusted by MNCs and IT companies." />
        <meta name="twitter:image" content="https://mntravels.in/images/logo-new.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MN Travels",
            "url": "https://mntravels.in",
            "description": "Premium corporate transportation services including employee transport, airport transfers, and corporate travel solutions.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mntravels.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
      </Helmet>

      {/* Hero Section - Left Aligned Content with Cars Background */}
      <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image with Cars */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-navy/85"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
          <div className="max-w-6xl">
            <div className="text-left max-w-3xl">
              {/* Tagline */}
              <div className="text-sm font-semibold text-gray-300 mb-6 tracking-wider uppercase">
                YOUR TRUSTED CORPORATE TRAVEL PARTNER
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">Reliable Transportation Services for </span>
                <span className="text-royal-blue">
                  Corporates & Travelers
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
                Premium travel solutions with a wide fleet from 4 to 50 seater vehicles. Experience safe, comfortable, and punctual transportation across the city and beyond.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-royal-blue hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all"
                >
                  Book Now <span className="ml-2 text-xl">></span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-navy border-2 border-royal-blue/50 text-white hover:bg-navy/90 rounded-lg font-semibold text-lg transition-all"
                >
                  Contact Us
                </Link>
              </div>

              {/* Stats Section */}
              <div className="flex flex-wrap gap-12 md:gap-16 lg:gap-20">
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Ready</div>
                  <div className="text-sm text-gray-300">To Serve You</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Service Available</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">20+</div>
                  <div className="text-sm text-gray-300">Years Founder Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose MN Travels Section */}
      <section className="pt-20 md:pt-28 pb-8 md:pb-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-6"
              >
                <Star className="text-royal-blue" size={16} fill="currentColor" />
                <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">Why MN Travels?</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                The MN Travels
                <span className="block bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
                  Difference
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our founders bring over 20 years of combined experience in corporate transportation. We're a new company with proven expertise, ready to earn your trust and deliver excellence in every journey.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4 mb-12">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-royal-blue/30"
                >
                  <div className="flex flex-col items-start gap-3 lg:gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 bg-gradient-to-br ${highlight.color} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <highlight.icon className="text-white" size={20} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex flex-col gap-1 mb-2">
                        <h3 className="text-sm md:text-base lg:text-sm xl:text-base font-bold text-navy group-hover:text-royal-blue transition-colors leading-tight">
                          {highlight.text}
                        </h3>
                        <div className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
                          {highlight.number}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 font-medium mb-2 lg:mb-3">{highlight.subtext}</p>
                      
                      {index === 0 && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 lg:line-clamp-4">
                          Ready to serve leading MNCs and IT companies with reliable and professional transportation solutions that meet the highest standards of corporate excellence.
                        </p>
                      )}
                      {index === 1 && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 lg:line-clamp-4">
                          Operating round the clock to ensure your transportation needs are met at any time. Whether it's early morning employee pickups or late-night airport transfers, we're always ready.
                        </p>
                      )}
                      {index === 2 && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 lg:line-clamp-4">
                          Safety is our top priority. Every vehicle in our fleet is fully insured, regularly maintained, and driven by verified professionals with compliance to all safety regulations.
                        </p>
                      )}
                      {index === 3 && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 lg:line-clamp-4">
                          We maintain the highest standards of service quality, consistently achieving exceptional customer satisfaction. Our commitment to excellence is reflected in every journey.
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center pt-8"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-300 hover:border-royal-blue text-navy hover:text-royal-blue rounded-lg font-semibold text-base transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="pt-8 md:pt-12 pb-20 md:pb-28 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #005bb5 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-royal-blue/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-royal-blue/5 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-6"
            >
              <Sparkles className="text-royal-blue" size={16} />
              <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">Our Services</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 md:mb-6 leading-tight">
              Comprehensive Transportation
              <span className="block bg-gradient-to-r from-royal-blue to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored corporate transportation services designed to meet the unique needs of modern businesses
            </p>
          </motion.div>

          {/* Services Grid - 2 columns on mobile, 2 on tablet, 5 on desktop (one row) */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-4 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, #005bb5 1.5px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-purple-400/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-pink-400/10 to-transparent"></div>
        
        {/* Decorative Blur Elements */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-4"
              >
                <Star className="text-royal-blue" size={16} fill="currentColor" />
                <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">Testimonials</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
                Trusted by Leaders
                <span className="block text-gray-600 text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
                  from Various Industries
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover why professionals and businesses trust our solutions for their corporate transportation needs.
              </p>
            </motion.div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Testimonial Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  "MN Travels has been our trusted transportation partner for over 3 years. Their reliability and professionalism are unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-royal-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">John Davis</div>
                    <div className="text-xs text-gray-500">CEO, TechCorp</div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  "Excellent service quality and 24/7 support. Our employees appreciate the comfortable and safe commute experience."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">Sarah Miller</div>
                    <div className="text-xs text-gray-500">HR Director, GlobalIT</div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  "The airport transfer service is exceptional. Always on time and professional drivers. Highly recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">Robert Kumar</div>
                    <div className="text-xs text-gray-500">Operations Manager</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden text-white" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}>
        {/* Animated Gradient Background */}
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-navy/60"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-24 h-24 border-2 border-white/15 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/15 rotate-12 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rotate-45 rounded"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
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
