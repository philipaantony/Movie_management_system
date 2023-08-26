const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');


const threaterScreenModel = require('../server/model/threaterScreenModel');
const Theater = require('../server/model/theatermodel');
const Movies = require('../server/model/moviemodel');
const User = require("./model/usermodel");
const Login = require("./model/loginmodel");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/MovieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/movie_poster/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

//----------------------------------------------------------------------------------


app.post('/api/addmovies', upload.single('poster_url'), async (req, res) => {
    try {
        const { title, genre, duration, release_date, language, description, director, production, cast, trailer_url, } = req.body;
        const filename = req.file ? req.file.path : '';
        const poster_url = path.basename(filename);
        const newMovie = new Movies({ title, genre, duration, release_date, language, description, director, production, cast, poster_url, trailer_url, });
        const result = await newMovie.save();
        if (result) {
            res.status(201).json({ message: 'Movie added successfully' });
        }

    } catch (error) {
        console.error('Error creating movie:', error);
        res.json({ message: "Opertaion Failed" });
    }
}
);


//------------------------------------------------------------------------------------


app.get('/api/getmovies', async (req, res) => {
    try {
        const movies = await Movies.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
});

//----------------------------------------------------------------------------------------


app.post('/api/register', async (req, res) => {
    try {
        const { username, email, phone, dob, password } = req.body;
        const user = new User({ username, email, phone, dob });
        const status = await user.save();
        if (status) {

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newLogin = new Login({
                email,
                password: hashedPassword,
                usertype: "user",
            });
            const status2 = await newLogin.save();

            if (status2) {
                console.log('User registered:', newLogin);
                res.status(201).json({ message: 'Registration Successful' });
            }
        }

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

})

//--------------------------------------------------------------------------------



app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingLogin = await Login.findOne({ email });
        if (existingLogin) {
            const passwordMatch = await bcrypt.compare(password, existingLogin.password);
            if (passwordMatch) {
                console.log('Login successful:', existingLogin);
                res.json({ message: 'userexist' });
            } else {
                console.log('Invalid credentials');
                res.json({ message: 'no_user' });
            }
        } else {
            console.log('Invalid credentials');
            res.json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});



//----------------------------------------------------------------------------

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


//-----------------------------------------------------------------------------
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


//-------------------------------------------------------------------------------

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

//=======================================================================================

app.listen(5000, () => {
    console.log("server running on port 5000");
});