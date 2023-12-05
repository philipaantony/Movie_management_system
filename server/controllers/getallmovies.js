const express = require('express');
const router = express.Router();
const Movies = require('../model/moviemodel'); // Import your User model



router.get('', async (req, res) => {
    try {
        const movies = await Movies.find().sort({ _id: -1 });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { newStreamingType } = req.body;
        const updatedMovie = await Movies.findByIdAndUpdate(
            id,
            { StreamingType: newStreamingType },
            { new: true } // This ensures that the updated movie is returned
        );
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie updated successfully', movie: updatedMovie });
    } catch (error) {
        console.error('Error updating movie:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;