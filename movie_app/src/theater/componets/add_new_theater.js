import React, { useState, } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import Footer from '../../footer/footer'
import { states, districtsByState, } from './../../const/states_list';

function AddNewTheater() {

    const [selectedState, setSelectedState] = useState('Kerala');
    const [selectedDistrict, setSelectedDistrict] = useState('Kottayam');

    const handleStateChange = (event) => {
        const newState = event.target.value;
        setSelectedState(newState);
        setSelectedDistrict('');
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };


    const [formData, setFormData] = useState({
        name: '',
        owner: '',
        location: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axios.post('http://localhost:5000/api/addnewtheater', formData)
            .then(response => {
                console.log('Success:', response);
                alert(response.data.message);

            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error");
            });



    };

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
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">ADD New List</h4>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h4 class="card-title">Submit the Form to add new Theater</h4>
                                                        </div>
                                                        <div class="card-content">
                                                            <div class="card-body">
                                                                <form class="form form-horizontal" onSubmit={handleSubmit}>
                                                                    <div class="form-body">
                                                                        <div class="row">
                                                                            <div class="col-md-4">
                                                                                <label>Name</label>
                                                                            </div>
                                                                            <div class="col-md-8 form-group">
                                                                                <input type="text" id="first-name" class="form-control"
                                                                                    name="name" placeholder="Theater Name" onChange={handleInputChange} />
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <label>Owner</label>
                                                                            </div>
                                                                            <div class="col-md-8 form-group">
                                                                                <input type="text" id="email-id" class="form-control"
                                                                                    name="owner" placeholder="Owner Name" onChange={handleInputChange} />
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <label>State</label>
                                                                            </div>
                                                                            <div class="col-md-8 form-group">
                                                                                <FormControl style={{ width: "300px" }}>

                                                                                    <Select value={selectedState} onChange={handleStateChange}>
                                                                                        {states.map((state) => (
                                                                                            <MenuItem key={state} value={state}>
                                                                                                {state}
                                                                                            </MenuItem>
                                                                                        ))}
                                                                                    </Select>
                                                                                </FormControl>

                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <label>District</label>
                                                                            </div>
                                                                            <div class="col-md-8 form-group">
                                                                                {selectedState && (
                                                                                    <FormControl style={{ width: "300px" }}>

                                                                                        <Select value={selectedDistrict} onChange={handleDistrictChange}>
                                                                                            {districtsByState[selectedState].map((district) => (
                                                                                                <MenuItem key={district} value={district}>
                                                                                                    {district}
                                                                                                </MenuItem>
                                                                                            ))}
                                                                                        </Select>
                                                                                    </FormControl>
                                                                                )}

                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <label>Location</label>
                                                                            </div>
                                                                            <div class="col-md-8 form-group">
                                                                                <input type="text" id="contact-info" class="form-control"
                                                                                    name="location" placeholder="Location" onChange={handleInputChange} />
                                                                            </div>


                                                                            <div class="col-sm-12 d-flex justify-content-end">
                                                                                <button type="submit"
                                                                                    class="btn btn-primary me-1 mb-1">Submit</button>
                                                                                <button type="reset"
                                                                                    class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
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

export default AddNewTheater