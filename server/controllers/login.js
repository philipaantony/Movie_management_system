const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Login = require('../model/loginmodel'); // Import your User model
const User = require('../model/usermodel');
const Theater = require('../model/theatermodel');

// Secret key for JWT token
const JWT_SECRET = 'your-secret-key'; // Replace with your secret key

router.post('', async (req, res) => {
    const { email, password } = req.body;
    try {
        let getusername = '';
        const existingLogin = await Login.findOne({ email });
        if (existingLogin) {
            const passwordMatch = await bcrypt.compare(password, existingLogin.password);
            if (passwordMatch) {
                if (existingLogin.usertype === "user") {
                    const user = await User.findOne({ email });
                    if (user) {
                        getusername = user.username; // Store the email in getusername
                    }
                }
                else if (existingLogin.usertype === "theater") {
                    const tr = await Theater.findOne({ theater_email: email });

                    if (tr) {
                        getusername = tr.theater_name;
                        console.log(getusername); // Store the email in getusername
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
                console.log('token:', token);
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
