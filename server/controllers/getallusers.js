const express = require('express');
const router = express.Router();
const User = require('../model/usermodel'); // Import your User model


router.get('', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

module.exports = router;
