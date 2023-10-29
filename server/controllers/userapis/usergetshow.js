const express = require('express');
const router = express.Router();
const ShowTimeModel = require('../../model/showtimemodel');
const Theater = require('../../model/theatermodel'); // Import the Theater model
const TheaterScreen = require('../../model/threaterScreenModel'); // Import the TheaterScreen model
const ScreeningModel = require('../../model/screeningmodel');


router.get('/:id', async (req, res) => {
    const movie_id = req.params.id;
    console.log(movie_id);

    try {
        const screeningtheatre = await ScreeningModel.find({ movie_id: movie_id });
        console.log('-------------------------------');
        console.log(screeningtheatre);
        console.log('-------------------------------');

        if (screeningtheatre) {
            const showtimesWithTheaterNames = [];

            for (const screening of screeningtheatre) {
                const theater = await Theater.findById(screening.theater_id);

                if (theater) {
                    const theaterScreen = await TheaterScreen.findById(screening.screen_id);

                    if (theaterScreen) {
                        const showtime = await ShowTimeModel.findById(screening.time_id);

                        if (showtime) {
                            showtimesWithTheaterNames.push({
                                theater_id: theater._id,
                                theater_name: theater.theater_name,
                                theater_phone: theater.theater_phone,
                                theater_location: theater.theater_location,
                                screen_name: theaterScreen.name,
                                screen_id: theaterScreen._id,
                                screentype: theaterScreen.screentype,
                                theatertype: theaterScreen.theatertype,
                                time: showtime.time,
                                time_id: showtime._id,
                            });
                        }
                    }
                }
            }

            console.log(showtimesWithTheaterNames);
            res.status(200).json(showtimesWithTheaterNames);
        } else {
            res.status(404).json({ message: 'No screening data found.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = router;
