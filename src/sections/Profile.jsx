// Hayley Laptop not displaying 2560x1600
import { useState, useRef, useEffect } from "react";

export const Profile = () => {
  const [isGifComplete, setIsGifComplete] = useState(false);
  const gifRef = useRef(null);
  const gifUrl = "/profile-no-loop.gif";

  useEffect(() => {
    // First, reset the GIF
    setIsGifComplete(false);

    // Force browser to reload GIF from beginning by adding timestamp to URL
    if (gifRef.current) {
      const timestamp = new Date().getTime();
      gifRef.current.src = `${gifUrl}${
        gifUrl.includes("?") ? "&" : "?"
      }_t=${timestamp}`;
    }
  }, []);

  return (
    <div className="flex justify-center align-middle w-full">
      <div
        className="relative
      max-w-xs
      sm:max-w-md
      md:max-w-lg
      lg:max-w-lg
      xl:max-w-lg
      h-auto"
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
    </div>
  );
};
