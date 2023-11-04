import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';
import { baseUrl } from '../../config/config';

function AdminUpdateMovieStatus() {
  const [movies, setMovies] = useState([]);
  const [rf, setrf] = useState(false);
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


  const updateStreamingType = (id, type) => {
    const movie_id = id;
    const newStreamingType = type;
    axios
      .patch(`${baseUrl}/api/update-movie-streaming-type/${movie_id}`, { newStreamingType })
      .then((response) => {
       setrf(true);
       
        console.log(response.data.message);
        toast.success('Movie Status Updated..', {
          position: 'top-right',
        });
        setrf(false)
      })
      .catch((error) => {
        console.error('Error updating movie:', error);
        toast.error('Error updating the movie', {
          position: 'top-right',
        });
      });
  

  }
  return (
    <section className="section">
        <div><Toaster/></div>
      <div className="row" id="basic-table">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Now Streaming in Theatre </h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <p className="card-text"> Explore the movies currently in theaters.
                
             </p>
                {/* Table with outer spacing */}
                <div className="table-responsive">
                  <table className="table table-lg">
                    <thead>
                      <tr>
                        <th>Movie</th>
                        <th>Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {movies
                        .filter((movie) => movie.StreamingType === 'In-Theaters')
                        .map((movie) => (
                          <tr key={movie.id}>
                           <td><div class="avatar me-3">
                                <img src={`${baseUrl}/movie_poster/${movie.poster_url}`} alt="" srcset=""/>
                            </div></td>
                          <td>{movie.title}</td>
                          <td>  <button className="btn btn-primary"
                          onClick={() => updateStreamingType(movie._id, 'OTT-Release')}
                          >Go OTT</button></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">OTT Release Movies</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <p className="card-text">   Browse our collection of movies available for streaming on OTT platforms.</p>
              </div>
              {/* Table with no outer spacing */}
              <div className="table-responsive">
                <table className="table mb-0 table-lg">
                  <thead>
                    <tr>
                      <th>Movie</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies
                      .filter((movie) => movie.StreamingType === 'OTT-Release')
                      .map((movie) => (
                        <tr key={movie.id}>
                            <td><div class="avatar me-3">
                                <img src={`${baseUrl}/movie_poster/${movie.poster_url}`} alt="" srcset=""/>
                            </div></td>
                          <td>{movie.title}</td>
                          <td>  <button className="btn btn-success"
                          onClick={() => updateStreamingType(movie._id, 'In-Theaters')}
                          >OnScreen</button></td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminUpdateMovieStatus;
