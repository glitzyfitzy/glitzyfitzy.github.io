import { GifPlayer } from "../../../components/GifPlayer";
import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Celebrity_Influencer = () => {
  const titleBannerImages = [
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Banner1.PNG",
      alt: "Amber",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Banner2.PNG",
      alt: "Lainey",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Banner3.PNG",
      alt: "Quinn",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Banner4.PNG",
      alt: "Sazan",
    },
  ];

  const imageCarouselImages = [
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Carousel1.MP4",
      alt: "Quinn",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Carousel2.MP4",
      alt: "Yellow Rose Dallas",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Carousel3.MP4",
      alt: "Lainey",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Carousel4.MP4",
      alt: "Mother's Day",
    },
    {
      src: "/images/portfolio/kendra/celebrity_influencer/Carousel5.MP4",
      alt: "Lainey",
    },
  ];

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBannerImages} />
      <TitleSplitter text={"Celebrity & Influencer"} />
      <MediaFeature
        images={imageCarouselImages}
        text={
          "I’ve had the unique opportunity to capture a diverse range of celebrities and influencers, creating dynamic social-first content that resonates with audiences. From country music stars to SEC quarterbacks, I’ve worked with a variety of talent, showcasing their personalities in ways that feel authentic and engaging. Whether it’s behind the scenes or in front of the camera, my focus has always been on crafting compelling content that drives engagement and sparks conversation."
        }
      />
    </div>
  );
};
