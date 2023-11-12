require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const router = express.Router();

router.post("/orders", async (req, res) => {
    console.log("order api ");
    const { totalPrice } = req.body;
    console.log("Total amount to be paid:", totalPrice);
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: totalPrice * 100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) {
            return res.status(500).send("Some error occurred");
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || "Internal Server Error");
    }
});

router.post("/success", async (req, res) => {
    console.log("success api ");
    try {
        // getting the details back from our front-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        // Replace the hardcoded secret with your actual secret key
        const secret = process.env.KEY_SECRET;

        // Creating our own digest
        const shasum = crypto.createHmac("sha256", secret);

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // comparing our digest with the actual signature
        if (digest !== razorpaySignature) {
            return res.status(400).json({ msg: "Transaction not legit!" });
        } else {
            console.log("Failed...");
        }

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || "Internal Server Error");
    }
});

module.exports = router;
