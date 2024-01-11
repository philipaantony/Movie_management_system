import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import { Chart } from "react-google-charts";
import axios from "axios";
import UserNavBar from "../SideBar/theater_sidebar";

function TSBooked() {
  const location = useLocation();
  const navigate = useNavigate();

  const movie_id = location.state.movie_id;
  const date = location.state.date;
  const trid = localStorage.getItem("userId");
  const screen_id = location.state.screen_id;
  const time_id = location.state.time_id;
  const seatcount = location.state.seatcount;

  const [chartData, setChartData] = useState(null);
  const [theatre, settheatre] = useState([]);
  const [rows, setrows] = useState(6);
  const [columns, setcolumns] = useState(6);
  const [myorientation, setmyorientation] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedseats, setbookedseats] = useState("");
  const seatPrice = 150; // Price per seat

  // Calculate the total price based on the number of selected seats
  const totalPrice = selectedSeats.length * seatPrice;

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/getmytheatre-user/${time_id}`)
      .then((response) => {
        setrows(response.data.rows);
        setcolumns(response.data.columns);
        setmyorientation(response.data.orientation);
        settheatre(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const mydata = {
      theater_id: trid,
      screen_id: screen_id,
      show_time_id: time_id,
      date: date,
      movie_id: movie_id,
    };
    axios
      .get(`${baseUrl}/api/fetchbookedseats`, {
        params: mydata,
      })
      .then((response) => {
        if (response.data) {
          setbookedseats(response.data.BookedSeats);
          const bookedSeatsCount = response.data.BookedSeats.split(",").length;

          // Chart data
          const chartData = [
            ["Task", "Count"],
            ["UnBooked", Math.max(0, seatcount - bookedSeatsCount)],
            ["Booked", Math.min(seatcount, bookedSeatsCount)],
          ];

          setChartData(chartData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedSeats]);

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const unavailable = myorientation.split(",");
  const mybooking = bookedseats.split(",");

  const isBooked = (seatNumber) => mybooking.includes(seatNumber);

  const handleClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSeats) =>
        prevSeats.filter((seat) => seat !== seatNumber)
      );
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
    }
  };

  const renderPieChart = () => {
    return (
      <Chart
        chartType="PieChart"
        data={chartData}
        options={{
          title: `Booking Distribution for ${new Date(
            date
          ).toLocaleDateString()}`,
          is3D: true,
        }}
        width="100%"
        height="300px"
      />
    );
  };

  return (
    <div>
      <UserNavBar />
      <br></br>
      <div className="card-content" id="main">
        <div className="card-body">{renderPieChart()}</div>
      </div>
      {myorientation ? (
        <>
          <div id="main">
            <div class="seat-grid" style={{ margin: "10px", padding: "10px" }}>
              {(() => {
                const seatRow = [];
                for (let i = 0; i < rows; i++) {
                  const seatCols = [];
                  for (let j = 1; j <= columns; j++) {
                    const seatNumber = alphabet[i] + "-" + j;
                    const seactno = alphabet[i] + "-" + j;
                    const isSelected = selectedSeats.includes(seatNumber);
                    const isUnavailable = unavailable.includes(seactno);
                    const isBookedSeat = isBooked(seatNumber); // Check if seat is booked
                    const backgroundColor = isSelected
                      ? "#25CA00" //green
                      : isBookedSeat
                        ? "#e33545  "
                        : "";

                    seatCols.push(
                      <div className="seat" key={seatNumber}>
                        {isUnavailable ? (
                          <div class="seat unavailable"></div>
                        ) : (
                          <div>
                            {isBookedSeat ? (
                              <button
                                className="btn btn-outline-dark btn-sm"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: backgroundColor,
                                  height: "38px",
                                  width: "38px",
                                  cursor: "not-allowed",
                                }}
                              >
                                {alphabet[i] + "" + j}
                              </button>
                            ) : (
                              <button
                                className="btn btn-outline-dark btn-sm"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: backgroundColor,
                                  height: "38px",
                                  width: "38px",
                                }}
                                onClick={() => handleClick(seatNumber)}
                              >
                                {alphabet[i] + "" + j}
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }
                  seatRow.push(
                    <div className="myrow" key={i}>
                      {seatCols}
                    </div>
                  );
                }
                return seatRow;
              })()}
            </div>
          </div>

        </>
      ) : null}
    </div>
  );
}

export default TSBooked;
