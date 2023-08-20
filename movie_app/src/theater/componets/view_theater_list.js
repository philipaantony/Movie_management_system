import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from '../../footer/footer'
import { useNavigate } from 'react-router-dom';

function ViewTheaterList() {

    const navigate = useNavigate();

    const [theaters, setTheaters] = useState([]);

    useEffect(() => {
        // Fetch theaters when the component mounts
        axios.get('http://localhost:5000/api/theaters')
            .then(response => {
                setTheaters(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching theaters:', error);
            });
    }, []);



    return (
        <div style={{ backgroundColor: "#f2f7ff" }}>
            <div id="main">
                <header className="mb-3">
                    <p className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3"></i>
                    </p>
                </header>
                <div className="page-heading">
                    <div>
                        <h3>Add New Theater</h3>
                    </div>
                </div>
                <div className="page-content">
                    <section className="row">
                        <div className="">
                            <div className="row">
                                <div class="container">
                                    <div class="row">
                                        <section class="section">
                                            <div class="row" id="table-head">
                                                <div class="col-12">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h4 class="card-title">Table head options</h4>
                                                        </div>
                                                        <div class="card-content">
                                                            <div class="card-body">
                                                                <p>Similar to tables and dark tables, use the modifier classes <code
                                                                    class="highlighter-rouge">.thead-light</code> or <code
                                                                        class="highlighter-rouge">.thead-dark</code> to
                                                                    make <code class="highlighter-rouge">&lt;thead&gt;</code>s appear light or
                                                                    dark gray.
                                                                </p>
                                                            </div>

                                                            <div class="table-responsive">
                                                                <table class="table mb-0">
                                                                    <thead class="thead-dark">
                                                                        <tr>
                                                                            <th>NAME</th>
                                                                            <th>Owner</th>
                                                                            <th>Location</th>
                                                                            <th>Add New Screens</th>
                                                                            <th>View Screens</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                        {theaters.map((tr, index) => {
                                                                            const handleNavigation = () => {
                                                                                const passingdata = {
                                                                                    id: tr._id
                                                                                }

                                                                                navigate('/addnewscreen', { state: passingdata });
                                                                            };

                                                                            const viewscreenlist = () => {
                                                                                const passingdata = {
                                                                                    id: tr._id
                                                                                }

                                                                                navigate('/viewscreenlist', { state: passingdata });
                                                                            }
                                                                            return (

                                                                                <tr key={tr._id}>
                                                                                    <td class="text-bold-500">{tr.name}</td>
                                                                                    <td>{tr.owner}</td>
                                                                                    <td class="text-bold-500">{tr.location}</td>
                                                                                    <td>

                                                                                        <button className='btn btn-primary' onClick={handleNavigation}>Add New Screen</button>

                                                                                    </td>
                                                                                    <td>

                                                                                        <button className='btn btn-success' onClick={viewscreenlist}>View</button>

                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        })}

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default ViewTheaterList