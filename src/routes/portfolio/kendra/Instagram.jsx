import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Instagram = () => {
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
      <TitleSplitter text={"Instagram"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I played a pivotal role in creating and managing content for Kendra Scott’s Instagram, helping to refine and polish the brand’s social identity. I was responsible for capturing a wide range of content, from showcasing the brand’s products and behind-the-scenes moments to highlighting people and events closely tied to Kendra Scott’s values and aesthetic. My work ensured that each post reflected the brand’s core messaging, while maintaining a cohesive and visually engaging feed that resonated with our community and helped strengthen brand loyalty."
        }
      />
    </div>
  );
};
