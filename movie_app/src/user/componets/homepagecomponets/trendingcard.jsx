import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingCard(props) {
  const navigate = useNavigate();
  const data = {
    poster_url: props.imageurl,
    moviename: props.moviename,
    genre: props.genre,
    duration: props.duration,
    release_date: props.release_date,
    director: props.director,
    language: props.language,
    description: props.dis,
    production: props.production,
    cast: props.cast,
    trailer_url: props.trailer_url,
  };
  return (
    <div
      className="col-md-2"
      onClick={() => {
        navigate("/viewmovie", {
          state: data,
        });
      }}
    >
      <div className="card">
        <img
          style={{ height: "250px" }}
          src={props.imageurl}
          className="card-img-top"
          alt="Movie Poster"
        />
        <div className="card-body" style={{ backgroundColor: "" }}>
          <h6 className="card-text" style={{ color: "" }}>
            {props.moviename}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
