import React, { useState, useRef, useEffect } from "react";

export const GifPlayer = ({ gifUrl, lastFrameUrl, gifDuration = 3000 }) => {
  const [isGifComplete, setIsGifComplete] = useState(false);
  const gifRef = useRef(null);

  useEffect(() => {
    // First, reset the GIF
    setIsGifComplete(false);

    // Force browser to reload GIF from beginning by adding timestamp to URL
    if (gifRef.current) {
      const timestamp = new Date().getTime();
      gifRef.current.src = `${gifUrl}${gifUrl.includes("?") ? "&" : "?"}_t=${timestamp}`;
    }
  }, []);

  return (
    <div
      className="relative
    max-w-xs
    sm:max-w-md
    md:max-w-lg
    lg:max-w-lg
    xl:max-w-lg
    h-auto"
    >
      {/* Hidden preloader for last frame to ensure it's cached */}
      {lastFrameUrl && (
        <img src={lastFrameUrl} alt="Preload last frame" className="hidden" />
      )}

      {/* Show GIF while playing */}
      {!isGifComplete && (
        <img
          ref={gifRef}
          src={gifUrl}
          alt="Animated GIF"
          className="w-full h-full object-cover"
        />
      )}

      {/* Show last frame when GIF is complete */}
      {isGifComplete && (
        <img
          src={lastFrameUrl || gifUrl} // Use provided last frame or the same GIF (which will appear frozen)
          alt="Last frame"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
