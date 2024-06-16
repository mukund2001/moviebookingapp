const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  showtime: { type: String, required: true }
});

module.exports = mongoose.model('Seat', seatSchema);
