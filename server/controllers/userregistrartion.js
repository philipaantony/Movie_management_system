const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Login = require('../model/loginmodel');
const User = require('../model/usermodel'); // Import your User model


router.post('', async (req, res) => {
    try {
        const { username, email, phone, dob, password } = req.body;
        console.log(username);
        console.log(email);
        console.log(phone);
        console.log(dob);
        console.log(password);
        const user = new User({ username, email, phone, dob });
        const usersaved = await user.save();
        if (usersaved) {

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newLogin = new Login({
                _id: usersaved._id,
                email,
                password: hashedPassword,
                usertype: "user",
                status: "Authorised"
            });
            const status2 = await newLogin.save();

            if (status2) {
                console.log('User registered:', newLogin);
                res.status(201).json({ message: 'Registration Successful' });
            }
        }

    }
    catch (error) {

        if (error.code === 11000) {
            console.log("---------------------------------")
            console.log("Email Duplication")
            console.log("---------------------------------")
            res.json({ message: "User Already Exist" });
        } else {
            console.error(error);
            console.log("Server error")
            res.status(500).json({ message: 'Server error' });
        }
    }

})



module.exports = router;