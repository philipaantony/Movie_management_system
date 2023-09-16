
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  return (
    <div>
        <div>
        <center>
          <div style={{ width: "70%", paddingTop: "70px" }}>
            <div class="col-lg-5 col-12">
              <div id="auth-left">
                <h1 class="auth-title">Forgot Password?</h1>
                <p class="auth-subtitle mb-5">
                  Enter your Registered Email below to reset your password
                </p>

                <form >
                  <div 
                    className="form-group position-relative has-icon-left mb-4 ">
                    <input
                      type="text"
                      name="email"
                      //{...register("email", validationRules.email)}
                      className={`form-control form-control-xl 
                       `}
                      placeholder="Email"
                    />
                    <div className="form-control-icon">
                      <i className="bi bi-person"></i>
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
                    Send OTP
                  </button>
                 
                </form>
                <div class="text-center mt-5 text-lg fs-4">
                  <p class="text-gray-600">
                    Do yo want to login?
                    <Link to="/">
                      <a class="font-bold">Login</a>
                    </Link>
                  </p>
                  <p>
                    <Link><a class="font-bold">Forgot password?</a>.</Link>
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

export default ForgotPassword