import React from 'react'
import Footer from '../../footer/footer'
import ForgotPassword from '../componets/forgotpassword'
import Publicnavbarblack from '../componets/publicnavbarblack'

function ForgotPasswordPage() {
  return (
    <div>
        <Publicnavbarblack activehome="active" button="reg"/>
        <ForgotPassword/>
        <Footer/>
    </div>
  )
}

export default ForgotPasswordPage