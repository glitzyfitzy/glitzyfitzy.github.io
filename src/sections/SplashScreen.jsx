import React, { useState, useEffect } from "react";

/**
 * Splash Screen Component
 * Displays an animated text logo that fades in, animates, then fades out
 *
 * @param {number} minimumDisplayTime - Minimum time in ms to show the splash screen (default: 3500ms)
 * @param {function} onDone - Callback function executed when splash screen finishes
 */
export const SplashScreen = ({ minimumDisplayTime = 5000, onDone }) => {
  // Controls visibility of entire component
  const [isVisible, setIsVisible] = useState(true);
  // Controls fade in/out opacity animation
  const [opacity, setOpacity] = useState(0);
  // Use a fixed path length value that works across browsers

  useEffect(() => {
    // Fade in effect (slight delay for better user experience)
    setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Schedule fade out sequence
    const timer = setTimeout(() => {
      // Start the fade out
      setOpacity(0);

      // Wait for fade out animation to complete before unmounting component
      setTimeout(() => {
        setIsVisible(false);
        // Execute callback when fully finished
        onDone();
      }, 1000); // 1 second for fade out duration
    }, minimumDisplayTime - 1000); // Start fade out 1 second before minimum display time ends

    // Cleanup function to clear timeout if component unmounts early
    return () => clearTimeout(timer);
  }, [minimumDisplayTime, onDone]);

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-text z-50"
      style={{
        opacity: opacity,
        transition: "opacity 1s ease-in-out", // CSS transition for smooth fade in/out
      }}
    >
      <div className="text-center w-full max-w-2xl px-4">
        <svg
          className="w-full h-auto"
          viewBox="0 0 500 180"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle" // Centers text horizontally
            dominantBaseline="middle" // Centers text vertically
            fill="none" // Text has no fill
            stroke="#f5f5f5" // Text outline color
            strokeWidth="1" // Text outline thickness
            className="text-path font-milton-one text-8xl"
          >
            @GlitzyFitzy
          </text>
          <defs>
            {/*
              SVG Animation Styling
              - Safari requires styles to be in <defs> for proper compatibility
              - type="text/css" helps with cross-browser support
            */}
            <style type="text/css">{`
              /*
               * Text drawing animation
               * Creates a writing effect by animating the dashoffset from
               * full length to zero, gradually revealing the text
               */
              @keyframes dash {
                from {
                  stroke-dashoffset: 1200; /* Start with full offset (invisible) */
                }
                to {
                  stroke-dashoffset: 0;   /* End with zero offset (fully visible) */
                }
              }

              .text-path {
                /*
                 * dasharray defines the length of dashes and gaps
                 * Setting it to total path length creates one continuous dash
                 */
                stroke-dasharray: 1200;
                stroke-dashoffset: 1200;    /* Explicitly set initial state */

                /* The animation properties - Safari-compatible approach */
                animation-name: dash;
                animation-duration: 5s;
                animation-timing-function: linear;
                animation-delay: 0.5s;
                animation-iteration-count: 1;
                animation-direction: normal;
                animation-fill-mode: forwards; /* Critical for Safari */
                animation-play-state: running;
              }
            `}</style>
          </defs>
        </svg>
      </div>
    </div>
  );
};
