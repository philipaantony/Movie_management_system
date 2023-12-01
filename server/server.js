const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT
const mongodbUrl = process.env.MONGODB_URL;



const TheaterScreen = require('../server/model/threaterScreenModel');
const Movies = require('../server/model/moviemodel');
const Login = require("./model/loginmodel");

const Theater = require("./model/theatermodel");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const getalluser = require('./controllers/getallusers');
const getallmovies = require('./controllers/getallmovies');
const logincontroller = require('./controllers/login');
const UserReg = require('./controllers/userregistrartion');
const TheaterReg = require('./controllers/theaterregistration');
const AddShowTime = require('./controllers/theatreapis/addshowtime');
const getShowTime = require('./controllers/theatreapis/getshowtimes');
const forgotpassword = require('./controllers/forgotpassword');
const deleteshowtime = require('./controllers/theatreapis/deleteshowtime');
const assignmovietoscreen = require('./controllers/theatreapis/assign_movie_to_screen');
const usergetshow = require('./controllers/userapis/usergetshow')
const gettr = require('./controllers/userapis/usergettheatre');
const userbookmovies = require('./controllers/userapis/userbookmovies');
const fetchbookedseats = require('./controllers/userapis/fetchbookedseats');
const blockuser = require('./controllers/adminapis/blockuser');
const approvetheaters = require('./controllers/adminapis/approvetheatre');
const savemovies = require('./controllers/userapis/savemovies');
const favmovieslist = require('./controllers/userapis/getfavmovies');
const fetchmyprofile = require('./controllers/userapis/fetchuserdetails');
const getmytickets = require('./controllers/userapis/getuserbookings');
const payment = require('./controllers/userapis/payment');
const updateuserprofile = require('./controllers/userapis/user_update_profile');
const bookingstatictis = require('./controllers/theatreapis/getstatistics');


app.use("/api/userprofile", updateuserprofile);
app.use("/api/getTicketDetails", getmytickets);
app.use("/payment", payment);
app.use('/api/payment', payment);
app.use('/api/block-user', blockuser);
app.use('/api/getalluser', getalluser)
//------------------------------------------
app.use('/api/getmovies', getallmovies);
app.use('/api/update-movie-streaming-type', getallmovies);
//------------------------------------------
app.use('/api/login', logincontroller);
app.use('/api/register', UserReg);
app.use('/api/theaterreg', TheaterReg);
app.use('/api/assignmovie', assignmovietoscreen);
app.use('/api/getmytheatre-user', gettr)

app.use('/api/getshowtime-user', usergetshow);
app.use('/api/approvetheaters', approvetheaters)
app.use('/api/deleteshowtime', deleteshowtime);
app.use('/api/postshowtime', AddShowTime);
app.use('/api/getshowtime', getShowTime);
app.use('/api/forgotpassword', forgotpassword);
app.use('/api/moviebookings', userbookmovies);
app.use('/api//save-movie', savemovies);
app.use('/api/fetchbookedseats', fetchbookedseats);
app.use('/api/getfavmovies', favmovieslist);
app.use('/api/getfavmovies', favmovieslist);
app.use('/api/user', fetchmyprofile);

app.use('/api/statistics', bookingstatictis);


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
        const { title, StreamingType, genre, duration, release_date, language, description, director, production, cast, trailer_url, } = req.body;
        const filename = req.file ? req.file.path : '';
        const poster_url = path.basename(filename);

        const newMovie = new Movies({ title, StreamingType, genre, duration, release_date, language, description, director, production, cast, poster_url, trailer_url, });
        const result = await newMovie.save();
        if (result) {
            console.log("succccccccccccccccccccccccccces");
            res.status(201).json({ message: 'Movie added successfully' });
        }

    } catch (error) {
        console.error('Error creating movie:', error);
        res.json({ message: "Opertaion Failed" });
    }
}
);


app.patch('/api/update/:movieId', upload.single('poster_url'), async (req, res) => {
    try {
        const { title, StreamingType, genre, duration, release_date, language, description, director, production, cast, trailer_url } = req.body;
        const filename = req.file ? req.file.path : '';
        const poster_url = path.basename(filename);

        // Get the movie ID from the route parameter
        const { movieId } = req.params;

        // Create an object to store the non-null fields
        const updatedFields = {
            ...(title && { title }),
            ...(StreamingType && { StreamingType }),
            ...(genre && { genre }),
            ...(duration && { duration }),
            ...(release_date && { release_date }),
            ...(language && { language }),
            ...(description && { description }),
            ...(director && { director }),
            ...(production && { production }),
            ...(cast && { cast }),
            ...(poster_url && { poster_url }),
            ...(trailer_url && { trailer_url }),
        };

        // Find the movie by ID and update its details with the non-null fields
        const movie = await Movies.findByIdAndUpdate(movieId, updatedFields);

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json({ message: 'Movie updated successfully' });
    } catch (error) {
        console.error('Error updating movie:', error);
        res.status(500).json({ message: 'Operation Failed' });
    }
});

app.delete('/api/movies/:movieId', async (req, res) => {
    try {
        const { movieId } = req.params;
        console.log(movieId);
        const movie = await Movies.findByIdAndRemove(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        else {
            console.log("deleted....")
            res.status(200).json({ message: 'Movie deleted successfully' });
        }


    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ message: 'Operation Failed' });
    }
});




app.get("/api/movies/:movieId", async (req, res) => {
    const { movieId } = req.params;
    console.log(movieId);

    try {
        const currentmovie = await Movies.find({ _id: movieId });
        // console.log(currentmovie)
        res.json(currentmovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
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
        console.log(theaters);
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

app.listen(port, () => {
    console.log("server running on port 5000");
});