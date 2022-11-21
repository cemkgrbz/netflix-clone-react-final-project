import React, {useContext, useState} from "react";
import Logo from "/home/user/Desktop/spaex/netflix-clone-react-final-project/src/images/netflix-logo.png"
import Search from "./Search";
import { Context } from "../UserList"


function Header() {

    const {signedIn, setSignedIn} = useContext(Context);


    console.log(signedIn)
    return ( 
        <div className="flex justify-between items-center bg-transparent p-2 flex-wrap">

            <div className="flex items-center text-white gap-10 px-5 flex-wrap">
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
            <div className="flex text-white gap-5 pl-4 items-center mr-4">
                <Search />
                <img src="" alt="" />
                <p className="">Welcome {signedIn.user}</p>
                <img src={signedIn.image} alt="" className="w-[3rem]" />
            </div>
        </div>
     );
}

export default Header;