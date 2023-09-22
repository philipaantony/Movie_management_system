import React, { useEffect } from 'react';
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import { baseUrl } from "../../config/config";
import { gapi } from 'gapi-script';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/user/userSlice";

const client_id ="415883522909-affclmvul298eml0ai6tlvs7m3lruo33.apps.googleusercontent.com"


function GoogleauthLogin({ onChildData }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  useEffect(() => {

    gapi.load('client:auth2', () => {
      // Initialize the Google API client
      gapi.client.init({
        apiKey: '',
        discoveryDocs: '',
        clientId: client_id,
        scope: ''
    })
      .then(() => {
       
      })
      .catch((error) => {
        console.error('Error initializing Google API client:', error);
      });
    });
  }, []);
   

    const onSuccess = (response) => {
        console.log(response.profileObj);
        const { profileObj } = response;
        const { name, email } = profileObj; 
        console.log('User data - Name:', name);
        console.log('User data - Email:', email);
        const data = {
          email:email,
          password:'googleauth'
        }
         axios
      .post(`${baseUrl}/api/login`, data)
      .then((response) => {
        console.log("Success:", response)
        console.log(response.data.existingLogin.usertype);
        console.log(response.data.existingLogin.status);
        if (response.data.existingLogin.usertype === "user") 
        {
          alert("Login Successfull");
          dispatch(login({ useremail: data.email }));
          navigate("/userhome");
        } 
        else if (response.data.existingLogin.status === "Not-Authorised") 
        {
          alert("No Account Found Within Google.");
          onChildData("No");
        } 
        else {
          alert("Invalid credentials");
        }
      
      }).catch((error) => {
        console.error("Error:", error);
        alert("No Account Found..");
       
      });;
      };

      const onFailure = (response) => {
        console.log(response); // You can handle the user data here
      };


  return (
    <>
    
    <div className="text-center" >
    <GoogleLogin
     style={{
      border: '2px solid'
    }}
        className=" btn-block btn-lg "
        clientId={client_id} // Replace with your actual client ID
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false} 
      />
      </div>
      <br></br>
      <div className="mt-2 position-relative text-center">
            <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
              -Create Account Manually-
             
            </p>
          
          </div>
      <br></br>
    
     
      
    
    
    </>
  )
}

export default GoogleauthLogin