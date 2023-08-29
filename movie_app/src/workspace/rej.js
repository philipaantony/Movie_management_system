import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register() {


    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:5000/api/register", data)
            .then((response) => {
                console.log("Success:", response);
                alert(response.data.message);
            })
            .catch((error) => {
                ; console.error(error.response.data);
                alert(error.response.data);
            });


    }



    const validationRules = {
        username: {
            required: "**Name is required",
            minLength: {
                value: 3,
                message: "**Name must have at least 3 characters",
            },
        },
        email: {
            required: 'Email is required',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
            },
        },
        phone: {
            required: 'Phone number is required',
            pattern: {
                value: /^[0-9]{10}$/i,
                message: 'Invalid phone number',
            },
        },
        dob: {
            required: 'Date of birth is required',
        },
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
            },
        },
        confirmPassword: {
            required: 'Confirm password is required',
            validate: (value, context) => {
                return value === context.password || 'Passwords do not match';
            },
        },

    }

    return (
        <div>
            <center>
                <div style={{ width: "70%", paddingTop: "70px" }}>
                    <div>
                        <div className="col-lg-5 col-12">
                            <div id="auth-left">
                                <h1 className="auth-title">Sign Up Here</h1>
                                <p className="auth-subtitle mb-5">
                                    Input your data to register to our website.
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            name="username"
                                            {...register("username", validationRules.username)}
                                            type="text"
                                            className="form-control form-control-xl"
                                            placeholder="Full Name"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                        <p className="text-danger">
                                            {" "}
                                            {errors?.username && errors.username.message}
                                        </p>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            name="email"
                                            {...register("email", validationRules.email)}
                                            type="text"
                                            className="form-control form-control-xl"
                                            placeholder="Email"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <p className="text-danger">
                                            {" "}
                                            {errors?.email && errors.email.message}
                                        </p>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            name="phone"
                                            {...register("phone", validationRules.phone)}
                                            type="text"
                                            className="form-control form-control-xl"
                                            placeholder="Phone Number"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-phone"></i>
                                        </div>
                                        <p className="text-danger">
                                            {" "}
                                            {errors?.phone && errors.phone.message}
                                        </p>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            name="dob"
                                            {...register("dob", validationRules.dob)}
                                            type="date"
                                            className="form-control form-control-xl"
                                            placeholder="DOB"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                        <p className="text-danger">
                                            {" "}
                                            {errors?.dob && errors.dob.message}
                                        </p>
                                    </div>



                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            name="password"
                                            {...register("password", validationRules.password)}
                                            type="password"
                                            className="form-control form-control-xl"
                                            placeholder="Password"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-shield-lock"></i>
                                        </div>
                                        <p className="text-danger">
                                            {" "}
                                            {errors?.password && errors.password.message}
                                        </p>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            name="confirmPassword"
                                            {...register("confirmPassword", validationRules.confirmPassword)}
                                            type="password"
                                            className="form-control form-control-xl"
                                            placeholder="Confirm Password"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-shield-lock"></i>
                                        </div>
                                        <p className="text-danger">
                                            {" "}
                                            {errors?.confirmPassword && errors.confirmPassword.message}
                                        </p>
                                    </div>

                                    <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                                        Sign Up
                                    </button>
                                </form>

                                <div className="text-center mt-5 text-lg fs-4">
                                    <p className="text-gray-600">
                                        Already have an account?
                                        <Link to="/">
                                            <a href="a" className="font-bold">
                                                Log in
                                            </a>
                                        </Link>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>

        </div>
    )
}

export default Register