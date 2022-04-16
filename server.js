const express = require('express');
const path = require('path');
const axios = require('axios');

// initialise express app
const app = express();

// serve files from root
var cors = require('cors');
app.use(cors())

app.get('/promotion', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/YA3C');
  const categories = response.data;
  res.json(categories);
});

app.get('/user', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/TOOH');
  const categories = response.data;
  res.json(categories);
});

app.get('/categories', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/FKFM');
  const categories = response.data.categories;
  res.json(categories);
});

app.get('/menu-items', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/8L4D');
  const menuItems = response.data.menuItems;
  res.json(menuItems);
});

app.get('/cart', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/KLVQ');
  const cartInfo = response.data;
  res.json(cartInfo);
});

// serve html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start server
app.listen(8080);

// log if successful
console.log('Server started at http://localhost:8080');