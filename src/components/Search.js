import React from "react";
import { BsSearch } from "react-icons/bs"

function Search() {
    return ( <div className="flex gap-4 items-center">
        
        <input type="text" placeholder="Titles, genres, people"/>
        <BsSearch />
    </div> );
}

export default Search;

