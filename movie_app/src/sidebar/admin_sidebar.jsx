import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/user/userSlice";


function AdminSidebar(props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const useremail = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout({ userid: "", useremail: "" }));
    navigate("/", { replace: true });
  };

  

  
  useEffect(() => {
    function hideSidebarOnResize() {
      const w = window.innerWidth;
      const sidebar = document.getElementById("sidebar");
      if (w < 1200) {
        sidebar.classList.remove("active");
      } else {
        sidebar.classList.add("active");
      }
    }
    window.addEventListener("resize", hideSidebarOnResize);
    hideSidebarOnResize();
    return () => {
      window.removeEventListener("resize", hideSidebarOnResize);
    };
  }, []);





  return (
    
    <>
     

      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active" style={{ overflow: "hidden" }}>
          <div className="sidebar-header">
            <div className="d-flex justify-content-between"></div>
          </div>
          <div className="card border-0">
            <div className="card-body py-4 px-5">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl">
                  <img src="assets/images/faces/2.jpg" alt="Face 1" />
                </div>
                <div className="ms-3 name">
                  <h5 className="font-bold">Admin Panel</h5>
                  <h9 className="text-muted mb-0" style={{ fontSize: "13px" }}>
                    {useremail}{" "}
                  </h9>
                  <button
                    onClick={() => {
                      const confirmLogout = window.confirm(
                        "Are you sure you want to log out?"
                      );
                      if (confirmLogout) {
                        handleLogout();
                      }
                    }}
                    className="btn btn-danger"
                    style={{
                      width: "130px",
                      height: "30px",
                      fontSize: "12px",
                      marginTop: "10px",
                    }}
                  >
                    LogOut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu</li>

              <li className={props.classname}>
                <Link to="/adminhome">
                  <p className="sidebar-link">
                    <i className="bi bi-grid-fill"></i>
                    <span>Dashboard</span>
                  </p>
                </Link>
              </li>

              <li className="sidebar-title">Pages</li>
              <Link to="/addmovie">
                <li className={props.newt}>
                  <a href="application-email.html" className="sidebar-link">
                    <i className="bi bi-envelope-fill"></i>
                    <span>Publish Movie</span>
                  </a>
                </li>
              </Link>

              <Link to="/viewpostedmovies">
                <li className={props.viewmovie}>
                  <a href="application-checkout.html" className="sidebar-link">
                    <i className="bi bi-basket-fill"></i>
                    <span>View Posted Movies</span>
                  </a>
                </li>
              </Link>

              <li className="sidebar-title">Raise Support</li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
