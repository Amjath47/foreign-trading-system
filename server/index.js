const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve React frontend from client/build
app.use(express.static(path.join(__dirname, '../client/build')));

// API route (example)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Handle all other routes with React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
