import React, { useState, } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from "../config/config";
import { useSelector } from "react-redux";
import GoBackButton from '../public/gobackButton';



function CreateSeatOrientation() {

    const trid = localStorage.getItem("userId");
    const tremail = localStorage.getItem("email");
    //const trid = useSelector((state) => state.user.userid);
    //const tremail = useSelector((state) => state.user.useremail);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const validationRules = {
        name: {
            required: "**Name is required",
        },
        theatertype: {
            required: "**theatertype is required",
        },
        screenType: {
            required: "**screenType is required",
        },
        rows: {
            required: "Number of Rows is required",
            max: {
                value: 20,
                message: "Number of Rows must not exceed 20",
            },
        },
        columns: {
            required: "Number of Columns is required",
            max: {
                value: 25,
                message: "Number of Columns must not exceed 25",
            },
        },
    };

    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
    console.log(alphabet[1]);


    const onSubmit = (data) => {
        const seatString = unavailableseats.join(',');
        console.log("-----------");
        console.log(data);
        console.log(seatString);
        console.log("-----------");
        data.orientation = seatString;
        data.trid = trid;
        data.tremail = tremail;
        console.log(data);

        axios.post(`${baseUrl}/api/addnewscreen`, data)
            .then((response) => {
                console.log("Success:", response);
                alert(response.data.message);
            })
            .catch((error) => {
                ; console.error(error.response.data);
                alert(error.response.data);
            });

    };

    const [rows, setRows] = useState('10');
    const [columns, setColumns] = useState('10');
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
            <GoBackButton />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container mt-5 card" style={{ margin: "0 auto", padding: "40px", maxWidth: "700px" }}>
                    <h2>Generate Screen</h2>

                    <div class="row">
                        <div class="form-group">
                            <label for="inputAddress">Screen Name</label>
                            <input
                                type="text"
                                name="name"
                                {...register("name", validationRules.name)}
                                class="form-control"
                                placeholder="Screen Name"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </div>
                        <p className="text-danger">
                            {errors?.name && <p className="text-danger">{errors.name.message}</p>}
                        </p>

                        <div class="form-group col-md-6">
                            <label htmlFor="theaterType">Theater Type</label>
                            <div className="input-group">
                                <select
                                    className="form-control"
                                    id="theatertype"
                                    name="theaterType"
                                    {...register("theatertype", validationRules.theatertype)}


                                >
                                    <option value="">Select Theater Type</option>
                                    <option value="A/C">A/C</option>
                                    <option value="Non A/C">Non A/C</option>
                                </select>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fas fa-caret-down"><ArrowDropDownIcon /></i>
                                    </span>
                                </div>
                            </div>
                            <p className="text-danger">
                                {errors?.theatertype && <p className="text-danger">{errors.theatertype.message}</p>}
                            </p>

                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="screenType">Screen Type</label>
                            <div className="input-group">
                                <select
                                    className="form-control"
                                    id="screenType"
                                    name="screenType"
                                    {...register("screenType", validationRules.screenType)}

                                >
                                    <option value="">Select Screen Type</option>
                                    <option value="IMAX">IMAX</option>
                                    <option value="Dolby">Dolby</option>
                                    <option value="3D">3D</option>
                                    <option value="4D">4D</option>
                                    <option value="ScreenX">ScreenX</option>
                                    <option value="Standard Screen">Standard Screen</option>
                                </select>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fas fa-caret-down"><ArrowDropDownIcon /></i>
                                    </span>
                                </div>
                            </div>
                            <p className="text-danger">
                                {errors?.screenType && <p className="text-danger">{errors.screenType.message}</p>}
                            </p>

                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Number of rows</label>
                            <input type="number" class="form-control" id="inputEmail4" placeholder="Number of rows"
                                value={rows}
                                name="rows"
                                {...register("rows", validationRules.rows)}
                                onChange={(event) => setRows(event.target.value)} />
                            <p className="text-danger">
                                {errors?.rows && <p className="text-danger">{errors.rows.message}</p>}
                            </p>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Number of Columns</label>
                            <input type="number" class="form-control" id="inputPassword4" placeholder="Number of cols"
                                value={columns}
                                name="columns"
                                {...register("columns", validationRules.columns)}
                                onChange={(event) => setColumns(event.target.value)} />
                            <p className="text-danger">
                                {errors?.columns && <p className="text-danger">{errors.columns.message}</p>}
                            </p>
                        </div>
                    </div>



                </div>
                <br></br>


                <div class="seat-grid ">
                    <p>
                        Design Guidelines for Your Theatre Seating Arrangement:
                        <br></br>
                        1. Click on a seat to designate it as unavailable.
                        <br></br>
                        2. Click on the same seat again to restore its availability.
                    </p>

                    {(() => {
                        const seatRow = [];
                        for (let i = 0; i < rows; i++) {
                            const seatCols = [];
                            for (let j = 1; j <= columns; j++) {
                                const seatNumber = alphabet[i] + '-' + j;
                                const seatno = alphabet[i] + '-' + j;
                                const isSelected = selectedSeats.includes(seatNumber);
                                const isUnavailable = unavailableseats.includes(seatno);
                                //If seactno exists in the unavailable array, it means that the seat is marked as unavailable, and isUnavailable will be true.
                                const backgroundColor = isSelected ? '#60E01C' : '';

                                seatCols.push(
                                    <div className="seat"
                                        style={{}}
                                        key={seatNumber}>


                                        {isUnavailable ? (
                                            <button type='button'
                                                className="btn btn btn-light btn-sm"
                                                style={{ color: "#d4d4d4" }}
                                                onClick={() => handleClick(seatno)}
                                            >
                                                X
                                            </button>
                                        ) : (
                                            <button type='button'
                                                className="btn btn-outline-dark btn-sm"
                                                style={{
                                                    fontSize: "10px",
                                                    backgroundColor: backgroundColor, height: "38px", width: '50px'
                                                }}
                                                onClick={() => handleClick(seatno)}
                                            >
                                                {alphabet[i] + "" + j}
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
                <div className="container mt-5 card" style={{ margin: "0 auto", maxWidth: "600px" }}>
                    <button type="submit" class="btn btn-primary" style={{ margin: "10px" }}>Add New Screen </button>
                    <button
                        onClick={() => { setunavailableseats([]); }}
                        type="button" class="btn btn-danger" style={{ margin: "10px" }}>Restore </button>
                </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default CreateSeatOrientation;
