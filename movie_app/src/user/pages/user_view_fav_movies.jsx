import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import GoBackButton from "../../public/gobackButton";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../usernavbar/usernavbar";
import { toast, Toaster } from "react-hot-toast";

function UserViewFavMovies() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [movies, setMovies] = useState([]);
  const [rf, setrf] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/getfavmovies/${userId}`)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [rf, userId]);

  const handleRemove = (movieId) => {
    axios
      .delete(`${baseUrl}/api/getfavmovies/${userId}/${movieId}`)
      .then((response) => {
        setrf(true);
        toast.success(response.data.message);
        setrf(false);
      })
      .catch((error) => {
        alert("Error removing movie:", error);
      });
  };

  return (
    <>
      <UserNavBar />
      <div>
        <Toaster />
      </div>
      <div className="container mt-5">
        <h2>My Saved Collections</h2>
        <GoBackButton />
        {movies.length === 0 ? (
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">No movies found</h5>
              <p className="card-text">
                It looks like you haven't added any movies to your favorites
                yet. Explore our collection and start adding your favorite
                movies!
              </p>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {movies.map((movie, index) => {
              const releaseDate = new Date(
                movie.release_date
              ).toLocaleDateString();

              return (
                <div key={index} className="col">
                  <div className="card">
                    <img
                      src={`${baseUrl}/movie_poster/${movie.poster_url}`}
                      alt={movie.title}
                      className="card-img-top"
                      style={{
                        borderRadius: "10px",
                        height: "300px",
                        width: "230px",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">
                        <strong>Genre:</strong> {movie.genre}
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          onClick={() => handleRemove(movie._id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default UserViewFavMovies;
