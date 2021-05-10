import React, { Component } from "react";
import "./Group19.css";

class Group19 extends Component {
  render() {
    return (
      <div className="group19">
        <div>
          <h4>Some title</h4>
          <p>
            Up to <span> 70% discount</span> on the season end products.
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
            <circle cx="22" cy="22" r="22" fill="#1B5E85" />
            <path
              d="M18.25 14.5L25.75 22L18.25 29.5"
              stroke="#7ED7FF"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </div>
    );
  }
}
export default Group19;
