const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    dob: String, // Change this to Date if you want to store it as a Date type
});

const User = mongoose.model('User', userSchema);

module.exports = User;
