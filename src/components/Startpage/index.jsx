import React from "react";
import "./index.css";
import Searchbar from "../Searchbar";
import DateTime from "../DateTime";

const Startpage = () => {
  return (
    <main className="start-page">
      <DateTime />
      <Searchbar />
    </main>
  );
};

export default Startpage;
