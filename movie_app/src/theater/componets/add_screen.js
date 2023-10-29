import React, { useState, } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../../public/seat.css';




function AddScreen() {
    const location = useLocation();


    const iddata = location.state;
    console.log(iddata.id)
    const theaterid = iddata.id;
    const [isLoading, setIsLoading] = useState(true);
    const [rows, setRows] = useState('10');
    const [columns, setColumns] = useState('15');
    const [unavailableseats, setunavailableseats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);


    const type = "A/C";
    const screentype = "iMAX"

    setTimeout(() => {
        setIsLoading(false);
    }, 500);


    const handleClick = (seatNumber) => {
        console.log(unavailableseats);
        if (unavailableseats.includes(seatNumber)) {
            setunavailableseats((prevUnavailableSeats) =>
                prevUnavailableSeats.filter((seat) => seat !== seatNumber)
            );
        }
        else {
            setunavailableseats((prevUnavailableSeats) => [...prevUnavailableSeats, seatNumber]);
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(theaterid);
        console.log(type);
        console.log(screentype);
        console.log(rows);
        console.log(columns);
        const orientation = unavailableseats.join(',');
        console.log(orientation);

        axios.post("http://localhost:5000/api/addnewscreen", {
            theaterid,
            type,
            screentype,
            rows,
            columns,
            orientation,
        }).then((result) => {
            console.log(result);

            if (result.data.Status == 'S') {

                console.log("Success");
                alert("Screen Added");
            }
        })
            .catch((err) => {
                console.log(err);
                alert("Failed to Add");
            })


    }
    return (
        <div>

            {isLoading ? (<div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <div
                    className="spinner-border"
                    role="status"
                    style={{ width: '6rem', height: '6rem' }}
                >
                </div>
            </div>) : (<div>
                <center>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Design Your Screen Orientation Here</h2>



                    <div style={{ paddingLeft: "600px", paddingRight: "600px" }}>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Number of Row:</span>
                            <input type="number" max="25" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={rows}
                                onChange={(event) => setRows(event.target.value)} />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Number of Cols:</span>
                            <input type="number" max="25" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                value={columns}
                                onChange={(event) => setColumns(event.target.value)} />
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
                                                onClick={() => handleClick(seatno)}>
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
            </div>)}
            <button onClick={handlesubmit}>Generate Orientation</button>

        </div>
    );
}

export default AddScreen;
