import React, { useState, useEffect, useRef } from "react";

export const ImageCarousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Setup intersection observer to detect which slide is in view
  useEffect(() => {
    const options = {
      root: carouselRef.current,
      rootMargin: "0px",
      threshold: 0.7, // When 70% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the index from the data attribute
          const index = parseInt(entry.target.dataset.index, 10);
          setActiveIndex(index);
        }
      });
    }, options);

    // Get all slides and observe them
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((slide) => {
      observer.observe(slide);
    });

    return () => {
      slides.forEach((slide) => {
        observer.unobserve(slide);
      });
    };
  }, []);

  // Scroll to a specific slide when indicator is clicked
  const scrollToImage = (index) => {
    const slides = document.querySelectorAll(".carousel-slide");
    if (slides[index]) {
      slides[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const isVideo = (src) => {
    return src.match(/\.(mp4|mov|webm|avi|wmv|flv|mkv)$/i);
  };

  return (
    <div className="w-full mx-auto">
      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="relative overflow-x-auto snap-x snap-mandatory flex scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hide scrollbar */}
        <style>{`
          .relative::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            data-index={index}
            className="carousel-slide relative
          max-w-xs
          sm:max-w-sm
          md:max-w-md
          lg:max-w-md
          xl:max-w-md
          h-auto flex-shrink-0 snap-center mx-4"
          >
            {isVideo(image.src) ? (
              <video className="w-full h-full object-cover" controls>
                <source src={image.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index
                ? "bg-accent w-6"
                : "bg-black hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};
