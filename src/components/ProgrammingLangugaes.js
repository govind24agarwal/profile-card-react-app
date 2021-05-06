import React from "react";
import {
  FaJava,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
} from "react-icons/fa";

function ProgrammingLangugaes() {
  return (
    <div className="programming">
      <FaJs className="programming-icon" />
      <FaReact className="programming-icon" />
      <FaHtml5 className="programming-icon" />
      <FaCss3 className="programming-icon" />
      <FaJava className="programming-icon" />
      <FaPython className="programming-icon" />
    </div>
  );
}

export default ProgrammingLangugaes;
