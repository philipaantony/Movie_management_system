import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavBar from "../usernavbar/usernavbar";
import UserCarousel from "../componets/Carousel/user_carousel";

function UserHomePage2() {
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

const titleStyle = {
  color: 'white',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: 'typeWriter 5s steps(20, end), blink-caret 0.5s step-end infinite',
};

  const trendingMovies = [
    // Replace with your trending movie data
    {
      id: 1,
      title: "Movie 1",
      description: "Description for Movie 1",
      poster: "assets/explore/poster/p1.jpg",
    },

    {
      id: 2,
      title: "Movie 2",
      description: "Description for Movie 2",
      poster: "assets/explore/poster/p2.jpg",
    },
    {
      id: 3,
      title: "Movie 3",
      description: "Description for Movie 3",
      poster: "assets/explore/poster/p3.jpg",
    },
    {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        poster: "assets/explore/poster/p6.jpg",
      },
      {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        poster: "assets/explore/poster/p5.jpg",
      },
      {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        poster: "assets/explore/poster/p4.jpg",
      },
      {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        poster: "assets/explore/poster/p3.jpg",
      },
      {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        poster: "assets/explore/poster/p7.jpg",
      },
      {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        poster: "assets/explore/poster/p8.jpg",
      },

    // Add more movies as needed
  ];
  const containerStyle = {
    backgroundImage: 'url("assets/explore/a1.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    // You can adjust other background properties as needed
  };

  return (
    <div>
      <UserNavBar activehome="active"  />
      <div
        className="movie-home"
        style={{
          backgroundImage: `url('assets/explore/a1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
        }}
      >
        {/* Background Overlay */}
        <div className="overlay"></div>

        <div className="container text-white h-100 d-flex flex-column justify-content-center">
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-8">
              <h1 className="display-4 mb-4 mt-2" style={{ color: "white" }}>
                Movie Management System
              </h1>
              <p className="lead">
                "Experience the ultimate movie management system that simplifies
                your entertainment choices. Discover trending movies, explore
                your favorite genres, and stay up-to-date with the latest
                releases. Stream, organize, and enjoy your cinematic journey
                effortlessly. Welcome to a world of movie magic!"
              </p>
              <span className="ml-3">Explore More</span>
              <div className="mt-4"></div>
            </div>
          </div>

          {/* Search Bar ---------------------------------------------*/}
          <div className="row mt-4">
            <div className="col-md-8 mx-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for movies..."
                  aria-label="Search for movies"
                  aria-describedby="search-button"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    height: "50px",
                    border: "none",
                    borderRadius: "25px 0px 0px 25px",
                  }}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="search-button"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderRadius: "0px 25px 25px 0px",
                  }}
                >
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*------------------------------------------------------------------------------ */}

<div
        className="container-fluid"
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        <section className="mt-5">
          <h2>Trending Movies</h2>
          <div className="row">
            {movies.map((movie) => (
              <div className="col-lg-2 col-md-4 col-6 mb-4" key={movie.id}>
                <div
                  className="card"
                  style={{
                    transition: "transform 0.2s",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div
                    className="card-img-container"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "0",
                      paddingTop: "150%",
                    }}
                  >
                    <img
                      src={`http://localhost:5000/movie_poster/${movie.poster_url}`}
                      className="card-img-top movie-poster"
                      alt={movie.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        transition: "transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>










      
 {/*------------------------------------------------------------------------------ */}   
      <UserCarousel/>
{/*------------------------------------------------------------------------------ */}
     
<div
        className="container-fluid"
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        <section className="mt-5">
          <h2>Trending Movies</h2>
          <div className="row">
            {trendingMovies.map((movie) => (
              <div className="col-lg-2 col-md-4 col-6 mb-4" key={movie.id}>
                <div className="card" style={{ maxHeight: "450px" }}>
                  <img
                    src={movie.poster}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/*------------------------------------------------------------------------------ */}
    </div>
  );
}

export default UserHomePage2;
