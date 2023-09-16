import React from 'react'
import PublicNavBar from '../componets/publicnavbar'
import Footer from '../../footer/footer'
import ForgotPassword from '../componets/forgotpassword'

function ForgotPasswordPage() {
  return (
    <div>
        <PublicNavBar activehome="active" button="reg"/>
        <ForgotPassword/>
        <Footer/>
    </div>
  )
}

export default ForgotPasswordPage