import React from "react";
import videoBg from "../assets/dark-teaser.mp4"
import Navbar from "./Navbar"

function MainContent() {
    return ( <div className="relative w-[100%] h-[100vh] text-white">
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/40 z-[-1]"></div>
                <Navbar />
                <video src={videoBg} auto loop muted className="absolute z-[-2] top-0 w-[100%] h-[100%] object-cover" />
                <div className="pl-10 pt-28">
                    <div className="text-[2.5rem] font-bold mb-[8rem]">Name of the Movie</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum omnis accusantium dolore esse aliquid? Quisquam.</div>
                    <div className="flex gap-5 mt-8">
                        <button className="bg-white rounded-lg shadow-slate-100 w-[8rem] p-2 text-black">Play</button>
                        <button className="bg-white bg-opacity-50 rounded-lg w-[8rem] p-2 hover:bg-gray-800">My List</button>
                    </div>
                </div>
                <img src="" alt="" />
            </div> 
    );
}

export default MainContent;