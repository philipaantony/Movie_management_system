import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar(props) {
  return (
    <div>
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
                                        MYEMAIL
                                    </h9>
                                    <button
                                        class="btn btn-danger"
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

                            <Link to="/user">
                                <li className="sidebar-item  ">
                                    <a href="application-checkout.html" className="sidebar-link">
                                        <i className="bi bi-basket-fill"></i>
                                        <span>Checkout User Page</span>
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
    </div>
  )
}

export default AdminSidebar