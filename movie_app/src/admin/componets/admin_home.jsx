import React from 'react';
import { Link } from "react-router-dom";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import AdminUpdateMovieStatus from './admin_update_movie_status';

function AdminHome() {
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
                        <h3>Welcome, Admin</h3>
                    </div>
                </div>
                <div className="page-content">
                    <section className="row">
                        <div className="">
                            <div className="row">
                                {/* -------------------row------------------ */}
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon purple">
                                                        <i className="iconly-boldShow"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">
                                                        View Rating
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0">21</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon blue">
                                                        <i className="iconly-boldProfile"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">
                                                        View Feedback
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0">2678</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon green">
                                                        <i className="iconly-boldAdd-User"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">
                                                        Following
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0">80.000</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon red">
                                                        <i className="iconly-boldBookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">
                                                        Saved Post
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0">112</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Add Movie </h5>
                                                    <p class="card-text">Add New One <LocalMoviesIcon  style={{fontSize:"20"}}/></p>
                                                    <Link to="/addmovie">
                                                        <button class="btn btn-primary">Add Movie <AddIcon/> </button>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">View Movies</h5>
                                                    <p class="card-text">View Posted Movies</p>
                                                    <Link to="/viewpostedmovies">
                                                    <a id="viewmovies" class="btn btn-primary">View Movie</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">View Users</h5>
                                                    <p class="card-text">Click to View System Users</p>
                                                    <Link to="/viewusers">
                                                        <button id ="viewUsersButtonId" class="btn btn-primary">View Users</button>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">View Theater</h5>
                                                    <p class="card-text">Aprove new Theaters</p>
                                                    <Link to="/viewtheaters">
                                                    <a  class="btn btn-primary">View Theater</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <AdminUpdateMovieStatus/>
                </div>
            </div>
        </div>
  )
}

export default AdminHome