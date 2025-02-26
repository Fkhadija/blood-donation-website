const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('pages/index');
});

// About Us Page
router.get('/about', (req, res) => {
  res.render('pages/about');
});

// Contact Us Page
router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

module.exports = router;