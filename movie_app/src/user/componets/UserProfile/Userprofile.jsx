import './userprofile.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../config/config";

function UserProfile() {
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState();
  const profilepicture = localStorage.getItem("profilepicture");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card user-profile-card">
            <div className="card-body">
              <div className="user-avatar text-center">
                <img
                  src={profilepicture || "assets/images/faces/4.jpg"}
                  alt="Profile Picture"
                  className="img-fluid rounded-circle profile-picture"
                />
              </div>
              <div className="user-info mt-3">
                <h2>{user?.username  || 'No Name'}</h2>
                <p className="font-weight-bold">Email: {user?.email || 'No Email'}</p>
                <p className="font-weight-bold">Date of Birth: {user?.dob || 'Verified by google'}</p>
                <p className="font-weight-bold">Phone: {user?.phone || 'Verified by google'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card user-actions-card">
            <div className="card-body">
              <p className="bio">{user?.bio || 'Bio not Updated'}</p>
              <ul className="list-group">
              <li className="list-group-item">
                 <Link to='/usereditprofile'><i className="bi bi-person-fill"></i> Edit Profile</Link> 
                </li>
                <li className="list-group-item">
                 <Link to='/favmovies'><i className="bi bi-heart-fill"></i> My Saved Collections</Link> 
                </li>
                <li className="list-group-item">
                 <Link to='/mybookings'><i className="bi bi-bookmark-check-fill"></i> My Booking</Link> 
                </li>
                <li className="list-group-item">
                <Link to='/userhome'>  <i className="bi bi-book-fill"></i> Explore</Link> 
                </li>
                <li className="list-group-item">
                  <i className="bi bi-geo-fill"></i> Pick Location
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     <br></br>
    </div>
  );
}

export default UserProfile;
