import React from "react";
import { Link, } from "react-router-dom";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import "../../public/navbar.css";
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';


function PublicNavBar(props) {
    return (
        <div>
            <header className="mb-3">
                <nav className="navbar" style={{paddingLeft:"50px",paddingRight:"50px"}}>
                    <ul className="nav-list">
                        <Link to="/">
                            <li className={`nav-item ${props.activehome}`}>
                                Home
                            </li>
                        </Link>
                        <Link to="/"><li
                            className={`nav-item ${props.activeabout}`}
                        >
                            About Us
                        </li>
                        </Link>

                        <li className={`nav-item ${props.activediscover}`}>
                            Explore
                        </li>
                        <Link to="/register">
                        <li
                            className={`nav-item ${props.activedjoin}`}>
                            Join Now
                        </li>
                        </Link>
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
                            <MovieIcon />
                            </div>
                            <div style={{ padding: "20px" }}>
                                <SlideshowSharpIcon/>
                            </div>

                           
                            <div className="user-name text-end me-3">  
                            <Link to="/register"><button type="button" class="btn btn-primary">Signup?</button>      </Link>                                                                      
                                        </div>
                        </div>
                    </nav>
                </nav>
            </header>
        </div>
    );
}

export default PublicNavBar;
