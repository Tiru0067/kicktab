import React, { useRef, useState } from "react";

import AddSearchEngineForm from "./AddSearchEngineForm";
import SearchEngineList from "./SearchEngineList";
import SearchForm from "./SearchForm";
import "./index.css";

import { defaultSearchEngines } from "./searchEnginesData";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchEngines, setSearchEngines] = useState(() => {
    const savedEngines = localStorage.getItem("SearchEngines");
    return savedEngines ? JSON.parse(savedEngines) : defaultSearchEngines;
  });
  const [searchEngine, setSearchEngine] = useState("");
  const [showAddEngine, setShowAddEngine] = useState(false);

  const inputRef = useRef();
  const searchRef = useRef();

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const focusOnSearch = () => {
    searchRef.current.focus();
  };

  return (
    <div className="search-container">
      <SearchEngineList
        searchEngines={searchEngines}
        setSearchEngines={setSearchEngines}
        setShowAddEngine={setShowAddEngine}
        focusOnInput={focusOnInput}
        focusOnSearch={focusOnSearch}
        showAddEngine={showAddEngine}
      />

      <AddSearchEngineForm
        showAddEngine={showAddEngine}
        inputRef={inputRef}
        searchEngine={searchEngine}
        setSearchEngine={setSearchEngine}
        searchEngines={searchEngines}
        setSearchEngines={setSearchEngines}
        setShowAddEngine={setShowAddEngine}
      />
      <SearchForm
        showAddEngine={showAddEngine}
        searchEngines={searchEngines}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchRef={searchRef}
      />
    </div>
  );
};

export default Searchbar;
