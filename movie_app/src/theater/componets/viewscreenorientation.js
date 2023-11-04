import React, { useState } from "react";


function Viewscreenorientation(props) {

    const rows = props.rows;
    const columns = props.cols;
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
    console.log(alphabet[1]);


    const myorientation = props.orientationProp ? props.orientationProp : ",";
    console.log(myorientation);

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
                                for (let i = 0; i < rows; i++) {
                                    const seatCols = [];
                                    for (let j = 1; j <= columns; j++) {
                                        const seatNumber = alphabet[i] + "-" + j;
                                        const seactno = alphabet[i] + "-" + j;
                                        const isSelected = selectedSeats.includes(seatNumber);
                                        const isUnavailable = unavailable.includes(seactno);
                                        //If seactno exists in the unavailable array, it means that the seat is marked as unavailable, and isUnavailable will be true.
                                        const backgroundColor = isSelected ? "#60E01C" : "";

                                        seatCols.push(
                                            <div
                                                className="seat"
                                                style={{}}
                                                key={seatNumber}
                                            >
                                                {isUnavailable ? (
                                                    <div class="seat unavailable"></div>
                                                ) : (
                                                    <button

                                                        className="btn btn-outline-dark btn-sm"
                                                        style={{
                                                            fontSize: "10px",
                                                            backgroundColor: backgroundColor, height: "38px", width: '38px'
                                                        }}
                                                        onClick={() => handleClick(seatNumber)}
                                                    >
                                                        {alphabet[i] + "" + j}
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

                </>
            ) : null}
        </div>
    );
}

export default Viewscreenorientation;
