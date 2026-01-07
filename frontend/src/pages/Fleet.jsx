import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Car, Users, CheckCircle, ArrowRight, Shield, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fleet = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getVehicleImage = (name) => {
    const imageMap = {
      '04 Seater Sedan': '/images/04 Seater Sedan.jpg',
      '07 Seater Innova': '/images/07 Seater Innova.jpg',
      'Innova Crysta': '/images/07 Seater Innova.jpg',
      '13/17 Seater Tempo Traveller': '/images/13,17 Seater Tempo Traveller.jpg',
      '20 Seater Urbania': '/images/20 Seater Urbania.jpg',
      '25 Seater Mini Bus': '/images/25 Seater Mini Bus.jpg',
      '30 Seater Mini Bus': '/images/30 Seater Mini Bus.jpg',
      '40 Seater Mini Bus': '/images/40 Seater Mini Bus.jpg',
      '50 Seater Mini Bus': '/images/50 Seater Mini Bus.jpg',
      'Premium Sedan': '/images/Premium Sedan.jpg',
      'Luxury Sedan': '/images/Luxury Sedan.jpg',
    };
    return imageMap[name] || null;
  };

  const vehicles = [
    {
      _id: '1',
      name: '04 Seater Sedan',
      type: 'sedan',
      capacity: '4',
      description: 'Comfortable sedan perfect for executive travel with premium interiors and advanced safety features',
      features: ['AC', 'GPS Navigation', 'Premium Interior', 'Leather Seats', 'Entertainment System'],
      isAvailable: true,
    },
    {
      _id: '2',
      name: '07 Seater Innova',
      type: 'suv',
      capacity: '7',
      description: 'Spacious SUV ideal for small groups with comfortable seating and ample luggage space',
      features: ['AC', 'GPS Tracking', 'Comfortable Seating', 'Luggage Space', 'Rear AC'],
      isAvailable: true,
    },
    {
      _id: '3',
      name: '13/17 Seater Tempo Traveller',
      type: 'tempo',
      capacity: '13-17',
      description: 'Perfect for team outings and group travel with spacious interiors and comfortable seating',
      features: ['AC', 'Spacious Interior', 'Comfortable Seats', 'Luggage Rack', 'Music System'],
      isAvailable: true,
    },
    {
      _id: '4',
      name: '20 Seater Urbania',
      type: 'urbania',
      capacity: '20',
      description: 'Premium Urbania with luxurious interiors, perfect for corporate group travel with enhanced comfort',
      features: ['AC', 'Premium Seating', 'Spacious Interior', 'Entertainment System', 'USB Charging'],
      isAvailable: true,
    },
    {
      _id: '5',
      name: '25 Seater Mini Bus',
      type: 'minibus',
      capacity: '25',
      description: 'Ideal for employee transportation with comfortable seats and modern amenities',
      features: ['AC', 'Comfortable Seats', 'Luggage Space', 'Reading Lights', 'USB Charging'],
      isAvailable: true,
    },
    {
      _id: '6',
      name: '30 Seater Mini Bus',
      type: 'minibus',
      capacity: '30',
      description: 'Perfect for large group transportation with premium seating and entertainment options',
      features: ['AC', 'Spacious', 'Safe Travel', 'Entertainment', 'WiFi Ready'],
      isAvailable: true,
    },
    {
      _id: '7',
      name: '40 Seater Mini Bus',
      type: 'minibus',
      capacity: '40',
      description: 'Large capacity mini bus for corporate events with premium amenities and comfort features',
      features: ['AC', 'Premium Seating', 'Entertainment System', 'WiFi', 'Charging Points'],
      isAvailable: true,
    },
    {
      _id: '8',
      name: '50 Seater Mini Bus',
      type: 'minibus',
      capacity: '50',
      description: 'Maximum capacity mini bus for large corporate events with all premium features',
      features: ['AC', 'Premium Seating', 'Entertainment System', 'WiFi', 'Charging Points', 'GPS Tracking'],
      isAvailable: true,
    },
    {
      _id: '9',
      name: 'Premium Sedan',
      type: 'premium',
      capacity: '4',
      description: 'Premium sedan with top-tier features, perfect for VIP corporate travel and executive meetings',
      features: ['Premium AC', 'Advanced GPS', 'Leather Interior', 'Premium Sound System', 'Sunroof'],
      isAvailable: true,
    },
    {
      _id: '10',
      name: 'Luxury Sedan',
      type: 'luxury',
      capacity: '4',
      description: 'Ultra-luxury sedan with world-class amenities, perfect for high-profile corporate clients',
      features: ['Climate Control', 'Premium Leather', 'Massage Seats', 'Premium Audio', 'Chauffeur Service'],
      isAvailable: true,
    },
    {
      _id: '11',
      name: 'Innova Crysta',
      type: 'innova-crysta',
      capacity: '7',
      description: 'Premium Innova Crysta with spacious interiors, perfect for comfortable group travel with modern amenities',
      features: ['AC', 'GPS Tracking', 'Comfortable Seating', 'Luggage Space', 'Rear AC', 'Premium Interior'],
      isAvailable: true,
    },
  ];

  const getVehicleIcon = (type) => {
    switch (type) {
      case 'sedan':
        return Car;
      case 'suv':
        return Car;
      case 'tempo':
        return Car;
      case 'urbania':
        return Car;
      case 'minibus':
        return Car;
      case 'premium':
        return Car;
      case 'luxury':
        return Car;
      case 'innova-crysta':
        return Car;
      default:
        return Car;
    }
  };

  const getVehicleColor = (type) => {
    switch (type) {
      case 'sedan':
        return 'from-blue-500 via-blue-600 to-cyan-600';
      case 'suv':
        return 'from-purple-500 via-purple-600 to-pink-600';
      case 'tempo':
        return 'from-green-500 via-emerald-600 to-teal-600';
      case 'urbania':
        return 'from-indigo-500 via-indigo-600 to-purple-600';
      case 'minibus':
        return 'from-orange-500 via-amber-600 to-yellow-600';
      case 'premium':
        return 'from-rose-500 via-pink-600 to-red-600';
      case 'luxury':
        return 'from-amber-500 via-yellow-600 to-orange-600';
      case 'innova-crysta':
        return 'from-purple-500 via-purple-600 to-pink-600';
      default:
        return 'from-royal-blue via-blue-600 to-cyan-600';
    }
  };

  const vehicleTypes = [
    { value: 'all', label: 'All Vehicles', icon: Car },
    { value: 'sedan', label: 'Sedans (40)', icon: Car },
    { value: 'suv', label: 'SUVs (10)', icon: Car },
    { value: 'innova-crysta', label: 'Innova Crysta (10)', icon: Car },
    { value: 'tempo', label: 'Tempo Traveller', icon: Car },
    { value: 'urbania', label: 'Urbania', icon: Car },
    { value: 'minibus', label: 'Mini Bus (20-50 Seater)', icon: Car },
    { value: 'premium', label: 'Premium Cars', icon: Car },
    { value: 'luxury', label: 'Luxury Cars', icon: Car },
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesType = selectedType === 'all' || vehicle.type === selectedType;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const stats = [
    { number: 'Premium', label: 'Vehicle Quality', icon: Car, color: 'from-blue-500 to-cyan-500' },
    { number: '100%', label: 'Maintained', icon: Shield, color: 'from-purple-500 to-pink-500' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'from-orange-500 to-amber-500' },
    { number: 'Pan‑India', label: 'Service Reach', icon: Users, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Fleet - Sedans, SUVs, Tempo Traveller, Mini Bus, Premium & Luxury Cars | MN Travels</title>
        <meta name="description" content="Explore MN Travels' diverse vehicle fleet: 4 Seater Sedan, 7 Seater Innova, 13/17 Seater Tempo Traveller, 20 Seater Urbania, Mini Bus (25-50 Seater), Premium Sedan, Luxury Sedan. All vehicles with AC, GPS tracking, premium interiors. Available for corporate transportation across India." />
        <meta name="keywords" content="corporate vehicle fleet, sedan rental, SUV rental, tempo traveller hire, urbania rental, mini bus rental, luxury car rental, premium car rental, corporate car rental, employee transport vehicles, corporate bus rental, 4 seater sedan, 7 seater innova, 13 seater tempo, 17 seater tempo, 20 seater urbania, 25 seater bus, 30 seater bus, 40 seater bus, 50 seater bus, premium sedan, luxury sedan, corporate fleet vehicles, business vehicle rental, office vehicle rental, employee cab vehicles, corporate event vehicles, conference transport vehicles, airport transfer vehicles, hotel transport vehicles, GPS tracked vehicles, AC vehicles, premium interior vehicles, comfortable corporate vehicles, safe transport vehicles, professional chauffeur vehicles, reliable corporate vehicles, modern fleet vehicles, well maintained vehicles, insured corporate vehicles" />
        <link rel="canonical" href="https://mntravels.in/fleet" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mntravels.in/fleet" />
        <meta property="og:title" content="Vehicle Fleet - Sedans, SUVs, Tempo Traveller, Mini Bus, Premium & Luxury Cars | MN Travels" />
        <meta property="og:description" content="Explore our diverse fleet: Sedans, SUVs, Tempo Traveller, Urbania, Mini Bus (20-50 Seater), Premium & Luxury cars. All vehicles with AC, GPS tracking, premium interiors." />
        <meta property="og:image" content="https://mntravels.in/images/logo-new.png" />
        <meta property="og:site_name" content="MN Travels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mntravels.in/fleet" />
        <meta name="twitter:title" content="Vehicle Fleet - MN Travels" />
        <meta name="twitter:description" content="Explore our diverse fleet of vehicles including Sedans, SUVs, Tempo Traveller, Urbania, Mini Bus (20-50 Seater), and all types of premium & luxurious cars." />
        <meta name="twitter:image" content="https://mntravels.in/images/logo-new.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "MN Travels Vehicle Fleet",
            "description": "Complete fleet of corporate transportation vehicles",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "04 Seater Sedan",
                "description": "Comfortable sedan perfect for executive travel with premium interiors"
              },
              {
                "@type": "Product",
                "name": "07 Seater Innova",
                "description": "Spacious SUV ideal for small groups with comfortable seating"
              },
              {
                "@type": "Product",
                "name": "13/17 Seater Tempo Traveller",
                "description": "Perfect for team outings and group travel with spacious interiors"
              },
              {
                "@type": "Product",
                "name": "20 Seater Urbania",
                "description": "Premium Urbania with luxurious interiors for corporate group travel"
              },
              {
                "@type": "Product",
                "name": "25-50 Seater Mini Bus",
                "description": "Large capacity buses for employee transportation and corporate events"
              },
              {
                "@type": "Product",
                "name": "Premium & Luxury Sedan",
                "description": "Top-tier vehicles for VIP corporate travel and executive meetings"
              }
            ]
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
              Premium Vehicle Fleet
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

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Vehicle Type Filters */}
          <div className="flex flex-wrap gap-3">
              {vehicleTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    selectedType === type.value
                      ? 'bg-royal-blue text-white shadow-md'
                      : 'bg-white text-navy hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <type.icon size={16} />
                    <span>{type.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 w-full md:w-72 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex p-3 bg-gray-100 rounded-lg mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <p className="text-lg text-gray-600 font-semibold">No vehicles found</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle, index) => {
                const VehicleIcon = getVehicleIcon(vehicle.type);
                const vehicleColor = getVehicleColor(vehicle.type);
                
                return (
                  <motion.div
                    key={vehicle._id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-gray-200 transition-all"
                  >
                    {/* Vehicle Image Section */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      {getVehicleImage(vehicle.name) ? (
                        <img
                          src={getVehicleImage(vehicle.name)}
                          alt={vehicle.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`bg-gradient-to-br ${vehicleColor} w-full h-full flex items-center justify-center`}>
                          <VehicleIcon className="text-white" size={64} />
                        </div>
                      )}
                      
                      {/* Availability Badge */}
                      {vehicle.isAvailable && (
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-green-500 rounded-lg">
                          <CheckCircle className="text-white" size={14} />
                          <span className="text-white text-xs font-semibold">Available</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-navy mb-3">
                        {vehicle.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Users size={16} />
                        <span className="text-sm font-medium">Capacity: {vehicle.capacity} Seater</span>
                      </div>
                      
                      {vehicle.description && (
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {vehicle.description}
                        </p>
                      )}
                      
                      {/* Features */}
                      {vehicle.features && vehicle.features.length > 0 && (
                        <div className="space-y-1.5 mb-4">
                          {vehicle.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <CheckCircle className="text-royal-blue flex-shrink-0" size={14} />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* CTA */}
                      <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                        <Link
                          to="/contact"
                          className="flex items-center gap-2 px-5 py-2.5 bg-royal-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm"
                        >
                          <span>Book Now</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
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
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
              Our fleet is constantly updated. Contact us to discuss specific vehicle requirements and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy hover:bg-gray-100 rounded-lg font-semibold transition-all shadow-lg"
              >
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-lg font-semibold transition-all"
              >
                Request Custom Fleet
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Fleet;
