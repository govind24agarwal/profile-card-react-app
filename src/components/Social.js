import React from "react";
import { social } from "../data";

function Social() {
  return (
    <div className="social">
      {social.map((item) => {
        const { id, icon, link } = item;
        return (
          <a
            key={id}
            href={link}
            target="_blank"
            className="social-info social-icon"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}

export default Social;
