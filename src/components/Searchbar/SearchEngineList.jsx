import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import webicon from "../../assets/internet.png";

const SearchEngineList = (props) => {
  const {
    showAddEngine,
    searchEngines,
    setSearchEngines,
    focusOnSearch,
    setShowAddEngine,
    focusOnInput,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleSelectSearchEngine = (selectedEngine) => {
    const updatedEngines = searchEngines.map((engine) => {
      if (engine.id === selectedEngine.id) {
        return { ...engine, isActive: true };
      }
      return { ...engine, isActive: false };
    });

    setSearchEngines(updatedEngines);
    setIsHovered(false);
    setTimeout(() => {
      focusOnSearch();
    }, 600);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`search-engine-dropdown ${
        !isHovered || showAddEngine ? "close" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="engine-list">
        {searchEngines.map((item) => (
          <li
            key={item.id}
            className={`engine-item ${item.isActive ? "active" : ""}`}
            onClick={() => handleSelectSearchEngine(item)}
          >
            <img
              className="engine-logo"
              src={
                `https://www.google.com/s2/favicons?domain=${item.domain}` ||
                webicon
              }
              alt={item.title}
            />
          </li>
        ))}
      </ul>
      <button
        className="add-engine-btn"
        onClick={() => {
          setShowAddEngine(true);
          focusOnInput();
        }}
      >
        <IoMdAdd />
      </button>
    </div>
  );
};

export default SearchEngineList;
