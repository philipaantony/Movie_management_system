import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';



function ViewScreens() {

    const navigate = useNavigate();
    const location = useLocation();
    const mystate = location.state;
    const trid = mystate.id;
    console.log(trid);


    const [data, setData] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);

    const loadData = async () => {
        const reponse = await axios.get(`http://localhost:5000/api/getscreen?id=${trid}`);
        console.log(reponse.data);
        if (reponse.data.length === 0) {
            console.log("No record");
            alert("No Screens Available");
            navigate(-1);
        }
        setData(reponse.data);
        //setIsLoading(false);
    }


    useEffect(() => { loadData() }, []);
    return (
        <center>
            <div class="container-fluid" style={{ backgroundColor: "#f2f7ff", padding: "100px", }}>
                <div className="page-content">
                    {data.map((data, index) => {
                        const handleNavigation = () => {
                            console.log(data.orientation);
                            const info = {
                                rows: data.rows,
                                columns: data.columns,
                                orientation: data.orientation
                            }
                            navigate('/vieworientation', { state: info });
                        };
                        return (
                            <div class="card text-bg-secondary mb-3" style={{ margin: "10px", maxWidth: "70rem" }}>
                                <div class="card-header">Threater Screen No {index + 1}</div>
                                <div class="card-body">
                                    <h5 class="card-title">{data.type}</h5>
                                    <p class="card-text">Rows :{data.rows}  Columns :{data.columns}</p>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">


                                        <button type="button" class="btn btn-primary" onClick={handleNavigation}>View Orientation</button>


                                        <button type="button" class="btn btn-warning">Edit Orientation</button>

                                        <button type="button" class="btn btn-danger">Delete Orientation</button>

                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </center>
    )
}

export default ViewScreens