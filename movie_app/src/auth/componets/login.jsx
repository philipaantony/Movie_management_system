import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/user/userSlice';




function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();   
      
        axios.post('http://localhost:5000/api/login', {email,password})
            .then((response) => {
                console.log("Success:", response);
                if(response.data.message === "userexist")
                {
                    
                    alert("Login Successfull");
                    dispatch(login({ useremail: email }));
                    navigate("/userhome")
                }
                else if(response.data.message === "no_user")
                {
                    alert("Invalid credentials");

                }
                else{
                    alert("Invalid credentials");
                }
              
            })
            .catch((error) => {
                console.error("Error:", error);
                 alert("Error");
      });
  };
        

   
    return (
        <div >
            <div>
                <center>
                    <div style={{ width: "70%", paddingTop: "70px" }}>
                        <div class="col-lg-5 col-12">
                            <div id="auth-left">
                                <h1 class="auth-title">Login Here</h1>
                                <p class="auth-subtitle mb-5">
                                    Log in with your data that you entered during registration.
                                </p>

                                <form onSubmit={handleLogin}>
                                    <div class="form-group position-relative has-icon-left mb-4">
                                        <input
                                            type="text"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            class="form-control form-control-xl"
                                            placeholder="Email"
                                        />
                                        <div class="form-control-icon">
                                            <i class="bi bi-person"></i>
                                        </div>
                                    </div>
                                    <div class="form-group position-relative has-icon-left mb-4">
                                        <input
                                            value={password}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            class="form-control form-control-xl"
                                            placeholder="Password"
                                        />
                                        <div class="form-control-icon">
                                            <i class="bi bi-shield-lock"></i>
                                        </div>
                                    </div>
                                    <div class="form-check form-check-lg d-flex align-items-end">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            class="form-check-label text-gray-600"
                                            for="flexCheckDefault"
                                        >
                                            Keep me logged in
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-block btn-lg shadow-lg mt-5"
                                    >
                                        Log in
                                    </button>
                                </form>
                                <div class="text-center mt-5 text-lg fs-4">
                                    <p class="text-gray-600">
                                        Don't have an account?
                                        <Link to="/signup">
                                            <a href="auth-register.html" class="font-bold">
                                                Sign up
                                            </a>
                                        </Link>
                                    </p>
                                    <p>
                                        <a class="font-bold" href="auth-forgot-password.html">
                                            Forgot password?
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 d-none d-lg-block">
                            <div id="auth-right"></div>
                        </div>
                    </div>

                </center>
            </div>
        </div>
    )
}

export default Login