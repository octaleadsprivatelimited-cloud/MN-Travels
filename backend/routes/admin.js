const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const Admin = require('../models/Admin');
const Lead = require('../models/Lead');
const Vehicle = require('../models/Vehicle');
const authenticate = require('../middleware/auth');

// @route   POST /api/admin/login
// @desc    Admin login
// @access  Public
router.post(
  '/login',
  [
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array(),
        });
      }

      const { username, password } = req.body;

      // Find admin by username
      const admin = await Admin.findOne({ username: username.toLowerCase() });
      
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Invalid credentials',
        });
      }

      // Check password
      const isMatch = await admin.comparePassword(password);
      
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid credentials',
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: admin._id, username: admin.username },
        process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
        { expiresIn: '7d' }
      );

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          token,
          admin: {
            id: admin._id,
            username: admin.username,
            email: admin.email,
          },
        },
      });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({
        success: false,
        message: 'Login failed. Please try again.',
      });
    }
  }
);

// @route   GET /api/admin/dashboard
// @desc    Get dashboard statistics (Admin only)
// @access  Private
router.get('/dashboard', authenticate, async (req, res) => {
  try {
    // Get statistics
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'new' });
    const contactedLeads = await Lead.countDocuments({ status: 'contacted' });
    const totalVehicles = await Vehicle.countDocuments();

    // Get recent leads
    const recentLeads = await Lead.find()
      .sort({ createdAt: -1 })
      .limit(10);

    // Get leads by status
    const leadsByStatus = await Lead.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      success: true,
      data: {
        statistics: {
          totalLeads,
          newLeads,
          contactedLeads,
          totalVehicles,
        },
        recentLeads,
        leadsByStatus,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data',
    });
  }
});

// @route   GET /api/admin/me
// @desc    Get current admin info
// @access  Private
router.get('/me', authenticate, async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        id: req.admin._id,
        username: req.admin.username,
        email: req.admin.email,
      },
    });
  } catch (error) {
    console.error('Error fetching admin info:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch admin info',
    });
  }
});

module.exports = router;

