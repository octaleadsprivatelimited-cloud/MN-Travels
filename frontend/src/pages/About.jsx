import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award, Users, Clock, TrendingUp, CheckCircle, ArrowRight, Building2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety of our passengers above all else, with regular vehicle maintenance, trained drivers, and comprehensive insurance coverage.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'Time is valuable in business. We ensure timely pickups and drops to keep your operations running smoothly with real-time tracking.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Premium vehicles and professional service to provide the best corporate transportation experience with attention to every detail.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We tailor our services to meet your specific business needs with personalized solutions.',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  const milestones = [
    { year: '2009', title: 'MN Travels Founded', description: 'Started with a vision to revolutionize corporate transportation in India, focusing on MNCs and IT companies' },
    { year: '2012', title: '100+ Corporate Clients', description: 'Reached milestone of serving 100+ corporate clients including major IT companies in NCR region' },
    { year: '2015', title: 'Fleet Expansion', description: 'Expanded MN Travels fleet to 500+ vehicles across sedans, SUVs, tempo travellers, and buses' },
    { year: '2018', title: 'Technology Integration', description: 'MN Travels launched GPS tracking and real-time monitoring systems for enhanced service delivery' },
    { year: '2021', title: '500+ Clients Milestone', description: 'MN Travels achieved milestone of serving 500+ corporate clients across India' },
    { year: '2024', title: 'Industry Leader', description: 'MN Travels recognized as leading corporate transportation provider trusted by Fortune 500 companies' },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { number: '500+', label: 'Corporate Clients', icon: Building2, color: 'from-purple-500 to-pink-500' },
    { number: '1000+', label: 'Vehicles', icon: Users, color: 'from-green-500 to-emerald-500' },
    { number: '98%', label: 'Satisfaction Rate', icon: Star, color: 'from-orange-500 to-amber-500' },
  ];

  const commitments = [
    { icon: Shield, text: 'Maintaining a modern, well-maintained fleet of vehicles' },
    { icon: Users, text: 'Employing experienced, professional, and verified drivers' },
    { icon: Clock, text: 'Providing 24/7 customer support for all your transportation needs' },
    { icon: CheckCircle, text: 'Ensuring compliance with all safety regulations and standards' },
    { icon: Award, text: 'Delivering personalized service tailored to your business requirements' },
    { icon: TrendingUp, text: 'Continuously improving our services based on client feedback' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - MN Travels | Corporate Transportation Company</title>
        <meta name="description" content="Learn about MN Travels - our mission, vision, and commitment to providing premium corporate transportation services." />
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
              About MN Travels
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Your trusted partner in corporate transportation. We've been serving businesses with excellence, reliability, and innovation for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 bg-royal-blue rounded-lg mb-3">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-navy mb-1">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
            >
              <div className="inline-flex p-4 bg-royal-blue rounded-lg mb-6">
                <Target className="text-white" size={32} />
              </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    At MN Travels, our mission is to provide reliable, safe, and premium corporate transportation services that enable businesses to focus on their core operations. We handle their mobility needs with excellence, innovation, and unwavering commitment to quality, ensuring every journey with MN Travels is comfortable, punctual, and safe.
                  </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
            >
              <div className="inline-flex p-4 bg-royal-blue rounded-lg mb-6">
                <Eye className="text-white" size={32} />
              </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    MN Travels envisions becoming the leading corporate transportation partner in India, recognized for our commitment to safety, punctuality, customer satisfaction, and continuous innovation. We aim to set new standards in the corporate transportation industry while expanding our reach to serve more businesses across the country.
                  </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="inline-flex p-4 bg-royal-blue rounded-lg mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of growth, innovation, and excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-royal-blue">{milestone.year}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Commitment
              </h2>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-md border border-gray-200 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                At MN Travels, we understand that corporate transportation is more than just moving people from point A to point B. It's about ensuring your employees arrive safely and on time, maintaining your company's professional image, and providing a service that reflects your business values. With over 15 years of experience, MN Travels has built a reputation for excellence in corporate transportation across India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 p-2.5 bg-royal-blue rounded-lg">
                      <commitment.icon className="text-white" size={20} />
                    </div>
                    <p className="text-gray-700 text-sm pt-1">
                      {commitment.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Trusted by leading MNCs and IT companies like Infosys, TCS, Wipro, and Accenture, MN Travels takes pride in being a reliable partner that helps businesses thrive by taking care of their transportation needs with excellence, innovation, and unwavering dedication. Our commitment to quality and customer satisfaction has made MN Travels the preferred choice for corporate transportation.
              </p>
            </div>
          </motion.div>
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
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
              Join hundreds of satisfied corporate clients who trust us with their transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-lg font-semibold transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
