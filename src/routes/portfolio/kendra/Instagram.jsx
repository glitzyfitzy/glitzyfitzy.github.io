import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Instagram = () => {
  const titleBannerImages = [
    "InstaBanner1.PNG",
    "InstaBanner2.PNG",
    "InstaBanner3.PNG",
    "InstaBanner4.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/instagram/banner/" + item,
    });
  }

  const carouselPhotos = [
    "Photos1.jpg",
    "Photos2.jpg",
    "Photos3.jpg",
    "Photos4.jpg",
    "Photos5.jpg",
    "Photos6.jpg",
    "Photos7.jpg",
    "Photos8.jpeg",
    "Photos9.JPG",
  ];
  let photoCarousel = [];
  for (const item of carouselPhotos) {
    photoCarousel.push({
      src: "/images/portfolio/kendra/instagram/carousel/photos/" + item,
    });
  }

  const carouselReels = [
    "Reels1.mp4",
    "Reels2.MOV",
    "Reels3.mp4",
    "Reels4.mp4",
    "Reels5.mp4",
    "Reels6.mp4",
    "Reels7.mp4",
  ];
  let reelCarousel = [];
  for (const item of carouselReels) {
    reelCarousel.push({
      src: "/images/portfolio/kendra/instagram/carousel/reels/" + item,
    });
  }

  const storiesPhotos = [
    "Stories1.jpg",
    "Stories2.jpg",
    "Stories3.jpg",
    "Stories4.jpg",
    "Stories5.jpg",
    "Stories6.jpg",
    "Stories7.jpg",
    "Stories8.jpg",
    "Stories9.jpg",
    "Stories10.jpg",
    "Stories11-1.jpg",
    "Stories11.jpg",
    "Stories12.jpg",
    "Stories13.jpg",
    "Stories14.jpg",
    "Stories15.jpg",
    "Stories16.jpg",
    "Stories17.jpg",
    "Stories18.jpg",
    "Stories19.jpg",
  ];
  let storiesCarousel = [];
  for (const item of storiesPhotos) {
    storiesCarousel.push({
      src: "/images/portfolio/kendra/instagram/carousel/stories/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"Instagram"} />
      <MediaFeature
        images={photoCarousel}
        text={
          "I played a pivotal role in creating and managing content for Kendra Scott’s Instagram, helping to refine and polish the brand’s social identity. I was responsible for capturing a wide range of content, from showcasing the brand’s products and behind-the-scenes moments to highlighting people and events closely tied to Kendra Scott’s values and aesthetic. Well-versed in creating content across Instagram stories, reels, and in-feed images, I ensured each format was used to its fullest potential to engage and inspire our audience. My work ensured that each post reflected the brand’s core messaging, while maintaining a cohesive and visually engaging feed that resonated with our community and helped strengthen brand loyalty."
        }
      />
      <MediaFeature images={reelCarousel} text={null} />
      <MediaFeature images={storiesCarousel} text={null} />
    </div>
  );
};
