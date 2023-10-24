import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import axios from "axios";


function UserSelectSeat() {

    const location = useLocation();
    const time = location.state.time;
    const time_id=location.state.time_id;
    const navigate = useNavigate();

    const [theatre, settheatre] = useState([]);
    const [rows, setrows] = useState(6);
    const [columns, setcolumns] = useState(6);
    const [myorientation, setmyorientation] = useState('');

    useEffect(() => {
        axios
          .get(`${baseUrl}/api/getmytheatre-user/${time_id}`)
          .then((response) => {
            console.log(response.data);
            setrows(response.data.rows);
            setcolumns(response.data.columns);
            setmyorientation(response.data.orientation)
            settheatre(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);


    
    //const columns = theatre.cols;
    //console.log(rows);
    //console.log(columns);

   // const myorientation = theatre.orientationProp ? theatre.orientationProp : ",";
    //console.log(myorientation);

    const unavailable = myorientation.split(",");
    //console.log(unavailable)

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleClick = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats((prevSeats) =>
                prevSeats.filter((seat) => seat !== seatNumber)
            );
        } else {
            setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
        }
    };


  return (
    <div>
            {myorientation ? (
                <>
                    <div>
                        <center>
                            <h2>Theatre Layout</h2>
                        </center>
                        <div class="seat-grid" style={{ margin: "30px", padding: "50px" }}>
                            {(() => {
                                const seatRow = [];
                                for (let i = 1; i <= rows; i++) {
                                    const seatCols = [];
                                    for (let j = 1; j <= columns; j++) {
                                        const seatNumber = i + "-" + j;
                                        const seactno = i + "-" + j;
                                        const isSelected = selectedSeats.includes(seatNumber);
                                        const isUnavailable = unavailable.includes(seactno);
                                        //If seactno exists in the unavailable array, it means that the seat is marked as unavailable, and isUnavailable will be true.
                                        const backgroundColor = isSelected ? "#60E01C" : "";

                                        seatCols.push(
                                            <div
                                                className="seat"
                                                style={{ padding: "5px" }}
                                                key={seatNumber}
                                            >
                                                {isUnavailable ? (
                                                    <div class="seat unavailable"></div>
                                                ) : (
                                                    <button
                                                        className="btn btn-outline-dark btn-sm"
                                                        style={{ backgroundColor: backgroundColor }}
                                                        onClick={() => handleClick(seatNumber)}
                                                    >
                                                        {j}
                                                    </button>
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
                    <div
                        class="card"
                        style={{
                            margin: "30px",
                            paddingLeft: "100px",
                            paddingRight: "100px",
                        }}
                    >
                        <div class="card-body">
                            <h5 class="card-title"> Selected Seats: </h5>
                            <p class="card-text">
                                {selectedSeats.map((seat, index) => (
                                    <span className="badge rounded-pill bg-danger" key={index}>
                                        {seat}{" "}
                                    </span>
                                ))}
                            </p>
                            <a class="btn btn-danger">Book Now</a>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
  )
}

export default UserSelectSeat