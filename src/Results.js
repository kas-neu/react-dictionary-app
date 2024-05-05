import React from "react";

const Results = (props) => {
  if (props.results) {
    return <div className="Results">Hello from results</div>;
  } else {
    return null;
  }
};

export default Results;
