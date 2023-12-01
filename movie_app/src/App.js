import ReactDOM from "react-dom/client";
import "./public/seat.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateSeatOrientation from "./theater/theater_orientation";
import TheaterHomePage from "./theater/pages/theater_home_page";
import AddScreen from "./theater/componets/add_screen";
import Viewscreenorientation from "./theater/componets/viewscreenorientation";

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
import React, { useState, useEffect } from "react";
import Error404 from "./errorpage/error404";
import { useSelector } from "react-redux";
import UserProfilePage from "./user/pages/user_profilepage";
import AdminViewPostedMoviesPage from "./admin/pages/admin_view_posted_movies_page";
import Viewtheaterlistpage from "./theater/pages/view_screen_list_page";
import AddScreeningTimePage from "./theater/pages/add_screening_time_page";
import Otppage from "./auth/pages/otppage";
import AssignMoviesPage from "./theater/pages/assign_movies_page";
import AssignMovieToScreenPage from "./theater/pages/assign_movie_to_screen_page";
import UserViewStreamingTheatrePage from "./user/pages/user_view_streaming_theatre";
import UserSelectSeat from "./user/pages/user_select_seat";
import AdminUpadateMoviePage from "./admin/pages/admin_update_movie_page";
import UserViewFavMovies from "./user/pages/user_view_fav_movies";
import UserViewMyTickets from "./user/pages/user_view_mytickets";
import Myticket from "./user/pages/myticket";
import UserEditProfile from "./user/pages/user_edit_profile";
import UserChangePassword from "./user/pages/user_change_password";
import UserChangePassOTP from "./user/pages/user_change_pass_opt";
import ViewStatisticsPage from "./theater/pages/view_statistics_page";
import TSBooked from "./theater/pages/view_theatre_seats_booked";

export default function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const usertype = localStorage.getItem("usertype");
  const isLoggedInlocal = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  console.log("----------------->>>>>>>>>>>>");
  console.log(usertype);

  return (
    <div>
      <Router>
        <ScrollToTop />

        <Routes>
          {(isLoggedIn || isLoggedInlocal) && usertype === "user" ? (
            <>
              {/* User routes */}
              <Route path="/useropt" element={<UserChangePassOTP />} />
              <Route path="/changepassword" element={<UserChangePassword />} />
              <Route path="/editmyprofile" element={<UserEditProfile />} />
              <Route path="/myticket" element={<Myticket />} />
              <Route path="/mybookings" element={<UserViewMyTickets />} />
              <Route path="/favmovies" element={<UserViewFavMovies />} />
              <Route path="/userhome" element={<UserHomePage2 />} />
              <Route path="/selectseat" element={<UserSelectSeat />} />
              <Route path="/userhome" element={<UserHomePage2 />} />

              <Route path="/userabout" element={<UserAboutPage />} />
              <Route path="/viewmovie" element={<UserViewMovie />} />
              <Route path="/userprofile" element={<UserProfilePage />} />
            </>
          ) : usertype === "admin" ? (
            <>
              {/* Admin routes */}

              <Route path="/viewpostedmovies" element={<AdminViewPostedMoviesPage />} />
              <Route path="/updatemovie" element={<AdminUpadateMoviePage />} />
              <Route path="/viewusers" element={<AdminViewVsersPage />} />
              <Route path="/addmovie" element={<AdminAddMoviePage />} />
              <Route path="/adminhome" element={<AdminHomePage />} />
              <Route path="/viewtheaters" element={<AdminViewTheatersPage />} />
              <Route
                path="/viewtheaterapplication"
                element={<AdminApproveTheaterPage />}
              />

            </>
          ) : usertype === "theater" ? (
            <>
              {/* theatre routes */}


              <Route path="/viewstatisticsbooking" element={<TSBooked />} />
              <Route path="/viewstatistics" element={<ViewStatisticsPage />} />
              <Route path="/createnewtime" element={<AddScreeningTimePage />} />
              <Route
                path="/createnewscreen"
                element={<CreateSeatOrientation />}
              />
              <Route
                path="/vieworientation"
                element={<Viewscreenorientation />}
              ></Route>
              <Route path="/assignmovie" element={<AssignMoviesPage />}></Route>

              <Route path="/assignmovietoscreen" element={<AssignMovieToScreenPage />}></Route>
              <Route path="/theaterhome" element={<TheaterHomePage />}></Route>
              <Route path="/addnewscreen" element={<AddScreen />} />
              <Route path="/viewmyscreens" element={<Viewtheaterlistpage />} />
              <Route path="/seat" element={<CreateSeatOrientation />} />
            </>
          ) : (
            <>{/* Public routes */}</>
          )}


          <Route path="/viewstreaming" element={<UserViewStreamingTheatrePage />} />
          <Route path="/" element={<Loginpage />} />
          <Route path="/verify" element={<Otppage />} />
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
