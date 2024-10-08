// server.js

const express = require('express');
const app = express();
const port = 3000;

// Route for the Home Page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page of Trishul');

});

// Route for the About Page
app.get('/about', (req, res) => {
  res.send('This is the About Page here you will get all about me');
});

// Route for the Contact Page
app.get('/contact', (req, res) => {
  res.send('Contact me at: email@example.com');
});

// 404 Error Handler for Unknown Routes
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
