import React from "react";
import {
  FiFilm,
  FiBookmark,
  FiAperture,
  FiCamera,
  FiTv,
  FiBook,
} from "react-icons/fi";

// styles for sidebar component
import "./sidebar.styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Moviefy</div>
      <div className="films">
        <ul>
          <li>
            {" "}
            <span className="icon">
              <FiFilm />
            </span>{" "}
            All Films
          </li>
          <li>
            {" "}
            <span className="icon">
              <FiBookmark />
            </span>{" "}
            Features
          </li>
          <li>
            {" "}
            <span className="icon">
              <FiBook />
            </span>{" "}
            Documentries
          </li>
          <li>
            {" "}
            <span className="icon">
              <FiAperture />
            </span>{" "}
            Shorts
          </li>
          <li>
            {" "}
            <span className="icon">
              <FiTv />
            </span>{" "}
            Tv shows
          </li>
          <li>
            {" "}
            <span className="icon">
              <FiCamera />
            </span>{" "}
            Commercials
          </li>
        </ul>
      </div>
    </div>
  );
}
