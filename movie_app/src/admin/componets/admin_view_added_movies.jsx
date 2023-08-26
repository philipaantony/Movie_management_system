import React, { useState, useEffect } from "react";
import axios from "axios";

function Adminviewaddedmovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getmovies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#f2f7ff" }}>
      <div id="main">
        <header className="mb-3">
          <p className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </p>
        </header>
        <div className="page-heading">
          <div>
            <h3>View Added Movies</h3>
          </div>
        </div>
        <div className="page-content">
        <section class="section">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">View Movie List</h4>
                        </div>
                        <div class="card-body">
                        <table class="table table-striped">
                        <thead>
                          <tr>
                            
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">director</th>
                            <th scope="col">production</th>
                            <th scope="col">language</th>
                            <th scope="col">Cast</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                          {movies.map((movie) => 
                          
                          (
                            <tr>
                              <td>{movie.title}</td>
                              <td>{movie.genre}</td>
                              <td>{movie.duration}</td>
                              <td>{new Date(movie.release_date).toISOString().split('T')[0]}</td>
                              <td>{movie.director}</td>
                              <td>{movie.production}</td>
                              <td>{movie.language}</td>
                              <td>{movie.cast}</td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                            
                        </div>
                    </div>
                </section>
        </div>
      </div>
    </div>
  );
}

export default Adminviewaddedmovies;
