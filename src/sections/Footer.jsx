import React from "react";
import SocialIcon from "../components/SocialIcon";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import pintrest from "../assets/pintrest.svg";
import linkedin from "../assets/linkedin.svg";

export const Footer = () => {
  const socialPlatforms = [
    {
      platform: "Instagram",
      imagePath: instagram,
      handle: "@glitzy.fitzy",
      background: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      link: "https://www.instagram.com/glitzy.fitzy/",
    },
    {
      platform: "TikTok",
      imagePath: tiktok,
      handle: "@glitzy.fitzy",
      background: "bg-black",
      link: "https://www.tiktok.com/@glitzyfitzy",
    },
    {
      platform: "Facebook",
      imagePath: facebook,
      handle: "@glitzy.fitzy",
      background: "bg-[#337FFF]",
      link: "https://www.facebook.com/hayley.fitzsimmons.14",
    },
    {
      platform: "Youtube",
      imagePath: youtube,
      handle: "@glitzy.fitzy",
      background: "bg-[#FF0000]",
      link: "https://www.youtube.com/@GlitzyFitzy",
    },
    {
      platform: "Pintrest",
      imagePath: pintrest,
      handle: "@glitzy.fitzy",
      background: "bg-[#FF0000]",
      link: "https://www.pinterest.com/glitzyfitzy/",
    },
    {
      platform: "LinkedIn",
      imagePath: linkedin,
      handle: "Hayley Fitz",
      background: "bg-[#006699]",
      link: "https://www.linkedin.com/in/hayley-fitz-120600",
    },
  ];

  return (
    <div className="flex flex-row justify-center">
      {socialPlatforms.map((platform, index) => (
        <SocialIcon
          key={index}
          platform={platform.platform}
          imagePath={platform.imagePath}
          handle={platform.handle}
          background={platform.background}
          link={platform.link}
        />
      ))}
    </div>
  );
};
