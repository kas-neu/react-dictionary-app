import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    //  setResults(response.data.meanings[0].definition);
  }

  function search(event) {
    event.preventDefault();
  }
  const apiKey = "t0f9aeaa40c036e39cfbab4e7a210ao8";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          onChange={handleKeywordChange}
          type="search"
          autoFocus={true}
          className="input-group form-input"
          placeholder="Search a word"
        />
        <input type="submit" value="search" className="btn form-button" />
      </form>
      <Results results={results} />
    </div>
  );
};

export default Dictionary;
