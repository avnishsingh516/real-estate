import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="intro">
        <p>Looking for a Property !</p>
        <h1>
          <span>Buy </span>and<span> Sell</span> properties
        </h1>
        <p className="details">
          cursus turpis massa tincidunt dui ut ornare lectus sit amet est
          placerat in egestas erat imperdiet sed euismod nisi porta?
        </p>
        <a href="#" className="header-btn">
          Details
        </a>
      </div>
    </div>
  );
}

export default Header;
