
import Homecards from "./homecomponets/homecards";
import React from "react";

function TheaterHome() {

    const username = localStorage.getItem("name");
    //const useremail = localStorage.getItem("email");
    //const profilepicture = localStorage.getItem("profilepicture");
    //console.log(username);
    //console.log(useremail);

    //const trid = useSelector((state) => state.user.userid);



    return (

        <div id="main" style={{ backgroundColor: "#f2f7ff" }}>
            <header className="mb-3">
                <p className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3"></i>
                </p>
            </header>
            <div className="page-heading">
                <div>
                    <h3>Welcome {username}</h3>
                </div>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="">
                        <div className="row">
                            <Homecards />
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default TheaterHome;
