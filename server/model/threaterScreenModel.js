const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    theaterid: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    screentype: {
        type: String,
        required: true
    },
    rows: {
        type: Number,
        required: true
    },
    columns: {
        type: Number,
        required: true
    },
    orientation: {
        type: String,

    }
});

const Theater = mongoose.model('TheaterScreen', theaterSchema);

module.exports = Theater;
