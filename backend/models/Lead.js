const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
  },
  requirement: {
    type: String,
    required: [true, 'Requirement is required'],
    trim: true,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'closed'],
    default: 'new',
  },
  notes: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Index for faster queries
leadSchema.index({ createdAt: -1 });
leadSchema.index({ status: 1 });

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;

