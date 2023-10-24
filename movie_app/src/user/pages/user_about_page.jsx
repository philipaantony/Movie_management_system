import React from 'react'
import UserNavBar from '../usernavbar/usernavbar'
import Footer from '../../footer/footer'

function UserAboutPage() {
  return (
    <div id="app">
    <div style={{}} className="layout-navbar">
    <UserNavBar activeabout="active"/>
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <h2>About Us</h2>
            <p>
                Welcome to our online movies management and movie booking website! We are dedicated to providing you with the best movie-watching experience right from the comfort of your home or at the cinema.
            </p>
            
            <p>
                Our platform offers a wide selection of movies, including the latest releases, classics, and everything in between. You can easily explore our movie catalog, read descriptions, watch trailers, and make informed decisions about what to watch next.
            </p>
            <p>
                Additionally, we provide a seamless movie booking experience for those who prefer to enjoy films on the big screen. With our user-friendly interface, you can quickly browse showtimes, select seats, and secure your tickets for upcoming movie screenings.
            </p>
            <p>
                Thank you for choosing us as your go-to source for online movie entertainment. Whether you're a cinephile or a casual moviegoer, we're here to enhance your movie-watching journey.
            </p>
        </div>
        <div className="col-md-6">
            
        </div>
    </div>
</div>
</div>
<Footer/>
</div>
  )
}

export default UserAboutPage