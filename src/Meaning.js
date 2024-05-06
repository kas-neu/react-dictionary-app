import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4 className="speechPart">{props.meaning.partOfSpeech}</h4>
      <p className="definitions">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>

      <Examples examples={props.meaning.example} />

      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
};

export default Meaning;
