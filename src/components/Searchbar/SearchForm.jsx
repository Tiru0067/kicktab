import React from "react";
import { useState } from "react";

const SearchForm = (props) => {
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const {
    showAddEngine,
    searchEngines,
    searchInput,
    searchRef,
    setSearchInput,
  } = props;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const selectedEngine = searchEngines.filter((engine) => engine.isActive)[0]
      .url;
    const url = `${selectedEngine}${searchInput}`;

    if (openInNewTab) window.open(url, "_blank");
    else window.location.href = url;

    setSearchInput("");
  };

  return (
    <form
      className={`search-form ${showAddEngine ? "close" : ""}`}
      onSubmit={handleSearchSubmit}
    >
      <input
        className="search-bar"
        type="search"
        placeholder={`Search with ${
          searchEngines.filter((engine) => engine.isActive)[0].title
        }...`}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        ref={searchRef}
        autoFocus
      />
    </form>
  );
};

export default SearchForm;
