import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [dob, setDob] = useState("");
    //const [gender, setGender] = useState("Male");
    const [password, setPassword] = useState("");
    const [cpassword, csetPassword] = useState("");
    return (
        <div>
            <center>
                <div id="auth">
                    <div>
                        <div className="col-lg-5 col-12">
                            <div id="auth-left">
                                <h1 className="auth-title">Sign Up Here</h1>
                                <p className="auth-subtitle mb-5">
                                    Input your data to register to our website.
                                </p>

                                <form onSubmit="">
                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                            type="text"
                                            className="form-control form-control-xl"
                                            placeholder="Full Name"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text"
                                            className="form-control form-control-xl"
                                            placeholder="Email"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={phoneno}
                                            onChange={(e) => setPhoneno(e.target.value)}
                                            type="number"
                                            className="form-control form-control-xl"
                                            placeholder="Phone Number"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-phone"></i>
                                        </div>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            type="date"
                                            className="form-control form-control-xl"
                                            placeholder="DOB"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                    </div>



                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            className="form-control form-control-xl"
                                            placeholder="Password"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-shield-lock"></i>
                                        </div>
                                    </div>

                                    <div className="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={cpassword}
                                            onChange={(e) => csetPassword(e.target.value)}
                                            type="password"
                                            className="form-control form-control-xl"
                                            placeholder="Confirm Password"
                                        />
                                        <div className="form-control-icon">
                                            <i className="bi bi-shield-lock"></i>
                                        </div>
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
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <div id="auth-right"></div>
                </div>
            </center>
        </div>
    )
}

export default Register