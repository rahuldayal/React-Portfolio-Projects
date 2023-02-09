import React from "react";

import { Paper, Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading ....</div>;
    
    console.log(video.id.videoId);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}></Paper>
    </>
  );
};

export default VideoDetail;
