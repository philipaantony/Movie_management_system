const express = require('express');
const router = express.Router();
const SavedMovie = require('../../model/savedmovies'); // Adjust the path accordingly

router.post('', async (req, res) => {
    try {
        const { user_id, movie_id } = req.body;
        const existingSavedMovie = await SavedMovie.findOne({ user_id, movie_id });
        if (existingSavedMovie) {
            return res.status(200).json({ message: 'Movie already Saved' });
        }
        const savedMovie = new SavedMovie({
            user_id: user_id,
            movie_id: movie_id
        });
        const savedMovieResult = await savedMovie.save();

        res.status(200).json({ message: "Movie Saved Successfully" });
    } catch (error) {
        console.error('Error saving movie:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
