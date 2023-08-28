import React from "react";
import { NavLink } from "react-router-dom";

const Portfolio = (props) => {

  return (
    <div>
      <p>My Portfolio items</p>
      <NavLink to="/portfolio/1">Portfolio 1</NavLink>
      <NavLink to="/portfolio/2">Portfolio 2</NavLink>
    </div>
  );
};

export default Portfolio;