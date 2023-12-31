// PATH: 'src/components/VideoBackground.jsx'

import React from "react";
import ReactPlayer from "react-player";
import "./Styles/VideoBackground.css"

const VideoBackground = () => {
    return (
        <div className="video-background">
            <ReactPlayer
            url="https://i.imgur.com/4Ao36WK.mp4"
            playing={true}
            loop={true}
            volume={0}
            muted={true}
            width="100%"
            height="100%"
            className="react-player"
            />
        </div>
    )
}

export default VideoBackground;