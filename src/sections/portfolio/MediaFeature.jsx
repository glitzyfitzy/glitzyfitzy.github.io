import React from "react";
import { ImageCarousel } from "../../components/ImageCarousel";

export const MediaFeature = ({
  imagePath,
  title,
  text,
  imagePosition = "left",
  altText = "",
}) => {
  const images = [
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 1" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 1" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 1" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
    { src: "/TEST-IMAGE.jpg", alt: "Description 2" },
  ];
  return (
    <div className={`flex flex-col gap-4 my-4 justify-center w-full`}>
      {/* Content Section */}
      <div className="w-full flex flex-col justify-center text-center">
        <p className="text-text">{text}</p>
      </div>

      {/* Image Section */}
      <div className="flex w-full justify-center">
        {/* <div
          className="max-w-xs
      sm:max-w-md
      md:max-w-lg
      lg:max-w-lg
      xl:max-w-lg
      h-auto"
        > */}
        <ImageCarousel
          images={images}
          imagesPerView={3} // Adjust as needed
        />
        {/* </div> */}
      </div>
    </div>
  );
};
