const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');

router.get('/request', (req, res) => {
  res.render('pages/hospital-request');
});

router.post('/request', async (req, res) => {
  const { name, location, bloodTypeNeeded, contact } = req.body;
  const newHospital = new Hospital({ name, location, bloodTypeNeeded, contact });
  await newHospital.save();
  res.redirect('/');
});
router.get('/list', async (req, res) => {
    try {
      const requests = await Hospital.find({});
      res.render('pages/hospital-list', { requests });
    } catch (err) {
      res.status(500).send('Error fetching requests');
    }
  });

module.exports = router;