import React from "react";

// styles for this component
import "./filter.styles.scss";

function Filter() {
  return (
    <div className="filteration">
      <div className="search-results">All Films</div>
      <div className="filters">
        <div className="common-container">
          <select name="generes" id="generes">
            <option value="All Genres">All Genres</option>
            <option value="london">London</option>
          </select>
        </div>
        <div className="common-container">
          <select name="language" id="language">
            <option value="all-language">All Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <div className="common-container">
          <select name="country" id="country">
            <option value="all-countries">All Countries</option>
            <option value="us">US</option>
            <option value="england">England</option>
          </select>
        </div>
        <div className="common-container">
          <select name="rating" id="rating">
            <option value="all-ratings">All Ratings</option>
            <option value="5">5</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="common-container">
          <select name="sort-by" id="sort-by">
            <option value="all">All</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
