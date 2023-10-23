import React, { useEffect, useState } from 'react';
import { baseUrl } from "../../config/config";
import axios from "axios";
import GoBackButton from '../../public/gobackButton';
import { toast, Toaster } from 'react-hot-toast';


function AssignMovieToScreen(props) {

  
  const [showtimes, setShowtimes] = useState([]);
  const screenid = props.screenid;
  const userId = localStorage.getItem("userId");
  const [currentMovies, setCurrentMovies] = useState([]);
  const [refresh, setrefresh] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState({}); // To store the selected movie for each time slot

  console.log(props.trid);

  const handleAssignMovie = (showtimeId) => {
    if (selectedMovies[showtimeId]) {
      console.log("-----------------");
      console.log("Screen_id:", screenid);
      console.log("theater id:", userId);
      console.log("Movie Id", selectedMovies[showtimeId]);
      console.log("Show Time Id", showtimeId);
      console.log("-----------------");
      axios.post(`${baseUrl}/api/assignmovie`, {
        showtimeId,
        movieId: selectedMovies[showtimeId],
        screenId: screenid, // Include screenid in the request
        theaterId: userId, // Include userId (theater id) in the request
      })
        .then((response) => {
          if (response.data.message) {
            setrefresh(false);
            toast.success(response.data.message)
        
            setrefresh(true);
          }
        })
        .catch((error) => {
          console.error("Error assigning movie:", error);
          // Handle the error, e.g., show an error message
          alert("Error assigning movie");
        });
    } else {
      // Handle the case where no movie is selected, e.g., show a validation message
      alert("Please select a movie to assign.");
    }
  };
  

  useEffect(() => {

    
    axios.get(`${baseUrl}/api/getshowtime/${screenid}`)
      .then((response) => {
        if (response.data) {
          setShowtimes(response.data);
          // Initialize selectedMovies with an empty object for each showtime
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

      
      axios
      .post(`${baseUrl}/api/assignmovie/current`, { screen_id: screenid })
      .then((response) => {
        if (response.data) { // Check if the response contains data
          setCurrentMovies(response.data); // Set the state with the response data
          console.log(response.data);

        } else {
          console.log('No data in the response');
        }
      })
      .catch((error) => {
        console.error("Error fetching current movies:", error);
      });
    
    


    // Fetch the list of movies
    axios.get(`${baseUrl}/api/getmovies`)
      .then((response) => {
        //console.log(response.data)
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [refresh]);

  const handleDelete = (showtimeId) => {
   console.log(showtimeId)
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
        // Handle the error, e.g., show an error message
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
          </tr>
        </thead>




        <tbody>
  {showtimes.map((showtime) => (
    <tr key={showtime._id}>
      <td>{showtime.time}</td>
      <td>
        {currentMovies.some((movie) => movie.time_id === showtime._id) ? (
          // Movie name exists for this time_id, display it
          currentMovies
            .filter((movie) => movie.time_id === showtime._id)
            .map((movie) => (
              <span key={movie._id}>{movie.title}</span>
            ))
        ) : (
          // Movie name doesn't exist, display the dropdown menu
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
                  {movie.title}
                </option>
              ))}
          </select>
        )}
      </td>
      <td>
      {currentMovies.some((movie) => movie.time_id === showtime._id) ?(
         <button
         className="btn btn-danger"
         onClick={() => handleDelete(showtime._id)}
       >
         Remove
       </button>
      ):(
        <button
        className="btn btn-primary"
        onClick={() => handleAssignMovie(showtime._id)}
      >
        Assign
      </button>
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
