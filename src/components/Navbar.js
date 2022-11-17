import React from "react";
import Logo from "../images/netflix-logo.png"
import Search from "./Search";

function Header() {
    return ( 
        <div className="flex justify-between items-center bg-transparent p-2">

            <div className="flex items-center text-white gap-10 px-5">
                <div className="w-[150px]">
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>Tv Shows</li>
                        <li>Movies</li>
                        <li>My List</li>
                    </ul>
                </div>
            </div>
            <div className="flex text-white gap-5 pl-4">
                <Search />
                <img src="" alt="" />
                <p className="border-2">User Name</p>
            </div>
        </div>
     );
}

export default Header;