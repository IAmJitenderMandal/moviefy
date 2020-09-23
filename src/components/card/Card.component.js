import React from "react";
// styles for this component
import "./card.styles.scss";

// iamge base URL
const base_url = "https://image.tmdb.org/t/p/original";

function Card({ movie }) {
  // console.log(movie);
  return (
    <div className="card">
      <img
        src={`${base_url}/${movie.backdrop_path || movie.poster_path}`}
        alt="img"
      />
      <div className="movie-detail">
        <div className="name-rating">
          <div className="name">
            {movie.name ||
              movie.orignal_name ||
              movie.orignal_title ||
              movie.title}
          </div>
          <div className="name">{movie.vote_average}</div>
        </div>
        <div className="type">Action</div>
      </div>
    </div>
  );
}

export default Card;

// backdrop_path: "/yEvcaFO2nz8QdGVsqyVK93iLPp3.jpg"
// first_air_date: "2020-09-14"
// genre_ids: (3) [18, 9648, 10765]
// id: 90259
// media_type: "tv"
// name: "The Third Day"
// origin_country: ["US"]
// original_language: "en"
// original_name: "The Third Day"
// overview: "A unique story told over two distinct halves, "Summer" follows Sam, a man drawn to a mysterious island off the British coast where he encounters a group of islanders set on preserving their traditions at any cost. "Winter" follows Helen, a strong-willed outsider who comes to the island seeking answers, but whose arrival precipitates a fractious battle to decide its fate."
// popularity: 300.646
// poster_path: "/rNx7hgp3Cs6YPeBgvE6enNmR1Xz.jpg"
// vote_average: 6.3
// vote_count: 7
// __proto__: Object
