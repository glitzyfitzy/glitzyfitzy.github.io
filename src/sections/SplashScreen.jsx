import React, { useState, useEffect } from "react";

export const SplashScreen = ({ minimumDisplayTime = 3500, onDone }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in
    setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Fade out and then hide
    const timer = setTimeout(() => {
      setOpacity(0);

      // Wait for fade out animation to complete before hiding
      setTimeout(() => {
        setIsVisible(false);
        onDone();
      }, 1000); // 1 second for fade out
    }, minimumDisplayTime - 1000); // Start fade out 1 second before minimum display time ends
    return () => clearTimeout(timer);
  }, [minimumDisplayTime, onDone]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-text z-50"
      style={{
        opacity: opacity,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <div className="text-center w-full max-w-2xl px-4">
        <svg
          className="w-full h-auto"
          viewBox="0 0 500 180"
          preserveAspectRatio="xMidYMid meet"
        >
          {" "}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke="#f5f5f5"
            strokeWidth="1"
            className="text-path font-milton-one text-8xl"
          >
            @GlitzyFitzy
          </text>
          <style>{`
            .text-path {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: dash 2s linear forwards;
              animation-delay: 0.2s;
            }

            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </svg>
      </div>
    </div>
  );
};
