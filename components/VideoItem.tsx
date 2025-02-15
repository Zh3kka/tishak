import { Music } from "lucide-react";
import React, { useState } from "react";

const VideoItem = ({ src }: { src: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-200 aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        className="w-full h-[450px] object-cover"
        onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
        onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
      {isHovered && (
        <div className="absolute bottom-2 right-2 p-2 bg-transparent/45 rounded-full border ">
          <Music className="text-white" />
        </div>
      )}
    </div>
  );
};

export default VideoItem;
