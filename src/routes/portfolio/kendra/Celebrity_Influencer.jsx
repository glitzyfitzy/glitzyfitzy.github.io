import { GifPlayer } from "../../../components/GifPlayer";
import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Celebrity_Influencer = () => {
  const titleBannerImages = [
    "Banner1.PNG",
    "Banner2.PNG",
    "Banner3.PNG",
    "Banner4.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/celebrity_influencer/banner/" + item,
    });
  }

  const carouselItems = [
    "Carousel1.MP4",
    "Carousel2.MP4",
    "Carousel3.MP4",
    "Carousel4.MP4",
    "Carousel5.MP4",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/kendra/celebrity_influencer/carousel/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"Celebrity & Influencer"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I’ve had the unique opportunity to capture a diverse range of celebrities and influencers, creating dynamic social-first content that resonates with audiences. From country music stars to SEC quarterbacks, I’ve worked with a variety of talent, showcasing their personalities in ways that feel authentic and engaging. Whether it’s behind the scenes or in front of the camera, my focus has always been on crafting compelling content that drives engagement and sparks conversation."
        }
      />
    </div>
  );
};
