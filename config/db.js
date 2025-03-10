const { Sequelize } = require('sequelize');

// Create a new Sequelize instance to connect to your MySQL database
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',  // Use your MySQL host if it's different
  dialect: 'mysql',
  logging: false,  // Disable logging in production
});

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
