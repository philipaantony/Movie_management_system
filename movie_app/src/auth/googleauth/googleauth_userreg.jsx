//client id
//415883522909-affclmvul298eml0ai6tlvs7m3lruo33.apps.googleusercontent.com

//Client secret
//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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { baseUrl } from "../../config/config";
import { gapi } from "gapi-script";
import { login } from "../../Redux/user/userSlice";

const client_id =
  "415883522909-affclmvul298eml0ai6tlvs7m3lruo33.apps.googleusercontent.com";

function GoogleauthUserReg() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    gapi.load("client:auth2", () => {
      // Initialize the Google API client
      gapi.client
        .init({
          apiKey: "",
          discoveryDocs: "",
          clientId: client_id,
          scope: "",
        })
        .then(() => {})
        .catch((error) => {
          console.error("Error initializing Google API client:", error);
        });
    });
  }, []);

  const onSuccess = (response) => {
    console.log(response.profileObj);
    const { profileObj } = response;
    const { name, email } = profileObj;
    console.log("User data - Name:", name);
    console.log("User data - Email:", email);
    const userData = {
      username: name,
      email: email,
      phone: "googleauth",
      dob: "googleauth",
      password: "googleauth",
    };
    console.log(userData);

    axios
      .post(`${baseUrl}/api/register`, userData)
      .then((response) => {
        console.log("Success:", response);
        if (response.data.message) {
          alert(response.data.message);
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const onFailure = (response) => {
    console.log(response); 
  };

  return (
    <>
      <div className="text-center">
        <GoogleLogin
          style={{
            border: "2px solid",
          }}
          className=" btn-block btn-lg "
          clientId={client_id} 
          buttonText="Create Account with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <br></br>
      <div className="text-center">OR</div>
      <br></br>
    </>
  );
}

export default GoogleauthUserReg;
