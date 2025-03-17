import React from "react";

export const TimelineItem = ({
  year,
  company,
  role,
  description,
  logo,
  isLeft,
}) => {
  return (
    <div className="flex w-full relative mb-16">
      {/* Left side content */}
      <div className={`w-5/12 ${isLeft ? "pr-4" : ""}`}>
        {isLeft && (
          <>
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {company} | {role}
                </h3>
                <div className="font-bold text-lg">{year}</div>
              </div>
              <img
                src={logo}
                alt={`${company} icon`}
                width="48"
                height="48"
                className="z-10"
              />
            </div>
            <p className="text-gray-700">{description}</p>
          </>
        )}
      </div>

      {/* Connector line from left content to center */}
      {isLeft && (
        <div className="w-1/12 flex items-center justify-center">
          <div className="h-1 w-full bg-blue-500"></div>
        </div>
      )}

      {/* Center timeline */}
      <div className="w-1/12 relative flex justify-center" />

      {/* Connector line from center to right content */}
      {!isLeft && (
        <div className="w-1/12 flex items-center justify-center">
          <div className="h-1 w-full bg-blue-500"></div>
        </div>
      )}

      {/* Right side content */}
      <div className={`w-5/12 ${!isLeft ? "pl-4" : ""}`}>
        {!isLeft && (
          <>
            <div className="flex flex-row justify-between">
              <img
                src={logo}
                alt={`${company} icon`}
                width="48"
                height="48"
                className="z-10"
              />
              <div className="text-right">
                <h3 className="text-xl font-semibold">
                  {company} | {role}
                </h3>
                <div className="font-bold text-lg">{year}</div>
              </div>
            </div>
            <p className="text-right text-gray-700">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};
