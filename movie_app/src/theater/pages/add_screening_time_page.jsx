import TheaterSidebar from "../SideBar/theater_sidebar";
import AddScreeningTime from "../componets/add_screening_time";
import { useLocation } from "react-router-dom";

import GoBackButton from "../../public/gobackButton";

function AddScreeningTimePage() {
  const location = useLocation();
  console.log();
  const screenid = location.state.screenid;
  const trid = location.state.trid;

  return (
    <>
      <div style={{ backgroundColor: "#f2f7ff" }}>
        <div id="main">
          <div
            className="container mt-5 card"
            style={{ padding: "20px", background: "#f2f7ff" }}
          >
            <div
              className="card"
              style={{
                padding: "20px",
                border: "2px",
                borderRadius: "10px",
              }}
            >
              <GoBackButton />
              <TheaterSidebar />

              <AddScreeningTime screenid={screenid} trid={trid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddScreeningTimePage;
