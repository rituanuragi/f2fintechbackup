const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "f2-website" directory
app.use(express.static(path.join(__dirname, 'f2fintechwebsite')));

// Serve static files from the "FLP WEBSITE" directory
app.use('/flpwebsite',express.static(path.join(__dirname, 'flpwebsite')));

// Define route to serve landing page
app.get('/flpwebsite', (req, res) => {
  res.sendFile(path.join(__dirname, 'flpwebsite', 'landingpage.html'));
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
