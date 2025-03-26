import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Events = () => {
  const titleBannerImages = [
    "Banner1.PNG",
    "Banner1.PNG",
    "Banner1.PNG",
    "Banner1.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/celebrity_influencer/banner/" + item,
    });
  }

  const carouselItems = ["Carousel1.MP4", "Carousel1.MP4", "Carousel1.MP4"];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/kendra/celebrity_influencer/carousel/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"Events"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I have a strong background in capturing content at brand events and real-life moments, documenting everything from intimate activations to large-scale experiences. Whether it’s an in-store event, a pop-up activation, or a VIP brand experience, I’ve been there to capture the energy, excitement, and personal connections that make each moment unique. My focus is on telling authentic, engaging stories that reflect the true essence of the brand, making sure every interaction and memorable moment is captured in real-time."
        }
      />
    </div>
  );
};
