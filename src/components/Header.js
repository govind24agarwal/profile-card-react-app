import React from "react";
import profile from "../20201008_105349.jpg";

function Header() {
  return (
    <div className="header">
      <img className="profile" src={profile} alt="profile" />
      <div className="info">
        <h3>Govind Agarwal</h3>
        <p>@theprogrammer</p>
      </div>
    </div>
  );
}

export default Header;
