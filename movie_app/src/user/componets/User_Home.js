import React from 'react'
import { BACKGROUND_COLOR, FORGROUND_COLOR, TEXTCOLOR, TEXTCOLOR_DIM } from '../../const/const_color'
import MovieCardFlip from './movie_card_flip';


function UserHome() {
    const heightofimage = 270;
    const widthofimage = 180;
    return (
        <div style={{ backgroundColor: BACKGROUND_COLOR }}>
            <div id="main">
                <header className="mb-3">
                    <p className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3"></i>
                    </p>
                </header>
                <div className="page-heading">
                    <div>
                        <h3 style={{ color: TEXTCOLOR }}>Welcome Philip</h3>
                    </div>
                </div>
                <div className="page-content">
                    <section className="row">
                        <div className="">
                            <div className="row">
                                {/* -------------------row------------------ */}
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card" style={{ backgroundColor: FORGROUND_COLOR }}>
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon purple">
                                                        <i className="iconly-boldShow"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 style={{ color: TEXTCOLOR_DIM }}>
                                                        View Doctors
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0" style={{ color: TEXTCOLOR }}>21</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card" style={{ backgroundColor: FORGROUND_COLOR }}>
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon blue">
                                                        <i className="iconly-boldProfile"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 style={{ color: TEXTCOLOR_DIM }}>
                                                        View Patients
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0" style={{ color: TEXTCOLOR }}>2678</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card" style={{ backgroundColor: FORGROUND_COLOR }}>
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon green">
                                                        <i className="iconly-boldAdd-User"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 style={{ color: TEXTCOLOR_DIM }}>
                                                        Following
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0" style={{ color: TEXTCOLOR }}>80.000</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card" style={{ backgroundColor: FORGROUND_COLOR }}>
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon red">
                                                        <i className="iconly-boldBookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 style={{ color: TEXTCOLOR_DIM }}>
                                                        Saved Post
                                                    </h6>
                                                    <h6 className="font-extrabold mb-0" style={{ color: TEXTCOLOR }}>112</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="card" style={{ backgroundColor: FORGROUND_COLOR }}>
                                    <div className="card-header" style={{ backgroundColor: FORGROUND_COLOR }} >
                                        <h4 style={{ color: TEXTCOLOR }}>Explore More Movies</h4>
                                    </div>
                                    <div className="card-content pb-4">
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div class="row">
                                                <MovieCardFlip imageurl="img/trending/trend-1.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-2.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-3.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-4.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-5.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-6.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-5.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-3.jpg" moviename="Karithi" />
                                                <MovieCardFlip imageurl="img/trending/trend-1.jpg" moviename="Karithi" />


                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="product__item">
                                                        <div class="product__item__pic set-bg">
                                                            <div class="ep">18 / 18</div>
                                                            <img src="img/trending/trend-6.jpg" style={{ height: heightofimage, width: widthofimage }}></img>
                                                            <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                            <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                        </div>
                                                        <div class="product__item__text">
                                                            <ul>
                                                                <li>Active</li>
                                                                <li>Movie</li>
                                                            </ul>
                                                            <h5 style={{ color: TEXTCOLOR }}>Code Geass: Hangyaku no Lelouch R2</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                        <div className="recent-message d-flex px-4 py-3">


                                        </div>
                                        <div className="recent-message d-flex px-4 py-3">

                                        </div>
                                        <div className="px-4" style={{ color: TEXTCOLOR }}>
                                            <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                                                Find More
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>

                <footer>
                    <div className="footer clearfix mb-0 text-muted">
                        <div className="float-start">
                            <p>2021 &copy; Mazer</p>
                        </div>
                        <div className="float-end">
                            <p>
                                Crafted with{" "}
                                <span className="text-danger">
                                    <i className="bi bi-heart"></i>
                                </span>{" "}
                                by <a href="http://ahmadsaugi.com">A. Saugi</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default UserHome