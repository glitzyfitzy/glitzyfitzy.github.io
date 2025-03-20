import React from "react";
import SocialIcon from "../components/SocialIcon";
import { Icons } from "../assets/svgs";

export const Footer = () => {
  const socialPlatforms = [
    {
      icon: Icons.instagram,
      link: "https://www.instagram.com/glitzy.fitzy/",
    },
    {
      icon: Icons.tiktok,
      link: "https://www.tiktok.com/@glitzyfitzy",
    },
    {
      icon: Icons.linkedin,
      link: "https://www.linkedin.com/in/hayley-fitz-120600",
    },
    {
      icon: Icons.pintrest,
      link: "https://www.pinterest.com/glitzyfitzy/",
    },
  ];

  return (
    <div className="flex flex-row justify-center">
      {socialPlatforms.map((platform, index) => (
        <SocialIcon key={index} icon={platform.icon} link={platform.link} />
      ))}
    </div>
  );
};
