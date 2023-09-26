const express = require('express');
const router = express.Router();
const User = require('../model/usermodel');
const Login = require('../model/loginmodel');



router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {

        const result = await Promise.all([
            User.findByIdAndDelete(id),
            Login.findByIdAndDelete(id),
        ]);
        if (result) {
            res.status(200).json({ message: 'Documents deleted successfully' });
        }
        else {
            res.status(500).json({ error: 'An error occurred while deleting documents' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting documents' });
    }
});

module.exports = router;