const mongoose = require('mongoose');

// Define the schema for the saved movies
const savedMovieSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        required: true,
    }
});

// Create the Mongoose model
const SavedMovie = mongoose.model('SavedMovie', savedMovieSchema);

// Export the model for use in other files
module.exports = SavedMovie;
