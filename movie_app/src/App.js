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




export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/userabout" element={<UserAboutPage />}></Route>

          <Route path="/vieworientation" element={<Viewscreenorientation />}></Route>
          <Route path="/viewscreenlist" element={<ViewScreens />}></Route>

          <Route path="/t" element={<TheaterHomePage />}></Route>
          <Route path="/addnewscreen" element={<AddScreen />} />

          <Route path="/addnewtheater" element={<AddNewTheaterPage />} />
          <Route path="/viewtheater" element={<Viewtheaterlistpage />} />
          <Route path="/seat" element={<CreateSeatOrientation />} />

          <Route path="/addmovie" element={<AdminAddMoviePage claer />} />

          <Route path="/userhome" element={<UserHomePages />}></Route>
          <Route path="/adminhome" element={<AdminHomePage />}></Route>
          <Route path="/viewaddedmovies" element={<Adminviewaddedmoviespage />}></Route>

          <Route path="/register" element={<Registrationpage />} />
          <Route exact path="/" element={<Loginpage />} />

        </Routes>
      </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
