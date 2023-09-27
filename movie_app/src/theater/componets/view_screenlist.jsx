import { baseUrl } from "../../config/config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Viewscreenorientation from "./viewscreenorientation";

function ViewScreenList() {
    const trid = localStorage.getItem("userId");
    const [theaterScreen, setTheaterScreen] = useState(null);
    const [selectedScreenIndex, setSelectedScreenIndex] = useState(null);
    const handleViewScreen = (index) => {
        setSelectedScreenIndex(index);
    };
    const hidefun = () => {
        setSelectedScreenIndex(null);
    };


    useEffect(() => {
        
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
                border: "2px",
                borderRadius: "10px",
              }}
              key={index}
            >
              <h5
                className="card-header"
                style={{
                  backgroundColor: "",
                  color: "",
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
                  <button className="btn btn-success" onClick={() => hidefun()}>
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
  );
}

export default ViewScreenList;