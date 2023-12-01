const express = require('express');
const router = express.Router();
const User = require('../model/usermodel'); // Import your User model
const Login = require('../model/loginmodel'); // Import your Login model

router.get('', async (req, res) => {
    console.log("hai")
    try {
        const users = await User.find();
        const usersWithStatus = await Promise.all(users.map(async (user) => {
            const loginInfo = await Login.findOne({ _id: user._id });
            if (loginInfo) {
                return { ...user._doc, status: loginInfo.status };
            }
            // If no matching Login entry is found, you can set status to 'unknown' or any other default value.
            return { ...user._doc, status: 'unknown' };
        }));
        res.json(usersWithStatus);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

module.exports = router;

