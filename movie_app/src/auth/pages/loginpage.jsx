import React from 'react'
import Login from '../componets/login'
import Footer from '../../footer/footer'
import PublicNavBar from '../componets/publicnavbar'

function Loginpage() {
  return (
    <div>
        <PublicNavBar activehome="active"/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default Loginpage