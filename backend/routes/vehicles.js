const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const authenticate = require('../middleware/auth');

// @route   GET /api/vehicles
// @desc    Get all vehicles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { type, available } = req.query;
    
    const query = {};
    if (type) {
      query.type = type;
    }
    if (available !== undefined) {
      query.isAvailable = available === 'true';
    }

    const vehicles = await Vehicle.find(query).sort({ capacity: 1 });

    res.json({
      success: true,
      data: vehicles,
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch vehicles',
    });
  }
});

// @route   GET /api/vehicles/:id
// @desc    Get a single vehicle
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found',
      });
    }

    res.json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch vehicle',
    });
  }
});

// @route   POST /api/vehicles
// @desc    Create a new vehicle (Admin only)
// @access  Private
router.post('/', authenticate, async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();

    res.status(201).json({
      success: true,
      message: 'Vehicle created successfully',
      data: vehicle,
    });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create vehicle',
    });
  }
});

// @route   PATCH /api/vehicles/:id
// @desc    Update a vehicle (Admin only)
// @access  Private
router.patch('/:id', authenticate, async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found',
      });
    }

    res.json({
      success: true,
      message: 'Vehicle updated successfully',
      data: vehicle,
    });
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update vehicle',
    });
  }
});

// @route   DELETE /api/vehicles/:id
// @desc    Delete a vehicle (Admin only)
// @access  Private
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found',
      });
    }

    res.json({
      success: true,
      message: 'Vehicle deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete vehicle',
    });
  }
});

module.exports = router;

