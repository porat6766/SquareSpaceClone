import React, { Dispatch, SetStateAction } from "react";
import { reviewgIcon } from "../../lib/icon";
import { useNavigate } from "react-router-dom";

interface EditorHeaderProps {
  toggleSidebarLayout: () => void;
  setMobileView: (view: "mobile" | "full") => void;
  isMobileView: boolean;
  isSidebarOpen: boolean;
  siteId: string;
  setSaveTrigger: Dispatch<SetStateAction<boolean>>;
  screenshotRef: any;
}

const EditorHeader: React.FC<EditorHeaderProps> = ({
  toggleSidebarLayout,
  setMobileView,
  isMobileView,
  isSidebarOpen,
  siteId,
  setSaveTrigger,
  screenshotRef,
}) => {
  const navigate = useNavigate();
  const editorHeaderHide =
    location.pathname === "/"
      ? "hidden p-0 m-0"
      : location.pathname === "/editor-page/website" ||
        location.pathname === "/editor-page/website/pages" ||
        location.pathname === `/editor-page/website/${siteId}` ||
        location.pathname === `/editor-page/website/pages/${siteId}`
      ? "flex p-5 mt-2"
      : "hidden p-0 m-0";

  return (
    <div
      className={`w-[99%] max-h-14 shadow-md ${editorHeaderHide} justify-between items-center p-5 mt-[15px] bg-white`}
    >
      {/* Sidebar toggle */}
      <div className="flex flex-row-reverse gap-4">
        <span
          onClick={toggleSidebarLayout}
          className="hover:bg-gray-100 rounded-lg p-3 cursor-pointer"
        >
          {isSidebarOpen ? "Edit" : "Exit"}
        </span>
        <span
          onClick={() => {
            screenshotRef.current?.captureScreenshot();
            setSaveTrigger((prev: boolean) => !prev);
          }}
          className="flex justify-center items-center font-bold bg-black text-white rounded-lg px-5 cursor-pointer"
        >
          Save
        </span>
      </div>
      {/* Buttons for switching views */}
      <div className="flex gap-4">
        {/* Mobile View Button */}
        <button
          onClick={() => setMobileView("mobile")}
          className={`px-4 py-2 ${
            isMobileView ? "bg-gray-300" : "bg-gray-100"
          } rounded hover:bg-gray-300 flex items-center gap-2`}
          aria-label="Switch to Mobile View"
        >
          <svg
            fill="currentColor"
            height="22"
            viewBox="0 0 22 22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 16H8v2h6v-2z"></path>
            <path
              clipRule="evenodd"
              d="M14 1H8a3 3 0 00-3 3v14a3 3 0 003 3h6a3 3 0 003-3V4a3 3 0 00-3-3zM7 4a1 1 0 011-1h6a1 1 0 011 1v14a1 1 0 01-1 1H8a1 1 0 01-1-1V4z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Full View Button */}
        <button
          onClick={() => setMobileView("full")}
          className={`px-4 py-2 ${
            isMobileView ? "bg-gray-100" : "bg-gray-300"
          } rounded hover:bg-gray-300 flex items-center gap-2`}
          aria-label="Switch to Full View"
        >
          <svg
            fill="currentColor"
            height="22"
            viewBox="0 0 22 22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M2 3h18v13h-8v2h3v2H7v-2h3v-2H2V3zm2 2v9h14V5H4z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>

        {siteId && (
          <div className="relative group">
            <button
              onClick={() => navigate(`/userwebsite/${siteId}`)}
              className="hover:bg-gray-300 p-2 rounded"
            >
              {reviewgIcon()}
            </button>
            <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 scale-0 rounded bg-gray-800 text-white text-sm px-2 py-1 group-hover:scale-100 transition-transform z-50">
              Preview
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorHeader;
