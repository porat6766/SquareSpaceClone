import { useState } from "react";
import { Slider } from "../../../ui/slider";

const SizeHightWidth = () => {
  const [widthActiveButton, setWidthActiveButton] = useState("Inset");
  const [heightSpacing, setHeightSpacing] = useState([50]);

  return (
    <div>
      <h3 className="opacity-70 text-sm font-mono">SIZE</h3>
      <div className="flex flex-col gap-3 relative">
        <div className="flex justify-between items-center">
          <span>Height</span>
          <span className="text-sm font-bold">{heightSpacing} VW</span>
        </div>
        <Slider
          value={heightSpacing}
          onValueChange={(value) => setHeightSpacing(value)}
          max={100}
          step={1}
          className="w-[100%]"
        />
      </div>
      <hr className="border-black border-1 opacity-30 my-4" />
      <div className="w-full">
        <span>Width</span>
        <div className="w-full flex justify-between bg-gray-300 rounded mb-5 p-[1.8px]">
          <button
            className={`w-[50%] px-3 py-1 ${
              widthActiveButton === "Full"
                ? "font-bold bg-white"
                : "hover:font-bold"
            }`}
            onClick={() => setWidthActiveButton("Full")}
          >
            Full
          </button>
          <button
            className={`w-[50%] px-3 py-1 ${
              widthActiveButton === "Inset"
                ? "font-bold bg-white"
                : "hover:font-bold"
            }`}
            onClick={() => setWidthActiveButton("Inset")}
          >
            Inset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeHightWidth;
