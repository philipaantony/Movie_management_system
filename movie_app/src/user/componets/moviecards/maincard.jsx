import React from 'react';
import { Link } from "react-router-dom";

function  Maincard(props) {

  console.log(props.url);

  const backgroundImage = {
    background: `url("${props.url}")`,
    backgroundSize: "cover",
    backgroundPosition: "100% 0%"
  };
  return (
    <div>
  <link rel="stylesheet prefetch" href="" /><link rel="stylesheet prefetch" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <style className="cp-pen-styles" dangerouslySetInnerHTML={{__html: "@import url(\"https://fonts.googleapis.com/css?family=Arimo:400,700\");\n\n\n* {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n\n.intro {\n  text-align: center;\n}\n\n\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\na:hover {\n  color: #6ABCEA;\n}\n\n\n\n.movie-card {\n  background: #ffffff;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 315px;\n  margin: 2em;\n  border-radius: 10px;\n  display: inline-block;\n}\n\n.movie-header {\n  padding: 0;\n  margin: 0;\n  height: 367px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.manOfSteel {\n  background: url(\"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg\");\n  background-size: cover;\n}\n\n\n\n.theDarkTower {\n  background: url(\"http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg\");\n  background-size: cover;\n  background-position: 80% 80%;\n}\n\n\n\n.header-icon-container {\n  position: relative;\n}\n\n.header-icon {\n  width: 100%;\n  height: 367px;\n  line-height: 367px;\n  text-align: center;\n  vertical-align: middle;\n  margin: 0 auto;\n  color: #ffffff;\n  font-size: 54px;\n  text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;\n  opacity: .85;\n}\n\n.header-icon:hover {\n  background: rgba(0, 0, 0, 0.15);\n  font-size: 74px;\n  text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  opacity: 1;\n}\n\n.movie-card:hover {\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);\n}\n\n.movie-content {\n  padding: 18px 18px 24px 18px;\n  margin: 0;\n}\n\n.movie-content-header, .movie-info {\n  display: table;\n  width: 100%;\n}\n\n.movie-title {\n  font-size: 24px;\n  margin: 0;\n  display: table-cell;\n}\n\n.imax-logo {\n  width: 50px;\n  height: 15px;\n  background: url(\"https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/media_kit/3e27ede823afbf139c57f1c78a03c870.jpg\") no-repeat;\n  background-size: contain;\n  display: table-cell;\n  float: right;\n  position: relative;\n  margin-top: 5px;\n}\n\n.movie-info {\n  margin-top: 1em;\n}\n\n.info-section {\n  display: table-cell;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.info-section:first-of-type {\n  text-align: left;\n}\n\n.info-section:last-of-type {\n  text-align: right;\n}\n\n.info-section label {\n  display: block;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: .5em;\n  font-size: 9px;\n}\n\n.info-section span {\n  font-weight: 700;\n  font-size: 11px;\n}\n\n@media screen and (max-width: 500px) {\n  .movie-card {\n    width: 95%;\n    max-width: 95%;\n    margin: 1em;\n    display: block;\n  }\n\n  .container {\n    padding: 0;\n    margin: 0;\n  }\n}\n" }} />
  
  
  
  <Link to="/makebooking">
  <div className="movie-card">
    <div className="movie-header" style={backgroundImage}>
      <div className="header-icon-container">
        <a href="#">
          <i className="material-icons header-icon"></i>
        </a>
      </div>
    </div>{/*movie-header*/}
    <div className="movie-content">
      <div className="movie-content-header">
        <a href="#">
          <h3 className="movie-title">{props.title}</h3>
        </a>
        <div className="imax-logo" />
      </div>
      <div className="movie-info">
        <div className="info-section">
          <label>Duration:</label>
          <span>{props.duration}</span>
        </div>{/*date,time*/}
        <div className="info-section">
          <label>Screen</label>
          <span>06</span>
        </div>
        <div className="info-section">
          <label>Row</label>
          <span>C</span>
        </div>
        <div className="info-section">
          <label>Seat</label>
          <span>18</span>
        </div>
      </div>
    </div>{/*movie-content*/}
  </div>{/*movie-card*/}
  </Link>
</div>


  )
}

export default Maincard