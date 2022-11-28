import React, { useContext, useRef, useEffect, useState } from "react";
import videoBg from "../../assets/dark-teaser.mp4";
import Navbar from "./Navbar";
import { BsPlayFill, BsPlus, BsPause } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";
import { HiVolumeOff } from "react-icons/hi";
import Video from "./Video";
import { Context } from "./../UserList";

function MainContent() {
  const player = useRef();
  // const { setPlaying } = useContext(Context);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    console.log("clicked");
    if (play) {
      player.current.play();
    } else {
      player.current.pause();
    }
  }, [play]);

  const setVideoRunner = () => {
    setPlay(!play);
  };

  const [sound, setSound] = useState(false);

  // const play = () => {
  //   console.log("click");
  //   return setPlaying(true);
  // };

  return (
    <div className=" w-[100%] h-[100vh] text-white pb-12">
      <div className="absolute top-[-60px] left-0 w-[100vw] h-[100vh] opacity-60 z-[-3]">
        {/* <Video className="fixed right-0 bottom-0 min-w-[100%] min-h-[100%]"/> */}
        <video
          ref={player}
          src={videoBg}
          autoPlay
          playsInline
          loop
          muted
          {...(sound ? { muted: false } : { muted: true })}
          className="absolute z-[-2] top-0 h-[145vh] w-[100vw] object-cover"
        />
      </div>

      <div className="pl-10 pt-18">
        <div className="text-[5vw] font-bold mb-[3rem] mt-[6rem] ml-[2rem]">
          Dark
        </div>
        <div className="ml-[2rem] w-[60%]">
          A family saga with a supernatural twist, set in a German town where
          the disappearance of two young children exposes the relationships
          among four families.
        </div>
        <div className="flex gap-5 mt-8 justify-between">
          <div className="flex gap-5 flex-wrap ml-[2rem]">
            {play ? (
              <button className="bg-white rounded-lg shadow-slate-100 w-[8rem] p-2 text-black flex items-center justify-center">
                <BsPlayFill className="text-2xl" onClick={setVideoRunner} />
                Play
              </button>
            ) : (
              <button className="bg-white rounded-lg shadow-slate-100 w-[8rem] p-2 text-black flex items-center justify-center">
                <BsPause className="text-2xl" onClick={setVideoRunner} />
                Pause
              </button>
            )}
            <button className="bg-white bg-opacity-50 rounded-lg w-[8rem] p-2 hover:bg-gray-800 flex items-center justify-center">
              <BsPlus className="text-2xl" />
              My List
            </button>
          </div>
          <div className="mr-[8rem]">
            {sound ? (
              <button
                className="bg-white text-black p-3 rounded-full"
                onClick={() => setSound((prevState) => !prevState)}
              >
                <HiVolumeOff />{" "}
              </button>
            ) : (
              <button
                className="bg-white text-black p-3 rounded-full"
                onClick={() => setSound((prevState) => !prevState)}
              >
                <HiVolumeUp />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
