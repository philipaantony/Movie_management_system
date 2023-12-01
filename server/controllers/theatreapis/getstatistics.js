const express = require('express');
const router = express.Router();
const Booking = require('../../model/moviebookingmodel');

router.get('', async (req, res) => {
    try {
        // Extract theater_id and screen_id from the query parameters

        const { theater_id, screen_id } = req.query;



        // Check if both theater_id and screen_id are provided
        if (!theater_id || !screen_id) {
            return res.status(400).json({ error: 'Both theater_id and screen_id are required in the query parameters' });
        }

        // Assuming you have a method in your model to find distinct booking dates by theater_id and screen_id
        const bookingDates = await Booking.find({ theater_id, screen_id }).distinct('bookingdate');

        // Initialize an object to store counts for each date
        const bookingCountsByDate = {};

        // Loop through each booking date and find the count
        for (const date of bookingDates) {
            const bookingsCount = await Booking.countDocuments({ theater_id, screen_id, bookingdate: date });
            bookingCountsByDate[date] = bookingsCount;
        }

        // Console log the counts by date
        console.log(bookingCountsByDate);

        // Send the counts by date as a response if needed
        res.status(200).json({ bookingCountsByDate });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
