import React from 'react'
import Publicnavbarblack from '../componets/publicnavbarblack'
import Theaterregistration from '../componets/theaterregistration'
import Footer from '../../footer/footer'

function TheaterRegistrationPage() {
  return (
    <div>
         <Publicnavbarblack activetheater="active"/>
         <Theaterregistration/>
         <Footer/>
    </div>
  )
}

export default TheaterRegistrationPage