import React from 'react'
import { Link } from "react-router-dom";

function Homecards() {
  return (
    <>
     
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
                                                        View Screens
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
                                                    <h5 class="card-title">Set-up New Screen</h5>
                                                    <p class="card-text">Click to view a Theater List.</p>
                                                    <Link to="/createnewscreen">
                                                        <button class="btn btn-primary">
                                                            Set-up Screen
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"> View Screens</h5>
                                                    <p class="card-text">Click to  View Screens.</p>
                                                    <Link to="/viewmyscreens">
                                                    <a  class="btn btn-primary">
                                                        View Screens
                                                    </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">View Movies</h5>
                                                    <p class="card-text">View New Movies for </p>
                                                    <Link to="/assignmovie">
                                                        <button class="btn btn-primary">View Movies</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</>
  )
}

export default Homecards