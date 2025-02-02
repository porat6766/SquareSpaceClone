import { useState } from "react";

import LayOut from "./EditComponents/LayOut";
import Spacing from "./EditComponents/Spacing";
import Effects from "./EditComponents/Effects";
import FixedPosition from "./EditComponents/FixedPosition";
import SizeHightWidth from "./EditComponents/SizeHightWidth";
import DropShadow from "./EditComponents/DropShadow";
import Border from "./EditComponents/Border";
import Color from "./EditComponents/Color";

export const DialogEditHeader = () => {
  const [isDropShadow, setIsDropShadow] = useState(false);
  const [isOpenBorder, setIsOpenBorder] = useState(false);

  const [activeButton, setActiveButton] = useState("Design");

  const [isFixed, setIsFixed] = useState(false);

  const handleToggle = () => {
    setIsFixed((prev) => !prev);
  };

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div
    onClick={(e) => e.stopPropagation()}
      className="top-full min-h-[550px] max-h-[550px] overflow-y-auto mt-2 ml-auto w-auto bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col min-w-[410px] font-serif"
      style={{
        transform: "none",
      }}
    >
      {/* <Dialog
        onOpenChange={(isOpen: boolean) =>
          console.log("Dialog open state:", isOpen)
        }
      >
        <DialogTrigger asChild>
          <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm">
            <Pencil size={16} />
            <span className="font-medium">EDIT DESIGN</span>
          </button>
        </DialogTrigger> */}
      {/* <DialogContent
          className="absolute top-full min-h-[550px] max-h-[550px] overflow-y-auto mt-2 left-0 w-auto bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col min-w-[410px] font-serif"
          style={{
            transform: "none",
          }}
        > */}
      {isDropShadow ? (
        <DropShadow setIsDropShadow={setIsDropShadow} />
      ) : isOpenBorder ? (
        <Border setIsOpenBorder={setIsOpenBorder} />
      ) : (
        <div>
          <header className="relative pl-4 min-h-[60px] flex gap-6 items-center border-b-1 border-solid border-black text-[19px] mb-6">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>

            <button
              className={`relative pb-2 ${activeButton === "Design"
                  ? "text-black font-semibold after:content-[''] after:absolute after:-bottom-[12px] after:left-0 after:w-full after:h-[2px] after:bg-black"
                  : "text-gray-700"
                }`}
              onClick={() => handleClick("Design")}
            >
              Design
            </button>
            <button
              className={`relative pb-2 ${activeButton === "Color"
                  ? "text-black font-semibold after:content-[''] after:absolute after:-bottom-[12px] after:left-0 after:w-full after:h-[2px] after:bg-black"
                  : "text-gray-700"
                }`}
              onClick={() => handleClick("Color")}
            >
              Color
            </button>
          </header>
          {activeButton === "Design" ? (
            <div className="px-8 flex flex-col gap-4 ">
              <LayOut />
              <hr className="border-black border-1 opacity-30" />
              <Spacing />
              <hr className="border-black border-1 opacity-30" />
              <Effects
                setIsDropShadow={setIsDropShadow}
                setIsOpenBorder={setIsOpenBorder}
              />
              <hr className="border-black border-1 opacity-30" />
              <FixedPosition
                isFixed={isFixed}
                handleToggle={handleToggle}
              />
              <hr className="border-black border-1 opacity-30" />
              <SizeHightWidth />
            </div>
          ) : (
            <div className="p-8">
              <Color />
            </div>
          )}
        </div>
      )}
    {/* </DialogContent> */}
      {/* </Dialog > */}
    </div >
  );
};
