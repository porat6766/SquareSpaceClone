import React, { useState, useRef, useEffect } from "react";
import Icon from "../assets/icon-squarespace.svg";
import Fullscreen from "../assets/icon-fullscreen-open.svg";
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
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      {!fullscreen && (
        <div className="relative min-w-72 p-4 bg-zinc-100 text-black">
          <span
            className="absolute opacity-30 hover:opacity-60 left-6 top-5 cursor-pointer"
            onClick={() => navigate("/templates")}
          >
            <img src={Icon} alt="logo" className="max-w-10 max-h-10" />
          </span>
          {/* head */}
          <div className="mt-24 flex flex-col items-center">
            <input
              placeholder="company name"
              className="py-6 px-2 bg-zinc-200 w-5/6 max-h-[60px] mb-4"
            />
            <input
              placeholder="add text"
              className="py-6 px-2 bg-zinc-200 w-5/6 max-h-[60px]"
            />
          </div>
          <h2 className="text-xl mt-24">Controls</h2>
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
          </div>
        </div>
      )}
      {/* Canvas */}
      <div
        className={`flex-grow relative ${
          fullscreen ? "h-screen w-screen" : "h-screen w-auto"
        }`}
      >
        <canvas ref={canvasRef} className="shadow h-2/3 w-screen"></canvas>
        <span className="absolute text-black bottom-[265px] right-[300px] opacity-70">
          icon maker made by <b>EDEN SHABI</b> from the <b>CREATION TRIO</b>
        </span>
        {/* Icons: Gear and Fullscreen */}
        <img
          src={Options}
          alt="gear"
          className="absolute top-5 left-5 flex space-x-4 w-6 h-6 cursor-pointer opacity-65 hover:opacity-100"
        />
        <img
          src={Fullscreen}
          alt="fullscreen"
          className="absolute bottom-[280px] left-5 flex space-x-4 w-6 h-6 cursor-pointer opacity-65 hover:opacity-100 rotate-90"
          onClick={handleFullscreenToggle}
        />
      </div>
    </div>
  );
};

export default MakerCore;
