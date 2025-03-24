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
    <div className={`flex flex-col gap-4justify-center w-full my-6`}>
      {/* Content Section */}
      <div className="flex flex-col justify-center  mb-10 mx-[20%]">
        <p className="text-center text-text">{text}</p>
      </div>

      {/* Image Section */}
      <div className="flex w-full justify-center">
        <ImageCarousel
          images={images}
          imagesPerView={3} // Adjust as needed
        />
        {/* </div> */}
      </div>
    </div>
  );
};
