import { MediaFeature } from "../../../sections/portfolio/MediaFeature";
import { TitleImage } from "../../../sections/portfolio/TitleImage";
import { TitleSplitter } from "../../../sections/portfolio/TitleSplitter";

export const Celebrity_Influencer = () => {
  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <TitleImage altText={"TEST"} src={"/TEST-IMAGE.jpg"} />
      <TitleSplitter text={"Celebrity & Influencer"} />
      <MediaFeature
        imagePath={"/TEST-IMAGE.jpg"}
        title={"TITLE"}
        text={"TEodnfasodnfaisdnfaiosdnf;alsdfpoaundfas;kdjfna"}
      />
    </div>
  );
};
