import ReactDOM from "react-dom/client";
import React from "react";
import './public/seat.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./auth/login";
import Register from "./auth/register";
import CreateSeatOrientation from "./theater/theater_orientation";
import TheaterHomePage from "./theater/pages/theater_home_page";
import UserHomePage from "./user/pages/user_home_page";
import AddScreen from "./theater/componets/add_screen";
import LoginPage from "./auth/loginpage";
import ViewScreens from "./theater/componets/view_screens_list";
import Viewscreenorientation from "./theater/componets/viewscreenorientation";
import AddNewTheaterPage from "./theater/pages/add_new_theater_page";
import Viewtheaterlistpage from "./theater/pages/view_theater_list_page";
import UserHomePages from "./user/pages/userhome_page";
import UserAboutPage from "./user/pages/user_about_page";




export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/userabout" element={<UserAboutPage />}></Route>
          <Route path="/userhome" element={<UserHomePages />}></Route>
          <Route path="/vieworientation" element={<Viewscreenorientation />}></Route>
          <Route path="/viewscreenlist" element={<ViewScreens />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/t" element={<TheaterHomePage />}></Route>
          <Route path="/addnewscreen" element={<AddScreen />} />
          <Route path="/user" element={<UserHomePage />} />
          <Route path="/addnewtheater" element={<AddNewTheaterPage />} />
          <Route path="/viewtheater" element={<Viewtheaterlistpage />} />


          <Route path="/seat" element={<CreateSeatOrientation />} />

          <Route path="/log" element={<LoginPage />} />
          <Route exact path="/" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
