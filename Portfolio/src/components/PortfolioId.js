import React from "react";

const Portfolio = (props) => {

  return (
    <div>
      <h1>Portfolio {props.match.params.id}</h1>
      <p>I am the item {props.match.params.id}</p>
    </div>
  );
};

export default Portfolio;