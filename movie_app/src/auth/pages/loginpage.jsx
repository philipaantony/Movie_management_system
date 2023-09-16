import React from 'react'
import Login from '../componets/login'
import Footer from '../../footer/footer'

import Publicnavbarblack from '../componets/publicnavbarblack'
import WallpaperChanger from '../componets/wallpaperchange'


function Loginpage() {
  return (
    <div>
      <WallpaperChanger/>
      <div className='wallpaper-myclass'>
        <Publicnavbarblack activehome="active" button="reg"/>
        <Login/>
        <Footer/>
      </div>
    </div>
  )
}

export default Loginpage