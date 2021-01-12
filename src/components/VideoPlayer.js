import React, { useState } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = (props) => {
  const player = useRef(null);
  const [play, setPlay] = useState(true);

  return (
    // <video
    //   onMouseOver={handlePlayVideo}
    //   ref={vidRef}
    //   src={props.src}
    //   // type="video/mp4"
    // ></video>
    <ReactPlayer
      onMouseOver={() => {
        setPlay(true);
      }}
      onMouseOut={() => {
        setPlay(false);
      }}
      ref={player}
      url={props.src}
      playing={play}
      loop={true}
      // controls={true}
      playbackRate={0.5}
      width={250}
      onReady={() => {
        setPlay(true);
      }}
    />
  );
};

export default VideoPlayer;
