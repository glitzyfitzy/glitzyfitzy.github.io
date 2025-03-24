import React, { useState, useRef, useEffect } from "react";

export const GifPlayer = ({ gifUrl }) => {
  const [isGifComplete] = useState(false);
  const gifRef = useRef(null);

  useEffect(() => {
    // Force browser to reload GIF from beginning by adding timestamp to URL
    if (gifRef.current) {
      const timestamp = new Date().getTime();
      gifRef.current.src = `${gifUrl}${
        gifUrl.includes("?") ? "&" : "?"
      }_t=${timestamp}`;
    }
  }, []);

  return (
    <div
      className="relative
      max-h-xs
      sm:max-h-md
      md:max-h-lg
      lg:max-h-lg
      xl:max-h-lg
      w-full"
    >
      {/* Show GIF while playing */}
      {!isGifComplete && (
        <img
          ref={gifRef}
          src={gifUrl}
          alt="Animated GIF"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
