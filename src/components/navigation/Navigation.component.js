import React from "react";
import { FiSearch, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

// styles for this component
import "./Navigation.styles.scss";

function Navigation() {
  return (
    <div className="navigation">
      <div className="search">
        <div className="text-input">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Find something..." />
        </div>
      </div>
      <div className="links">
        <div className="nav-links">
          <a href="#">Films</a>
          <a href="#">Social</a>
          <a href="#">Videos</a>
          <a href="#">About</a>
        </div>
        <div className="social-medias">
          <a href="#">
            <FiFacebook />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
