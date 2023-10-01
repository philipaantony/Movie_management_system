const express = require('express');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Login = require('../model/loginmodel'); // Import your User model
const User = require('../model/usermodel');
const Theater = require('../model/theatermodel');

// Load the secret key from an environment variable
const JWT_SECRET = process.env.JWT_SECRET;
// Replace with your secret key

router.post('', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingLogin = await Login.findOne({ email });
        if (existingLogin) {
            const passwordMatch = await bcrypt.compare(password, existingLogin.password);
            if (passwordMatch) {
                let getusername = '';

                if (existingLogin.usertype === "user") {
                    const user = await User.findOne({ email });
                    if (user) {
                        getusername = user.username; // Store the username in getusername
                    }
                } else if (existingLogin.usertype === "theater") {
                    const theater = await Theater.findOne({ theater_email: email });
                    if (theater) {
                        getusername = theater.theater_name; // Store the theater name in getusername
                    }
                }

                const tokenPayload = {
                    userId: existingLogin._id,
                    email: existingLogin.email,
                    username: getusername,
                    usertype: existingLogin.usertype,
                    status: existingLogin.status,
                };

                const token = jwt.sign(tokenPayload, JWT_SECRET, {
                    expiresIn: '1h',
                });

                console.log('Login successful:', existingLogin);
                res.json({ message: 'userexist', token });
            } else {
                console.log('Invalid credentials');
                res.json({ message: 'no_user' });
            }
        } else {
            console.log('Invalid credentials');
            res.json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});

module.exports = router;
