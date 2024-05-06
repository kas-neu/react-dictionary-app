import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

const Dictionary = (props) => {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
    //  setResults(response.data.meanings[0].definition);
  }
  function search() {
    const apiKey = "t0f9aeaa40c036e39cfbab4e7a210ao8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="intro">What do you want to look up? 👀</h2>
          <form onSubmit={handleSubmit} className="form-inline ">
            <input
              onChange={handleKeywordChange}
              type="search"
              autoFocus={true}
              className="form-input w-75"
              placeholder="Search a word"
            />
            <input type="submit" value="search" className="btn form-button" />
          </form>
          <div className="hint">try: sunset, love, dog, diving...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
};

export default Dictionary;
