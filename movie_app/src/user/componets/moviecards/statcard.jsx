import React from "react";


function StatCard() {

  


    
   
  return (
    <div>
        <div className="row">
        
      <div className="col-6 col-lg-3 col-md-6">
        <div className="card">
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
        <div className="card">
          <div className="card-body px-3 py-4-5">
            <div className="row">
              <div className="col-md-4">
                <div className="stats-icon blue">
                  <i className="iconly-boldProfile" />
                </div>
              </div>
              <div className="col-md-8">
                <h6 className="text-muted font-semibold">Followers</h6>
                <h6 className="font-extrabold mb-0">183.000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body px-3 py-4-5">
            <div className="row">
              <div className="col-md-4">
                <div className="stats-icon green">
                  <i className="iconly-boldAdd-User" />
                </div>
              </div>
              <div className="col-md-8">
                <h6 className="text-muted font-semibold">Following</h6>
                <h6 className="font-extrabold mb-0">80.000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body px-3 py-4-5">
            <div className="row">
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
