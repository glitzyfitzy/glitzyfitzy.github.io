import { MediaFeature } from "../sections/portfolio/MediaFeature";
import { TitleBanner } from "../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../sections/portfolio/TitleSplitter";

export const Glitzy_Fitzy = () => {
  const titleBannerImages = [
    "GlitzyFitzyBanner1.jpg",
    "GlitzyFitzyBanner2.jpg",
    "GlitzyFitzyBanner3.jpg",
    "GlitzyFitzyBanner4.jpg",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/glitzyfitzy/banner/" + item,
    });
  }

  const carouselItems = [
    "GlitzyFitzy1.mp4",
    "GlitzyFitzy2.mp4",
    "GlitzyFitzy3.mp4",
    "GlitzyFitzy4.jpg",
    "GlitzyFitzy5.mp4",
    "GlitzyFitzy6.mp4",
    "GlitzyFitzy7.mp4",
    "GlitzyFitzy8.jpg",
    "GlitzyFitzy9.mp4",
    "GlitzyFitzy10.mp4",
    "GlitzyFitzy11.mp4",
    "GlitzyFitzy12.jpg",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/glitzyfitzy/carousel/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"Glitzy Fitzy"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "A dynamic and vibrant micro-influencer who brings a unique blend of bold glamour and playful charm to the world of fashion and beauty. With a keen eye for stylish trends and a love for all things sparkly and chic, I create content that is both luxurious and accessible, appealing to an audience that craves modern elegance with a touch of fun. Whether it's eye-catching outfits, vibrant decor, or colorful accessories, I know how to curate a feed that feels exciting, fresh, and stylishly on-brand for the trend-forward community."
        }
      />
    </div>
  );
};
