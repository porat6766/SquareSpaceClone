import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Functions for different media queries
const smallScreenWidth =
  "calc((var(--grid-column-width) * 9) + (var(--grid-gutter-width) * 5))";
const mediumScreenWidth =
  "calc((var(--grid-column-width) * 4) + (var(--grid-gutter-width) * 5))";
const largeScreenWidth =
  "calc((var(--grid-column-width) * 5) + (var(--grid-gutter-width) * 4))";
const defaultWidth =
  "calc((var(--grid-column-width) * 6) + (var(--grid-gutter-width) * 4))";

const GetStarted: React.FC = () => {
  const [calculateWidth, setCalculateWidth] = useState<string>(defaultWidth);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const updateFunction = () => {
      if (window.matchMedia("(max-width: 744px)").matches) {
        setCalculateWidth(smallScreenWidth);
        setIsSmallScreen(true);
      } else if (
        window.matchMedia("(min-width: 744px) and (max-width: 1020px)").matches
      ) {
        setCalculateWidth(mediumScreenWidth);
      } else if (
        window.matchMedia("(min-width: 1020px) and (max-width: 1440px)").matches
      ) {
        setCalculateWidth(largeScreenWidth);
      } else {
        setCalculateWidth(defaultWidth);
      }
    };

    // Initial check
    updateFunction();

    // Listen for resize events
    window.addEventListener("resize", updateFunction);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateFunction);
  }, []);

  return (
    <div className="-mt-14 relative">
      {/* Responsive Image with <picture> */}
      <picture>
        {/* Tablet (WebP) */}
        <source
          media="(min-width: 744px) and (max-width: 1020px)"
          srcSet="https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-100w.webp 100w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-300w.webp 300w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-500w.webp 500w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-750w.webp 750w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-1000w.webp 1000w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-1500w.webp 1500w"
          type="image/webp"
        />
        {/* Tablet (JPEG) */}
        <source
          media="(min-width: 744px) and (max-width: 1020px)"
          srcSet="https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-100w.jpg 100w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-300w.jpg 300w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-500w.jpg 500w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-750w.jpg 750w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-1000w.jpg 1000w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-tablet-1-1500w.jpg 1500w"
          type="image/jpeg"
        />
        {/* Desktop (WebP) */}
        <source
          media="(min-width: 1020px)"
          srcSet="https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-100w.webp 100w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-300w.webp 300w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-500w.webp 500w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-750w.webp 750w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-1000w.webp 1000w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-1500w.webp 1500w"
          type="image/webp"
        />
        {/* Desktop (JPEG) */}
        <source
          media="(min-width: 1020px)"
          srcSet="https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-100w.jpg 100w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-300w.jpg 300w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-500w.jpg 500w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-750w.jpg 750w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-1000w.jpg 1000w,
                  https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-desktop-1-1500w.jpg 1500w"
          type="image/jpeg"
        />
        {/* Mobile (Fallback) */}
        <img
          className="hero__background-image"
          src="https://media-www.sqspcdn.com/images/pages/homepage/sep-2024/hero/images/en_US/hero-2024-mobile-1-500w.jpg"
          alt="Hero background"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          loading="eager"
          decoding="async"
        />
      </picture>
      {/* The overlay div */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 ml-0 md:ml-14"
        style={{
          width: calculateWidth,
          height: "100%",
          justifySelf: isSmallScreen ? "center" : undefined,
        }}
      >
        <h1 className="self-start text-white text-left font-light tracking-tight leading-tight md:-mt-0 -mt-72">
          <b className="text-[calc(2.0227272727272725rem+3.6363636363636362vw)] md:text-[calc(-.625rem+6.25vw)] lg:text-[calc(.125rem+5.416666666666667vw)] xs:text-6xl">
            A website <br /> makes it real
          </b>
        </h1>
        <div className="flex mt-8 self-start">
          <button
            className="bg-white hover:bg-gray-100 w-64 h-24 px-4 py-3 text-xl mr-3"
            onClick={() => navigate("/templates")}
          >
            <b>GET STARTED</b>
          </button>
          <p
            className="text-white ml-8 self-center lg:text-lg xl:text-lg xl:ml-4 2xl:text-2xl 3xl:text-3xl"
            style={{ opacity: "75%" }}
          >
            Get your free website trial today.
            <br />
            No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
