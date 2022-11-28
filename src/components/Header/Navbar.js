import React, { useContext, useState } from "react";
import Logo from "../../images/netflix-logo.png";
import Search from "./Search";
import { Context } from "../UserList";
import { Link } from "react-router-dom";
import MyList from "../MyList";

function Header() {
  const { signedIn, setSignedIn, myList } = useContext(Context);

  return (
    <div className="flex justify-between items-center bg-transparent p-2 flex-wrap  top-0 right-0 left-0 navbarBg h-[8rem]">
      <div className="flex items-center text-white gap-2 px-5 flex-wrap">
        <div className="w-[150px]">
          <Link to={"/home"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 mt-3">
            <Link to={"/home"}>
              <li className="text-white">Home</li>
            </Link>
            <Link to={"/my-list"}>
              <li
                className="text-white"
                style={{ color: myList.length !== 0 ? "red" : "" }}
              >
                My List {myList.length}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex text-white gap-5 pl-4 items-center mr-4">
        <Search />

        <p className="mt-3">Welcome {signedIn.user}</p>
        <img src={signedIn.image} alt="" className="w-[3rem]" />
      </div>
    </div>
  );
}

export default Header;
