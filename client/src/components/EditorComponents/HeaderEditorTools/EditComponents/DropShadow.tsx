import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import { Slider } from "../../../ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import ColorPicker from "../../ColorPicker";

const DropShadow = ({ setIsDropShadow }: any) => {
  const [selectedStrength, setSelectedStrength] = useState("Soft");

  const [spreadSpacing, setSpreadSpacing] = useState([50]);
  const [distanceSpacing, setDistanceSpacing] = useState([50]);
  const [blurSpacing, setBlurSpacing] = useState([50]);

  const [dropShadowColor, setDropShadowColor] = useState("#000000");

  return (
    <div>
      <div className="min-w-[370px] p-5 pt-0">
        <header className="flex gap-[46px] min-h-[60px] items-center">
          <button
            onClick={() => setIsDropShadow((prev: any) => !prev)}
            className="flex items-center text-gray-700 hover:text-gray-900 group relative ml-2"
          >
            <ChevronLeftIcon className="h-5 w-5 transition-all duration-300 group-hover:opacity-0" />
            <ArrowLeftIcon className="h-5 w-5 absolute left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90" />
            <span className="">BACK</span>
          </button>
          <h1 className="font-semibold opacity-70 text-lg">Drop shadow</h1>
        </header>
        <div className="w-full ">
          <div className="w-full flex justify-between bg-gray-300 rounded mb-5 p-[1.8px]">
            <button
              className={`w-[33%] px-3 py-1 ${
                selectedStrength === "Soft"
                  ? "font-bold bg-white"
                  : "hover:font-bold"
              }`}
              onClick={() => setSelectedStrength("Soft")}
            >
              Soft
            </button>
            <button
              className={`w-[33%] px-3 py-1 ${
                selectedStrength === "Strong"
                  ? "font-bold bg-white"
                  : "hover:font-bold"
              }`}
              onClick={() => setSelectedStrength("Strong")}
            >
              Strong
            </button>
            <button
              className={`w-[33%] px-3 py-1 ${
                selectedStrength === "Three Point"
                  ? "font-bold bg-white"
                  : "hover:font-bold"
              }`}
              onClick={() => setSelectedStrength("Three Point")}
            >
              •••
            </button>
          </div>
        </div>
        <div className="flex justify-between cursor-pointer">
          <span className="text-lg font-medium">Color</span>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex justify-between items-center cursor-pointer">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: dropShadowColor }}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <ColorPicker
                color={dropShadowColor}
                onChange={setDropShadowColor}
              />
            </PopoverContent>
          </Popover>
        </div>
        <hr className="border-black border-1 opacity-30 my-3" />
        <div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium mb-2">Spread</span>
            <span className="text ">{spreadSpacing} px</span>
          </div>
          <Slider
            value={spreadSpacing}
            onValueChange={(value) => setSpreadSpacing(value)}
            max={100}
            step={1}
            className="w-[100%]"
          />
        </div>
        <hr className="border-black border-1 opacity-30 my-3" />
        <div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium mb-2">Distance</span>
            <span className="text ">{distanceSpacing} px</span>
          </div>
          <Slider
            value={distanceSpacing}
            onValueChange={(value) => setDistanceSpacing(value)}
            max={100}
            step={1}
            className="w-[100%]"
          />
        </div>
        <hr className="border-black border-1 opacity-30 my-3" />
        <div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium mb-2">Blur</span>
            <span className="text ">{blurSpacing} px</span>
          </div>
          <Slider
            value={blurSpacing}
            onValueChange={(value) => setBlurSpacing(value)}
            max={100}
            step={1}
            className="w-[100%]"
          />
        </div>
        <hr className="border-black border-1 opacity-30 my-3" />
        <div
          className="flex justify-center items-center mt-8"
          onClick={() => {
            setIsDropShadow((prev: any) => !prev);
          }}
        >
          <button className="relative group overflow-hidden mt-[90px]">
            <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
              REMOVE{" "}
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropShadow;
