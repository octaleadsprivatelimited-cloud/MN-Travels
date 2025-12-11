const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Vehicle name is required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Vehicle type is required'],
    enum: ['sedan', 'suv', 'tempo', 'urbania', 'minibus', 'premium', 'luxury'],
    trim: true,
  },
  capacity: {
    type: String,
    required: [true, 'Capacity is required'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  features: [{
    type: String,
    trim: true,
  }],
  image: {
    type: String,
    trim: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  pricePerKm: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Index for filtering
vehicleSchema.index({ type: 1 });
vehicleSchema.index({ isAvailable: 1 });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;

