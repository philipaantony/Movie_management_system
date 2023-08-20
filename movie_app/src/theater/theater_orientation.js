import React, { useState, } from 'react';



function CreateSeatOrientation() {

    const [rows, setRows] = useState('10');
    const [columns, setColumns] = useState('20');
    //const rows = 12;
    //const columns = 20;

    //const unavailable = ['41', '42', '43', '44', '31', '32', '33', '34'];
    const [unavailableseats, setunavailableseats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);


    const handleClick = (seatNumber) => {
        console.log(unavailableseats);
        if (unavailableseats.includes(seatNumber)) {
            setunavailableseats((prevUnavailableSeats) =>
                prevUnavailableSeats.filter((seat) => seat !== seatNumber)
            );
        } else {
            setunavailableseats((prevUnavailableSeats) => [...prevUnavailableSeats, seatNumber]);
        }

    };


    return (
        <div>
            <center>
                <br></br>
                <div style={{ paddingLeft: "300px", paddingRight: "300px" }}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Number of Row:</span>
                        <input type="number" max="25" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                            value={rows}
                            onChange={(event) => setRows(event.target.value)}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Number of Cols:</span>
                        <input type="number" max="25" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                            value={columns}
                            onChange={(event) => setColumns(event.target.value)}
                        />
                    </div>
                    <br />
                    <br></br>
                    <br></br>
                </div>
            </center>


            <div class="seat-grid ">
                {(() => {
                    const seatRow = [];
                    for (let i = 1; i <= rows; i++) {
                        const seatCols = [];
                        for (let j = 1; j <= columns; j++) {
                            const seatNumber = i + '-' + j;
                            const seatno = i + '' + j;
                            const isSelected = selectedSeats.includes(seatNumber);
                            const isUnavailable = unavailableseats.includes(seatno);
                            //If seactno exists in the unavailable array, it means that the seat is marked as unavailable, and isUnavailable will be true.
                            const backgroundColor = isSelected ? '#60E01C' : '';

                            seatCols.push(
                                <div className="seat" style={{ padding: '5px' }} key={seatNumber}>


                                    {isUnavailable ? (
                                        <button
                                            className="btn btn btn-light btn-sm"
                                            style={{ color: "#d4d4d4" }}
                                            onClick={() => handleClick(seatno)}
                                        >
                                            X
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-outline-dark btn-sm"
                                            style={{ backgroundColor: backgroundColor }}
                                            onClick={() => handleClick(seatno)}
                                        >
                                            {j}
                                        </button>
                                    )}
                                </div>
                            );
                        }
                        seatRow.push(
                            <div
                                className="myrow"

                                key={i}
                            >
                                {seatCols}
                            </div>
                        );
                    }
                    return seatRow;
                })()}
            </div>
        </div>
    );
}

export default CreateSeatOrientation;
