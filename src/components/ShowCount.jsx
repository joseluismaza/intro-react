import React from "react";
import "./ShowCount.css";

const ShowCount = ({ count }) => {
  return (
    <div className="show-count">
      <h1>You clicked here {count} time</h1>
    </div>
  );
};

export default ShowCount;
