import { useState, useEffect } from "react";

export const TitleBanner = ({ images }) => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible1(true);
    }, 200);
    setTimeout(() => {
      setIsVisible2(true);
    }, 700);
    setTimeout(() => {
      setIsVisible3(true);
    }, 1200);
    setTimeout(() => {
      setIsVisible4(true);
    }, 1700);
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-4 justify-center align-middle w-full my-10">
        <div
          className="relative
  max-w-xs
  sm:max-w-md
  md:max-w-lg
  lg:max-w-lg
  xl:max-w-lg
  h-auto"
          style={{
            opacity: isVisible1 ? 1 : 0,
            transform: isVisible1 ? "translateX(0)" : "translateX(-100%)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <img
            src={images[0].src}
            alt={images[0].altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="relative
  max-w-xs
  sm:max-w-md
  md:max-w-lg
  lg:max-w-lg
  xl:max-w-lg
  h-auto"
          style={{
            opacity: isVisible2 ? 1 : 0,
            transform: isVisible2 ? "translateX(0)" : "translateX(-100%)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <img
            src={images[1].src}
            alt={images[1].altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="relative
  max-w-xs
  sm:max-w-md
  md:max-w-lg
  lg:max-w-lg
  xl:max-w-lg
  h-auto"
          style={{
            opacity: isVisible3 ? 1 : 0,
            transform: isVisible3 ? "translateX(0)" : "translateX(-100%)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <img
            src={images[2].src}
            alt={images[2].altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="relative
  max-w-xs
  sm:max-w-md
  md:max-w-lg
  lg:max-w-lg
  xl:max-w-lg
  h-auto"
          style={{
            opacity: isVisible4 ? 1 : 0,
            transform: isVisible4 ? "translateX(0)" : "translateX(-100%)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <img
            src={images[3].src}
            alt={images[3].altText}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
