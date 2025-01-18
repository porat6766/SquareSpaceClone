import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import ColorPicker from "../../ColorPicker";

const borders = [
  { type: "all", label: "◫", description: "All Borders" },
  { type: "top-bottom", label: "〓", description: "Top & Bottom" },
  { type: "top", label: "‾", description: "Top Only" },
  { type: "bottom", label: "_", description: "Bottom Only" },
];

type BorderProps = {
  setIsOpenBorder: React.Dispatch<React.SetStateAction<boolean>>;
};

const Border: React.FC<BorderProps> = ({ setIsOpenBorder }) => {
  const [selectedThickness, setSelectedThickness] = useState("M");
  const [customThickness, setCustomThickness]: any = useState(50);
  //
  //
  const [selectedBorder, setSelectedBorder] = useState("all");

  const [borderColor, setBorderColor] = useState("#000000");

  const handleThicknessClick = (value: any) => {
    setSelectedThickness(value);
    if (value !== "Custom") {
      setCustomThickness(value === "S" ? 10 : value === "M" ? 50 : 80); // Example mapping
    }
  };
  return (
    <div>
      <div className="min-w-[370px] p-5 pt-0">
        <header className="flex gap-[70px] min-h-[60px] items-center">
          <button
            onClick={() => setIsOpenBorder((prev) => !prev)}
            className="flex items-center text-gray-700 hover:text-gray-900 group relative ml-2"
          >
            <ChevronLeftIcon className="h-5 w-5 transition-all duration-300 group-hover:opacity-0" />
            <ArrowLeftIcon className="h-5 w-5 absolute left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90" />
            <span className="ml-2">BACK</span>
          </button>
          <h1 className="font-semibold opacity-70 text-lg">Border</h1>
        </header>
        <div className="flex justify-between cursor-pointer mt-8">
          <span className="text-lg font-medium">Color</span>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex justify-between items-center cursor-pointer">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: borderColor }}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <ColorPicker color={borderColor} onChange={setBorderColor} />
            </PopoverContent>
          </Popover>{" "}
        </div>
        <hr className="border-black border-1 opacity-30 my-2" />
        <div className="flex flex-col items-center">
          {/* Main control buttons */}
          <div className="flex justify-center items-center gap-4">
            <span>Thickness</span>
            <div className="flex gap-2">
              {["S", "M", "L", "Custom"].map((value) => (
                <button
                  key={value}
                  className={`px-3 py-1 my-3 ${
                    selectedThickness === value
                      ? "font-bold bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleThicknessClick(value)}
                >
                  {value === "Custom" ? "•••" : value}
                </button>
              ))}
            </div>
            <hr className="border-black border-1 opacity-30" />
          </div>

          {/* Slider for custom thickness */}
          {selectedThickness === "Custom" && (
            <div className="w-full flex items-center justify-between">
              {/* Slider */}
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={customThickness}
                onChange={(e) => setCustomThickness(e.target.value)}
                className="w-[80%]"
              />

              {/* Display Value */}
              <span className="ml-4 text-lg font-medium">
                {customThickness}px
              </span>
            </div>
          )}
        </div>
        <hr className="border-black border-1 opacity-30 my-4" />
        <div className="flex items-center gap-4">
          <span className="text-gray-800 font-semibold">Position </span>
          <div className="flex gap-3 items-center">
            {borders.map((border) => (
              <button
                key={border.type}
                className={`p-3 border rounded-md ${
                  selectedBorder === border.type
                    ? "bg-gray-300"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedBorder(border.type)}
                title={border.description}
              >
                <span className="text-xl">{border.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-[205px]"
          onClick={() => {
            setIsOpenBorder((prev) => !prev);
          }}
        >
          <button className="relative group overflow-hidden">
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

export default Border;
