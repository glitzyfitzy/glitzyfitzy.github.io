import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const TikTok = () => {
  const titleBannerImages = [
    "TikTokBanner1.PNG",
    "TikTokBanner2.PNG",
    "TikTokBanner3.PNG",
    "TikTokBanner4.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/tiktok/banner/" + item,
    });
  }

  const carouselItems = [
    "Carousel2.jpeg",
    "Carousel3.jpeg",
    "Carousel5.jpeg",
    "Carousel6.jpeg",
    "Carousel7.MP4",
    "Carousel8.MP4",
    "Carousel9.MP4",
    "Carousel10.MP4",
    "Carousel11.MP4",
    "Carousel12.MP4",
    "Carousel13.MP4",
    "Carousel14.MP4",
    "Carousel15.MP4",
    "Carousel16.MP4",
    "Carousel17.MP4",
    "Carousel18.MP4",
    "Carousel19.MP4",
    "Carousel20.MP4",
    "Carousel21.MP4",
    "Carousel22.MP4",
    "Carousel23.MP4",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/kendra/tiktok/carousel/" + item,
    });
  }

  console.log(titleBanner);

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"TikTok"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I’ve had the unique opportunity to capture a diverse range of celebrities and influencers, creating dynamic social-first content that resonates with audiences. From country music stars to SEC quarterbacks, I’ve worked with a variety of talent, showcasing their personalities in ways that feel authentic and engaging. Whether it’s behind the scenes or in front of the camera, my focus has always been on crafting compelling content that drives engagement and sparks conversation."
        }
      />
    </div>
  );
};
