import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../config/config";
import { useLocation,useNavigate } from 'react-router-dom';

function OTP() {

  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationRules = {
    password: {
      required: "**Password is required",
      minLength: {
        value: 4,
        message: "**Password must have at least 4 characters",
      },
    },
    //   password: {
    //     required: '**Password is required',
    //     pattern: {
    //         value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/,
    //         message: '**Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&+=!)',
    //     },
    // },

    confirmPassword: {
      required: "**Confirm password is required",
      validate: (value, context) => {
        return value === context.password || "**Passwords do not match";
      },
    },
  };
  const [otp, setOtp] = useState("");
  const [mystate, setmystate] = useState(true);
  const sendOTP = () => {
    axios
      .post(`${baseUrl}/api/forgotpassword/verify`, {
        otp: otp,
      })
      .then((response) => {
        console.log("Response from server:", response.data);
        if (response.data.status === true) {
          // OTP verification was successful

          console.log("OTP is valid");
          setmystate(false);
          alert("OTP Verified Successfully");
        } else {
          // OTP verification failed
          alert("Invalid OTP");
          console.log("OTP is invalid");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        console.log(error);
        // Handle any other errors here, e.g., display an error message to the user
      });
  };

  const handleVerifyOTPClick = () => {
    sendOTP();
  };

  const onSubmit = async (data) => {
    console.log(data.password);
    console.log(email);
    axios
      .patch(`${baseUrl}/api/forgotpassword/reset-password`, {
        email: email,
        newPassword:data.password
      }) .then((response) => {
        alert(response.data.message);
        console.log('Password reset successful:', response.data.message);
        navigate("/");
     
      })
      .catch((error) => {
        alert(error.response.data.error);
        console.error('Error resetting password:', error.response.data.error);
    
      });
  }

  return (
    <>
      {mystate ? (
        <div>
          <br />
          <br />
          <div className="container">
            <div className="row mt-lg-n10 mt-md-n11 mt-n10">
              <div
                className="col-xl-4 col-lg-5 col-md-7 mx-auto"
                style={{ width: "430px" }}
              >
                <div className="card z-index-0">
                  <div className="card-header text-center pt-4">
                    <h5>Verify OTP</h5>
                    <p className="">Enter Your OTP received via your Email</p>
                  </div>

                  <div className="card-body">
                    <div className="form-group">
                      <input
                        style={{ border: "2px solid #ccc" }}
                        type="text"
                        id="otpInput"
                        className="form-control"
                        value={otp}
                        placeholder="Enter Your Otp here"
                        maxLength="4"
                        onChange={(e) => setOtp(e.target.value)} // Update the OTP state when input changes
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        className="attractive-button btn-block btn-lg shadow-lg mt-5"
                        onClick={handleVerifyOTPClick} // Call the sendOTP function when the button is clicked
                      >
                        Verify Otp
                      </button>
                    </div>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ) : (
        <div>
          <br />
          <br />
          <form role="form text-left" onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                <div
                  className="col-xl-4 col-lg-5 col-md-7 mx-auto"
                  style={{ width: "430px" }}
                >
                  <div className="card z-index-0">
                    <div className="card-header text-center pt-4">
                      <h5>Reset Your Password Here</h5>
                      <p className="">
                        Enter new Password and Reset Your account
                      </p>
                    </div>

                    <div className="card-body">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="password"
                          {...register("password", validationRules.password)}
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          placeholder="Set Password"
                          aria-label="password"
                          aria-describedby="dob-addon"
                        />
                      </div>
                      <p className="text-danger">
                        {" "}
                        {errors?.password && errors.password.message}
                      </p>

                      <div className="mb-3">
                        <input
                          type="password"
                          name="confirmPassword"
                          {...register("confirmPassword", validationRules.confirmPassword)}
                          className={`form-control ${
                            errors.confirmPassword ? "is-invalid" : ""
                          }`}
                          placeholder="Confirm Password"
                          aria-label="confirmPassword"
                          aria-describedby="Confirm Password-addon"
                        />
                      </div>
                      <p className="text-danger">
                        {" "}
                        {errors?.confirmPassword &&
                          errors.confirmPassword.message}
                      </p>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="attractive-button btn-block btn-lg shadow-lg mt-5"
                        >
                          Reset Password
                        </button>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default OTP;
