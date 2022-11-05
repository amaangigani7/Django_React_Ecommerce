import React from "react";

const rating = [1, 2, 3, 4, 5];

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      {rating.map((r) => (
        <span key={r}>
          <i
            style={{ color }}
            className={
              value >= r
                ? "fas fa-star"
                : value >= r - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
