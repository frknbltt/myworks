import "./Group22.css";
import React, { Component } from "react";

class Group22 extends Component {
  render() {
    return (
      <div className="group22">
        <div className="left-side">
          <h4>Check our sales. </h4>
          <p>
            Up to <span>70% discount </span> on the season end products.
          </p>
        </div>
        <i>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#E3F6F5" />
            <path
              d="M29.5625 14.4375L14.4375 29.5625"
              stroke="#2C3E50"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.4375 14.4375L29.5625 29.5625"
              stroke="#2C3E50"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </div>
    );
  }
}
export default Group22;
