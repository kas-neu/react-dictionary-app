import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong>
        {props.meaning.definition}
      </p>
      <br />
      <Examples examples={props.meaning.example} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
};

export default Meaning;
