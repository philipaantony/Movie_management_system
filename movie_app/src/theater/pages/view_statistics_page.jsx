import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config/config";
import TheaterSidebar from "../SideBar/theater_sidebar";
import { Chart } from "react-google-charts";
import { Link, useNavigate } from "react-router-dom";

function ViewStatisticsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const seatcount = location.state.seatcount;
  const movie_id = location.state.movie_id;
  console.log(movie_id);

  const screenid = location.state.screenid;
  const trid = localStorage.getItem("userId");
  const [chartData, setChartData] = useState(null);

  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/statistics`, {
        params: {
          theater_id: trid,
          screen_id: screenid,
        },
      })
      .then((response) => {
        const mydata = response.data.bookingCountsByDate;
        setChartData(mydata);
      })
      .catch((error) => {
        console.error("Error fetching theater screen:", error);
      });
  }, [trid, screenid]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/getshowtime/${screenid}`)
      .then((response) => {
        if (response.data) {
          setShowtimes(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderPieChart = () => {
    if (!chartData) return null;

    return Object.entries(chartData).map(([date, count]) => {
      const data = [["Task", "Count"]];
      const ratio = count / seatcount;

      data.push(["UnBooked", Math.max(0, seatcount - count)]);
      data.push(["Booked", Math.min(seatcount, count)]);

      return (
        <div key={date}>
          <div className="card-content">
            <div className="card-body">
              <div style={{ display: "flex", flexDirection: "row" }}>
                {showtimes.map((showtime) => (
                  <button
                    key={showtime._id}
                    style={{
                      border: "1px solid ",
                      marginLeft: "40px",
                      padding: "10px",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#146C94",
                      display: "flex", // Make the div a flex container
                      alignItems: "center", // Center its contents vertically
                      cursor: "pointer", // Add cursor pointer style
                    }}
                    onClick={() => {
                      navigate("/viewstatisticsbooking", {
                        state: {
                          date:date,
                          screen_id:screenid,
                          movie_id:movie_id,
                          time_id: showtime._id,
                        },
                      });
                    }} // Replace handleButtonClick with your click handler function
                  >
                    {showtime.time}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <h4>{new Date(date).toLocaleDateString()}</h4>
          <div>
            <p>Total Seats: {seatcount}</p>
            <p>Booked Seats: {count}</p>
            <p>Remaining Seats: {seatcount - count}</p>
          </div>
          <Chart
            chartType="PieChart"
            data={data}
            options={{
              title: `Booking Distribution for ${new Date(
                date
              ).toLocaleDateString()}`,
              is3D: true,
            }}
            width="100%"
            height="300px"
          />
        </div>
      );
    });
  };

  return (
    <div>
      <TheaterSidebar />
      <div style={{ backgroundColor: "#f2f7ff" }}>
        <div id="main">
          <section className="bootstrap-select">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Booking Statistics</h4>
                  </div>
                  <div className="card-content">
                    <div className="card-body">{renderPieChart()}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ViewStatisticsPage;
