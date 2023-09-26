import ReactDOM from "react-dom/client";
import './public/seat.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateSeatOrientation from "./theater/theater_orientation";
import TheaterHomePage from "./theater/pages/theater_home_page";
import AddScreen from "./theater/componets/add_screen";
import Viewscreenorientation from "./theater/componets/viewscreenorientation";
import AddNewTheaterPage from "./theater/pages/add_new_theater_page";
import UserHomePages from "./user/pages/userhome_page";
import UserAboutPage from "./user/pages/user_about_page";
import Loginpage from "./auth/pages/loginpage";
import Registrationpage from "./auth/pages/registrationpage";
import AdminHomePage from "./admin/pages/admin_home_page";
import AdminAddMoviePage from "./admin/pages/admin_add_movie_page";
import UserViewMovie from "./user/pages/user_view_movie";
import ScrollToTop from "./const/ScrollToTop";
import ForgotPasswordPage from "./auth/pages/forgotpasswordpage";
import ExplorePage from "./auth/pages/explorepage";
import TheaterRegistrationPage from "./auth/pages/Theaterregistrationpage";
import RequestPending from "./auth/pages/requestpending";
import AdminViewVsersPage from "./admin/pages/admin_view_users_page";
import UserHomePage2 from "./user/pages/user_home_page2";
import AdminViewTheatersPage from "./admin/pages/admin_view_theaters_page";
import AdminApproveTheaterPage from "./admin/pages/admin_approve_theater_page";
import RequestRejected from "./auth/pages/requestrejected";
import React, { useState, useEffect } from 'react';
import Error404 from "./errorpage/error404";
import { useSelector } from "react-redux";
import UserProfilePage from "./user/pages/user_profilepage";
import AdminViewPostedMoviesPage from "./admin/pages/admin_view_posted_movies_page";


export default function App() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const isLoggedInlocal = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn)

  return (
    <div>
      <Router>
        <ScrollToTop />

        <Routes>
          {isLoggedIn || isLoggedInlocal ? (
            <>
              {/* User routes */}
              <Route path="/userhome2" element={<UserHomePages />} />
              <Route path="/userabout" element={<UserAboutPage />} />
              <Route path="/viewmovie" element={<UserViewMovie />} />
              <Route path="/userhome" element={<UserHomePage2 />} />

              {/* Admin routes */}

              <Route path="/viewpostedmovies" element={<AdminViewPostedMoviesPage />} />
              <Route path="/viewusers" element={<AdminViewVsersPage />} />
              <Route path="/addmovie" element={<AdminAddMoviePage />} />
              <Route path="/adminhome" element={<AdminHomePage />} />
              <Route path="/viewtheaters" element={<AdminViewTheatersPage />} />
              <Route path="/viewtheaterapplication" element={<AdminApproveTheaterPage />} />
              <Route path="/userprofile" element={< UserProfilePage />} />

              {/* theatre routes */}


              <Route path="/addnewtheater" element={<AddNewTheaterPage />} />
              <Route path="/createnewscreen" element={<CreateSeatOrientation />} />
              <Route path="/vieworientation" element={<Viewscreenorientation />}></Route>
              <Route path="/theaterhome" element={<TheaterHomePage />}></Route>
              <Route path="/addnewscreen" element={<AddScreen />} />
              <Route path="/addnewtheater" element={<AddNewTheaterPage />} />
              <Route path="/seat" element={<CreateSeatOrientation />} />
            </>
          ) : (
            <>
              {/* Public routes */}

            </>

          )}
          <Route path="/" element={<Loginpage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/theaterreg" element={<TheaterRegistrationPage />} />
          <Route path="/requestpending" element={<RequestPending />} />
          <Route path="/requestrejected" element={<RequestRejected />} />
          <Route path="/forgotpwd" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}
