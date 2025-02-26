const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

router.get('/register', (req, res) => {
  res.render('pages/donor-register');
});

router.post('/register', async (req, res) => {
  const { name, bloodType, email, phone, location } = req.body;
  const newDonor = new Donor({ name, bloodType, email, phone, location });
  await newDonor.save();
  res.redirect('/');
});

router.get('/list', async (req, res) => {
    try {
      const donors = await Donor.find({});
      res.render('pages/donor-list', { donors });
    } catch (err) {
      res.status(500).send('Error fetching donors');
    }
  });
module.exports = router;