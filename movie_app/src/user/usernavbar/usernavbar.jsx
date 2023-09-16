import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MovieIcon from "@mui/icons-material/Movie";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import "../../public/navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/user/userSlice";
import {
  
  CDropdownDivider,
  CAvatar,
} from "@coreui/react";

function UserNavBar(props) {
  const useremail = useSelector((state) => state.user.useremail);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({ useremail: "" }));
    navigate("/");
  };

  const headerStyle = {
    background: "linear-gradient(to left,#212529 ,#212529 )", // Adjust the colors as needed
    color: "white",
  };

  return (
    <header className="" style={headerStyle}>
      <nav
        className="navbar"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        <ul className="nav-list">
          <Link to="/userhome">
            <li
              style={{ color: "white" }}
              className={`nav-item ${props.activehome}`}
            >
              Home
            </li>
          </Link>

          <Link to="/userhome2">
            <li
              style={{ color: "white" }}
              className={`nav-item ${props.activehome2}`}
            >
              Explore
            </li>
          </Link>

          <Link to="">
            <li
              style={{ color: "white" }}
              className={`nav-item ${props.activediscover}`}
            >
              Explore
            </li>
          </Link>
          <Link to="/userabout">
            <li
              style={{ color: "white" }}
              className={`nav-item ${props.activeabout}`}
            >
              About Us
            </li>
          </Link>

          <div style={{ width: "40px" }}></div>

          <div class="form-group has-search">
            <input
              type="text"
              class="form-control"
              placeholder="Search movie, shows...."
            />
          </div>
          <div style={{ width: "3px" }}></div>
          <div class="form-group has-search">
            <button type="button" class="btn btn-outline-light">
              Serach
            </button>
          </div>
        </ul>
        <nav className="navbar navbar-expand navbar-light ">
          <div className="container-fluid">
            <div style={{ padding: "20px" }}>
              <NotificationsNoneIcon />
            </div>
            <div style={{ padding: "20px" }}>
              <BookmarkBorderIcon />
            </div>
          </div>
          <div className="user-menu d-flex">



          <Dropdown alignRight>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        style={{
          border: 'none',
          boxShadow: 'none',
          background: 'transparent',
          paddingRight: '0', // Remove right padding to make it more compact
        }}
      >
        <div className="user-img d-flex align-items-center">
          <div className="user-name text-start me-3">
            <h6 style={{ color: "white", fontSize: "15px" }}>John Ducky</h6>
            <p className="mb-0 text-sm text-white-600">{useremail}</p>
          </div>
          <div className="avatar avatar-md">
            <CAvatar src={"assets/images/faces/1.jpg"} status="success" />
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          minWidth: "200px",
          border: '1px solid #ccc', // Add a border
          backgroundColor: '#fdfdfd', // Background color
        }}
      >
        <Dropdown.Item
          style={{
            color: 'blue', // Text color
          
          }}
        >
          <AccountCircleIcon /> View Profile
        </Dropdown.Item>
        <Dropdown.Item
          style={{
            color: 'green', // Text color
           
          }}
        >
          <MovieIcon /> View My Booking
        </Dropdown.Item>
        <Dropdown.Item
          style={{
            color: 'red', // Text color
          
          }}
        >
          <CollectionsBookmarkIcon /> Saved Collection
        </Dropdown.Item>
        <CDropdownDivider />
        <Dropdown.Item>
          <div onClick={handleLogout}><LogoutIcon></LogoutIcon>Logout</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     
    </div>
        </nav>
      </nav>
    </header>
  );
}

export default UserNavBar;
