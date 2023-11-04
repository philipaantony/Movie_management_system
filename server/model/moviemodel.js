const mongoose = require('mongoose');

// Define the schema for the Movie model
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    StreamingType: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    release_date: {
        type: Date,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    production: {
        type: String,
        required: true,
    },
    cast: {
        type: String,
        required: true,
    },
    poster_url: {
        type: String,
        required: true,
    },
    trailer_url: {
        type: String,
        required: true,
    },
});

const Movies = mongoose.model('movies', movieSchema);

module.exports = Movies;
