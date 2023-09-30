const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    trid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    screenid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
