const express = require('express');
const router = express.Router();
const User = require('../../model/usermodel');

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, dob, phone } = req.body;
    console.log(req.body);

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, dob, phone }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;

