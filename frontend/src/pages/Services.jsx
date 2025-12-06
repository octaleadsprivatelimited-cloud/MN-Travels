import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Plane, Building2, Route, Car, ArrowRight, CheckCircle, Sparkles, Zap, Shield, Clock, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      icon: Users,
      title: 'Employee Transportation',
      description: 'Reliable daily commute solutions for your workforce. We provide safe, punctual, and comfortable transportation for employees, ensuring they reach their workplace on time every day with dedicated routes and professional drivers.',
      features: [
        'Dedicated fleet for daily routes',
        'GPS tracking and real-time updates',
        'Flexible scheduling options',
        'Experienced and verified drivers',
        'Route optimization',
        '24/7 customer support',
      ],
      color: 'from-blue-500 via-blue-600 to-cyan-600',
      gradient: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100',
      stats: { clients: '200+', satisfaction: '98%' },
    },
    {
      icon: Plane,
      title: 'Airport Pickups / Drops',
      description: 'Punctual airport transfers for executives, clients, and guests. Our professional drivers ensure seamless travel experiences with meet-and-greet services, flight monitoring, and premium vehicle options.',
      features: [
        'Real-time flight monitoring',
        'Meet and greet service',
        'Luggage assistance',
        'Premium vehicle options',
        'Multiple airport coverage',
        'Executive class service',
      ],
      color: 'from-royal-blue via-blue-600 to-cyan-600',
      gradient: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50',
      stats: { clients: '150+', satisfaction: '99%' },
    },
    {
      icon: Building2,
      title: 'Hotel Adhoc Transport',
      description: 'On-demand transportation services for hotel guests and corporate visitors. Available 24/7 for immediate travel needs with quick response times and multiple vehicle options.',
      features: [
        '24/7 availability',
        'Quick response time',
        'Multiple vehicle options',
        'Professional chauffeurs',
        'Flexible booking',
        'Hotel partnerships',
      ],
      color: 'from-purple-500 via-purple-600 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100',
      stats: { clients: '100+', satisfaction: '97%' },
    },
    {
      icon: Route,
      title: 'Local & Outstation Trips',
      description: 'Comfortable travel solutions for business trips, conferences, and corporate events. Whether local or outstation, we ensure a smooth journey with customized packages.',
      features: [
        'Local and long-distance trips',
        'Event transportation',
        'Conference and meeting transfers',
        'Customized travel packages',
        'Multi-city tours',
        'Group bookings',
      ],
      color: 'from-green-500 via-emerald-600 to-teal-600',
      gradient: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      stats: { clients: '180+', satisfaction: '96%' },
    },
    {
      icon: Car,
      title: 'Premium & Luxury Car Hire',
      description: 'Premium and luxury vehicles for special occasions, VIP transfers, and executive travel. Experience comfort and style with our high-end fleet featuring premium interiors.',
      features: [
        'Luxury sedan options',
        'Premium SUVs',
        'Executive class vehicles',
        'Personalized service',
        'Chauffeur services',
        'Entertainment systems',
      ],
      color: 'from-orange-500 via-amber-600 to-yellow-600',
      gradient: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50',
      stats: { clients: '120+', satisfaction: '99%' },
    },
  ];

  const benefits = [
    { icon: Shield, title: 'Fully Insured', description: 'Complete coverage for peace of mind' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance' },
    { icon: Award, title: 'Award Winning', description: 'Recognized excellence in service' },
    { icon: TrendingUp, title: 'Scalable Solutions', description: 'Grow with your business needs' },
  ];

  return (
    <>
      <Helmet>
        <title>Services - MN Travels | Corporate Transportation Solutions</title>
        <meta name="description" content="Comprehensive corporate transportation services including employee transport, airport transfers, hotel adhoc transport, and premium vehicle hire." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-navy to-royal-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MN Travels Transportation Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive corporate transportation services by MN Travels, designed to meet your business needs with reliability, safety, and excellence. Trusted by 500+ corporate clients across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 bg-royal-blue rounded-lg mb-3">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-navy mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-blue rounded-xl">
                      <service.icon className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-navy">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8 py-4">
                    <div>
                      <div className="text-2xl font-bold text-navy">{service.stats.clients}</div>
                      <div className="text-sm text-gray-600">Active Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy">{service.stats.satisfaction}</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-royal-blue flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-royal-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <div className={`${service.gradient} rounded-2xl p-8 border border-gray-200 shadow-lg`}>
                    <div className="text-center">
                      <div className="inline-flex p-5 bg-royal-blue rounded-xl mb-6">
                        <service.icon className="text-white" size={48} />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                      <div className="flex justify-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy">{service.stats.clients}</div>
                          <div className="text-sm text-gray-600">Clients</div>
                        </div>
                        <div className="w-px bg-gray-300"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy">{service.stats.satisfaction}</div>
                          <div className="text-sm text-gray-600">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our transportation services in just a few easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your requirements', icon: Zap },
              { step: '02', title: 'Customization', description: 'Tailored solution for you', icon: Sparkles },
              { step: '03', title: 'Implementation', description: 'Seamless setup process', icon: Shield },
              { step: '04', title: 'Support', description: '24/7 ongoing assistance', icon: Clock },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-gray-200 mb-3">{item.step}</div>
                <div className="inline-flex p-3 bg-royal-blue rounded-lg mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
              Contact MN Travels today to discuss your transportation needs and get a customized proposal tailored to your business. Our team is ready to help you find the perfect transportation solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
              >
                Request a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-lg font-semibold transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
