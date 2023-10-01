import React from "react";
import { Link, } from "react-router-dom";

import MovieIcon from "@mui/icons-material/Movie";
import "../../public/navbar.css";
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import '../../public/buttoncss.css'

function Publicnavbarblack(props) {

    const btn = props.button;

    const headerStyle = {
        background: 'linear-gradient(to left,#212529 ,#212529 )', // Adjust the colors as needed
        color: 'white'
    };
    return (


        <header className="" style={headerStyle}>
            <nav className="navbar" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <ul className="nav-list">
                    <li>
                    
                    </li>
               
                    <Link to="/">
                        <li style={{ color: 'white' }} className={`nav-item ${props.activehome}`}>
                            Home
                        </li>
                    </Link>
                    
                    <Link to="/explore">
                        <li style={{ color: 'white' }} className={`nav-item ${props.activediscover}`}>
                            Explore
                        </li>
                    </Link>
                    <Link to="/register">
                        <li style={{ color: 'white' }}
                            className={`nav-item ${props.activedjoin}`}>
                            Join Now
                        </li>
                    </Link>
                    <Link to="/theaterreg">
                        <li style={{ color: 'white' }}
                            className={`nav-item ${props.activetheater}`}>
                            Theatre Reg
                        </li>
                    </Link>
                    <div style={{ width: "40px" }}></div>
                    
                    <div class="form-group has-search">
                        
                        <input type="text" class="form-control" placeholder="Search movie, shows...." />
                        
                    </div>
                    <div style={{ width: "3px" }}></div>
                    <div class="form-group has-search">
                    <button type="button" class="btn btn-outline-light">Search</button>
                    </div>
                </ul>
                <nav className="navbar navbar-expand navbar-light ">
                    <div className="container-fluid">
                        <div style={{ padding: "20px" }}>
                            <MovieIcon />
                        </div>
                        <div style={{ padding: "20px" }}>
                            <SlideshowSharpIcon />
                        </div>

                        {btn ? (
                            <div className="user-name text-end me-3">
                                <Link to="/register">
                                    <button type="button" className="attractive-button">
                                        Signup?
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className="user-name text-end me-3">
                                <Link to="/">
                                    <button type="button" className="attractive-button">
                                        Login?
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </nav>
        </header>


    )
}

export default Publicnavbarblack