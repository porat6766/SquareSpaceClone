import { useEffect, useRef, useState } from "react";
import HeaderDefault from "../../../../assets/editor/Screenshot 2025-01-13 114817.png";
import HeaderPagesMiddle from "../../../../assets/editor/Screenshot 2025-01-13 115010.png";
import HeaderPagesLeft from "../../../../assets/editor/Screenshot 2025-01-13 115105.png";
import HeaderLogoMiddle from "../../../../assets/editor/Screenshot 2025-01-13 115146.png";
import HeaderPagesUnderLogo from "../../../../assets/editor/Screenshot 2025-01-13 115221.png";

const LayOut = () => {
  const [isOpenElementLocation, setIsOpenElementLocation] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(HeaderDefault);

  const parentRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current && parentRef.current) {
      dropdownRef.current.style.width = `${parentRef.current.offsetWidth}px`;
    }
  }, [isOpenElementLocation]);

  const handleIconClick = (icon: any) => {
    setSelectedIcon(icon);
    setIsOpenElementLocation(false);
  };

  return (
    <div>
      {" "}
      <h3 className="font-medium">Layout</h3>
      <div
        ref={parentRef}
        className="relative flex w-full h-[90px] bg-gray-200 rounded justify-between items-center px-4 min-w-[320px]"
      >
        <img
          src={selectedIcon}
          alt="Header Icon"
          className="m-10 rounded max-w-[192px]"
        />
        <div className="relative">
          <button
            className="flex items-center rounded"
            onClick={() => setIsOpenElementLocation(!isOpenElementLocation)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpenElementLocation && (
            <div
              ref={dropdownRef}
              className="absolute right-[-16px] mt-9 bg-white border border-gray-300 rounded shadow-lg z-10"
            >
              <div
                className="flex w-full h-[90px] hover:bg-gray-200 rounded justify-between items-center px-4 cursor-pointer"
                onClick={() => handleIconClick(HeaderDefault)}
              >
                <img
                  src={HeaderDefault}
                  alt="Header Default"
                  className="m-10 rounded"
                />
              </div>
              <div
                className="flex w-full h-[90px] hover:bg-gray-200 rounded justify-between items-center px-4 cursor-pointer"
                onClick={() => handleIconClick(HeaderPagesLeft)}
              >
                <img
                  src={HeaderPagesLeft}
                  alt="Header Pages Left"
                  className="m-10 rounded"
                />
              </div>
              <div
                className="flex w-full h-[90px] hover:bg-gray-200 rounded justify-between items-center px-4 cursor-pointer"
                onClick={() => handleIconClick(HeaderPagesMiddle)}
              >
                <img
                  src={HeaderPagesMiddle}
                  alt="Header Pages Middle"
                  className="m-10 rounded"
                />
              </div>
              <div
                className="flex w-full h-[90px] hover:bg-gray-200 rounded justify-between items-center px-4 cursor-pointer"
                onClick={() => handleIconClick(HeaderLogoMiddle)}
              >
                <img
                  src={HeaderLogoMiddle}
                  alt="Header Logo Middle"
                  className="m-10 rounded"
                />
              </div>
              <div
                className="flex w-full h-[90px] hover:bg-gray-200 rounded justify-between items-center px-4 cursor-pointer"
                onClick={() => handleIconClick(HeaderPagesUnderLogo)}
              >
                <img
                  src={HeaderPagesUnderLogo}
                  alt="Header Pages Under Logo"
                  className="m-10 rounded"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayOut;
