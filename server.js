const express = require('express');
const path = require('path');
const cors = require('cors'); 
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/cibilDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define routes
app.post('/check-doctor-cibil', async (req, res) => {
  try {
    // Assuming Doctor model has appropriate fields for name, mobile, and document_id
    const { name, mobile, document_id } = req.body;
    
    // Perform CIBIL check logic here
    // For demonstration, let's just return the received data
    res.json({ name, mobile, document_id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Serve static files from the "f2-website" directory
app.use(express.static(path.join(__dirname, 'f2fintechwebsite')));

// Serve static files from the "FLP WEBSITE" directory
app.use('/flpwebsite',express.static(path.join(__dirname, 'flpwebsite')));
app.use('/f2fintechcareer',express.static(path.join(__dirname, 'f2fintechcareer')));
app.use('/payscriptapi',express.static(path.join(__dirname, 'payscriptapi')));

// Define route to serve landing page
app.get('/flpwebsite', (req, res) => {
  res.sendFile(path.join(__dirname, 'flpwebsite', 'landingpage.html'));
});
app.get('/f2fintechcareer', (req, res) => {
  res.sendFile(path.join(__dirname, 'f2fintechcareer', 'index.html'));
});
app.get('/payscriptapi', (req, res) => {
  res.sendFile(path.join(__dirname, 'payscriptapi', 'index.html'));
});
// Define routes to serve individual HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'f2fintechwebsite', 'index.html'));
});



app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'f2fintechwebsite', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'f2fintechwebsite', 'contact.html'));
});


// You can add more routes for other HTML files if needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
