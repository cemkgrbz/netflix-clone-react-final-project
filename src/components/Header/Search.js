import React from "react";
import { BsSearch } from "react-icons/bs"

function Search() {
    return ( <div className="flex items-center bg-white pl-2 rounded-lg">
        
        <input type="text" placeholder="Titles, genres, people" className="p-1 text-black"/>
        <BsSearch className="text-black mr-2"/>
    </div> );
}

export default Search;

