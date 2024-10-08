// server.js
// import express from 'express'
const express = require('express');
const app = express();
const port = 4000;

// Route for the Home Page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page of my website ');
});

// Route for the About Page
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Route for the Contact Page
app.get('/contact', (req, res) => {
  res.send('Contact us at: email@example.com');
});

// Dynamic Route for User ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Dynamic Route for Product Category and Product ID
app.get('/products/:category/:productId', (req, res) => {
  const category = req.params.category;
  const productId = req.params.productId;
  res.send(`Category: ${category}, Product ID: ${productId}`);
});

// 404 Error Handler for Unknown Routes
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
