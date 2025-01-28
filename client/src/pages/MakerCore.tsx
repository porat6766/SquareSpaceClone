import React, { useState, useRef, useEffect } from "react";
import Icon from "../assets/icon-squarespace.svg";
import Fullscreen from "../assets/icon-fullscreen-open.svg";
import Smallscreen from "../assets/icon-fullscreen-close.svg";
import Options from "../assets/icon-gear.svg";
import { useNavigate } from "react-router-dom";

// Canvas Component with Grid Dots
const MakerCore = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gridSize, setGridSize] = useState(20);
  const [fullscreen, setFullscreen] = useState(false);
  const navigate = useNavigate();

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

      context.clearRect(0, 0, width, height); // Clear the canvas before drawing
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

  // Toggle Fullscreen Mode
  const handleFullscreenToggle = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="flex relative w-screen min-h-screen overflow-hidden">
      {/* Sidebar */}
      {!fullscreen && (
        <div className="relative min-w-[300px] p-4 bg-zinc-100 text-black">
          {/* icon */}
          <span
            className="absolute opacity-30 hover:opacity-60 left-6 top-5 cursor-pointer"
            onClick={() => navigate("/templates")}
          >
            <img src={Icon} alt="logo" className="max-w-9 max-h-9" />
          </span>
          {/* inputs */}
          <div className="mt-16 flex flex-col items-center">
            <input
              placeholder="company name"
              className="py-6 px-4 bg-neutral-200 w-5/6 max-h-[55px] placeholder:font-bold placeholder:text-sm placeholder:opacity-60 mb-4"
            />
            <input
              placeholder="add text"
              className="py-6 px-4 bg-neutral-200 w-5/6 max-h-[55px] placeholder:font-bold placeholder:text-sm placeholder:opacity-60"
            />
            {/* search button */}
            <div className="relative group flex self-start ml-6 mt-10 text-gray-500 group-hover:text-black cursor-pointer">
              <button className="flex items-center pr-3" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.42-1.42l4.93 4.93a1 1 0 11-1.42 1.42l-4.93-4.93zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-gray-500 group-hover:text-black">
                Search
              </span>
            </div>
            {/* icons to choose from list */}
            <div className="mt-4 border-t-2 border-opacity-35 border-gray-500 w-5/6 overflow-y-visible max-h-[365px] h-screen">
              <div className="grid grid-cols-3 gap-4 p-4"></div>
            </div>
            <button className="p-5 px-20 mt-8 text-opacity-70 hover:text-opacity-100 bg-black text-white text-sm font-bold">
              SAVE LOGO
            </button>
          </div>
        </div>
      )}
      {/* Canvas */}
      <div
        className={`flex flex-grow flex-col relative overflow-hidden ${
          fullscreen ? "h-screen w-screen" : "h-2/3 w-auto"
        }`}
      >
        <canvas
          ref={canvasRef}
          className="relative shadow h-screen w-screen"
        ></canvas>
        <span
          className={`absolute text-black right-6 opacity-70 ${
            fullscreen ? "bottom-8" : "bottom-[265px]"
          }`}
        >
          icon maker made by <b>EDEN SHABI</b> from the <b>CREATION TRIO</b>
        </span>
        {/* Icons: Gear and Fullscreen */}
        <img
          src={Options}
          alt="gear"
          className="absolute top-5 left-5 flex space-x-4 w-6 h-6 cursor-pointer opacity-65 hover:opacity-100"
        />
        <img
          src={fullscreen ? Smallscreen : Fullscreen}
          alt="fullscreen"
          className={`absolute left-5 flex space-x-4 w-6 h-6 cursor-pointer opacity-65 hover:opacity-100 rotate-90 ${
            fullscreen ? "bottom-8" : "bottom-[280px]"
          }`}
          onClick={handleFullscreenToggle}
        />
        {/* footer */}
        {!fullscreen && (
          <footer className="bg-black text-white p-6 h-[250px] w-full absolute bottom-0 right-0">
            <div className="text-center">
              <p>Footer Content</p>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default MakerCore;

{
  /* <h2 className="text-xl mt-24">Controls</h2>
<div className="mb-4">
  <label className="block">Grid Size {gridSize}px</label>
  <input
    type="range"
    min="10"
    max="50"
    step="1"
    value={gridSize}
    onChange={(e) => setGridSize(Number(e.target.value))}
    className="w-full"
  />
</div> */
}
