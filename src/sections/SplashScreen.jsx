import React, { useState, useEffect } from "react";

export const SplashScreen = ({ minimumDisplayTime = 3500, onDone }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [browserType, setBrowserType] = useState("default");

  // Detect browser on component mount
  useEffect(() => {
    // Browser detection function
    const detectBrowser = () => {
      // Firefox detection
      if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return "firefox";
      }
      // Safari detection
      else if (
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        (navigator.vendor && navigator.vendor.indexOf("Apple") > -1)
      ) {
        return "safari";
      }
      // Chrome detection
      else if (
        navigator.userAgent.indexOf("Chrome") !== -1 &&
        navigator.vendor &&
        navigator.vendor.indexOf("Google") > -1
      ) {
        return "chrome";
      }
      // Default for other browsers
      else {
        return "default";
      }
    };

    setBrowserType(detectBrowser());

    // Fade in effect
    setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Fade out and hide
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsVisible(false);
        onDone();
      }, 1000);
    }, minimumDisplayTime - 1000);

    return () => clearTimeout(timer);
  }, [minimumDisplayTime, onDone]);

  // Get animation parameters based on browser
  const getAnimationParams = () => {
    switch (browserType) {
      case "firefox":
        return {
          duration: "3s",
          timing: "linear",
          delay: "0.5s",
          dasharray: 1000,
        };
      case "safari":
        return {
          duration: "2s",
          timing: "linear",
          delay: "0.2s",
          dasharray: 800,
        };
      case "chrome":
        return {
          duration: "2.5s",
          timing: "linear",
          delay: "1s",
          dasharray: 800,
        };
      default:
        return {
          duration: "3s",
          timing: "linear",
          delay: "0.5s",
          dasharray: 1000,
        };
    }
  };

  const params = getAnimationParams();

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
          <defs>
            <style type="text/css">{`
              @keyframes dash {
                from {
                  stroke-dashoffset: ${params.dasharray};
                }
                to {
                  stroke-dashoffset: 0;
                }
              }

              .text-path {
                stroke-dasharray: ${params.dasharray};
                stroke-dashoffset: ${params.dasharray};
                animation-name: dash;
                animation-duration: ${params.duration};
                animation-timing-function: ${params.timing};
                animation-delay: ${params.delay};
                animation-iteration-count: 1;
                animation-direction: normal;
                animation-fill-mode: forwards;
                animation-play-state: running;
              }
            `}</style>
          </defs>
        </svg>
      </div>
    </div>
  );
};
