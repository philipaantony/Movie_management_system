import React from 'react'
import UserNavBar from '../usernavbar/usernavbar'
import ForgotPassword from '../../auth/componets/forgotpassword'
import Footer from '../../footer/footer'

function UserChangePassword() {

    const useremail = localStorage.getItem("email");

  return (
    <div>
        <UserNavBar/>
        <ForgotPassword useremail={useremail} title="Change password"/>
        <Footer/>
    </div>
  )
}

export default UserChangePassword