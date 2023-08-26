import React from 'react'
import PublicNavBar from '../componets/publicnavbar'
import Footer from '../../footer/footer'
import Register from '../componets/register'

function Registrationpage() {
  return (
    <div>
        <PublicNavBar activedjoin="active"/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default Registrationpage