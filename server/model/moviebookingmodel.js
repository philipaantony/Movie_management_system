const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'movies',
    },
    theater_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'theaters',
    },
    screen_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'theaterscreens',
    },
    show_time_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'showtimes',
    },
    selectedSeats: {
        type: String,
        required: true,
    },
    bookingdate: {
        type: Date,
        required: true,
    },
    bookingstatus: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    razorpayOrderID: { // Add this field to store Razorpay order ID
        type: String,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
