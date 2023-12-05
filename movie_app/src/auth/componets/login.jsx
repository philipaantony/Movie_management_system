import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { login } from "../../Redux/user/userSlice";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../config/config";
import LoginThenSignUp from "../googleauth/loginthensignup";
import jwt_decode from "jwt-decode";

function Login() {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onChange"});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    axios
      .post(`${baseUrl}/api/login`, data)
      .then((response) => {
        console.log("Success:", response);
        const token = response.data.token;
        const decoded = jwt_decode(token);
        console.log("decoded:", decoded);
        const { username, email, userId,usertype,status } = decoded;
  
        localStorage.setItem("name", username);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", userId);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("usertype", usertype);

        if (usertype === "admin") {
          toast.success("Login Successfull as Admin")
          
          dispatch(login({userid:userId ,useremail: email }));
          navigate("/adminhome");
        } else if (usertype === "user") 
        {
          if (status === "blocked") 
          {
            alert("Account Blocked");
          }
          else
          {
            //alert("Login Successfull");
            toast.success("Login Successfull")
            dispatch(login({userid:userId ,useremail: email }));
            navigate("/userhome");
          }
          
        } else if (usertype === "theater") {
          if (status === "Pending") 
          {
            alert("Application Under Process");
            navigate("/requestpending");
          } 
          else if (status === "Rejected") {
            alert("Application Got Rejected");
            navigate("/requestrejected");
          } else if (status === "Approved") {
            alert("Login Successful as Theater");
            dispatch(login({userid:userId ,useremail: email }));
            navigate("/theaterhome");
          }
        } else if (response.data.existingLogin.status === "Not-Authorised") {
          alert("Invalid credentials");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Invalid credentials");
      });
  };

  const validationRules = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/i,
        message: 'Invalid email address',
      },
    },
    
    password: {
      required: "**Password is required",
    },
  };

  return (
    <div>
       <div><Toaster/></div>
      <br></br>
      <div className="container" style={{}}>
        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
          <div
            className="col-xl-4 col-lg-5 col-md-7 mx-auto"
            style={{ width: "420px" }}
          >
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5>Login with</h5>
                <p className="">
                  Log in with your data that you entered during registration.
                </p>
              </div>

              <div className="row px-xl-5 px-sm-4 px-3">
                <LoginThenSignUp />
              </div>
              <br></br>
              <div className="card-body">
                <form role="form text-left" onSubmit={handleSubmit(onSubmit)}>
                  <div className={`mb-3 ${errors.email ? "has-danger" : ""}`}>
                    <input
                      type="email"
                      name="email"
                      {...register("email", validationRules.email)}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>

                  <p className="text-danger">
                    {" "}
                    {errors?.email && errors.email.message}
                  </p>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      {...register("password", validationRules.password)}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                  </div>
                  <p className="text-danger">
                    {" "}
                    {errors?.password && errors.password.message}
                  </p>

                  {/* <div className="form-check form-check-info text-left">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Keep me{" "}
                      <a className="text-dark font-weight-bolder">Logged in</a>
                    </label>
                  </div> */}

                  <div className="text-center">
                    <button
                      id="testid"
                      type="submit"

                      className="attractive-button btn-block btn-lg shadow-lg mt-5"
                    >
                      Login
                    </button>
                  </div>

                  <p className="text-sm mt-3 mb-0">
                    Already have an account?
                    <Link to="/register">
                      <a className="font-bold">Sign in</a>
                    </Link>
                  </p>
                  <p>
                    <Link to="/forgotpwd">
                      <a className="font-bold">Forgot password?</a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
