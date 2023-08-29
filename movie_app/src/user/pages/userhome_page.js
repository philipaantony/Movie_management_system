import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCardFlip from "../componets/movie_card_flip";
import { Link } from "react-router-dom";
import UserNavBar from "../usernavbar/usernavbar";
import StatCard from "../componets/moviecards/statcard";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";
import Moviecard from "../componets/moviecards/moviecard";
import { useSelector } from 'react-redux';
import Error404 from "../../errorpage/error404";




function UserHomePages() {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const useremail = useSelector((state) => state.user.useremail);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);


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

        <div id="app">
            {isLoggedIn ? (
                <div
                    style={{ padding: "10px", margin: "20px" }}
                    className="layout-navbar"
                >
                    <UserNavBar activehome="active" />
                    <div id="main-content">
                        <div classname="page-heading">
                            <div classname="page-title">
                                <div classname="row">
                                    <div classname="col-12 col-md-6 order-md-1 order-last">
                                        <h3>Welcome {useremail}</h3>
                                        <p classname="text-subtitle text-muted">LATEST MOVIES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content">
                                <section className="row">
                                    <div className="col-12 col-lg-9">
                                        <StatCard />

                                        <div classname="col-12 col-md-6 order-md-1 order-last">
                                            <h3>Trending Movies</h3>
                                            <p classname="text-subtitle text-muted">Explore More</p>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <div className="container" style={{ paddingLeft: "30px" }}>
                                            <div className="row">
                                                {movies.map((movie) => {


                                                    const data = {
                                                        imageurl: `http://localhost:5000/movie_poster/${movie.poster_url}`,
                                                        moviename: movie.title,
                                                        genre: movie.genre,
                                                        duration: movie.duration,
                                                        release_date: movie.release_date,
                                                        director: movie.director,
                                                        language: movie.language,
                                                        description: movie.description,
                                                        production: movie.production,
                                                        cast: movie.cast,
                                                        trailer_url: movie.trailer_url
                                                    };

                                                    return (
                                                        <div
                                                            className="col-md-2"
                                                            style={{ paddingLeft: "100px" }}
                                                            onClick={() => {
                                                                navigate("/viewmovie", {
                                                                    state: data,
                                                                });
                                                            }}
                                                        >
                                                            <MovieCardFlip
                                                                key={movie._id}
                                                                imageurl={`http://localhost:5000/movie_poster/${movie.poster_url}`}
                                                                moviename={movie.title}
                                                                genre={movie.genre}
                                                                language={movie.language}
                                                                dis={movie.description}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-3">
                                        <div className="card">
                                            <div className="card-body py-4 px-5">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-xl">
                                                        <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                                    </div>
                                                    <div className="ms-3 name">
                                                        <h5 className="font-bold">John Duck</h5>
                                                        <h6 className="text-muted mb-0">@johnducky</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Visitors Profile</h4>
                                            </div>
                                            <div className="card-body">
                                                <Moviecard />
                                                <Moviecard />
                                                <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                                                    Start Conversation
                                                </button>
                                            </div>

                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Recent Messages</h4>
                                            </div>
                                            <div className="card-content pb-4">
                                                <div className="recent-message d-flex px-4 py-3">
                                                    <div className="avatar avatar-lg">
                                                        <img src="assets/images/faces/4.jpg" />
                                                    </div>
                                                    <div className="name ms-4">
                                                        <h5 className="mb-1">Hank Schrader</h5>
                                                        <h6 className="text-muted mb-0">@johnducky</h6>
                                                    </div>
                                                </div>
                                                <div className="recent-message d-flex px-4 py-3">
                                                    <div className="avatar avatar-lg">
                                                        <img src="assets/images/faces/5.jpg" />
                                                    </div>
                                                    <div className="name ms-4">
                                                        <h5 className="mb-1">Dean Winchester</h5>
                                                        <h6 className="text-muted mb-0">@imdean</h6>
                                                    </div>
                                                </div>
                                                <div className="recent-message d-flex px-4 py-3">
                                                    <div className="avatar avatar-lg">
                                                        <img src="assets/images/faces/1.jpg" />
                                                    </div>
                                                    <div className="name ms-4">
                                                        <h5 className="mb-1">John Dodol</h5>
                                                        <h6 className="text-muted mb-0">@dodoljohn</h6>
                                                    </div>
                                                </div>
                                                <div className="px-4">
                                                    <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                                                        Start Conversation
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                            <footer>
                                <div className="footer clearfix mb-0 text-muted">
                                    <div className="float-start">
                                        <p>2021 © Mazer</p>
                                    </div>
                                    <div className="float-end">
                                        <p>
                                            Crafted with{" "}
                                            <span className="text-danger">
                                                <i className="bi bi-heart" />
                                            </span>{" "}
                                            by <a href="http://ahmadsaugi.com">A. Saugi</a>
                                        </p>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                </div>
            ) : (
                <Error404 />
            )}

            <Footer />
        </div>
    );
}

export default UserHomePages;
