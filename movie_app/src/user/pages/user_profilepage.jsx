import React from 'react'
import UserNavBar from '../usernavbar/usernavbar'
import UserProfile from '../componets/UserProfile/Userprofile'
import Footer from '../../footer/footer'

function UserProfilePage() {
  return (
    <>
   
    <UserNavBar activep="active" />
    <UserProfile/>
    <Footer/>
    </>
  )
}

export default UserProfilePage