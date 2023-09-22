const express = require('express');
const router = express.Router();
const Movies = require('../model/moviemodel'); // Import your User model



router.get('', async (req, res) => {
    try {
        const movies = await Movies.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
});

module.exports = router;