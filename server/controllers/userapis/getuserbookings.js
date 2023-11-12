const express = require('express');
const router = express.Router();
const Booking = require('../../model/moviebookingmodel');
const Movies = require('../../model/moviemodel');
const ShowTimeModel = require('../../model/showtimemodel');
const Theater = require('../../model/theatermodel');
const TheaterScreenModel = require('../../model/threaterScreenModel');

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    console.log("user id is:", userId);

    try {
        // Fetch bookings for the user, sorted by the bookingdate in descending order
        const bookings = await Booking.find({ user_id: userId }).sort({ _id: -1 });

        // Check if there are any bookings
        if (bookings.length > 0) {
            // Extract movie_id values from bookings
            const movieIds = bookings.map(booking => booking.movie_id);
            const screenIds = bookings.map(booking => booking.screen_id);
            const theaterIds = bookings.map(booking => booking.theater_id);
            const showTimeIds = bookings.map(booking => booking.show_time_id);

            // Fetch movies based on movieIds
            const movies = await Movies.find({ _id: { $in: movieIds } });

            // Fetch screens based on screenIds
            const screens = await TheaterScreenModel.find({ _id: { $in: screenIds } });

            // Fetch theaters based on theaterIds
            const theaters = await Theater.find({ _id: { $in: theaterIds } });

            // Fetch showtimes based on showTimeIds
            const showtimes = await ShowTimeModel.find({ _id: { $in: showTimeIds } });

            // Create maps for quick access to screen, theater, and showtime details using IDs
            const screenMap = screens.reduce((acc, screen) => {
                acc[screen._id.toString()] = screen;
                return acc;
            }, {});

            const theaterMap = theaters.reduce((acc, theater) => {
                acc[theater._id.toString()] = theater;
                return acc;
            }, {});

            const showtimeMap = showtimes.reduce((acc, showtime) => {
                acc[showtime._id.toString()] = showtime;
                return acc;
            }, {});

            // Append movie titles, screen name, theater name, and time to the bookings array
            const bookingsWithDetails = bookings.map(booking => {
                const movie = movies.find(movie => movie._id.equals(booking.movie_id));
                const screen = screenMap[booking.screen_id.toString()];
                const theater = theaterMap[booking.theater_id.toString()];
                const showtime = showtimeMap[booking.show_time_id.toString()];
                return {
                    ...booking._doc,
                    time: showtime ? showtime.time : 'Unknown Time',
                    theater_name: theater ? theater.theater_name : 'Unknown Theater',
                    screen_name: screen ? screen.name : 'Unknown Screen',
                    poster_url: movie ? movie.poster_url : 'Unknown posterurl',
                    title: movie ? movie.title : 'Unknown Title',
                };
            });

            //console.log(bookingsWithDetails);
            res.json(bookingsWithDetails);

        } else {
            console.log("No bookings found");
            res.json(bookings);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
