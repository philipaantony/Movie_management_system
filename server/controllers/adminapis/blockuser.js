const express = require('express');
const router = express.Router();
const Login = require('../../model/loginmodel'); // Import your MongoDB model
const nodemailer = require("nodemailer");
require("dotenv").config();

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
const emailService = process.env.EMAIL_SERVICE;

const transporter = nodemailer.createTransport({
    service: emailService, // e.g., 'Gmail', 'Yahoo', etc.
    auth: {
        user: emailUser,
        pass: emailPassword,
    },
});

const sendBlockEmail = async (toEmail, reason) => {
    const mailOptions = {
        from: emailUser,
        to: toEmail,
        subject: "Account Blocked by MovieVerse - Contact Administrator",
        text: `Hello MovieVerse User,
        We regret to inform you that your MovieVerse account has been blocked. If you believe this action is in error, have any questions, or need further assistance, please contact our administrator at admin@movieverse.com.
        
        Please provide your account details and any relevant information when reaching out to expedite the resolution process.
        Reason behind block is : ${reason}
        Thank you for your understanding and cooperation.
        Best regards,
        The MovieVerse Team`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Block email sent successfully");
        return true; // Return true to indicate success
    } catch (error) {
        console.error("Error sending block email:", error);
        return false; // Return false to indicate failure
    }
};


router.post('/:id', async (req, res) => {
    try {

        const id = req.params.id; // Get the _id from the route parameter
        const { email, status, reason } = req.body;
        console.log(email);
        console.log(status);
        const user = await Login.findByIdAndUpdate(id, { status: status });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        else {
            if (status === 'blocked') {
                const emailsend = await sendBlockEmail(email, reason);
            }
            return res.status(200).json({ message: 'Status Updated' });
        }

    } catch (error) {
        console.error('Error blocking user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
