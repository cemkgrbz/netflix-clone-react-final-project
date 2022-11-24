import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center bg-white pl-2 rounded-lg">
      <input
        type="text"
        placeholder="Titles, genres, people"
        className="p-1 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            Navigate("/searchPage");
          }
        }}
      />
      <BsSearch className="text-black mr-2" />
    </div>
  );
}

export default Search;
