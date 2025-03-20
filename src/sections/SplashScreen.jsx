import React, { useState, useEffect } from "react";

export const SplashScreen = ({ minimumDisplayTime = 3000, onDone }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onDone) onDone();
    }, minimumDisplayTime);

    return () => clearTimeout(timer);
  }, [minimumDisplayTime, onDone]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-slate-900 z-50 transition-opacity duration-3000 ${!onDone ? "opacity-0" : "opacity-100"}`}
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
