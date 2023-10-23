const express = require('express');
const router = express.Router();
const Showtime = require('../../model/showtimemodel'); // Import your Showtime model

// Delete a showtime by _id
router.delete('/:id', async (req, res) => {
    const showtimeId = req.params.id;

    try {
        const result = await Showtime.deleteOne({ _id: showtimeId });
        if (result.deletedCount === 1) {
            res.json({ message: 'Show Time Deleted successfully' });
        } else {
            res.status(404).json({ message: 'Showtime not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting showtime' });
    }
});

module.exports = router;
