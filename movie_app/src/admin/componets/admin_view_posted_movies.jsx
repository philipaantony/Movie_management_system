import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import GoBackButton from "../../public/gobackButton";
import { useNavigate } from "react-router-dom";

function AdminViewPostedMovies() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [rf, setrf] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/getmovies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [rf]);

  const deleteMovie = (movieId) => {
  console.log(movieId);
    const apiUrl = `http://localhost:5000/api/movies/${movieId}`;

    return axios
      .delete(apiUrl)
      .then((response) => {
        alert(response.data.message);
        console.log("Movie deleted successfully:", response);
        setrf(false);
        setrf(true);
        return response.data; // You can return the response data or a success message
      })
      .catch((error) => {
        alert("Error deleting movie:");
        console.error("Error deleting movie:", error);
        throw error; // You can throw the error to handle it in the calling code
      });
  };



  return (
    <div id="main">
      <div className="container mt-5">
        <h2>Posted Movies</h2>
        <GoBackButton />
        {movies.map((movie, index) => {
          // Format the Release Date to show in MM/DD/YYYY format
          const releaseDate = new Date(movie.release_date).toLocaleDateString();

          return (
            <div className="card mb-3" key={index}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`${baseUrl}/movie_poster/${movie.poster_url}`}
                    alt={movie.title}
                    style={{
                      maxWidth: "200px",
                      margin: "30px",
                      borderRadius: "10px",

                      position: "absolute",
                      top: "0",
                      left: "0",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.14)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <div className="row">
                      <div className="col">
                        <p className="card-text">
                          <strong>Genre:</strong> {movie.genre}
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> {movie.duration} Hr
                        </p>
                        <p className="card-text">
                          <strong>StreamingType:</strong> {movie.StreamingType}
                        </p>
                      </div>
                      <div className="col">
                        <p className="card-text">
                          <strong>Release Date:</strong> {releaseDate}
                        </p>
                        <p className="card-text">
                          <strong>Director:</strong> {movie.director}
                        </p>
                      </div>
                    </div>
                    <p className="card-text">
                      <strong>Language:</strong> {movie.language}
                    </p>
                    <p className="card-text">
                      <strong>Description:</strong> {movie.description}
                    </p>
                    <p className="card-text">
                      <strong>Production:</strong> {movie.production}
                    </p>
                    <p className="card-text">
                      <strong>Cast:</strong> {movie.cast}
                    </p>

                    <div className="row">
                      <div className="col align-self-start">
                        <button
                          onClick={() => {
                            const data={movie_id:movie._id}
                            navigate("/updatemovie", { state:data });
                          }}
                          type="button"
                          className="btn btn-primary"
                          style={{ marginRight: "20px" }}
                        >
                          Update
                        </button>

                        {/* <button type="button"  onClick={() => {
                           
                            deleteMovie(movie._id);
                          }}
                        
                        
                        className="btn btn-danger">
                          Delete
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminViewPostedMovies;
