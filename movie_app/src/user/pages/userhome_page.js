import MovieCardFlip from '../componets/movie_card_flip'
import React from 'react';
import UserNavBar from '../usernavbar/usernavbar';

function UserHomePages() {
    return (

        <div id="app">
            <div style={{ padding: "10px", margin: "20px" }} className="layout-navbar">
                <UserNavBar activehome="active" />
                <div id="main-content">
                    <div classname="page-heading">
                        <div classname="page-title">
                            <div classname="row">
                                <div classname="col-12 col-md-6 order-md-1 order-last">
                                    <h3>Welcome Philip</h3>
                                    <p classname="text-subtitle text-muted">LATEST MOVIES</p>
                                </div>

                            </div>
                        </div>
                        <div className="page-content">
                            <section className="row">
                                <div className="col-12 col-lg-9">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="card">
                                                <div className="card-body px-3 py-4-5">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="stats-icon purple">
                                                                <i className="iconly-boldShow" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6 className="text-muted font-semibold">Profile Views</h6>
                                                            <h6 className="font-extrabold mb-0">112.000</h6>
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
                                                                <i className="iconly-boldProfile" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6 className="text-muted font-semibold">Followers</h6>
                                                            <h6 className="font-extrabold mb-0">183.000</h6>
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
                                                                <i className="iconly-boldAdd-User" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6 className="text-muted font-semibold">Following</h6>
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
                                                                <i className="iconly-boldBookmark" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h6 className="text-muted font-semibold">Saved Post</h6>
                                                            <h6 className="font-extrabold mb-0">112</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div classname="col-12 col-md-6 order-md-1 order-last">
                                        <h3>Trending Movies</h3>
                                        <p classname="text-subtitle text-muted">Explore More</p>
                                    </div>
                                    <br></br>
                                    <br></br>

                                    <div class="row ">
                                        <MovieCardFlip imageurl="img/trending/trend-1.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-2.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-3.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-4.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-5.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-6.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-5.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-3.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-1.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-1.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-2.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-3.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-4.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-5.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-6.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-5.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-3.jpg" moviename="Karithi" />
                                        <MovieCardFlip imageurl="img/trending/trend-1.jpg" moviename="Karithi" />
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
                        <footer>
                            <div className="footer clearfix mb-0 text-muted">
                                <div className="float-start">
                                    <p>2021 © Mazer</p>
                                </div>
                                <div className="float-end">
                                    <p>Crafted with <span className="text-danger"><i className="bi bi-heart" /></span> by <a href="http://ahmadsaugi.com">A. Saugi</a></p>
                                </div>
                            </div>
                        </footer>

                    </div></div>

            </div>
        </div>



    )
}

export default UserHomePages