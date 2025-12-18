import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { submitLead } from '../utils/api';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle, ArrowRight, Zap, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    requirement: '',
    date: '',
    time: '',
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.message) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await submitLead(formData);
      setStatus({
        type: 'success',
        message: 'Thank you for your enquiry! We will contact you soon.',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        requirement: '',
        date: '',
        time: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to submit enquiry. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 99001 09686', '+91 97434 84699', '+91 89516 35782', '24/7 Operations Support'],
      color: 'from-blue-500 to-cyan-500',
      action: 'tel:+919900109686',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@mntravels.in', 'prasad@mntravels.in', 'nagaveni@mntravels.in', 'mntravels1329@gmail.com'],
      color: 'from-purple-500 to-pink-500',
      action: 'mailto:info@mntravels.in',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['MN Travels Corporate Office', '123 Business Park, Sector 18', 'Gurgaon, Haryana - 122015'],
      color: 'from-green-500 to-emerald-500',
      action: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Operations', 'Customer Support: Mon-Sun', 'Office Hours: 9 AM - 6 PM'],
      color: 'from-orange-500 to-amber-500',
      action: null,
    },
  ];

  const teamContacts = [
    {
      name: 'Hariprasad M',
      designation: 'Founder and CEO',
      phone: ['+91 99001 09686', '+91 97434 84699'],
      email: ['prasad@mntravels.in', 'info@mntravels.in'],
    },
    {
      name: 'Nagaveni A',
      designation: 'Proprietor',
      phone: ['+91 89516 35782'],
      email: ['nagaveni@mntravels.in', 'mntravels1329@gmail.com'],
    },
  ];

  const quickActions = [
    { icon: MessageCircle, text: 'WhatsApp Chat', color: 'from-green-500 to-emerald-500', action: 'https://wa.me/918951635782' },
    { icon: Phone, text: 'Call Now', color: 'from-blue-500 to-cyan-500', action: 'tel:+919900109686' },
    { icon: Mail, text: 'Email Us', color: 'from-purple-500 to-pink-500', action: 'mailto:info@mntravels.in' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - MN Travels | Get in Touch</title>
        <meta name="description" content="Contact MN Travels for corporate transportation services. Submit your enquiry or request a quote for employee transport, airport transfers, and more." />
      </Helmet>

      {/* Hero Section */}
      <section
        className="py-6 md:py-16 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/images/hero-mn.png (2).png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-0 md:mb-6 text-white drop-shadow-lg">
              Contact MN Travels
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.action}
                target={action.action.startsWith('http') ? '_blank' : undefined}
                rel={action.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-5 py-3 bg-royal-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
              >
                <action.icon size={18} />
                <span>{action.text}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Left Column: Contact Form + Our Team as separate cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-200"
              >
              <div className="mb-4 md:mb-5">
                <h2 className="text-xl md:text-2xl font-bold text-navy mb-1">Send Us a Message</h2>
                <p className="text-gray-600 text-xs md:text-sm">Share a few details and our team will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all text-xs md:text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all text-xs md:text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all text-xs md:text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all text-xs md:text-sm"
                      placeholder="Company (optional)"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                    Requirement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all resize-none text-xs md:text-sm"
                    placeholder="Tell us about your transportation needs..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all text-xs md:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-gray-700 font-semibold mb-1 text-xs md:text-sm">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all text-xs md:text-sm"
                    />
                  </div>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3.5 rounded-lg flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                    )}
                    <span className="font-semibold text-xs md:text-sm">{status.message}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-5 py-2.5 md:py-3 bg-royal-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md text-sm"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            </motion.div>

              {/* Our Team - separate block under the form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-navy mb-3">Our Team</h3>
                <div className="space-y-4">
                  {teamContacts.map((member, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <h4 className="font-bold text-navy mb-1">{member.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{member.designation}</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Phone className="text-royal-blue flex-shrink-0 mt-0.5" size={16} />
                          <div className="flex flex-col gap-1">
                            {member.phone.map((phone, idx) => (
                              <a
                                key={idx}
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="text-sm text-gray-700 hover:text-royal-blue hover:underline"
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Mail className="text-royal-blue flex-shrink-0 mt-0.5" size={16} />
                          <div className="flex flex-col gap-1">
                            {member.email.map((email, idx) => (
                              <a
                                key={idx}
                                href={`mailto:${email}`}
                                className="text-sm text-gray-700 hover:text-royal-blue hover:underline"
                              >
                                {email}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Get in Touch with MN Travels</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  MN Travels is here to help! Reach out to us through any of the following channels. Our team is available 24/7 to assist you with all your corporate transportation needs.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-royal-blue rounded-lg">
                        <method.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-navy text-lg mb-2">
                          {method.title}
                        </h3>
                        {method.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                        {method.action && (
                          <a
                            href={method.action}
                            className="inline-flex items-center gap-2 mt-2 text-royal-blue font-semibold hover:underline text-sm"
                          >
                            <span>Contact via {method.title}</span>
                            <ArrowRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
              Our team is ready to help you find the perfect transportation solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919900109686"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </a>
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

export default Contact;
