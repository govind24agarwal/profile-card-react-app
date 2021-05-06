import React from "react";

function About() {
  return (
    <div className="about">
      <p className="desc">
        I am a student at IIIT Guwahati pursuing engineering in ECE
      </p>
      <div className="points">
        <h4>Interests: </h4>
        <ul>
          <li>Travelling</li>
          <li>Music</li>
          <li>Dancing</li>
        </ul>
      </div>
      <div className="points">
        <h4>Schooling</h4>
        <p>10th and 12th from C.L. Gupta World School</p>
      </div>
      <div className="points">
        <h4>currently working on:</h4>
        <ul>
          <li>React</li>
          <li>node JS</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
