const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');


const TheaterScreen = require('../server/model/threaterScreenModel');
const Movies = require('../server/model/moviemodel');
const Login = require("./model/loginmodel");
const User = require("./model/usermodel");
const Theater = require("./model/theatermodel");




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
        const usersaved = await user.save();
        if (usersaved) {

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newLogin = new Login({
                _id: usersaved._id,
                email,
                password: hashedPassword,
                usertype: "user",
                status: "Authorised"
            });
            const status2 = await newLogin.save();

            if (status2) {
                console.log('User registered:', newLogin);
                res.status(201).json({ message: 'Registration Successful' });
            }
        }

    }
    catch (error) {

        if (error.code === 11000) {
            console.log("---------------------------------")
            console.log("Email Duplication")
            console.log("---------------------------------")
            res.json({ message: "User Already Exist" });
        } else {
            console.error(error);
            console.log("Server error")
            res.status(500).json({ message: 'Server error' });
        }
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
                res.json({ message: 'userexist', existingLogin });
            } else {
                console.log('Invalid credentials');
                res.json({ message: 'no_user' });
            }
        } else {
            const existingLogin = {
                usertype: 'nouser',
                status: 'Not-Authorised',
            };
            console.log('Invalid credentials');
            res.json({ message: 'Invalid credentials', existingLogin });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});



//----------------------------------------------------------------------------

app.post('/api/theaterreg', async (req, res) => {
    try {
        const { name, owner, location, email, phone, password, cpassword } = req.body;
        const status = "Pending";
        const newTheater = new Theater(
            {
                theater_name: name,
                theater_owner: owner,
                theater_location: location,
                theater_email: email,
                theater_phone: phone,

            }
        )
        const savedTheater = await newTheater.save();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newLogin = new Login({
            _id: savedTheater._id,
            email,
            password: hashedPassword,
            usertype: "theater",
            status: "Pending"
        });
        const logdata = await newLogin.save();
        if (savedTheater && logdata) {
            res.status(201).json({ message: 'Registration Successful', savedTheater });
        }
    } catch (error) {
        if (error.code === 11000) {
            console.log("---------------------------------")
            console.log("Email Duplication")
            console.log("---------------------------------")
            res.json({ message: "You Already Registered" });
        }
        else {
            console.error(error);
            console.log("Server error")
            res.status(500).json({ message: 'Server error' });
        }

    }
});


app.patch('/api/approvetheaters', async (req, res) => {

    const { status, email } = req.body;
    try {
        const updatedLogin = await Login.findOneAndUpdate({ email }, { status }, { new: true });
        if (!updatedLogin) {
            return res.status(404).json({ message: 'Failed to Update' });
        }

        return res.json({ message: 'Status Updated', status });
    } catch (error) {
        console.error('Error updating theater status:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});






//-----------------------------------------------------------------------------
app.get('/api/theaters', async (req, res) => {
    const email = req.query.theater_email;
    try {
        const theaters = await Theater.find({ theater_email: email });
        console.log(theaters);
        res.status(200).json(theaters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
//------------------------------------------------------------------------------
app.get('/api/theaterlogin', async (req, res) => {

    try {
        const theaters = await Login.find({ usertype: 'theater' });
        res.status(200).json(theaters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



//----------------adding screen------------------------------------------------
app.post('/api/addnewscreen', async (req, res) => {
    try {
        const { columns, name, orientation, rows, screenType, theatertype, tremail, trid } = req.body;

        // Create a new Theater document based on the request data
        const newTheater = new TheaterScreen({
            trid,
            tremail,
            name,
            screentype: screenType, // Assuming you want to map screenType to screentype
            rows,
            columns,
            orientation,
            theatertype,
        });
        const savedTheater = await newTheater.save();
        res.status(201).json({ message: 'New theater screen added successfully', theater: savedTheater });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
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

//========================get user for admin ===============================================================


app.get('/api/getalluser', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});


app.get('/api/getscreenbyid', async (req, res) => {
    try {
        let screenId = req.query.trid
        console.log("------------");
        console.log(screenId);
        console.log("------------");
        const theaterScreen = await TheaterScreen.find({ trid: screenId });
        console.log(theaterScreen)
        if (!theaterScreen) {
            return res.status(404).json({ message: 'Theater screen not found' });
        }


        res.status(200).json({ theaterScreen });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});








//=======================================================================================

app.listen(5000, () => {
    console.log("server running on port 5000");
});