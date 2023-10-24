const express = require('express');
const router = express.Router();
const ShowTimeModel = require('../../model/showtimemodel');
const TheaterScreenModel = require('../../model/threaterScreenModel');

router.get('/:id', async (req, res) => {
    const time_id = req.params.id;

    try {
        const showtime = await ShowTimeModel.findOne({ _id: time_id });

        if (showtime) {
            const screen_id = showtime.screenid;
            const screen = await TheaterScreenModel.findOne({ _id: screen_id });

            if (screen) {
                // If mytr is found, send it as a response
                res.status(200).json(screen);
            } else {
                // If mytr is not found, send a 404 response
                res.status(404).json({ message: 'TheaterScreen not found' });
            }
        } else {
            console.log('Showtime not found');
            res.status(404).json({ message: 'Showtime not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
