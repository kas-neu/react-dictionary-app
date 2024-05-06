import React from "react";

const Examples = (props) => {
  if (props.examples) {
    return <div className="Examples">{` ${props.examples} `};</div>;
  } else {
    return null;
  }
};

export default Examples;
