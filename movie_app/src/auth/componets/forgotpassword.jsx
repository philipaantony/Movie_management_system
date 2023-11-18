import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../config/config";
import axios from "axios";

function ForgotPassword(props) {

  console.log(props.useremail);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,setValue,
    formState: { errors },
  } = useForm({mode: "onChange"});

  useEffect(() => {

    setValue('email',props.useremail  || ''); 
  }, []);


  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/forgotpassword`, data);
      console.log("Success:", response.data.message);
      alert(response.data.message);
      if (response.data.status === true) {

        if(props.title)
        {
          navigate("/useropt", {
            state: {
              email: data.email,
            },
          });
        }
        else{
          navigate("/verify", {
            state: {
              email: data.email,
            },
          });
        }
        
      }
    } catch (error) {
      console.error(error.response);
      alert(error.response.data.error);
    } finally {
      setIsLoading(false); // Set loading back to false when the request is complete
    }
  };

  const validationRules = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/i,
        message: 'Invalid email address',
      },
    },
    
  };
  return (
    <>
      <br></br>
      <br></br>
      <div className="container" style={{}}>
        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
          <div
            className="col-xl-4 col-lg-5 col-md-7 mx-auto"
            style={{ width: "420px" }}
          >
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5>{props.title ? props.title :'Forgot Password'}</h5>
                <p className="">
                  Reset your password by typing your email below
                </p>
              </div>

              <br></br>
              <div className="card-body">
                <form role="form text-left" onSubmit={handleSubmit(onSubmit)}>



                  {props.useremail ? 
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
                    disabled={true}

                  />
                </div>
                  
                  :<div className={`mb-3 ${errors.email ? "has-danger" : ""}`}>
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
                  </div>}
                  

                  <p className="text-danger">
                    {" "}
                    {errors?.email && errors.email.message}
                  </p>

                  <div className="text-center">
                    {isLoading ? ( // Conditionally render the spinner when isLoading is true
                       <button
                       
                       className="attractive-button btn-block btn-lg shadow-lg mt-5"
                     >
                       <div class="spinner-border text-light" role="status">
  <span class="sr-only">Sending OTP...</span>
</div>
                     </button>
                    ) : (
                      <button
                        type="submit"
                        className="attractive-button btn-block btn-lg shadow-lg mt-5"
                      >
                        Send Email
                      </button>
                    )}
                  </div>
                  {props.title ? '' :
                  
                  <p className="text-sm mt-3 mb-0">
                  Already have an account?
                  <Link to="/">
                    <a className="font-bold">Login</a>
                  </Link>
                </p>
                  
                  }
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
