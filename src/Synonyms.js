import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="synonymWords" key={index}>{`${synonym}  `}</span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default Synonyms;
