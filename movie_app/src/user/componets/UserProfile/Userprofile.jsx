import "./userprofile.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../config/config";

function UserProfile() {
  const userId = localStorage.getItem("userId");
  const logintype = localStorage.getItem("logintype");
  const [user, setUser] = useState();
  const profilepicture = localStorage.getItem("profilepicture");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
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
              {logintype === "googleauth" ? 
              <div className="user-info mt-3">
              <h2>{user?.username || "No Name"}</h2>
              <p className="font-weight-bold">
                Email: {user?.email || "No Email"}
              </p>
              
            </div>:
              
              <div className="user-info mt-3">
                <h2>{user?.username || "No Name"}</h2>
                <p className="font-weight-bold">
                  Email: {user?.email || "No Email"}
                </p>
                <p className="font-weight-bold">
                  Date of Birth: {user?.dob || "Verified by google"}
                </p>
                <p className="font-weight-bold">
                  Phone: {user?.phone || "Verified by google"}
                </p>
              </div>
              }
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card user-actions-card">
            <div className="card-body">
              <p className="bio">{user?.bio || "Bio not Updated"}</p>
              <ul className="list-group">
                <li className="list-group-item">
                  <i
                    className="bi bi-person-fill"
                    style={{
                      cursor: "pointer",
                      color: "#435ebe ",  // Set the color to blue
                      textDecoration: "none",
                      fontFamily: "Arial, sans-serif",  // Change the font family
                      fontSize: "16px",  // Set the font size
                      fontStyle: "normal", 
                    }}
                    onClick={() => {
                      navigate("/editmyprofile", {
                        state: {
                          id: user?._id || "",
                          name: user?.username || "",
                          email: user?.email || "",
                          dob: user?.dob || "",
                          phone: user?.phone || "",
                        },
                      });
                    }}
                  >
                    {" "}
                    Edit Profile
                  </i>
                </li>

                <li className="list-group-item">
  {logintype === "googleauth" ? (
    <>
      <i className="bi bi-shield-shaded"
       style={{
        cursor: "",
        color: "",  // Set the color to blue
        textDecoration: "none",
        fontFamily: "Arial, sans-serif",  // Change the font family
        fontSize: "16px",  // Set the font size
        fontStyle: "normal", 
      }}
      
      > Change Password Not Available</i> 
      <img
        style={{ width: "37px", height: "22px" }}
        src="assets/googleauth/verifiedlogo.png"
        alt="Google Auth Image"
      />
    </>
  ) : (
    <Link to="/changepassword">
      <i className="bi bi-shield-shaded"></i> Change Password
    </Link>
  )}
</li>

                <li className="list-group-item">
                  <Link to="/favmovies">
                    <i className="bi bi-heart-fill"></i> My Saved Collections
                  </Link>
                </li>
                <li className="list-group-item" id="mybookings">
                  <Link to="/mybookings">
                    <i className="bi bi-bookmark-check-fill"></i> My Booking
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/userhome">
                    {" "}
                    <i className="bi bi-book-fill"></i> Explore
                  </Link>
                </li>
                {/* <li className="list-group-item">
                  <i className="bi bi-geo-fill"></i> Pick Location
                </li> */}
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
