import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{`${synonym} `}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default Synonyms;
