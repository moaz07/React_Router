import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`/movie/${props.title}`}>
        <div className="card">
          <img src={props.posterURL} alt="" />
          <div className="inf1">
            <span className="title">{props.title}</span>
            <span className="rating">{props.rating}/10</span>
          </div>
          <span className="inf2">{props.description}</span>
        </div>
      </Link>
    </div>
  );
}
