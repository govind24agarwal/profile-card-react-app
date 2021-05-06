import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

function Social() {
  return (
    <div className="social">
      <button className="social-info">
        <FaFacebookSquare className="social-icon" />
      </button>
      <button className="social-info">
        <FaInstagram className="social-icon" />
      </button>
      <button className="social-info">
        <FaGithub className="social-icon" />
      </button>
      <button className="social-info">
        <FaLinkedin className="social-icon" />
      </button>
      <button className="social-info">
        <FaMailBulk className="social-icon" />
      </button>
      <button className="social-info">
        <FaMailBulk className="social-icon" />
      </button>
    </div>
  );
}

export default Social;
