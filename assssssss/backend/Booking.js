const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  seats: [{ type: String, required: true }],
  showtime: { type: String, required: true },
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
