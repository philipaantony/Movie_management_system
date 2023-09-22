import React from "react";
import UserNavBar from "../usernavbar/usernavbar";
import Maincard from "../componets/moviecards/maincard";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import {useLocation} from 'react-router-dom';

import Footer from "../../footer/footer";


function UserViewMovie() {

  const location = useLocation();
  const url = location.state.imageurl;
  const name = location.state.moviename;

  return (
    <div >
      <UserNavBar activehome="active"/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Maincard url={url} />
          </div>
          <div className="col-md-8">
            <br></br>
            <h1 className="mb-3">{name}</h1>
            <p>
              <strong>Plot Summary:</strong> {location.state.description}
            </p>
            <div class="row">
              <div class="col">
                <p>
                  <strong>Release Date</strong>  {location.state.release_date}
                </p>
                <p>
                  <strong>Director:</strong> {location.state.director}
                </p>
                <p>
                  <strong>Genre:</strong>  {location.state.genre}
                </p>
                <p>
                  <strong>language:</strong> {location.state.language}
                </p>
              </div>
              <div class="col">
                <p>
                  <strong>Cast:</strong>  {location.state.cast}
                </p>
                <p>
                  <strong>Duration:</strong>  {location.state.duration}
                </p>
                <p>
                  <strong>Quality:</strong> HD
                </p>
                <p>
                  <strong>Production House:</strong> {location.state.production}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <button
                className="btn btn-primary btn-lg me-3"
                style={{ paddingRight: "30px" }}
              >
                Save <BookmarkAddedIcon />{" "}
              </button>
              <button className="btn btn-danger btn-lg">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default UserViewMovie;