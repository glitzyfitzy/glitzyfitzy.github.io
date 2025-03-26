import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Photo_Shoot_BTS = () => {
  const titleBannerImages = [
    "BTSBanner1.jpg",
    "BTSBanner2.jpg",
    "BTSBanner3.jpg",
    "BTSBanner4.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/photo_shoot_bts/banner/" + item,
    });
  }

  const carouselItems = [
    "BTSCarousel1.mp4",
    "BTSCarousel2.mp4",
    "BTSCarousel3.mp4",
    "BTSCarousel4.mp4",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/kendra/photo_shoot_bts/carousel/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"Behind the Scenes"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I have extensive experience capturing content on photoshoot sets, having shot behind-the-scenes footage both on location and inside studios. Whether it’s capturing the creative process, the energy of the team, or the final product in action, I’ve worked to document every detail in a way that showcases the vibe and hard work behind the scenes. My ability to adapt to various environments ensures that I capture authentic moments that highlight the essence of the shoot, whether it’s an on-location setting or a controlled studio environment."
        }
      />
    </div>
  );
};
