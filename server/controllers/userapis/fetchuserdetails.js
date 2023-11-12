
const express = require('express');
const router = express.Router();
const User = require('../../model/usermodel'); // Replace with the actual path to your user model

router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(userId);
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
