import ReactDOM from "react-dom/client";
import React from "react";
import './public/seat.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateSeatOrientation from "./theater/theater_orientation";
import TheaterHomePage from "./theater/pages/theater_home_page";
import AddScreen from "./theater/componets/add_screen";
import ViewScreens from "./theater/componets/view_screens_list";
import Viewscreenorientation from "./theater/componets/viewscreenorientation";
import AddNewTheaterPage from "./theater/pages/add_new_theater_page";
import Viewtheaterlistpage from "./theater/pages/view_theater_list_page";
import UserHomePages from "./user/pages/userhome_page";
import UserAboutPage from "./user/pages/user_about_page";
import Loginpage from "./auth/pages/loginpage";
import Registrationpage from "./auth/pages/registrationpage";
import AdminHomePage from "./admin/pages/admin_home_page";
import AdminAddMoviePage from "./admin/pages/admin_add_movie_page";
import Adminviewaddedmoviespage from "./admin/pages/admin_view_added_movie_page";
import UserViewMovie from "./user/pages/user_view_movie";
import ScrollToTop from "./const/ScrollToTop";
import ForgotPasswordPage from "./auth/pages/forgotpasswordpage";
import ExplorePage from "./auth/pages/explorepage";
import TheaterRegistrationPage from "./auth/pages/Theaterregistrationpage";
import RequestPending from "./auth/pages/requestpending";
import AdminViewVsersPage from "./admin/pages/admin_view_users_page";
import UserHomePage2 from "./user/pages/user_home_page2";
import AdminViewTheatersPage from "./admin/pages/admin_view_theaters_page";


export default function App() {
  const isLoggedIn = true;
  //{isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
  return (

    <div>
      <Router>
        <ScrollToTop />
        <Routes>

          <Route path="/userabout" element={<UserAboutPage />}></Route>

          <Route path="/vieworientation" element={<Viewscreenorientation />}></Route>
          <Route path="/viewscreenlist" element={<ViewScreens />}></Route>

          <Route path="/t" element={<TheaterHomePage />}></Route>
          <Route path="/addnewscreen" element={<AddScreen />} />

          <Route path="/addnewtheater" element={<AddNewTheaterPage />} />
          <Route path="/viewtheater" element={<Viewtheaterlistpage />} />
          <Route path="/seat" element={<CreateSeatOrientation />} />

          <Route path="/addmovie" element={<AdminAddMoviePage />} />
          <Route path="/viewmovie" element={<UserViewMovie />} />

          <Route path="/userhome" element={<UserHomePage2 />}></Route>
          <Route path="/userhome2" element={<UserHomePages />}></Route>
          <Route path="/viewusers" element={<AdminViewVsersPage />}></Route>

          <Route path="/viewtheaters" element={<AdminViewTheatersPage />}></Route>
          <Route path="/adminhome" element={<AdminHomePage />}></Route>
          <Route path="/viewaddedmovies" element={<Adminviewaddedmoviespage />}></Route>
          <Route path="/explore" element={<ExplorePage />} />

          <Route path="/theaterreg" element={<TheaterRegistrationPage />} />
          <Route path="/requestpending" element={<RequestPending />} />

          <Route path="/forgotpwd" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route exact path="/" element={<Loginpage />} />

        </Routes>
      </Router>
    </div>
  );
}


