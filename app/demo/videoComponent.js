import React from "react";

function VideoComponent({ src }) {
  return (
    <div className="w-full h-full">
      <video
        src={src}
        autoPlay
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}

export default VideoComponent;
