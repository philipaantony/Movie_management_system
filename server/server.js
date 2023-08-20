const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const threaterScreenModel = require('../server/model/threaterScreenModel');
const Theater = require('../server/model/theatermodel');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/MovieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });



app.post('/api/addnewtheater', async (req, res) => {
    try {
        const { name, owner, location } = req.body;
        const theater = new Theater({ name, owner, location });
        await theater.save();
        res.status(201).json({ message: 'Theater added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/theaters', async (req, res) => {
    try {
        const theaters = await Theater.find();
        res.status(200).json(theaters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

//----------------adding screen------------------------------------------------
app.post('/api/addnewscreen', async (req, res) => {
    const { theaterid, type, screentype, rows, columns, orientation } = req.body;
    try {
        const NewScreen = threaterScreenModel({ theaterid, type, screentype, rows, columns, orientation });
        await NewScreen.save().then((data) => {
            console.log(data)
            res.json({ Status: "S" });
        })
    }
    catch (err) {
        console.error(err);
        res.json({ Status: "F" });
    }
});

app.get('/api/getscreen', async (req, res) => {
    try {
        const theaterid = req.query.id;
        console.log(theaterid);
        const screens = await threaterScreenModel.find({ "theaterid": theaterid });
        res.json(screens);
        console.log(screens);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
})



app.listen(5000, () => {
    console.log("server running on port 5000");
});