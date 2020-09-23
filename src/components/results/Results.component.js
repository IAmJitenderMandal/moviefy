import React, { useState, useEffect } from "react";
import "./results.styles.scss";
import Axios from "../../Axios";

import Card from "../card/Card.component";

export default function Results({ selectedOption }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(selectedOption);
      //   console.log(request.data.results);
      setmovies(request.data.results);
    }
    fetchData();
  });

  return (
    <div className="results">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
