import React, { useState } from 'react';
import GoogleauthLogin from './googleauth_login';
import GoogleauthUserReg from './googleauth_userreg';


function LoginThenSignUp() {

    const [showSignup, setShowSignup] = useState(true);
    const handleChildData = (data) => {
        console.log(data)
        if (data === "No") {
           
          setShowSignup(false);
        } else {
          setShowSignup(true);
        }
      };

  return (
    <div>
<div>
     
      {showSignup ? (
        <GoogleauthLogin  onChildData={handleChildData}/>
      ) : (
        <div>
          <GoogleauthUserReg/>
           <GoogleauthLogin  onChildData={handleChildData}/>
          </div>
        
      
      )}
    </div>
    </div>
  )
}

export default LoginThenSignUp