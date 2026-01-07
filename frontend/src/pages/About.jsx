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
    { year: '2024', title: 'MN Travels Founded', description: 'Started with a vision to revolutionize corporate transportation in India, bringing together decades of industry expertise to serve MNCs and IT companies' },
    { year: '2024', title: 'Rapid Growth', description: 'Quickly established a strong presence in the corporate transportation market with a modern fleet and experienced leadership team' },
    { year: '2024', title: 'Technology Integration', description: 'Launched with GPS tracking and real-time monitoring systems for enhanced service delivery from day one' },
    { year: '2024', title: 'Ready for Partnerships', description: 'Prepared to build relationships with leading IT and corporate clients, leveraging our founders\' extensive industry experience' },
  ];

  const stats = [
    { number: '20+', label: 'Years Founder Experience', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { number: 'Ready', label: 'To Serve You', icon: Building2, color: 'from-purple-500 to-pink-500' },
    { number: 'Pan‑India', label: 'Service Presence', icon: Users, color: 'from-green-500 to-emerald-500' },
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
        <title>About Us - MN Travels | Corporate Transportation Company | Mission, Vision & Values</title>
        <meta name="description" content="Learn about MN Travels - a premium corporate transportation company with 20+ years of founder experience. Our mission, vision, and commitment to providing safe, reliable, and professional corporate transportation services across India. Trusted by MNCs and IT companies." />
        <meta name="keywords" content="about MN Travels, corporate transportation company, employee transport company, corporate travel company, transportation company India, corporate cab company, employee cab company, business transportation company, MNC transport company, IT company transport, corporate fleet company, transportation services company, employee commute company, corporate mobility company, business travel company, professional transportation company, reliable transport company, safe transport company, experienced transport company, trusted transport company, corporate transport provider, employee transport provider, business transport provider, transportation solutions company, corporate travel solutions, employee commute solutions, business mobility solutions" />
        <link rel="canonical" href="https://mntravels.in/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mntravels.in/about" />
        <meta property="og:title" content="About Us - MN Travels | Corporate Transportation Company" />
        <meta property="og:description" content="Learn about MN Travels - our mission, vision, and commitment to providing premium corporate transportation services. 20+ years of founder experience." />
        <meta property="og:image" content="https://mntravels.in/images/logo-new.png?v=2" />
        <meta property="og:site_name" content="MN Travels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mntravels.in/about" />
        <meta name="twitter:title" content="About Us - MN Travels" />
        <meta name="twitter:description" content="Learn about MN Travels - our mission, vision, and commitment to providing premium corporate transportation services." />
        <meta name="twitter:image" content="https://mntravels.in/images/logo-new.png?v=2" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About MN Travels",
            "description": "Learn about MN Travels - a premium corporate transportation company with 20+ years of founder experience",
            "mainEntity": {
              "@type": "Organization",
              "name": "MN Travels",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Hariprasad M"
              },
              "description": "Premium corporate transportation services with 20+ years of founder experience in the industry"
            }
          })
        }} />
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
              About MN Travels
            </h1>
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Better Typography */}
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
              <Target className="text-royal-blue" size={16} />
              <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">Our Foundation</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Mission & Vision
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide our commitment to excellence
            </p>
          </motion.div>

          {/* Enhanced Cards with Better UI/UX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-blue via-blue-500 to-cyan-500 rounded-t-2xl"></div>
              
              {/* Icon with Enhanced Design */}
              <div className="inline-flex p-5 bg-gradient-to-br from-royal-blue to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={36} />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-snug">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Our mission at MN Travels is to make everyday corporate travel simple, safe and on time. We focus on reliable operations so your teams can move smoothly and your business never slows down.
              </p>
              
              {/* Decorative Element */}
              <div className="flex items-center gap-2 text-royal-blue mt-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-royal-blue to-transparent"></div>
                <div className="w-2 h-2 bg-royal-blue rounded-full"></div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
              
              {/* Icon with Enhanced Design */}
              <div className="inline-flex p-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-white" size={36} />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-snug">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Our vision is to be the first choice for corporate transportation in India. We want every ride with MN Travels to feel consistent, safe and effortless for both employees and employers.
              </p>
              
              {/* Decorative Element */}
              <div className="flex items-center gap-2 text-indigo-600 mt-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-transparent"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-50/30">
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-royal-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-400/10 to-transparent"></div>
        
        {/* Decorative Blur Elements - Color Only */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/6 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Core Values
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
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
                <p className="text-gray-600 leading-relaxed text-xs">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-orange-50/20">
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-400/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-400/10 to-transparent"></div>
        
        {/* Decorative Blur Elements - Color Only */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-pink-400/6 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-6">
              <Award className="text-royal-blue" size={16} />
              <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">Milestones & Achievements</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
              Our Journey of Excellence
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our growth and success
            </p>
          </motion.div>

          {/* Milestones Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-royal-blue/30 overflow-hidden"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-blue to-blue-600"></div>
                  
                  {/* Year Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-royal-blue to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal-blue transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-royal-blue/5 rounded-full -mr-10 -mb-10 group-hover:bg-royal-blue/10 transition-colors"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Management */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-4">
              <Users className="text-royal-blue" size={16} />
              <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">
                Founders & Management
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Leadership with Deep Transportation Expertise
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              MN Travels is led by professionals who have spent their careers in public and private transportation, managing large‑scale mobility programs in both international and Indian markets. Their collective experience shapes the way we design, operate, and scale solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy mb-2">
                Proven Industry Background
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                The founding team brings extensive experience from both international and local markets, with a strong track record in public and private transportation. Their exposure to diverse operating environments enables MN Travels to deliver robust, practical, and scalable mobility solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy mb-2">
                Strong Business & Operational Leadership
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Collectively, the leadership team has over two decades of experience steering P&amp;L, strategy, operations, sales, technology, and fleet management. This multidisciplinary expertise helps MN Travels balance customer experience, financial performance, and operational discipline.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy mb-2">
                Startup & Scale‑Up Experience
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Members of the core team have played key roles in successfully building and scaling transportation startups, including private mobility platforms in GCC markets. They have managed pan‑India operations, scaled fleets and resources, and consistently delivered strong revenue and healthy margins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy mb-2">
                Deep Multi‑Modal Knowledge
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                With a strong understanding of multi‑modal transportation and integration with existing public and private networks, MN Travels is able to design solutions that fit seamlessly into complex mobility ecosystems and client infrastructures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy mb-2">
                Experienced Core Team
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                The extended core team at MN Travels represents several decades of combined experience in transportation and mobility. This depth of knowledge allows us to anticipate challenges, respond quickly to changing requirements, and support clients across a wide range of industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/20">
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-400/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-400/10 to-transparent"></div>
        
        {/* Decorative Blur Elements - Color Only */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-400/6 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-6">
              <Shield className="text-royal-blue" size={16} />
              <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">Our Commitment</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              What We Promise
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              At MN Travels, we understand that corporate transportation is more than just moving people. It's about ensuring safety, maintaining professionalism, and reflecting your business values.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Our founders bring over 20 years of combined experience in corporate transportation, ensuring we deliver excellence from day one.
            </p>
          </motion.div>

          {/* Commitment Cards - 2 Column Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-royal-blue/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-blue to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <commitment.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700 leading-relaxed font-medium text-sm">
                        {commitment.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-navy via-royal-blue to-indigo-900 text-white">
        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
        
        {/* Decorative Blur Elements - Color Only */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-base text-gray-200 mb-8 max-w-xl mx-auto">
              Be among the first to experience our premium corporate transportation services backed by decades of industry expertise
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
