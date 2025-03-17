import React, { useState } from "react";

const SocialIcon = ({ platform, imagePath, handle, background, link }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`cursor-pointer flex flex-row rounded-md ${background} relative overflow-hidden transition-all duration-300 pl-1 pr-1 ${isHovering ? "w-40" : "w-14"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={imagePath}
        alt={`${platform} icon`}
        width="48"
        height="48"
        className="z-10"
      />
      <div
        className={`flex flex-col justify-center transition-opacity duration-300 ${isHovering ? "opacity-100 w-40" : "opacity-0 w-0"}`}
      >
        <span className="text-lg font-bold text-white whitespace-nowrap pt-1">
          {platform}
        </span>
        <span className="text-lg text-white whitespace-nowrap pb-1">
          {handle}
        </span>
      </div>
    </div>
  );
};

export default SocialIcon;
