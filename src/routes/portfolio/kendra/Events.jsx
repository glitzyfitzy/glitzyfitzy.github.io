import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Events = () => {
  const titleBannerImages = [
    "Events1.jpg",
    "Events2.jpg",
    "Events3.jpg",
    "Events4.jpg",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/events/banner/" + item,
    });
  }

  const carouselItems = [
    "Events1.mp4",
    "Events2.mp4",
    "Events3.mp4",
    "Events4.mp4",
    "Events5.mp4",
    "Events6.mp4",
    "Events7.mp4",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/kendra/events/carousel/" + item,
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
