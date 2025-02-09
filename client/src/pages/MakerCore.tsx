import React, { useState, useRef, useEffect } from "react";
import Icon from "../assets/icon-squarespace.svg";
import Fullscreen from "../assets/icon-fullscreen-open.svg";
import Smallscreen from "../assets/icon-fullscreen-close.svg";
import CardImg from "../assets/preview-website.jpg";
import Tshirt from "../assets/preview-tshirt.jpg";
import Banner from "../assets/splash-businesscard-copy.png";
import Options from "../assets/icon-gear.svg";
import { useNavigate, useParams } from "react-router-dom";

// # # # # # # # icons importing
import { IconsGrid } from "../components/LogoMaker/ReactIcons";
import IconDisplay, { SearchKeyWords } from "../components/LogoMaker/Allicons";

const MakerCore = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gridSize, setGridSize] = useState(20);
  const [fullscreen, setFullscreen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { companyNameParams } = useParams<{ companyNameParams: string }>();
  const [companyName, setCompanyName] = useState<string | undefined>(
    companyNameParams
  );
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const dotRadius = 1; // Dot (radius)

  // Set canvas size based on device pixel ratio for sharp rendering
  const setCanvasSize = (canvas: HTMLCanvasElement) => {
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth * ratio;
    const height = canvas.offsetHeight * ratio;

    canvas.width = width;
    canvas.height = height;

    // Update the canvas style for correct display without blurriness
    canvas.style.width = `${canvas.offsetWidth}px`;
    canvas.style.height = `${canvas.offsetHeight}px`;
  };

  const drawGrid = (context: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (canvas && context) {
      const width = canvas.width;
      const height = canvas.height;

      context.clearRect(0, 0, width, height); // Clear the canvas before drawing # # # # # # # # # # ## # # ## # #
      context.fillStyle = "#9e9e9e";

      // Draw dots in a grid pattern
      for (let y = gridSize; y < height; y += gridSize) {
        for (let x = gridSize; x < width; x += gridSize) {
          context.beginPath();
          context.arc(x, y, dotRadius, 0, Math.PI * 2); // Draw a circle (dot)
          context.fill();
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        setCanvasSize(canvas);
        drawGrid(context);
      }
    }
  }, [gridSize]);

  const handleFullscreenToggle = () => {
    setFullscreen(!fullscreen);
  };

  const toggleDialog = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleItemSelect = (item: string) => {
    setSearchQuery(item);
  };

  useEffect(() => {
    setCompanyName(companyNameParams);
  }, [companyNameParams]);

  return (
    <div className="flex relative w-screen min-h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`relative bg-zinc-100 text-black transition-all duration-500 ease-in-out flex flex-col justify-center ${
          fullscreen ? "w-0 opacity-0" : "w-[380px] opacity-100"
        }`}
      >
        {/* icon */}
        <span
          className="transition-all duration-500 ease-in-out absolute opacity-50 hover:opacity-80 left-6 top-5 cursor-pointer"
          onClick={() => navigate("/templates")}
        >
          <img src={Icon} alt="logo" className="max-w-9 max-h-9" />
        </span>
        {/* sidebar content */}
        <div className="mt-16 flex flex-col items-center">
          {/* inputs */}
          <input
            placeholder={companyName ? companyName : "company name"}
            onChange={(e) => setCompanyName(e.target.value)}
            className="py-6 px-4 bg-neutral-200 w-5/6 max-h-[55px] placeholder:font-bold placeholder:text-sm placeholder:opacity-50 hover:placeholder:opacity-70 placeholder:text-black focus:placeholder:text-transparent mb-4"
          />
          <input
            placeholder="add text"
            className="py-6 px-4 bg-neutral-200 w-5/6 max-h-[55px] placeholder:font-bold placeholder:text-sm placeholder:opacity-50 hover:placeholder:opacity-70 placeholder:text-black focus:placeholder:text-transparent"
          />
          <div className="group relative w-full flex flex-col items-center">
            {/* search button */}
            <div
              onClick={toggleSearch}
              className="relative group flex self-start ml-6 mt-10 text-gray-500 group-hover:text-black cursor-pointer"
            >
              <button className="flex items-center pr-3" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.42-1.42l4.93 4.93a1 1 0 11-1.42 1.42l-4.93-4.93zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-gray-600 group-hover:text-black">
                {searchQuery ? searchQuery : "for more icons ..."}
              </span>
              {isSearchOpen && (
                <div className="fixed inset-0 flex items-center justify-start pl-10 pb-24 bg-black/50 z-50 cursor-pointer">
                  <div
                    ref={dialogRef}
                    className="bg-white bg-opacity-20 backdrop-blur-[3px] p-4 rounded-md shadow-lg w-[350px] max-w-full mt-64 cursor-auto"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearch}
                      className="mb-2 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-slate-100"
                      placeholder="Search icons here"
                    />
                    <h1 className="text-gray-900 underline font-bold text-2xl ml-1 cursor-default">
                      Key Words
                    </h1>
                    <div className="flex flex-col mt-10 h-80 w-full bg-slate-100 bg-opacity-80 rounded-lg">
                      <div className="h-full w-4/5 self-center overflow-y-auto scrollbar-hide">
                        <SearchKeyWords onItemSelect={handleItemSelect} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* # # # # # # # # icons to choose from list  # # # # # # #*/}
            <div className="group relative mt-4 border-t-2 border-opacity-35 border-gray-600 group-hover:border-black w-5/6 max-h-[365px] h-screen">
              <div className="grid overflow-y-auto max-h-[365px]">
                {!searchQuery ? (
                  <IconsGrid />
                ) : (
                  <IconDisplay searchQuery={searchQuery} />
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="flex p-5 px-24 mt-8 text-opacity-80 hover:text-opacity-100 bg-black text-white text-sm font-bold self-center">
          SAVE LOGO
        </button>
      </div>
      {/* body */}
      <div
        className={`flex flex-col relative overflow-hidden h-screen w-screen `}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`relative top-0 left-0 shadow transition-all duration-700 ease-in-out w-screen h-screen`}
        ></canvas>
        <h1 className="absolute text-7xl text-black z-50 self-center flex top-[300px] cursor-grab active:cursor-grabbing">
          {companyName ? companyName : "company name"}
        </h1>
        <span
          className={`absolute text-black right-6 opacity-70 transition-all duration-500 ease-in-out ${
            fullscreen ? "bottom-8" : "bottom-[265px]"
          }`}
        >
          icon maker made by <b>EDEN SHABI</b> from the <b>CREATION TRIO</b>
        </span>
        {/* Icons: Gear and Fullscreen */}
        <img
          src={Options}
          alt="gear"
          onClick={toggleDialog}
          className="transition-all duration-700 ease-in-out absolute top-5 left-5 flex space-x-4 w-5 h-5 cursor-pointer opacity-65 hover:opacity-100"
        />
        {/* options dialog */}
        {isOptionsOpen && (
          <div
            className="absolute top-5 left-16 bg-black text-gray-300 p-4 text-sm shadow-lg z-50 w-48 space-y-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
          >
            <div className="flex flex-col">
              <span className="uppercase cursor-pointer mb-5">guides</span>
              <span className="uppercase cursor-pointer">snap to grid</span>
            </div>
            {/* grid change in px */}
            <div className="mb-4">
              <input
                type="range"
                min="10"
                max="50"
                step="1"
                value={gridSize}
                onChange={(e) => setGridSize(Number(e.target.value))}
                className="w-full hover:cursor-grab active:cursor-grabbing"
              />
              <label className="block text-xs opacity-65">
                Grid Size {gridSize}px
              </label>
            </div>
          </div>
        )}
        <img
          src={fullscreen ? Smallscreen : Fullscreen}
          alt="fullscreen"
          className={`absolute left-0 w-5 h-5 m-5 cursor-pointer opacity-65 hover:opacity-100 rotate-90 transition-all duration-500 ease-in-out ${
            fullscreen ? "bottom-8" : "bottom-[260px]"
          }`}
          onClick={handleFullscreenToggle}
        />
        {/* footer */}
        <footer
          className={`bg-white text-black p-6 transition-all duration-500 ease-in-out absolute bottom-0 left-0 w-full shadow-inner ${
            fullscreen ? "opacity-0 h-0" : "opacity-100 max-h-[245px]"
          }`}
        >
          <div
            className={`text-center ml-20 ${
              fullscreen ? "hidden" : "flex"
            } space-x-14 relative -bottom-6 items-end`}
          >
            <img
              src={Banner}
              className="w-[400px] h-52 hover:scale-110 cursor-pointer"
            />
            <img
              src={CardImg}
              className="w-80 h-52 hover:scale-110 cursor-pointer"
            />
            <img
              src={Tshirt}
              className="w-52 h-52 hover:scale-110 cursor-pointer"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MakerCore;
