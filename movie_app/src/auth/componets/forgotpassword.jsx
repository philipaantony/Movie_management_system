import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ForgotPassword() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        console.log(data);
      }

      const validationRules = {
        email: {
          required: "**Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        },
       
      };
  return (
    <>
    <br></br>
      <div className="container" style={{}}>
        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
          <div
            className="col-xl-4 col-lg-5 col-md-7 mx-auto"
            style={{ width: "420px" }}
          >
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5>Forgot Password</h5>
                <p className="">
               Reset your password by typing your email below
                </p>
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






                 

                 
                  <div className="text-center">
                    <button
                      type="submit"
                      className="attractive-button btn-block btn-lg shadow-lg mt-5"
                    >
                      Send Email
                    </button>
                  </div>

                  <p className="text-sm mt-3 mb-0">
                    Already have an account?
                    <Link to="/">
                      <a className="font-bold">Login</a>
                    </Link>
                  </p>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword