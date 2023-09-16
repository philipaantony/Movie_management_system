import React from "react";




function StatCard() {
  return (
    <div>
      {/* <div class="row">
        <div class="col-6 col-lg-3 col-md-6 transparent">
          <div
            class="card card-tale"
            style={{
              background: "linear-gradient(to right, #03045e, #023e8a)", // Replace these colors with your desired gradient
              color: "white",
            }}
          >
            <div class="card-body">
            <p className="mb-4">Today’s Bookings</p>
      <div className="fs-30 mb-2" style={{ fontSize: '42px', display: 'inline-block' }}>
        4006
      </div>
      <div style={{ display: 'inline-block', marginLeft: '10px' }}>10.00%</div>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-3 col-md-6 transparent">
          <div
            class="card card-light-blue"
            style={{
              background: "linear-gradient(to right, #757bc8, #757bc8)",
              color: "white",
            }}
          >
            <div class="card-body">
              <p class="mb-4">Number of Meetings</p>
              <p class="fs-30 mb-2">34040</p>
              <p>2.00% (30 days)</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4 stretch-card transparent">
          <div
            class="card card-dark-blue"
            style={{ 
              background: "linear-gradient(to right, #272640, #3c096c)",
              color: "white" }}
          >
            <div class="card-body">
              <p class="mb-4">Total Bookings</p>
              <p class="fs-30 mb-2">61344</p>
              <p>22.00% (30 days)</p>
            </div>
          </div>
        </div>

        
      </div> */}
      <div className="row">
        <div className="col-6 col-lg-3 col-md-6">
          <div className="card" style={{background:""}}>
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon purple">
                    <i className="iconly-boldShow" />
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold">Profile Views</h6>
                  <h6 className="font-extrabold mb-0">112.000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 col-md-6">
          <div className="card" style={{background:""}}>
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon blue">
                    <i className="iconly-boldProfile" />
                  </div>
                </div>
                <div className="col-md-8" >
                  <h6 className="text-muted font-semibold">Followers</h6>
                  <h6 className="font-extrabold mb-0">183.000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 col-md-6">
          <div className="card" style={{background:""}}>
            <div className="card-body px-3 py-4-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="stats-icon green">
                    <i className="iconly-boldAdd-User" />
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold" style={{color:""}}>Following</h6>
                  <h6 className="font-extrabold mb-0" style={{color:""}}>80.000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 col-md-6">
          <div className="card" style={{background:""}}>
            <div className="card-body px-3 py-4-5">
              <div className="row" >
                <div className="col-md-4">
                  <div className="stats-icon red">
                    <i className="iconly-boldBookmark" />
                  </div>
                </div>
                <div className="col-md-8">
                  <h6 className="text-muted font-semibold">Saved Post</h6>
                  <h6 className="font-extrabold mb-0">112</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
