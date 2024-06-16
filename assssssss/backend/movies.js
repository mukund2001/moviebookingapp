const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).send('Error fetching movies');
  }
});

// Add a new movie (Admin only)
router.post('/', async (req, res) => {
  try {
    const { title, genre, showtimes } = req.body;
    const movie = new Movie({ title, genre, showtimes });
    await movie.save();
    res.status(201).send('Movie added successfully');
  } catch (error) {
    res.status(400).send('Error adding movie');
  }
});

module.exports = router;
