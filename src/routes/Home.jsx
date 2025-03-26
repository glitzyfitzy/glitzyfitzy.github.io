import { TitleSplitter } from "../sections/portfolio/TitleSplitter";
import { Profile } from "../sections/Profile";

export const Home = () => {
  return (
    <>
      <Profile />
      <TitleSplitter text={"Making brands sparkle, one post at a time!"} />
      <div className="flex flex-col justify-center  mb-10 mx-[20%]">
        <p className="text-center text-text">
          {
            "Versatile marketing professional with 4+ years of experience in content creation, strategic communications, and audience engagement. At Kendra Scott, successfully grew TikTok following from 50K to 600K followers through strategic content development. As a consumer and social media specialist with a close pulse on trends, consistently delivers content that increases brand and product exposure. Combines analytical thinking with creative execution to deliver measurable results across digital platforms. Skilled in developing compelling narratives that resonate with diverse audiences and drive brand growth."
          }
        </p>
      </div>
    </>
  );
};
