import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import UserNavBar from "../usernavbar/usernavbar";

import { useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";

import { useSelector } from "react-redux";
import Error404 from "../../errorpage/error404";

import TrendingCard from "../componets/homepagecomponets/trendingcard";
import StatCard from "../componets/homepagecomponets/statcard";

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
        <div style={{ background: "" }}>
            <UserNavBar activehome2="active" />
            <div id="" style={{ padding: "20px" }}>
                <header className="mb-3">
                    <a href="#" className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3" />
                    </a>
                </header>
                <div className="page-heading">
                    <h3>Profile Statistics</h3>
                </div>
                <div className="page-content">
                    <section className="row">
                        <div className="col-12 col-lg-9">
                            <StatCard />
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header" style={{ background: "" }}>
                                            <h4>Profile Visit</h4>
                                        </div>
                                        <div className="card-body" style={{ background: "" }}>
                                            <div className="row" >
                                                {movies.map((movie) => {
                                                    const data = {
                                                        poster_url: `http://localhost:5000/movie_poster/${movie.poster_url}`,
                                                        moviename: movie.title,
                                                        genre: movie.genre,
                                                        duration: movie.duration,
                                                        release_date: movie.release_date,
                                                        director: movie.director,
                                                        language: movie.language,
                                                        description: movie.description,
                                                        production: movie.production,
                                                        cast: movie.cast,
                                                        trailer_url: movie.trailer_url,
                                                    };
                                                    return (
                                                        <>
                                                            <TrendingCard

                                                                key={movie._id}
                                                                imageurl={`http://localhost:5000/movie_poster/${movie.poster_url}`}
                                                                moviename={movie.title}
                                                                genre={movie.genre}
                                                                language={movie.language}
                                                                director={movie.director}
                                                                dis={movie.description}
                                                                production={movie.production}
                                                                trailer_url={movie.trailer_url}
                                                                cast={movie.cast}
                                                                release_date={movie.release_date}
                                                                duration={movie.duration}



                                                            />
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>










                            <div className="row">
                                <div className="col-12 col-xl-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Profile Visit</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex align-items-center">
                                                        <svg className="bi text-primary" width={32} height={32} fill="blue" style={{ width: 10 }}>
                                                            <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                                                        </svg>
                                                        <h5 className="mb-0 ms-3">Europe</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="mb-0">862</h5>
                                                </div>
                                                <div className="col-12">
                                                    <div id="chart-europe" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex align-items-center">
                                                        <svg className="bi text-success" width={32} height={32} fill="blue" style={{ width: 10 }}>
                                                            <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                                                        </svg>
                                                        <h5 className="mb-0 ms-3">America</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="mb-0">375</h5>
                                                </div>
                                                <div className="col-12">
                                                    <div id="chart-america" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex align-items-center">
                                                        <svg className="bi text-danger" width={32} height={32} fill="blue" style={{ width: 10 }}>
                                                            <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                                                        </svg>
                                                        <h5 className="mb-0 ms-3">Indonesia</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="mb-0">1025</h5>
                                                </div>
                                                <div className="col-12">
                                                    <div id="chart-indonesia" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Latest Comments</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-lg">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="col-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-md">
                                                                        <img src="assets/images/faces/5.jpg" />
                                                                    </div>
                                                                    <p className="font-bold ms-3 mb-0">Si Cantik</p>
                                                                </div>
                                                            </td>
                                                            <td className="col-auto">
                                                                <p className=" mb-0">Congratulations on your graduation!</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="col-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-md">
                                                                        <img src="assets/images/faces/2.jpg" />
                                                                    </div>
                                                                    <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                                                                </div>
                                                            </td>
                                                            <td className="col-auto">
                                                                <p className=" mb-0">Wow amazing design! Can you make another
                                                                    tutorial for
                                                                    this design?</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
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
                                        <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">Start
                                            Conversation</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Visitors Profile</h4>
                                </div>
                                <div className="card-body">
                                    <div id="chart-visitors-profile" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default UserHomePages;
