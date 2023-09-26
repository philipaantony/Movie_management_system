import { baseUrl } from "../../config/config";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import Viewscreenorientation from "./viewscreenorientation";
import Homecards from "./homecomponets/homecards";

function TheaterHome() {
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
                        <h3>Welcome, Manage Your Theatre Space</h3>
                    </div>
                </div>
                <div className="page-content">
                    <section className="row">
                        <div className="">
                            <div className="row">
                                <Homecards />
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
                                            console.log(missing);
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
                                                        ) : (
                                                            <button
                                                                className="btn btn-success"
                                                                onClick={() => handleViewScreen(index)}
                                                            >
                                                                View Theater Layout
                                                            </button>
                                                        )}

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
