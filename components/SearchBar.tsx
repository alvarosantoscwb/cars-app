"use client";

import { useState } from "react";

import React from "react";
import { SearchManufacturer } from "./";

function SearchBar() {
  const [manufacturer, setSearchManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setSearchManufacturer={setSearchManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
