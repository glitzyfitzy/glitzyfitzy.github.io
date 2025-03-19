import React, { useState } from "react";

const SocialIcon = ({ platform, imagePath, handle, background, link }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      className={`cursor-pointer flex flex-row rounded-md relative overflow-hidden transition-all duration-300 pl-1 pr-1 ${isHovering ? "w-40" : "w-14"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => {
        window.open(link);
      }}
    >
      <img
        src={imagePath}
        alt={`${platform} icon`}
        width="48"
        height="48"
        className="z-10"
      />
    </button>
  );
};

export default SocialIcon;
