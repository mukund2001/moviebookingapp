const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/movie-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
