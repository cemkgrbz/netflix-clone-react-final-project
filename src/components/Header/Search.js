import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Context } from "./../UserList";

function Search() {
  const navigate = useNavigate();
  const { search, setSearch } = useContext(Context);
  return (
    <div className="flex items-center bg-white pl-2 rounded-lg">
      <input
        type="text"
        placeholder="search movie"
        className="p-1 text-black focus:outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value.length === 0) {
            alert("no match");
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            navigate("/searchPage");
          }
        }}
      />
      <BsSearch
        className="text-black mr-2"
        // onClick={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
