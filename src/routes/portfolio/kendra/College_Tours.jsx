import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleBanner } from "../../../sections/portfolio/TitleBanner";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const College_Tours = () => {
  const titleBannerImages = [
    "CollegeTourBanner1.PNG",
    "CollegeTourBanner2.PNG",
    "CollegeTourBanner3.PNG",
    "CollegeTourBanner4.PNG",
  ];
  let titleBanner = [];
  for (const item of titleBannerImages) {
    titleBanner.push({
      src: "/images/portfolio/kendra/college_tour/banner/" + item,
    });
  }

  const heyElisaItems = [
    "HeyElisaCarousel1.mp4",
    "HeyElisaCarousel2.mp4",
    "HeyElisaCarousel3.mp4",
    "HeyElisaCarousel4.mp4",
    "HeyElisaCarousel5.mp4",
    "HeyElisaCarousel6.mov",
    "HeyElisaCarousel7.mov",
    "HeyElisaCarousel8.mov",
  ];
  let heyElisaCarousel = [];
  for (const item of heyElisaItems) {
    heyElisaCarousel.push({
      src: "/images/portfolio/kendra/college_tour/hey-elisa/" + item,
    });
  }

  const scavengerItems = [
    "ScavengerHunt1.jpeg",
    "ScavengerHunt2.mp4",
    "ScavengerHunt3.jpg",
    "ScavengerHunt4.mp4",
    "ScavengerHunt5.jpg",
    "ScavengerHunt6.mp4",
    "ScavengerHunt7.jpg",
    "ScavengerHunt8.mp4",
    "ScavengerHunt9.jpg",
    "ScavengerHunt10.mp4",
  ];
  let scavengerCarousel = [];
  for (const item of scavengerItems) {
    scavengerCarousel.push({
      src: "/images/portfolio/kendra/college_tour/scavenger/" + item,
    });
  }

  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleBanner images={titleBanner} />
      <TitleSplitter text={"Hey, Elisa!"} />
      <MediaFeature
        images={heyElisaCarousel}
        text={
          "I played a key role in creating and executing the highly-esteemed “Hey, Elisa!” college tour, which spanned 8 college campuses. The tour was a huge success, earning 7M social impressions and 14M media impressions from trade press coverage. I crafted engaging content that resonated with college students, driving buzz and excitement around the Kendra Scott brand at each campus. The campaign's success was a direct result of our ability to connect with the target audience through authentic, interactive experiences that generated impressive media and social reach."
        }
      />
      <TitleSplitter text={"Get Game Day Ready"} />
      <MediaFeature
        images={scavengerCarousel}
        text={
          "I led the execution and captured the energy of the “Get Game Day Ready” college tour, visiting The University of Alabama, Baylor University, The University of Michigan, The University of Oklahoma, and The University of Arkansas. This campaign blended virtual and in-person experiences with an interactive scavenger hunt: our social team posted clues on Instagram stories, students raced to find spots on campus, and fast participants earned prizes to complete their game day OOTDs. I captured all the excitement, ensuring every moment reflected the tour's fun and engaging atmosphere."
        }
      />
    </div>
  );
};
