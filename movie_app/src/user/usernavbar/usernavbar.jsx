import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MovieIcon from "@mui/icons-material/Movie";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import "../../public/navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider,
    CAvatar,
} from "@coreui/react";

function UserNavBar(props) {
    const navigate = useNavigate();


    return (
        <div>
            <header className="mb-3">
                <nav className="navbar">
                    <ul className="nav-list">
                        <Link to="/userhome">
                            <li className={`nav-item ${props.activehome}`}>
                                Home
                            </li>
                        </Link>
                        <Link to="/userabout"><li
                            className={`nav-item ${props.activeabout}`}
                        >
                            About Us
                        </li>
                        </Link>

                        <li className={`nav-item ${props.activediscover}`}>
                            Explore
                        </li>
                        <li
                            className={`nav-item ${props.activediscover}`}>
                            Explore
                        </li>
                        <div style={{ width: "20px" }}></div>
                        <TextField
                            variant="outlined"
                            placeholder="Search Movie,Shows..."
                            sx={{
                                backgroundColor: "white",
                                border: "",
                                "& input": {
                                    backgroundColor: "white",

                                    width: "400px", // Adjust the width as needed
                                    height: "20px", // Adjust the height to reduce the search bar's height
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </ul>
                    <nav className="navbar navbar-expand navbar-light ">
                        <div className="container-fluid">
                            <div style={{ padding: "20px" }}>
                                <NotificationsNoneIcon />
                            </div>
                            <div style={{ padding: "20px" }}>
                                <BookmarkBorderIcon />
                            </div>

                            <CDropdown variant="btn-group">
                                <CDropdownToggle color="" size="sm">
                                    <div className="user-menu d-flex">
                                        <div className="user-name text-end me-3">
                                            <h6 className="mb-0 text-gray-600">John Ducky</h6>
                                            <p className="mb-0 text-sm text-gray-600">
                                                philipantony@gmail.com
                                            </p>
                                        </div>
                                        <div className="user-img d-flex align-items-center">
                                            <div className="avatar avatar-md">
                                                <CAvatar
                                                    src={"assets/images/faces/1.jpg"}
                                                    status="success"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="">
                                        <AccountCircleIcon /> View Profile
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        <MovieIcon /> View My Booking
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        <CollectionsBookmarkIcon /> Saved Collection
                                    </CDropdownItem>
                                    <CDropdownDivider />
                                    <CDropdownItem href="">
                                        <LogoutIcon /> Logout
                                    </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </div>
                    </nav>
                </nav>
            </header>
        </div>
    );
}

export default UserNavBar;
