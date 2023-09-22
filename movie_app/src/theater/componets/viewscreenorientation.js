import React, { useState } from "react";


function Viewscreenorientation(props) {

    const rows = props.rows;
    const columns = props.cols;
    //console.log(rows);
    //console.log(columns);

    const myorientation = props.orientationProp ? props.orientationProp : ",";
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
    );
}

export default Viewscreenorientation;
