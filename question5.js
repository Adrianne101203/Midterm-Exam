const express = require('express');
const User = require('./models/User'); // Import User model

const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Sync Sequelize models with the database
User.sync().then(() => {
  console.log('User model synchronized with the database.');
});

// Define the /users route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
