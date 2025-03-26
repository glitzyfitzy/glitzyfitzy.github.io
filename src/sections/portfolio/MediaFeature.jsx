import React from "react";
import { ImageCarousel } from "../../components/ImageCarousel";

export const MediaFeature = ({ images, text }) => {
  return (
    <div className={`flex flex-col gap-4justify-center w-full my-6`}>
      {/* Content Section */}
      {text && (
        <div className="flex flex-col justify-center mb-10 mx-[15%]">
          <p className="text-center text-text text-lg">{text}</p>
        </div>
      )}

      {/* Image Section */}
      {images && (
        <div className="flex w-full justify-center">
          <ImageCarousel images={images} />
        </div>
      )}
    </div>
  );
};
