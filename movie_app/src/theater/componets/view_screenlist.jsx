import { baseUrl } from "../../config/config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Viewscreenorientation from "./viewscreenorientation";
import { useNavigate } from "react-router-dom";

function ViewScreenList() {
  const navigate = useNavigate();
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
      })
      .catch((error) => {
        console.error("Error fetching theater screen:", error);
      });
  }, [trid]);

  return (
    <div style={{ backgroundColor: "#f2f7ff" }}>
      <div id="main">
        <div
          className="container mt-5"
          style={{ background: "#f2f7ff" }}
        >
          <h2 className="text-center">My Screens</h2>
          {theaterScreen !== null ? (
            theaterScreen.map((screen, index) => {
              const rows = parseInt(screen.rows);
              const cols = parseInt(screen.columns);
              const total = rows * cols;
              const orientationItems = screen.orientation.split(",");
              const missing = orientationItems.length;
              const seatcount = total - missing;

              return (
                <div
                  className="card mb-4"
                  style={{ borderRadius: "10px" }}
                  key={index}
                >
                  <div className="card-header">
                    <h5 className="card-title">Screen Name: {screen.name}</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{screen.screentype}</h5>
                    <div className="row">
                      <div className="col">Rows available: {screen.rows}</div>
                      <div className="col">Columns available: {screen.columns}</div>
                      <div className="col">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            navigate('/createnewtime', {
                              state: { screenid: screen._id, trid: screen.trid },
                            });
                          }}
                        >
                          <i className="bi bi-clock-fill"></i> Manage Show Time
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">Layout: {screen.rows} * {screen.columns}</div>
                      <div className="col">Theater Type: {screen.theatertype}</div>
                      <div className="col">
                        <button
                          style={{ marginTop: '10px' }}
                          className="btn btn-primary"
                          onClick={() => {
                            navigate('/assignmovietoscreen', {
                              state: { 
                                seatcount:seatcount,
                                screenid: screen._id, 
                                trid: screen.trid },
                            });
                          }}
                        >
                          <i className=""></i>Manage Movies
                        </button>
                       
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">Capacity: {seatcount}</div>
                    </div>
                    <br />
                    <p>Seats Created Under: {screen.tremail}</p>
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
