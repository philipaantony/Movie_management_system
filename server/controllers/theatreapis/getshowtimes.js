const express = require('express');
const router = express.Router();
const ShowTimeModel = require("../../model/showtimemodel");


router.get('/:id', async (req, res) => {
    const screenid = req.params.id;
    console.log(screenid);

    try {
        const showtimes = await ShowTimeModel.find({ screenid: screenid }).select('time');
        console.log(showtimes);
        if (!showtimes || showtimes.length === 0) {
            return res.status(404).json({ error: "No showtimes found for the specified screenid" });
        }
        res.json(showtimes);
    } catch (err) {

    }
});

module.exports = router;
