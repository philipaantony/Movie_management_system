const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    trid: {
        type: String,
        required: true,
    },
    tremail: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    screentype: {
        type: String,
        required: true,
    },
    rows: {
        type: Number,
        required: true,
    },
    columns: {
        type: Number,
        required: true,
    },
    orientation: {
        type: String,
    },
    theatertype: {
        type: String,
        required: true,
    },


});

const TheaterScreen = mongoose.model('TheaterScreen', theaterSchema);

module.exports = TheaterScreen;
