import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavBar from "../usernavbar/usernavbar";
import { baseUrl } from "../../config/config";
import { useLocation,useNavigate } from "react-router-dom";

function UserViewStreamingTheatrePage() {
  const location = useLocation();
  const movie_id = location.state.movie_id;
  const [showtimes, setShowtimes] = useState([]);

 const navigate = useNavigate();


  const badgeStyles = {
    backgroundColor: "#0046B1", // Dark blue background color
    color: "#fff", // White text color
    fontSize: "14px",
    padding: "5px 10px",
    borderRadius: "7px",
  };

  const today = new Date();
  const next5Days = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/getshowtime-user/${movie_id}`)
      .then((response) => {
        setShowtimes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Organize showtimes by theater and screen_name
  const showtimesByTheaterAndScreen = {};

  showtimes.forEach((showtime) => {
    const theaterName = showtime.theater_name;
    const screen_name = showtime.screen_name;

    if (!showtimesByTheaterAndScreen[theaterName]) {
      showtimesByTheaterAndScreen[theaterName] = {};
    }

    if (!showtimesByTheaterAndScreen[theaterName][screen_name]) {
      showtimesByTheaterAndScreen[theaterName][screen_name] = [];
    }

    showtimesByTheaterAndScreen[theaterName][screen_name].push(showtime);
  });

  return (
    <div>
      <UserNavBar activehome="active" />

      <div style={{ marginLeft: "60px", margin: "30px" }}>
        <h1>
          {location.state.movieName}- {location.state.language}
        </h1>

        <div
          style={{
            margin: "10px",
            marginLeft: "40px",
            paddingLeft: "30px",
          }}
        >
          <div className="btn-group" role="group">
            {next5Days.map((date) => (
              <label
                key={date}
                style={{
                  margin: "5px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: selectedDate === date ? "#28a745" : " ",
                  color: selectedDate === date ? "#fff" : "black",
                  border: "2px solid #4caf50", // Thick green border for selected date
                  cursor: "pointer", // Change cursor on hover
                  transition: "background-color 0.3s", // Smooth transition
                }}
                className={`btn ${selectedDate === date ? "active" : ""}`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </label>
            ))}
          </div>
        </div>

        {Object.keys(showtimesByTheaterAndScreen).length === 0 ? (
          <section className="section">
            <div className="row" style={{ margin: "30px" }}>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6>No booking shows available</h6>
                    <p>Sorry, there are currently no shows available...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>
            {Object.keys(showtimesByTheaterAndScreen).map((theaterName) => (
              <div key={theaterName}>
                <section className="section">
                  <div className="row" style={{ margin: "30px" }}>
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h3>{theaterName}</h3>
                          <h6 className="">
                            Theater Location:{" "}
                            {
                              showtimesByTheaterAndScreen[theaterName][
                                Object.keys(
                                  showtimesByTheaterAndScreen[theaterName]
                                )[0]
                              ][0].theater_location
                            }
                          </h6>
                          <h5 className="card-title">
                            {Object.keys(
                              showtimesByTheaterAndScreen[theaterName]
                            ).map((screen_name) => (
                              <div key={screen_name}>
                                <div className="container">
                                  <div class="row">
                                    <div class="col-auto">
                                      <span
                                        style={badgeStyles}
                                        className="badge"
                                      >
                                        {" "}
                                        Screen :{screen_name}
                                      </span>
                                    </div>
                                    <div class="col-auto">
                                      <span
                                        style={badgeStyles}
                                        className="badge"
                                      >
                                        {
                                          showtimesByTheaterAndScreen[
                                            theaterName
                                          ][
                                            Object.keys(
                                              showtimesByTheaterAndScreen[
                                                theaterName
                                              ]
                                            )[0]
                                          ][0].theatertype
                                        }
                                      </span>
                                    </div>
                                    <div class="col-auto">
                                      <span
                                        style={badgeStyles}
                                        className="badge"
                                      >
                                        {" "}
                                        {
                                          showtimesByTheaterAndScreen[
                                            theaterName
                                          ][screen_name][0].screentype
                                        }
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    margin: "10px",
                                    marginLeft: "40px",
                                    paddingLeft: "30px",
                                  }}
                                  
                                  className="btn-group"
                                  role="group"
                                >
                                  {showtimesByTheaterAndScreen[theaterName][
                                    screen_name
                                  ].map((showtime) => (
                                    <button
                                      key={showtime._id}
                                      type="button"
                                      className="btn btn-outline-dark m-1"
                                      onClick={()=>{
                                        navigate('/selectseat',{
                                          state:{
                                            time_id:showtime.time_id,
                                            time:showtime.time}});
                                      }}
                                    >
                                      {showtime.time}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </h5>
                        </div>
                        <div className="card-body"></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserViewStreamingTheatrePage;
