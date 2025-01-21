import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileMenu from "./HeadBurger";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import ProfileDropdown from "./DropProfile";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isXL, setIsXL] = useState(false);

  const images = [
    {
      hl: "Made with Squarespace",
      image:
        "https://media-www.sqspcdn.com/images/site-navigation/drinkminna-1000w.jpg",
      text: "A collection of inspirational websites made by real Squarespace users.",
    },
    {
      hl: "Squarespace Blog",
      image:
        "https://media-www.sqspcdn.com/images/site-navigation/blog-2-1000w.jpg",
      text: "Stories and solutions for the modern entrepreneur.",
    },
    {
      hl: "Help Center",
      image:
        "https://media-www.sqspcdn.com/images/site-navigation/help-2-1000w.jpg",
      text: "In-depth guides and videos about the platform, our services, and how to get started.",
    },
    {
      hl: "Forum",
      image:
        "https://media-www.sqspcdn.com/images/site-navigation/forum-2-1000w.jpg",
      text: "An online community for Squarespace users and professionals to discuss best practices and seek advice.",
    },
    {
      hl: "Webinars",
      image:
        "https://media-www.sqspcdn.com/images/site-navigation/webinars-2-1000w.jpg",
      text: "Free, online sessions where you'll learn the basics and refine your Squarespace skills.",
    },
    {
      hl: "For Professionals",
      image:
        "https://media-www.sqspcdn.com/images/site-navigation/circle-1-1000w.jpg",
      text: "Earn rewards for building custom websites your clients can easily manage with Circle.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(images[0].image);
  const [currentText, setCurrentText] = useState(images[0].text);

  const handleResources = (image: string, text: string) => {
    setCurrentImage(image);
    setCurrentText(text);
  };

  const createWebsiteButtons = [
    "Website Overview",
    "Website Templates",
    "Design Intelligence",
    "For Portfolios",
    "For Blogs",
    "Analytics",
    "Hire an Expert",
    "Enterprise Solutions",
    "Find a Domain",
    "Transfer a Domain",
  ];

  const sellAnythingButtons = [
    "Ecommerce Overview",
    "Templates for Sellers",
    "Online Stores",
    "Sell Services",
    "Scheduling",
    "Content & Memberships",
    "Invoicing",
    "Donations",
    "Store Management",
    "Commerce Extensions",
  ];

  const buildYourBrandButtons = [
    { name: "Marketing Overview", url: "/marketing-overview" },
    { name: "Email Marketing", url: "/email-marketing" },
    { name: "SEO Tools", url: "/seo-tools" },
    { name: "Creator Tools", url: "/creator-tools" },
    { name: "Logo Maker", url: "/logo-maker" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const headerTextColor =
    location.pathname === "/"
      ? "text-white"
      : location.pathname === "/templates"
      ? "text-black"
      : "text-white";

  const headerLogoColor =
    location.pathname === "/"
      ? "fill-white"
      : location.pathname === "/templates"
      ? "fill-black"
      : "fill-white";

  const headerStartButton =
    location.pathname === "/templates"
      ? "hidden"
      : location.pathname === "/"
      ? "block"
      : "hidden";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleMediaChange = (e: any) => setIsXL(e.matches);

    setIsXL(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <header
      className={`${
        isMenuOpen || !isTop ? "text-white" : headerTextColor
      } fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isMenuOpen || !isTop ? "bg-black" : "bg-transparent"
      } `}
    >
      <div
        className={`container mx-auto flex items-center justify-between p-4`}
      >
        {/* Logo */}
        <div>
          <Link to="/" className="hover:opacity-45">
            <svg
              className={`${
                isMenuOpen || !isTop ? "fill-white" : headerLogoColor
              } logo-path w-[250px] h-auto -ml-16`}
              xmlns="http://www.w3.org/2000/svg"
              width="166px"
              height="24px"
              viewBox="0 0 500 72"
            >
              <title>Squarespace Logo</title>
              <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z"></path>
              <path
                d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13 
              23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45
               67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z"
              ></path>
              <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z"></path>
              {/* big path */}
              <path
                d="M114.7 43.47a6.71 6.71 0 0 0 2.55 4.2 8.56 8.56 0 0 0 5.29 1.51 7.54 7.54 0 0 0 5-1.49 4.89 4.89 0 0 0 1.76-3.92 4 4 0 0 0-.47-2 
              4.26 4.26 0 0 0-1.32-1.39 8.39 8.39 0 0 0-2.08-1l-2.78-.84-2.65-.72a24.41 24.41 0 0 1-4.27-1.57 13.2 13.2 0 0 1-3.23-2.16 8.33 8.33 0 0 1-2-2.85
               9.33 9.33 0 0 1-.7-3.75 9.45 9.45 0 0 1 .9-4.12 9 9 0 0 1 2.53-3.22 12 12 0 0 1 4-2.11 16.53 16.53 0 0 1 5.26-.77q5.51 0 8.73 2.6a10.27 10.27 0 
               0 1 3.78 7l-6 .49a6 6 0 0 0-2.18-3.47 7.43 7.43 0 0 0-4.57-1.24 6.57 6.57 0 0 0-4.27 1.26 4 4 0 0 0-1.54 3.25 3.7 3.7 0 0 0 .45 1.91 4.1 4.1 0 0
                0 1.29 1.34 9.2 9.2 0 0 0 2.06 1c.81.3 1.73.62 2.75.95l2.54.79q2.37.75 4.29 1.56a12.81 12.81 0 0 1 3.25 2 7.77 7.77 0 0 1 2.06 2.73 9.5 9.5 0 0
                1 .72 3.92 10.31 10.31 0 0 1-1 4.54 10 10 0 0 1-2.78 3.5 13.13 13.13 0 0 1-4.25 2.24 17.54 17.54 0 0 1-5.43.79 15.57 15.57 0 0 1-9.18-2.58 11.21
                11.21 0 0 1-4.57-7.85zM161.15 17.37a19.2 19.2 0 0 1 7.35 1.36 16.09 16.09 0 0 1 5.65 3.82 17.25 17.25 0 0 1 3.63 5.88 21.17 21.17 0 0 1 1.29 7.5
                20.32 20.32 0 0 1-1.37 7.62 17.21 17.21 0 0 1-3.89 5.88l4.76 5.57v1.73h-6l-3.33-4.07a19.13 19.13 0 0 1-3.77 1.34 19.92 19.92 0 0 1-4.27.44 19.24
                19.24 0 0 1-7.42-1.44 16 16 0 0 1-5.61-3.83 17 17 0 0 1-3.57-5.85 21.21 21.21 0 0 1-1.27-7.42 21.37 21.37 0 0 1 1.27-7.47 16.89 16.89 0 0 1
                3.6-5.86 16.28 16.28 0 0 1 5.63-3.84 18.62 18.62 0 0 1 7.32-1.36zm-.05 5.36a11.15 11.15 0 0 0-4.79 1 10.16 10.16 0 0 0-3.57 2.75 12.33 12.33
                0 0 0-2.24 4.16 17.11 17.11 0 0 0-.76 5.22 16.81 16.81 0 0 0 .79 5.26 12.89 12.89 0 0 0 2.26 4.21 10.32 10.32 0 0 0 3.57 2.8 11 11 0 0 0 4.79
                1 11.44 11.44 0 0 0 4.79-1 10.09 10.09 0 0 0 3.57-2.71 12.16 12.16 0 0 0 2.26-4.18 17.4 17.4 0 0 0 .8-5.38 17 17 0 0 0-.8-5.3 12.35 12.35 0 0
                0-2.26-4.16 10.33 10.33 0 0 0-3.59-2.72 11.35 11.35 0 0 0-4.82-.95zM202.64 49.38a7.63 7.63 0 0 0 6-2.36q2.13-2.35 2.13-7.22V18.06H217V40a19.58
                19.58 0 0 1-1 6.62 11.45 11.45 0 0 1-2.83 4.52 11 11 0 0 1-4.51 2.58 22.51 22.51 0 0 1-12 0 10.93 10.93 0 0 1-4.49-2.58 11.56 11.56 0 0
                1-2.83-4.52 19.6 19.6 0 0 1-1-6.62V18.06h6.25V39.8q0 4.86 2.14 7.22a7.61 7.61 0 0 0 5.91 2.36zM223.24 52l12.65-33.9h9.38L257.78
                52v1.7h-6.15l-3.58-10.18h-15.43L229 53.7h-5.8zm11.26-13.8h11.77l-1.94-5.66c-.76-2.21-1.37-4-1.84-5.41s-.87-2.61-1.24-3.67h-1.53l-.6 
                1.69c-.2.56-.42 1.19-.67 1.88s-.52 1.49-.82 2.39-.66 1.93-1.09 3.12zM292.72 53.7h-6l-10.87-14h-4v14h-6.16V18.06h11.57a35.57 35.57 0 0 
                1 5.18.37 10.7 10.7 0 0 1 4.45 1.72q4.22 2.78 4.22 8.38a11.4 11.4 0 0 1-.73 4.24 9.46 9.46 0 0 1-1.91 3.08 10 10 0 0 1-2.75 2.06 14.26
                14.26 0 0 1-3.25 1.19L292.72 52zm-20.89-19.36h5.41a10.45 10.45 0 0 0 5.63-1.3 4.67 4.67 0 0 0 2.06-4.26 4.38 4.38 0 0 0-2.09-4.18 11.4 
                11.4 0 0 0-5.6-1.18h-5.41zM300.66 18.06h23.08v5.46h-17v9.33h15.78v5.36h-15.75v10h17.32v5.49h-23.43zM337.89 43.47a6.71 6.71 0 0 0 2.55
                4.2 8.58 8.58 0 0 0 5.29 1.51 7.54 7.54 0 0 0 5-1.49 4.89 4.89 0 0 0 1.76-3.92 4 4 0 0 0-.47-2 4.26 4.26 0 0 0-1.32-1.39 8.39 8.39 0
                0 0-2.08-1l-2.78-.84-2.68-.74a24.41 24.41 0 0 1-4.27-1.57 13.2 13.2 0 0 1-3.23-2.16 8.33 8.33 0 0 1-2-2.85 10.12 10.12 0 0 1 .2-7.87
                9.11 9.11 0 0 1 2.53-3.22 12 12 0 0 1 4-2.11 16.53 16.53 0 0 1 5.26-.77q5.51 0 8.74 2.6a10.26 10.26 0 0 1 3.77 7l-6 .49a6 6 0 0 0-2.16-3.47
                7.41 7.41 0 0 0-4.57-1.24 6.57 6.57 0 0 0-4.27 1.26 4 4 0 0 0-1.53 3.25 3.7 3.7 0 0 0 .44 1.91 4.1 4.1 0 0 0 1.29 1.34 9.2 9.2 0 0 0 2.06
                1c.81.3 1.73.62 2.76.95l2.53.79q2.38.75 4.29 1.56a12.81 12.81 0 0 1 3.25 2 7.77 7.77 0 0 1 2.06 2.73 9.5 9.5 0 0 1 .72 3.92 10.31 10.31 
                0 0 1-1 4.54 9.89 9.89 0 0 1-2.78 3.5A13.18 13.18 0 0 1 351 53.6a17.61 17.61 0 0 1-5.44.79 15.59 15.59 0 0 1-9.18-2.58 11.21 11.21 0 0 
                1-4.55-7.81zM367.91 18.06h13a18.72 18.72 0 0 1 6.08.85 10.22 10.22 0 0 1 4 2.33 8.6 8.6 0 0 1 2.18 3.5 13.52 13.52 0 0 1 .67 4.34 11.68
                11.68 0 0 1-.92 4.84 8.71 8.71 0 0 1-2.65 3.4 12.07 12.07 0 0 1-4.22 2 21.42 21.42 0 0 1-5.61.67h-6.3V53.7h-6.21zm6.21 16.58h5.95a15.52
                15.52 0 0 0 3-.27 7.11 7.11 0 0 0 2.38-.91 4.46 4.46 0 0 0 1.59-1.72 5.68 5.68 0 0 0 .57-2.66 5.93 5.93 0 0 0-.57-2.73 4.44 4.44 0 0
                0-1.57-1.75 6.79 6.79 0 0 0-2.35-.91 15.29 15.29 0 0 0-3-.27h-6.05zM395.56 52l12.66-33.9h9.38L430.1 52v1.7H424l-3.57-10.18h-15.49l-3.57
                10.18h-5.81zm11.27-13.8h11.76l-1.94-5.66c-.76-2.21-1.37-4-1.83-5.41l-1.24-3.67H412l-.6 1.69c-.2.56-.42 1.19-.67 1.88s-.52 1.49-.82
                2.39-.66 1.93-1.09 3.12zM467.92 44.27a17.81 17.81 0 0 1-2.2 3.92 14.89 14.89 0 0 1-3.31 3.22 15.63 15.63 0 0 1-4.49 2.18 19.06 19.06 
                0 0 1-5.68.8A18.12 18.12 0 0 1 445 53a16.19 16.19 0 0 1-5.55-3.84 17.08 17.08 0 0 1-3.55-5.86 21.28 21.28 0 0 1-1.25-7.37 21.23 21.23
                0 0 1 1.25-7.37 17 17 0 0 1 3.57-5.88 16.52 16.52 0 0 1 5.58-3.9 18.06 18.06 0 0 1 7.27-1.41 16.82 16.82 0 0 1 9.8 2.73 14.75 14.75
                0 0 1 5.59 7.24l-6.31 1.24a10.41 10.41 0 0 0-3.6-4.29 9.74 9.74 0 0 0-5.58-1.56 10.43 10.43 0 0 0-4.69 1 10.15 10.15 0 0 0-3.47 2.79
                12.43 12.43 0 0 0-2.16 4.21 17.41 17.41 0 0 0-.75 5.19 17.1 17.1 0 0 0 .77 5.22 12.36 12.36 0 0 0 2.23 4.15 10.37 10.37 0 0 0 3.57
                2.71 11 11 0 0 0 4.77 1 9.3 9.3 0 0 0 5.73-1.69 11.64 11.64 0 0 0 3.5-4.12zM476.31 18.06h23.08v5.46h-17v9.33h15.81v5.36h-15.78v10h17.32v5.49h-23.43z"
              ></path>
            </svg>
          </Link>
        </div>
        {/* Buttons div */}
        <div className={`flex items-center gap-4 ${isXL ? "flex" : "hidden"}`}>
          {/* First Button: NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="px-4 py-2 bg-transparent text-base"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <b>PRODUCTS</b>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={`overflow-hidden transition-all duration-1000 ease-in-out transform origin-top border-t-2 border-slate-100 border-opacity-20 ${
                    isMenuOpen
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavigationMenuLink>
                    <div className="flex relative h-full">
                      {/* Right side */}
                      <div className="flex text-2xl mt-5 w-2/3 ml-20 overflow-y-auto">
                        {/* CREATE A WEBSITE Column */}
                        <div className="text-white flex flex-col h-full w-1/3">
                          <h1 className="opacity-60 text-base">
                            CREATE A WEBSITE
                          </h1>
                          <div className="flex flex-col space-y-2 mt-10">
                            {createWebsiteButtons.map((button, index) => (
                              <span
                                key={index}
                                className="relative group text-white cursor-pointer"
                              >
                                <span className="block mb-5 opacity-70 hover:opacity-100">
                                  {button}
                                  <span className="absolute opacity-0 ml-1 text-white transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                                    →
                                  </span>
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* SELL ANYTHING Column */}
                        <div className="text-white flex flex-col h-full w-1/3">
                          <h1 className="opacity-60 text-base">
                            SELL ANYTHING
                          </h1>
                          <div className="flex flex-col space-y-2 mt-10">
                            {sellAnythingButtons.map((button, index) => (
                              <span
                                key={index}
                                className="relative group text-white cursor-pointer"
                              >
                                <span className="block mb-5 opacity-70 hover:opacity-100">
                                  {button}
                                  <span className="absolute opacity-0 ml-1 text-white transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                                    →
                                  </span>
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* BUILD YOUR BRAND Column */}
                        <div className="text-white flex flex-col h-full w-1/3">
                          <h1 className="opacity-60 text-base">
                            BUILD YOUR BRAND
                          </h1>
                          <div className="flex flex-col space-y-2 mt-10">
                            {buildYourBrandButtons.map((button, index) => (
                              <a
                                key={index}
                                onClick={() => navigate(button.url)}
                                className="relative group text-white cursor-pointer opacity-70 hover:opacity-100"
                              >
                                <span className="block mb-5">
                                  {button.name}
                                  {button.name === "Logo Maker" && (
                                    <span className="ml-3 p-2 w-10 h-9 text-base text-black bg-gray-300">
                                      new
                                    </span>
                                  )}
                                  <span className="absolute opacity-0 ml-1 text-white transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                                    →
                                  </span>
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Left side */}
                      <div
                        className={`absolute right-0 w-[30vw] h-screen border-l border-slate-100 border-opacity-20`}
                      >
                        <div className="ml-10 mt-4">
                          <h1 className="opacity-60 text-lg">
                            From Squarespace
                          </h1>
                          <div>
                            {/* First Headline */}
                            <h2 className="text-2xl mt-8 flex items-center group relative cursor-pointer">
                              <span className="mr-2 flex flex-col items-center">
                                <span className="w-3 h-3 bg-white rounded-full mb-1"></span>
                                <span className="w-3 h-3 bg-white rounded-full"></span>
                              </span>
                              Acuity Scheduling
                              <span className="opacity-0 ml-1 text-white transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2 group-hover:-rotate-45">
                                →
                              </span>
                            </h2>
                            <p className="opacity-60 text-lg">
                              The scheduling solution for appointment-based
                            </p>
                            {/* Second Headline */}
                            <h2 className="text-2xl mt-10 flex items-center group relative cursor-pointer">
                              <span className="mr-2 flex items-center">
                                <span className="w-5 h-5 bg-white rounded-full mr-1"></span>
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                              </span>
                              services Bio Sites
                              <span className="opacity-0 ml-1 text-white transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2 group-hover:-rotate-45">
                                →
                              </span>
                            </h2>
                            <p className="opacity-60 text-lg">
                              Share your online world in one link
                            </p>
                            {/* Third Headline */}
                            <h2 className="text-2xl mt-10 flex items-center group relative cursor-pointer">
                              <span className="mr-2 flex items-center">
                                <span className="w-4 h-4 border-2 border-white rounded-full mr-1"></span>
                                <span className="w-4 h-4 border-2 border-white rounded-full"></span>
                              </span>
                              Unfold
                              <span className="opacity-0 ml-1 text-white transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2 group-hover:-rotate-45">
                                →
                              </span>
                            </h2>
                            <p className="opacity-60 text-lg">
                              Everything to stand out on social
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Link Button */}
          <button
            onClick={() => navigate("/templates")}
            className="px-4 py-2 bg-transparent text-base"
          >
            <b>TEMPLATES</b>
          </button>
          {/* Second Button: NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="px-4 py-2 bg-transparent text-base"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <b>RESOURCES</b>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={`overflow-hidden transition-all duration-1000 ease-in-out transform origin-top border-t-2 border-slate-100 border-opacity-20  ${
                    isMenuOpen
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavigationMenuLink>
                    <div className="flex relative h-full">
                      {/* Left: Headlines */}
                      <div className="w-1/2 flex flex-col justify-center p-8 space-y-6 mb-14">
                        {images.map((item, index) => (
                          <h2
                            key={index}
                            className="group relative text-5xl font-semibold cursor-pointer transition-all duration-500 opacity-50 hover:opacity-100 hover:text-white"
                            onMouseEnter={() =>
                              handleResources(item.image, item.text)
                            }
                          >
                            <span className="relative inline-block">
                              {item.hl}
                              <span className="absolute left-0 -bottom-5 w-0 h-[3px] bg-white transition-all duration-500 group-hover:w-full"></span>
                            </span>
                            {/* Animated Arrow */}
                            <span className="relative opacity-0 ml-2 text-white transition-all duration-500 transform group-hover:opacity-100 group-hover:translate-x-2">
                              →
                            </span>
                          </h2>
                        ))}
                        <p className="absolute bottom-8 font-bold text-lg">
                          {currentText}
                        </p>
                      </div>
                      {/* Right: Image */}
                      <div className="w-1/2 p-14 flex items-center justify-center">
                        <div className="bg-black w-[40vw] h-[52vh] overflow-hidden">
                          <img
                            src={currentImage}
                            alt="Dynamic"
                            className="w-full h-full object-cover transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Get Started button div */}
        <div className="flex">
          <ProfileDropdown isMenuOpen={isMenuOpen} />
          <button
            onClick={() => navigate("/templates")}
            className={`text-black px-6 py-1 h-12 mt-1 ml-6 bg-white text-sm font-semibold hover:bg-slate-100 ${headerStartButton} ${
              isXL ? "block" : "hidden"
            }`}
          >
            Get Started
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
