const mongoose = require('mongoose');

const screeningSchema = new mongoose.Schema({
    time_id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'showtimes',
    },
    theater_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'theaters',
    },
    screen_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'theaterscreens',
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, // Make movie_id required
        ref: 'movies', // Reference the 'movies' collection
    },
});

const Screening = mongoose.model('movie_screening', screeningSchema);

module.exports = Screening;
