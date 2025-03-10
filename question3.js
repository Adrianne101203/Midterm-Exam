// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define the /test route
app.get('/test', (req, res) => {
  // Send a JSON response
  res.json({ message: 'Express is working! Write your full name' });
});

// Make the server listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
