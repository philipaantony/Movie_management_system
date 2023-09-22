import React from 'react'
import { GoogleLogout } from 'react-google-login';

function GoogleauthLogout() {

    const logout = () => {
        // You can perform additional logout actions here if needed
        console.log('Logged out from Google');
      };


  return (
    <div>
    <GoogleLogout
        clientId="" // Replace with your actual client ID
        buttonText="Logout from Google"
        onLogoutSuccess={logout}
      />
      </div>
    
  )
}

export default GoogleauthLogout