import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-[vw] aspect-video absolute text-white pt-[18%] p-16">
      <h1 className="text-3xl font-bold text-yellow-200">{title}</h1>
      <p className="w-1/3 mt-4">
        {overview}
      </p>
      <div className="mt-10 flex">
        <button className="flex items-center px-6 py-2 text-black bg-yellow-100 hover:bg-opacity-80 rounded-md">
          <CiPlay1/>
          <span className="ml-1">Play</span>
        </button>
        <button className="flex items-center mx-2 px-6 py-2 text-black bg-gray-500 hover:bg-opacity-50 rounded-md">
          <CiCircleInfo size={"17px"}/>
          <span className="ml-1">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
