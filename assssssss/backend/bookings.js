const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const { user, movie, seats, showtime, total } = req.body;
    const booking = new Booking({ user, movie, seats, showtime, total });
    await booking.save();
    res.status(201).send('Booking created successfully');
  } catch (error) {
    res.status(400).send('Error creating booking');
  }
});

// Get all bookings (Admin only)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('movie');
    res.json(bookings);
  } catch (error) {
    res.status(500).send('Error fetching bookings');
  }
});

module.exports = router;
