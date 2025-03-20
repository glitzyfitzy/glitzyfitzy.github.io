import React, { useState, useRef, useEffect } from "react";

export const GifPlayer = ({ gifUrl, lastFrameUrl, gifDuration = 3000 }) => {
  const [isGifComplete, setIsGifComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const gifRef = useRef(null);

  // Reset GIF by forcing reload
  const resetGif = () => {
    setIsGifComplete(false);
    setIsLoaded(false);

    // Force browser to reload GIF from beginning by adding timestamp to URL
    if (gifRef.current) {
      const timestamp = new Date().getTime();
      gifRef.current.src = `${gifUrl}${gifUrl.includes("?") ? "&" : "?"}_t=${timestamp}`;
    }
  };

  useEffect(() => {
    // First, reset the GIF
    resetGif();

    // Wait 1 second to let the GIF start playing
    // const playTimer = setTimeout(() => {
    //   // Then call handleGifComplete to show the last frame
    //   handleGifComplete();
    // }, 2000);

    // return () => clearTimeout(playTimer);
  }, []); // Empty dependency array for one-time execution

  // useEffect(() => {
  //   let timer;

  //   // Only start timer after GIF has loaded
  //   if (isLoaded && !isGifComplete) {
  //     timer = setTimeout(() => {
  //       setIsGifComplete(true);
  //     }, gifDuration);
  //   }

  //   return () => clearTimeout(timer);
  // }, [isLoaded, isGifComplete, gifDuration]);

  // Function to handle manual completion
  const handleGifComplete = () => {
    setIsGifComplete(true);
  };

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
          onLoad={() => setIsLoaded(true)}
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
