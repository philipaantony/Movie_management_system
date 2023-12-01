// Import statements...
import React, { useEffect, useState } from 'react';
import { baseUrl } from "../../config/config";
import axios from "axios";
import GoBackButton from '../../public/gobackButton';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function AssignMovieToScreen(props) {
  const navigate = useNavigate();
  const [showtimes, setShowtimes] = useState([]);
  const screenid = props.screenid;
  const seatcount = props.seatcount;
  const userId = localStorage.getItem("userId");
  const [currentMovies, setCurrentMovies] = useState([]);
  const [refresh, setrefresh] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState({});

  const handleAssignMovie = (showtimeId) => {
    if (selectedMovies[showtimeId]) {
      axios.post(`${baseUrl}/api/assignmovie`, {
        showtimeId,
        movieId: selectedMovies[showtimeId],
        screenId: screenid,
        theaterId: userId,
      })
        .then((response) => {
          if (response.data.message) {
            setrefresh(false);
            toast.success(response.data.message);
            setrefresh(true);

            setSelectedMovies({
              ...selectedMovies,
              [showtimeId]: response.data.assignedMovieId,
            });
          }
        })
        .catch((error) => {
          console.error("Error assigning movie:", error);
          alert("Error assigning movie");
        });
    } else {
      alert("Please select a movie to assign.");
    }
  };

  useEffect(() => {
    axios.get(`${baseUrl}/api/getshowtime/${screenid}`)
      .then((response) => {
        if (response.data) {
          setShowtimes(response.data);
          const initialSelectedMovies = {};
          response.data.forEach((showtime) => {
            initialSelectedMovies[showtime._id] = '';
          });
          setSelectedMovies(initialSelectedMovies);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios.post(`${baseUrl}/api/assignmovie/current`, { screen_id: screenid })
      .then((response) => {
        if (response.data) {
          setCurrentMovies(response.data);
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.error("Error fetching current movies:", error);
      });

    axios.get(`${baseUrl}/api/getmovies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [refresh]);

  const handleDelete = (showtimeId) => {
    axios
      .delete(`${baseUrl}/api/assignmovie/delete/${showtimeId}`)
      .then((response) => {
        if (response.data.message) {
          setrefresh(false);
          toast.success(response.data.message);
          setrefresh(true);
        }
      })
      .catch((error) => {
        console.error("Error deleting assigned movie:", error);
        alert("Error deleting assigned movie");
      });
  };

  return (
    <div id="main">
      <div><Toaster/></div>
      <div className="container mt-5 card" style={{ padding: "20px" }}>
        <h2>Time</h2>
        <GoBackButton />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Time</th>
              <th>Movie</th>
              <th>Assign Movie</th>
              <th>View Booking</th>
            </tr>
          </thead>
          <tbody>
            {showtimes.map((showtime) => (
              <tr key={showtime._id}>
                <td>{showtime.time}</td>
                <td>
                  {currentMovies.some((movie) => movie.time_id === showtime._id) ? (
                    currentMovies
                      .filter((movie) => movie.time_id === showtime._id)
                      .map((movie) => (
                        <span key={movie._id}>{movie.title}</span>
                      ))
                    ) : (
                    <select
                      value={selectedMovies[showtime._id]}
                      onChange={(e) => {
                        setSelectedMovies({
                          ...selectedMovies,
                          [showtime._id]: e.target.value,
                        });
                      }}
                    >
                      <option value="">Select a Movie</option>
                      {movies
                        .filter((movie) => movie.StreamingType === "In-Theaters")
                        .map((movie) => (
                          <option key={movie._id} value={movie._id}>
                            {movie.title}{movie.movie_id}
                          </option>
                        ))}
                    </select>
                  )}
                </td>
                <td>
                  {currentMovies.some((movie) => movie.time_id === showtime._id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(showtime._id)}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAssignMovie(showtime._id)}
                    >
                      Assign
                    </button>
                  )}
                </td>
                <td>
                  {/*  */}


            {currentMovies.some((movie) => movie.time_id === showtime._id) ? (
                    currentMovies
                      .filter((movie) => movie.time_id === showtime._id)
                      .map((movie) => (
                        <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/viewstatistics", {
                        state: {
                          
                          seatcount:seatcount,
                          screenid:screenid,
                          movie_id: movie.movie_id,
                        },
                      });
                    }}
                  >
                    Booking Stats
                  </button>
                      ))
                    ) : (
                    <>Stats Not Available</>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-success">ADD More Time Slots</button>
    </div>
  );
}

export default AssignMovieToScreen;
