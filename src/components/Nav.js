import React from "react";
import { tabs } from "../data";

function Nav({ index, setIndex }) {
  return (
    <div className="nav">
      {tabs.map((item) => {
        const { id, title } = item;
        return (
          <button
            className={`nav-item && ${index === id && "active"}`}
            key={id}
            onClick={() => setIndex(id)}
          >
            <h4>{title}</h4>
          </button>
        );
      })}
    </div>
  );
}

export default Nav;
