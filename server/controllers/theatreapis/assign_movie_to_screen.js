const express = require('express');
const router = express.Router();
const Screening = require('../../model/screeningmodel'); // Import your Mongoose model
const Movies = require('../../model/moviemodel');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;



router.post('', async (req, res) => {
    const { showtimeId, movieId, screenId, theaterId } = req.body; // Assuming these properties are sent in the request body

    try {
        const newScreening = new Screening({
            time_id: showtimeId,
            movie_id: movieId,
            screen_id: screenId,
            theater_id: theaterId,
        });

        await newScreening.save();

        res.json({ message: 'Movie assigned successfully' });
    } catch (error) {
        if (error.code === 11000) {
            // Mongoose duplicate key error, indicating a duplicate screen_id
            res.json({ message: 'Movie Already Assigned.Remove movie first and reassign' });
        } else {
            console.error('Error assigning movie:', error);
            res.status(500).json({ error: 'Error assigning movie' });
        }
    }
});


// Server route for getting current movies based on screen_id
router.post('/current', async (req, res) => {
    const { screen_id } = req.body;

    try {
        const screenings = await Screening.find({ screen_id: screen_id }).select('movie_id time_id');
        console.log(screenings);
        const movieIds = screenings.map(screening => screening.movie_id);
        const movies = await Movies.find({ _id: { $in: movieIds } });

        const result = screenings.map(screening => {
            const movie = movies.find(movie => movie._id.equals(screening.movie_id));
            return {
                _id: screening._id,
                time_id: screening.time_id,
                title: movie ? movie.title : 'Unknown Title', // Replace with a default value if movie not found
                movie_id: movie._id
            };
        });
        console.log('------------------------------');
        console.log(result);
        console.log('------------------------------');
        res.json(result);
    } catch (error) {
        console.error("Error fetching movie names:", error);
        res.status(500).json({ error: 'Error fetching movie names' });
    }
});


router.delete('/delete/:showtimeId', async (req, res) => {
    const showtimeId = req.params.showtimeId;
    console.log(showtimeId);
    console.log("hai");
    try {


        const result = await Screening.deleteOne({ time_id: showtimeId });
        if (result) {
            res.json({ message: 'Assigned movie deleted successfully' });
        }
    } catch (error) {
        console.error('Error deleting assigned movie:', error);
        res.status(500).json({ error: 'Error deleting assigned movie' });
    }
});



module.exports = router;
