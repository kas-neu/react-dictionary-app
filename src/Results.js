import React from "react";
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="text-capitalize word">{props.results.word}</h2>

          <h3 className="phonetic">\{props.results.phonetic}\</h3>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
