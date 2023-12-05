import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from "../../config/config";
import { toast, Toaster } from 'react-hot-toast';
import GoogleauthLogin from '../googleauth/googleauth_userreg';
import GoogleauthUserReg from '../googleauth/googleauth_userreg';

function Register() {


  const navigate = useNavigate();
    const {register,handleSubmit,formState:{ errors },} = useForm( {mode: "onChange"});
    const onSubmit = (data) =>
     {
     
       console.log(data);
   
       axios.post(`${baseUrl}/api/register`, data)
            .then((response) => {
                console.log("Success:", response);
                //alert(response.data.message);
                toast.success(response.data.message)
                toast.success("Please login using your email and password")
                //dispatch(login({userid:userId ,useremail: email }));
                navigate("/");
        })
        .catch((error) => {
           ;console.error(error.response.data);
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
        pattern: {
          value: /^[A-Za-z\s]+$/, // Allow only alphabetic characters and spaces
          message: '**Name should not contain numbers or special characters',
        },
      },
      email: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/i,
          message: 'Invalid email address',
        },
      },
      
      
      
      
      
      
      
      phone: {
        required: '**Phone number is required',
        pattern: {
          value: /^[6-9]{1}[0-9]{9}$/, // Allow only valid 10-digit phone numbers starting with digits 6-9
          message: '**Invalid phone number'
        },
      },
      dob: {
        required: '**Date of birth is required',
        validate: (value) => {
          const birthDate = new Date(value);
          const currentDate = new Date();
          const age = currentDate.getFullYear() - birthDate.getFullYear();
    
          if (age < 15 ) {
            return '**You must be at least 15 years old.';
          }
          if (age < 15 || age >= 90) {
            return '**Age is not Valid';
          }
    
          return true;
        },
      },
      // password: {
      //   required: '**Password is required',
      //   minLength: {
      //     value: 4,
      //     message: '**Password must have at least 4 characters',
      //   },
      // },
      password: {
        required: '**Password is required',
        pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/,
            message: '**Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&+=!)',
        },
    },
    
      confirmPassword: {
        required: '**Confirm password is required',
        validate: (value, context) => {
          return value === context.password || '**Passwords do not match';
        },
      },
    };
    


     
   
    return (
        <div>
          <div><Toaster/></div>
          <br></br>
          <div className="container" style={{}}>
       <div className="row mt-lg-n10 mt-md-n11 mt-n10" >
       <div className="col-xl-4 col-lg-5 col-md-7 mx-auto" style={{width:"430px"}}>
         <div className="card z-index-0">
          <div className="card-header text-center pt-4">
          <h5>Login with</h5>
          <p className="">
                  Log in with your data that you entered during registration.
          </p>
        </div>
        
        <div className="row px-xl-5 px-sm-4 px-3">
          
          
          
        </div>
        <div className="card-body">


          <form role="form text-left"  onSubmit={handleSubmit(onSubmit)}>
           
            <GoogleauthUserReg/>
            <div className={`mb-3 ${errors.email ? "has-danger" : ""}`}>
              <input type="text" 
                     name="username"
                     {...register("username", validationRules.username)}
                     className={`form-control ${ errors.username ? "is-invalid" : ""}`} 
                     placeholder="Full Name" 
                     aria-label="username" 
                     aria-describedby="username-addon" />
            </div>
            <p className="text-danger">
                                {" "}
                                {errors?.username && errors.username.message}
            </p>


            <div className="mb-3">
              <input type="email" 
              name="email"
              {...register("email", validationRules.email)}
              className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                placeholder="User Email" aria-label="email" 
                aria-describedby="email-addon" />
            </div>

            
            <p className="text-danger">{" "}{errors?.email && errors.email.message}</p>
             <div className="mb-3">
              <input type="text" 
              name="phone"
              {...register("phone", validationRules.phone)}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`} 
                placeholder="Phone Number" aria-label="phone" 
                aria-describedby="phone-addon" />
            </div>
            <p className="text-danger">{" "}{errors?.phone && errors.phone.message}</p>


            

            <div className="mb-3">
            Date of Birth:
              <input type="date" 
              name="dob"
              {...register("dob", validationRules.dob)}
              className={`form-control ${errors.dob ? "is-invalid" : ""}`} 
                placeholder=" Date of Birth (YYYY-MM-DD)"  
                 aria-label="dob" 
                aria-describedby="dob-addon" />
            </div>
            <p className="text-danger">{" "}{errors?.dob && errors.dob.message}</p>


            <div className="mb-3">
              <input type="password" 
              name="password"
              {...register("password", validationRules.password)}
              className={`form-control ${errors.password ? "is-invalid" : ""}`} 
                placeholder="Set Password" aria-label="password" 
                aria-describedby="dob-addon" />
            </div>
            <p className="text-danger">{" "}{errors?.password && errors.password.message}</p>


            <div className="mb-3">
              <input type="password" 
              name="confirmPassword"
              {...register("confirmPassword", validationRules.confirmPassword)}
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`} 
                placeholder="Confirm Password" aria-label="confirmPassword" 
                aria-describedby="Confirm Password-addon" />
            </div>
            <p className="text-danger">{" "}{errors?.confirmPassword && errors.confirmPassword.message}</p>




            {/* <div className="form-check form-check-info text-left">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a>
              </label>
            </div> */}

            <div className="text-center">
              <button type="submit" 
              name="testname"
              className="attractive-button btn-block btn-lg shadow-lg mt-5">Register</button>
            </div>

           

            <p className="text-sm mt-3 mb-0">
                  Already have an account? 
                  <Link to="/">
                  <a  className="font-bold">
                    Login 
                  </a>
                  </Link>
            </p>
            <p>
                  <Link to="/forgotpwd"><a className="font-bold">Forgot password?</a></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>







            
           
        </div>
    )
}

export default Register