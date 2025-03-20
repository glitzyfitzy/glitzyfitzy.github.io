import React, { useState } from "react";

const SocialIcon = ({ icon, link }) => {
  return (
    <button
      className={`cursor-pointer flex flex-row rounded-md relative overflow-hidden`}
      onClick={() => {
        window.open(link);
      }}
    >
      <svg
        width={"48"}
        height={"48"}
        fill={"var(--color-icon)"}
        viewBox={icon.viewBox}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        stroke={"var(--color-icon)"}
        className={"z-10 var(--color-icon)"}
      >
        <path d={icon.path} />
      </svg>
    </button>
  );
};

export default SocialIcon;
