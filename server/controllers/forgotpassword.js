const express = require("express");
const router = express.Router();
const User = require("../model/usermodel");
const nodemailer = require("nodemailer");
require("dotenv").config();
const crypto = require("crypto");
const Login = require("../model/loginmodel");
const bcrypt = require('bcrypt');


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

function generateRandomOTP() {
    const length = 4; // 4 digits
    const charset = "0123456789";

    let otp = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, charset.length);
        otp += charset.charAt(randomIndex);
    }

    return otp;
}

const sendOtpEmail = async (toEmail, otp) => {
    const mailOptions = {
        from: emailUser,
        to: toEmail,
        subject: "Password Reset OTP",
        text: `Hello MovieVerse User,
        We received a request to reset your password. Your One-Time Password (OTP) for the MovieVerse app is: ${otp}
        Please use this OTP to reset your password. This OTP is valid for a single use and will expire in 15 minutes.
        If you didn't request a password reset, please ignore this message.
        Enjoy your movie-watching experience with MovieVerse!
        Best regards,
        The MovieVerse Team`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("OTP email sent successfully");
        return true; // Return true to indicate success
    } catch (error) {
        console.error("Error sending OTP email:", error);
        return false; // Return false to indicate failure
    }
};

let otpStorage = new Map();



router.post("", async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email);
        const user = await User.findOne({ email: email });
        console.log(user);
        if (!user) {
            return res.status(200).json({ message: "User not found", status: false });
        }
        else if (user.dob === 'googleauth') {
            res.status(200).json({ message: "Your Account is Connected with Google. Please Login with your google account", status: false });
        }
        else {
            const otp = generateRandomOTP();

            const otpSentSuccessfully = await sendOtpEmail(email, otp);

            if (otpSentSuccessfully) {

                otpStorage.set("Otp_Generated", otp);
                res
                    .status(200)
                    .json({ message: "OTP sent successfully", status: true });
            } else {
                res.status(500).json({ error: "Failed to send OTP", status: false });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching users" });
    }
});

router.post("/verify", async (req, res) => {
    try {
        const { otp } = req.body;
        console.log("Received OTP :---", otp);

        const storedOTP = otpStorage.get("Otp_Generated");
        console.log("stored OTP :---", storedOTP);

        if (!storedOTP) {
            console.log("Invalid otp");
            res.status(200).json({ message: "Invalid OTP", status: false });
        } else if (otp === storedOTP) {
            console.log("Valid otp");
            res.status(200).json({ message: "OTP is valid", status: true });
        } else {
            console.log("Invalid otp");
            res.status(200).json({ message: "Invalid OTP", status: false });
        }
    } catch (err) {
        console.error("Error verifying OTP:", err);
        res.status(500).json({ error: "Error verifying OTP", status: false });
    }
});







router.patch('/reset-password', async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        console.log(newPassword);
        console.log(email);
        const user = await Login.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password reset successful. You can Login into your account using the new password' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Error resetting password' });
    }
});



module.exports = router;
