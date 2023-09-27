const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Theater = require('../model/theatermodel'); // Import your User model
const Login = require('../model/loginmodel');


router.post('', async (req, res) => {
    try {
        const { name, owner, location, email, phone, password, cpassword } = req.body;
        const status = "Pending";
        const newTheater = new Theater(
            {
                theater_name: name,
                theater_owner: owner,
                theater_location: location,
                theater_email: email,
                theater_phone: phone,

            }
        )
        const savedTheater = await newTheater.save();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newLogin = new Login({
            _id: savedTheater._id,
            email,
            password: hashedPassword,
            usertype: "theater",
            status: "Pending"
        });
        const logdata = await newLogin.save();
        if (savedTheater && logdata) {
            res.status(201).json({ message: 'Registration Successful', savedTheater, navigation: true });
        }
    } catch (error) {
        if (error.code === 11000) {
            console.log("---------------------------------")
            console.log("Email Duplication")
            console.log("---------------------------------")
            res.json({ message: "You Already Registered", navigation: false });
        }
        else {
            console.error(error);
            console.log("Server error")
            res.status(500).json({ message: 'Server error' });
        }

    }
});

module.exports = router;
