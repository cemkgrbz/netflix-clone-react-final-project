import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { Context } from "./../UserList";
import videoBg from "../../assets/dark-teaser.mp4";

function Video() {
  const { playing } = useContext(Context);

  return (
    <div className="absolute top-0 left-0 h-[100vh]">
      {/* <input type="file" onChange={handleVideoUpload} /> */}
      <ReactPlayer
        url={videoBg}
        width="100%"
        height="100%"
        controls={false}
        playing={true}
        muted={true}
        loop={true}
      />
    </div>
  );
}

export default Video;
