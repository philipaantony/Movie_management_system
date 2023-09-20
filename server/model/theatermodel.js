const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({

    theater_name: {
        type: String,
        required: true,
    },
    theater_owner: {
        type: String,
        required: true,
    },
    theater_location: {
        type: String,
        required: true,
    },
    theater_email: {
        type: String,
        required: true,
        unique: true,
    },
    theater_phone: {
        type: String,
        required: true,
    },


});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
