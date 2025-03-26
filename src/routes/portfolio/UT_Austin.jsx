import { MediaFeature } from "../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../sections/portfolio/TitleSplitter";

export const UT_Austin = () => {
  const titleBannerImages = [
    "UTAustinBanner1.jpg",
    "UTAustinBanner2.jpg",
    "UTAustinBanner3.PNG",
    "UTAustinBanner4.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/ut_austin/banner/" + item,
    });
  }

  const carouselItems = [
    "UTAustin1.mp4",
    "UTAustin2.mp4",
    "UTAustin3.mp4",
    "UTAustin4.mp4",
  ];
  let imageCarousel = [];
  for (const item of carouselItems) {
    imageCarousel.push({
      src: "/images/portfolio/ut_austin/carousel/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"University of Texas at Austin"} />
      <MediaFeature
        images={imageCarousel}
        text={
          "I’ve remained deeply connected to my alma mater, The University of Texas at Austin, by continuing to support the university through collaborations with various brands. I work with these brands to capture the vibrant essence of UT, showcasing its spirit and community in dynamic and authentic ways. This includes capturing iconic Longhorn game days and the university’s exciting SXSW experience at Hook Em House. During my time at UT, I had the privilege of working with organizations like Texas Exes, Kyle Cavan, and University Co-Op, helping them tell their stories while highlighting the pride and energy of the UT Austin experience."
        }
      />
    </div>
  );
};
