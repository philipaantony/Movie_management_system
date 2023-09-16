const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Set as unique
    phone: { type: String, required: true },
    dob: { type: String, required: true }, // Change this to Date if you want to store it as a Date type
});


const User = mongoose.model('User', userSchema);

module.exports = User;

