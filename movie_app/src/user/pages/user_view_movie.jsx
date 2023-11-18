import React from "react";
import axios from "axios";
import UserNavBar from "../usernavbar/usernavbar";
import Maincard from "../componets/moviecards/maincard";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovie } from "../../Redux/movie/movieSlice";
import { baseUrl } from "../../config/config";
import Footer from "../../footer/footer";
import { toast, Toaster } from 'react-hot-toast';

function UserViewMovie() {
  const location = useLocation();
  const movie_id = location.state.movie_id;
  const dispatch = useDispatch();
  const releaseDate = new Date(location.state.release_date).toLocaleDateString();

  
  const movieData = location.state;
  dispatch(setMovie(movieData));
  const navigate = useNavigate();

  const saveMovie = async () => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    console.log(movie_id);

    try {
      const response = await axios.post(`${baseUrl}/api//save-movie`, {
        user_id: userId, // Replace with the actual user_id
        movie_id: movie_id,
      });
      console.log(response.data.message)
      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        alert("Failed to save movie");
      }
    } catch (error) {
      alert("Error saving movie:", error);
    }
  };

  return (
    <div>
      <UserNavBar activehome="active" />
      <div><Toaster/></div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Maincard 
            
            duration={location.state.duration}
            title={location.state.title} 
            url={location.state.poster_url} />
          </div>
          <div className="col-md-8">
            <br></br>
            <h1 className="mb-3">{location.state.title}</h1>
            <p>
              <strong>Plot Summary:</strong> {location.state.description}
            </p>
            <div class="row">
              <div class="col">
                <p>
                  <strong>Release Date</strong> {releaseDate}
                </p>
                <p>
                  <strong>Director:</strong> {location.state.director}
                </p>
                <p>
                  <strong>Genre:</strong> {location.state.genre}
                </p>
                <p>
                  <strong>language:</strong> {location.state.language}
                </p>
              </div>
              <div class="col">
                <p>
                  <strong>Cast:</strong> {location.state.cast}
                </p>
                <p>
                  <strong>Duration:</strong> {location.state.duration}
                </p>
                <p>
                  <strong>Quality:</strong> HD
                </p>
                <p>
                  <strong>Production House:</strong> {location.state.production}
                </p>
              </div>
            </div>

            <div className="mb-3" style={{ display: "flex" }}>
              {location.state.StreamingType === "In-Theaters" ? (
                <button
                  onClick={() => {
                    navigate("/viewstreaming", {
                      state: {
                        movie_id: movie_id,
                        movieName: location.state.title,
                        language: location.state.language,
                      },
                    });
                  }}
                  className="btn btn-danger btn-lg me-3"
                  style={{ padding: "10px 20px" }}
                >
                  Book Now
                </button>
              ) : (
                <button
                  className="btn btn-danger btn-lg me-3"
                  style={{ padding: "10px 20px" }}
                >
                  Watch Now
                </button>
              )}
              <button
                onClick={saveMovie}
                className="btn btn-primary btn-lg me-3"
                style={{ padding: "10px 20px" }}
              >
                Save <BookmarkAddedIcon />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserViewMovie;
