import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { getVehicles } from '../utils/api';
import { Car, Users, CheckCircle, ArrowRight, Shield, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fleet = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await getVehicles();
        setVehicles(response.data || []);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
        setError('Failed to load vehicles');
        // Set default vehicles if API fails
        setVehicles([
          {
            _id: '1',
            name: '04 Seater Sedan',
            type: 'sedan',
            capacity: '4',
            description: 'Comfortable sedan perfect for executive travel with premium interiors and advanced safety features',
            features: ['AC', 'GPS Navigation', 'Premium Interior', 'Leather Seats', 'Entertainment System'],
            isAvailable: true,
            pricePerKm: 12,
          },
          {
            _id: '2',
            name: '07 Seater Innova',
            type: 'suv',
            capacity: '7',
            description: 'Spacious SUV ideal for small groups with comfortable seating and ample luggage space',
            features: ['AC', 'GPS Tracking', 'Comfortable Seating', 'Luggage Space', 'Rear AC'],
            isAvailable: true,
            pricePerKm: 15,
          },
          {
            _id: '3',
            name: '13/17 Seater Tempo Traveller',
            type: 'tempo',
            capacity: '13-17',
            description: 'Perfect for team outings and group travel with spacious interiors and comfortable seating',
            features: ['AC', 'Spacious Interior', 'Comfortable Seats', 'Luggage Rack', 'Music System'],
            isAvailable: true,
            pricePerKm: 18,
          },
          {
            _id: '4',
            name: '22 Seater Bus',
            type: 'bus',
            capacity: '22',
            description: 'Ideal for employee transportation with comfortable seats and modern amenities',
            features: ['AC', 'Comfortable Seats', 'Luggage Space', 'Reading Lights', 'USB Charging'],
            isAvailable: true,
            pricePerKm: 20,
          },
          {
            _id: '5',
            name: '30 Seater Bus',
            type: 'bus',
            capacity: '30',
            description: 'Perfect for large group transportation with premium seating and entertainment options',
            features: ['AC', 'Spacious', 'Safe Travel', 'Entertainment', 'WiFi Ready'],
            isAvailable: true,
            pricePerKm: 22,
          },
          {
            _id: '6',
            name: '50 Seater Bus',
            type: 'bus',
            capacity: '50',
            description: 'Large capacity bus for corporate events with premium amenities and comfort features',
            features: ['AC', 'Premium Seating', 'Entertainment System', 'WiFi', 'Charging Points'],
            isAvailable: true,
            pricePerKm: 25,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const getVehicleIcon = (type) => {
    switch (type) {
      case 'sedan':
        return Car;
      case 'suv':
        return Car;
      case 'tempo':
        return Car;
      case 'bus':
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
      case 'bus':
        return 'from-orange-500 via-amber-600 to-yellow-600';
      default:
        return 'from-royal-blue via-blue-600 to-cyan-600';
    }
  };

  const vehicleTypes = [
    { value: 'all', label: 'All Vehicles', icon: Car, count: vehicles.length },
    { value: 'sedan', label: 'Sedans', icon: Car, count: vehicles.filter(v => v.type === 'sedan').length },
    { value: 'suv', label: 'SUVs', icon: Car, count: vehicles.filter(v => v.type === 'suv').length },
    { value: 'tempo', label: 'Tempo', icon: Car, count: vehicles.filter(v => v.type === 'tempo').length },
    { value: 'bus', label: 'Buses', icon: Car, count: vehicles.filter(v => v.type === 'bus').length },
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesType = selectedType === 'all' || vehicle.type === selectedType;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const stats = [
    { number: vehicles.length, label: 'Total Vehicles', icon: Car, color: 'from-blue-500 to-cyan-500' },
    { number: vehicles.filter(v => v.isAvailable).length, label: 'Available Now', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { number: '100%', label: 'Maintained', icon: Shield, color: 'from-purple-500 to-pink-500' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <>
      <Helmet>
        <title>Fleet - MN Travels | Our Vehicle Fleet</title>
        <meta name="description" content="Explore our diverse fleet of vehicles including sedans, SUVs, tempo travellers, and buses. From 4-seater sedans to 50-seater buses." />
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
              Premium Vehicle Fleet
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              A diverse range of well-maintained, premium vehicles to meet all your corporate transportation needs
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
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedType === type.value
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {type.count}
                    </span>
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
          {loading ? (
            <div className="text-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-12 h-12 border-4 border-royal-blue border-t-transparent rounded-full mb-4"
              ></motion.div>
              <p className="text-lg text-gray-600">Loading vehicles...</p>
            </div>
          ) : error && vehicles.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex p-3 bg-red-50 rounded-lg mb-4">
                <span className="text-red-600 text-xl">⚠️</span>
              </div>
              <p className="text-lg text-red-600 font-semibold">{error}</p>
            </div>
          ) : filteredVehicles.length === 0 ? (
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
                    {/* Vehicle Icon Section */}
                    <div className={`bg-gradient-to-br ${vehicleColor} h-48 flex items-center justify-center`}>
                      <VehicleIcon className="text-white" size={64} />
                      
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
                      
                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {vehicle.pricePerKm && (
                          <div>
                            <div className="text-xs text-gray-500">Starting from</div>
                            <div className="text-lg font-bold text-navy">
                              ₹{vehicle.pricePerKm}/km
                            </div>
                          </div>
                        )}
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
