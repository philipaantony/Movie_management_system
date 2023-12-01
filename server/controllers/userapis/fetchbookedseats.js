const express = require('express');
const router = express.Router();
const Booking = require('../../model/moviebookingmodel'); // Import your Mongoose Booking model

// Define a route for fetching booked seats
router.get('', async (req, res) => {
    try {
        const { theater_id, screen_id, show_time_id, date, movie_id } = req.query;

        // Use Mongoose to find bookings matching the provided parameters
        const bookings = await Booking.find({
            movie_id,
            theater_id,
            screen_id,
            show_time_id,
            bookingdate: new Date(date),
        });

        // Extract selectedSeats from the bookings and flatten them into a single array
        const allSelectedSeats = bookings.flatMap(booking => booking.selectedSeats);

        // Convert the array to a comma-separated string
        const BookedSeats = allSelectedSeats.join(',');
        console.log(BookedSeats);
        res.status(200).json({ BookedSeats: BookedSeats });
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch booked seats.' });
    }
});

module.exports = router;
