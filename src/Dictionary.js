import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

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
    </div>
  );
};

export default Dictionary;
