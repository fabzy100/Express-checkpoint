const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '/services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
