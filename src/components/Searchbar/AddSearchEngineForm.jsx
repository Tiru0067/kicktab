import React from "react";

import { parseSearchEngineInfo } from "./utils";

const AddSearchEngineForm = (props) => {
  const {
    showAddEngine,
    inputRef,
    searchEngine,
    setSearchEngine,
    searchEngines,
    setSearchEngines,
    setShowAddEngine,
  } = props;

  const handleAddSearchEngine = (e) => {
    e.preventDefault();
    const id = searchEngines[searchEngines?.length - 1]?.id + 1;
    const { title, hostname: domain } = parseSearchEngineInfo(searchEngine);
    const newEngine = {
      id,
      title,
      url: searchEngine,
      domain,
      isActive: false,
    };
    const updatedEngines = [...searchEngines, newEngine];
    console.log(JSON.stringify(updatedEngines));
    localStorage.setItem("SearchEngines", JSON.stringify(updatedEngines));
    setSearchEngines(updatedEngines);

    setShowAddEngine(false);
    setSearchEngine("");
  };

  return (
    <form
      className={`add-engine-form ${showAddEngine ? "active" : ""}`}
      onSubmit={handleAddSearchEngine}
    >
      <input
        className="add-engine-input"
        ref={inputRef}
        type="text"
        placeholder="e.g. https://www.google.com/search?q="
        value={searchEngine}
        onChange={(e) => setSearchEngine(e.target.value)}
        onBlur={() => setShowAddEngine(false)}
      />
    </form>
  );
};

export default AddSearchEngineForm;
