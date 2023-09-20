import { baseUrl } from "../../config/config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Viewscreenorientation from "./viewscreenorientation";

function TheaterHome() {

    const [isViewScreenVisible, setIsViewScreenVisible] = useState(false);

    const trid = useSelector((state) => state.user.userid);
    const [theaterScreen, setTheaterScreen] = useState(null);
    const [selectedScreenIndex, setSelectedScreenIndex] = useState(null);
    const handleViewScreen = (index) => {
        setSelectedScreenIndex(index);
    };
    const hidefun = () => {
        setSelectedScreenIndex(null);
    };

    useEffect(() => {
        // Make a GET request to fetch the data from your API
        axios
            .get(`${baseUrl}/api/getscreenbyid`, {
                params: {
                    trid: trid,
                },
            })
            .then((response) => {
                setTheaterScreen(response.data.theaterScreen);
                console.log(response.data.theaterScreen);
            })
            .catch((error) => {
                console.error("Error fetching theater screen:", error);
            });
    }, [trid]);

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
                        <h3>Welcome, Manage Your Theater Sapce</h3>
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
                                                        View Patients
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
                                                    <h5 class="card-title">View Theater</h5>
                                                    <p class="card-text">Click to view a Theater List.</p>
                                                    <Link to="">
                                                        <button class="btn btn-primary">
                                                            View Theater List
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Add Theater</h5>
                                                    <p class="card-text">Click to add new Theater</p>
                                                    <Link to="">
                                                        <button class="btn btn-primary">Add Theater</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Update Screen</h5>
                                                    <p class="card-text">Click to update a screen.</p>
                                                    <a href="#" class="btn btn-primary">
                                                        Update
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>







                                <div
                                    className="container mt-5 card"
                                    style={{ padding: "20px", background: "#f2f7ff" }}
                                >
                                    <h2>My Screens</h2>
                                    {theaterScreen !== null ? (
                                        theaterScreen.map((screen, index) => {
                                            const rows = parseInt(screen.rows);
                                            const cols = parseInt(screen.columns);
                                            const total = rows * cols;
                                            // console.log(total)
                                            const orientationItems = screen.orientation.split(",");
                                            const missing = orientationItems.length;
                                            console.log(missing)
                                            const seatcount = total - missing;

                                            return (
                                                <div
                                                    className="card"
                                                    style={{
                                                        padding: "20px",
                                                        border: "2px solid #3498db",
                                                        borderRadius: "10px",
                                                    }}
                                                    key={index}
                                                >
                                                    <h5
                                                        className="card-header"
                                                        style={{
                                                            backgroundColor: "#435ebe",
                                                            color: "#fff",
                                                            padding: "10px",
                                                            borderRadius: "5px",
                                                        }}
                                                    >
                                                        Screen Name: {screen.name}
                                                    </h5>
                                                    <br></br>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{screen.screentype}</h5>
                                                        <h6 className="card-text">
                                                            Rows available: {screen.rows}
                                                            <br />
                                                            Columns available: {screen.columns}
                                                            <br />
                                                            Theater Type: {screen.theatertype}
                                                            <br />

                                                            Capacity: {seatcount} seats

                                                            <br></br>
                                                            <br></br>
                                                            <br></br>
                                                            Created Under: {screen.tremail}
                                                            <br />

                                                        </h6>
                                                        {selectedScreenIndex === index ? (
                                                            <button
                                                                className="btn btn-success"
                                                                onClick={() => hidefun()}
                                                            >
                                                                Hide Layout
                                                            </button>
                                                        ) : <button
                                                            className="btn btn-success"
                                                            onClick={() => handleViewScreen(index)}
                                                        >
                                                            View Theater Layout
                                                        </button>}


                                                        {selectedScreenIndex === index && (
                                                            <Viewscreenorientation
                                                                rows={screen.rows}
                                                                cols={screen.columns}
                                                                orientationProp={screen.orientation}
                                                            />
                                                        )}

                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>








                            </div>



                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TheaterHome;
