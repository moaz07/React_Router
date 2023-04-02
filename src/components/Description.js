import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Movies } from "./MoviesArray";

export default function Description() {
  const { moviePath } = useParams();
  const title = Movies.find((e) => e.Title === moviePath).Title;
  const description = Movies.find((e) => e.Title === moviePath).Description;
  const posterURL = Movies.find((e) => e.Title === moviePath).PosterURL;
  const trailer = Movies.find((e) => e.Title === moviePath).TrailerURL;
  const rating = Movies.find((e) => e.Title === moviePath).Rating;

  const backStyle = {
    background: `url("${posterURL}")`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  };

  return (
    <div style={backStyle}>
      <div className="container">
        <div className="description">
          <div className="divd1">
            <span className="titleStyle">{title}</span>
          </div>
          <div className="divd2">
            <span className="ratingStyle">{rating}/10</span>
            ||
            <span className="descStyle">{description}</span>
          </div>
          <div className="divd3">
            <Link to="/home">
              <button>Back Home</button>
            </Link>
          </div>
        </div>
        <div className="video">
          <div className="divd4">
            <iframe
              width="727"
              height="409"
              src={trailer}
              title={`${title} (Trailer)`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
