import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// styles for this component
import "./pagination.styles.scss";

function Pagination() {
  return (
    <div className="pagination">
      <div className="inner-container">
        <span className="next">
          <FiArrowLeft />
        </span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span className="previous">
          <FiArrowRight />
        </span>
      </div>
    </div>
  );
}

export default Pagination;
