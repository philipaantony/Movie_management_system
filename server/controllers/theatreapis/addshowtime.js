const express = require("express");
const router = express.Router();
const ShowTimeModel = require("../../model/showtimemodel");

router.post("", async (req, res) => {
    try {
        const { trid, screenid, mytime } = req.body;
        console.log(trid);
        console.log(screenid);
        console.log(mytime);
        const newShowTime = new ShowTimeModel({
            trid: trid,
            screenid: screenid,
            time: mytime,
        });
        const postres = newShowTime.save();
        if (postres) {
            console.log("Data Saved");
            res.json({ message: "Time Slot Added" });
        } else {
            console.log("Failed to Post");
        }
    } catch (error) {
        console.error("Error to add time slot:", error);
        res.status(500).json({ error: "An error occurred during login" });
    }
});

module.exports = router;
