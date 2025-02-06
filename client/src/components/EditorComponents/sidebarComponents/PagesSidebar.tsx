import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Import your other sidebar components
import SystemPagesSidebar from "./SystemPagesSidebar";
import WebsiteTools from "./WebsiteTools";
// import TrashSidebar from "./TrashSidebar";
import { EditorLayoutContext } from "../../../pages/EditorLayout";

const addPageFormStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

function PagesSidebar() {
  const navigate = useNavigate();
  const [activeSidebar, setActiveSidebar] = useState("main");
  const { currentWebsite, setPageNameFromLayout, setSaveTrigger }: any = useContext(EditorLayoutContext);
  const [addPageFormVisible, setAddPageFormVisible] = useState<boolean>(false);
  const defaultPageName = (currentWebsite) ? currentWebsite.pages[0]?.name : undefined
  const [currentPage, setCurrentPage] = useState<string>(currentWebsite?.lastEditorPage || defaultPageName);

  const newPageNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentPage(currentWebsite?.lastEditorPage)
  }, [currentWebsite?.lastEditorPage])

  function handleAddPage(pageName: string) {
    setAddPageFormVisible(false);
    if (!pageName || typeof pageName !== "string" || pageName === "") return;
    setPageNameFromLayout(pageName);
    setTimeout(() => setSaveTrigger(true), 1);
  }

  function handleDeletePage(pageName: string) {
    const index = currentWebsite?.pages.findIndex(
      (page: any) => page.name === pageName
    );
    if (index === -1 || (!index && index !== 0) || currentWebsite.pages.length === 1) return;

    currentWebsite?.pages.splice(index, 1);
    setTimeout(() => setSaveTrigger(true), 1);
  }

  function handlePageClick(pageName: string) {
    setPageNameFromLayout(pageName);
    console.log("attempted to move to:", pageName)
    // setTimeout(() => setSaveTrigger(true), 1);
  }

  // Function to render the correct sidebar based on `activeSidebar`
  const renderSidebar = () => {
    switch (activeSidebar) {
      case "systemPages":
        return <SystemPagesSidebar setActiveSidebar={setActiveSidebar} />;
      case "websiteTools":
        return <WebsiteTools setActiveSidebar={setActiveSidebar} />;
      // case "trash":
        // return <TrashSidebar />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-50 text-black">
      {/* Back Button */}
      {activeSidebar === "main" && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-5 top-5 transform flex items-center text-gray-600 hover:text-black p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Home
        </button>
      )}
      {activeSidebar === "main" ? (
        // Main Sidebar Content
        <div className="h-4/5 mt-20 overflow-y-scroll">
          {/* Header */}
          <header className="relative flex items-center h-20 mb-4">
            <div className="flex justify-between w-screen">
              <h2 className="text-4xl font-bold ml-2">Pages</h2>
              <button
                className="inset-y-0 left-5 flex items-center pr-3"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-black"
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
            </div>
          </header>
          {/* Main Navigation Items */}
          <div className="mt-16 text-xl">
            <ul className="space-y-2 mb-4">
              {currentWebsite && currentWebsite.pages &&
                currentWebsite.pages.map((page: any) => (
                  <li
                    key={page.name}
                    className="flex justify-between items-center p-2 rounded-md"
                  >
                    <button onClick={() => handlePageClick(page.name)}>
                      {currentPage === page.name && ">"}
                      {page.name}
                    </button>
                    <button
                      onClick={() => handleDeletePage(page.name)}
                      className="flex mr-[80px] items-center gap-2 px-3 py-2 text-gray-600 hover:text-red-600 transition-colors duration-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                      aria-label="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              <li className="flex justify-between items-center p-2 rounded-md">
                <button
                  onClick={() => setAddPageFormVisible((prev) => !prev)}
                  className="text-gray-600 hover:text-black hover:bg-gray-200 p-3 cursor-pointer"
                >
                  {addPageFormVisible ? (
                    <AiOutlineMinus className="h-5 w-5" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5" />
                  )}
                </button>
              </li>

              {addPageFormVisible && (
                <div style={addPageFormStyle}>
                  <label className="mb-3">New page:</label>
                  <div className="flex">
                    <div className="relative group w-[70%]">
                      <input
                        type="text"
                        className="peer w-full p-2 outline-none border-b border-gray-200 "
                        placeholder="Page Name..."
                        ref={newPageNameInputRef}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-1000 group-focus-within:w-full" />
                    </div>
                    <button
                      className="ml-2"
                      onClick={() => {
                        if (newPageNameInputRef.current) {
                          handleAddPage(newPageNameInputRef.current.value);
                        }
                      }}
                    >
                      <AiOutlinePlus size={20} />
                    </button>
                  </div>
                </div>
              )}

              <li className="flex justify-between items-center p-2 rounded-md">
                <span>Not Linked</span>
                <button className="text-gray-600 hover:text-black hover:bg-gray-200 p-3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </button>
              </li>
            </ul>
            <hr className="my-10 border-gray-300" />

            {/* Utilities Section */}
            <h2 className="text-lg font-semibold mb-2">Utilities</h2>
            <ul className="space-y-2 mb-4 text-base font-semibold">
              <li
                className="relative group flex justify-between items-center p-2 rounded-md cursor-pointer"
                onClick={() => setActiveSidebar("systemPages")}
              >
                <span>
                  System Pages{" "}
                  <span
                    className={`absolute left-0 -bottom-2 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full`}
                  ></span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <hr className="my-10 border-gray-300" />
              <li
                className="relative group flex justify-between items-center p-2 rounded-md cursor-pointer"
                onClick={() => setActiveSidebar("websiteTools")}
              >
                <span>
                  Website Tools{" "}
                  <span
                    className={`absolute left-0 -bottom-2 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full`}
                  ></span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <hr className="my-10 border-gray-300" />
              <li
                className="relative group flex justify-between items-center p-2 rounded-md cursor-pointer"
                onClick={() => setActiveSidebar("trash")}
              >
                <span>
                  Trash{" "}
                  <span
                    className={`absolute left-0 -bottom-2 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full`}
                  ></span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <hr className="my-10 border-gray-300" />
            </ul>
          </div>
        </div>
      ) : (
        // Render the corresponding sidebar component
        renderSidebar()
      )}
    </div>
  );
}

export default PagesSidebar;
