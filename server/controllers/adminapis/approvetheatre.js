const express = require('express');
const router = express.Router();
const Login = require('../../model/loginmodel');
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

const sendOtpEmail = async (toEmail) => {
    const mailOptions = {
        from: emailUser,
        to: toEmail,
        subject: "Application Rejected - Contact Admin",
        text: `Hello MovieVerse User,
        We regret to inform you that your application to MovieVerse has been rejected. If you have any questions or would like to appeal this decision, please contact the administrator.
        Thank you for your interest in MovieVerse.
        Best regards,
        The MovieVerse Team`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Rejection mail Sended Succesfully");
        return true; // Return true to indicate success
    } catch (error) {
        console.error("Error sending Rejectiion  email:", error);
        return false; // Return false to indicate failure
    }


};


router.patch('', async (req, res) => {

    const { status, email } = req.body;
    try {
        const updatedLogin = await Login.findOneAndUpdate({ email }, { status }, { new: true });
        if (!updatedLogin) {
            return res.status(404).json({ message: 'Failed to Update' });
        }
        else {
            if (status === 'Rejected') {
                const emailsend = await sendOtpEmail(email);
            }
            return res.json({ message: 'Status Updated', status });
        }


    } catch (error) {
        console.error('Error updating theater status:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;