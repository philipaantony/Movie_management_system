const express = require('express');
const router = express.Router();
const Booking = require('../../model/moviebookingmodel'); // Import your Mongoose Booking model

// Define a route for booking a movie
router.post('', async (req, res) => {
    try {
        const { user_id, movie_id, theater_id, screen_id, show_time_id, selectedSeats, date, orderId, paymentId, amount } = req.body;

        const bookingPromises = selectedSeats.map(async (seat) => {
            const newBooking = new Booking({
                user_id,
                movie_id,
                theater_id,
                screen_id,
                show_time_id,
                selectedSeats: seat, // Create an array with a single seat
                bookingdate: date,
                bookingstatus: 'success',
                amount: amount,
                paymentId: paymentId,
                razorpayOrderID: orderId
            });

            const savedBooking = await newBooking.save();
            return savedBooking.selectedSeats; // Return only selectedSeats
        });

        const savedSelectedSeats = await Promise.all(bookingPromises);
        const selectedSeatsString = savedSelectedSeats.join(',');
        res.status(201).json({ "BookedSeats": selectedSeatsString, status: true });
    } catch (error) {
        res.status(500).json({ error: 'Could not save booking.' });
    }
});

module.exports = router;
