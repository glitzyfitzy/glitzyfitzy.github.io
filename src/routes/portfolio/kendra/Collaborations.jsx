import { GifPlayer } from "../../../components/GifPlayer";
import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Collaborations = () => {
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
      <TitleSplitter text={"Collaborations"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I had the opportunity to navigate content through a variety of high-profile collaborations, including LoveShackFancy, Dolly Parton, Barbie, Disney, Wrangler, and the Dallas Cowboys. From shooting social-first content that captured the essence of each collaboration, to planning and scheduling professionally shot campaign imagery, I was involved in every aspect of the content creation process. My ability to balance creativity with strategic execution allowed us to produce engaging, visually compelling content that amplified the impact of each partnership, strengthening Kendra Scott's presence and connection with diverse audiences."
        }
      />
    </div>
  );
};
