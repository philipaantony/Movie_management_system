const express = require('express');
const router = express.Router();
const SavedMovie = require('../../model/savedmovies');
const Movies = require('../../model/moviemodel');

// Route to get favorite movies for a user
router.get('/:userId', async (req, res) => {
    try {
        const user_id = req.params.userId;
        const favoriteMovies = await SavedMovie.find({ user_id });
        // const favoriteMovies = await SavedMovie.find({ user_id }).populate('movie_id');
        //console.log(favoriteMovies);
        const movieIds = favoriteMovies.map(movie => movie.movie_id);

        // Find movies from the Movies model where the movie_id is in the extracted list
        const movies = await Movies.find({ _id: { $in: movieIds } });

        res.status(200).json(movies);
    } catch (error) {
        console.error('Error getting favorite movies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.delete("/:userId/:movieId", async (req, res) => {
    try {
        const { userId, movieId } = req.params;
        console.log(userId);
        console.log(movieId);
        // Delete the movie from the SavedMovie collection based on user and movie ID
        const deletedMovie = await SavedMovie.findOneAndDelete({ user_id: userId, movie_id: movieId });

        if (!deletedMovie) {
            return res.status(404).json({ error: "Movie not found in user's favorites" });
        }

        res.status(200).json({ message: 'Movie removed successfully' });
    } catch (error) {
        console.error('Error removing movie:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router;
