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
    "TikTokCarousel1.MP4",
    "TikTokCarousel2.MP4",
    "TikTokCarousel3.jpeg",
    "TikTokCarousel4.MP4",
    "TikTokCarousel5.MP4",
    "TikTokCarousel6.MP4",
    "TikTokCarousel7.MP4",
    "TikTokCarousel8.jpeg",
    "TikTokCarousel9.MP4",
    "TikTokCarousel10.MP4",
    "TikTokCarousel11.MP4",
    "TikTokCarousel12.MP4",
    "TikTokCarousel13.jpeg",
    "TikTokCarousel14.MP4",
    "TikTokCarousel15.MP4",
    "TikTokCarousel16.MP4",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/kendra/tiktok/carousel/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"TikTok"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "When I started as an intern at Kendra Scott, their TikTok following was at 50K. Over the years, I’ve played a key role in accelerating growth on the platform, helping to grow the account to 600K followers today—an impressive 44% increase year over year. By driving over 200M views annually, I helped establish Kendra Scott as a prominent brand on TikTok. This success can be attributed to the creative freedom and ideation I was given, allowing me to experiment with trends and produce fresh, engaging content that resonated with our audience."
        }
      />
    </div>
  );
};
