const Admin = require('../models/Admin');

/**
 * Creates a default admin user if no admin exists
 * Default credentials: username: 'admin', password: 'admin123'
 * IMPORTANT: Change these credentials in production!
 */
const createDefaultAdmin = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    
    if (adminCount === 0) {
      const defaultAdmin = new Admin({
        username: 'admin',
        password: 'admin123', // Will be hashed automatically
        email: 'admin@mntravels.com',
      });

      await defaultAdmin.save();
      console.log('✅ Default admin created:');
      console.log('   Username: admin');
      console.log('   Password: admin123');
      console.log('   ⚠️  Please change these credentials in production!');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

module.exports = createDefaultAdmin;

