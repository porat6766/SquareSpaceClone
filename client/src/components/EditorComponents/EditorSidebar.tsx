import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserProfile } from "../../hooks/useUser";
import PagesSidebar from "./sidebarComponents/PagesSidebar";

const EditorSidebar = ({ siteId }: any) => {
  const [expandedItems, setExpandedItems] = useState<string | null>(null);
  const [showCustomSidebar, setShowCustomSidebar] = useState(false);
  const { data: userData } = useUserProfile();
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { title: "Setup Guide", path: "/editor-page/setup-guide", subItems: [] },
    {
      title: "Website",
      path: "/editor-page/website",
      subItems: ["Pages", "Styles", "Assets"],
    },
    {
      title: "Products & Services",
      path: "/editor-page/products&services",
      subItems: ["Products", "Orders", "Discounts", "Selling Tools"],
    },
    {
      title: "Content & Memberships",
      path: "/editor-page/content&memberships",
      subItems: ["Orders", "Products"],
    },
    {
      title: "Scheduling",
      path: "/editor-page/scheduling",
      subItems: ["Calendar"],
    },
    {
      title: "Donations",
      path: "/editor-page/donations",
      subItems: ["Contributions", "Funds"],
    },
    {
      title: "Invoicing",
      path: "/editor-page/invoicing",
      subItems: ["Invoices", "Projects"],
    },
    {
      title: "Marketing",
      path: "/editor-page/marketing",
      subItems: [
        "Email Campaigns",
        "Automations",
        "Marketing Tools",
        "Discounts",
      ],
    },
    { title: "Contacts", path: "/editor-page/contacts", subItems: [] },
    { title: "Analytics", path: "/editor-page/analytics", subItems: [] },
    { title: "Finance", path: "/editor-page/finance", subItems: [] },
  ];

  useEffect(() => {
    const isPagesPath = location.pathname.toLowerCase().includes("/pages");
    setShowCustomSidebar(isPagesPath);
  }, [location.pathname]);

  const handleMainItemClick = (title: string, path: string) => {
    if (expandedItems === title) {
      setExpandedItems(null);
    } else {
      setExpandedItems(title);
    }
    if (siteId) {
      navigate(path + "/" + siteId);
    } else {
      navigate(path);
    }
  };

  const handleSubItemClick = (mainTitle: string, subItem: string) => {
    setExpandedItems(mainTitle);
    if (siteId) {
      navigate(
        `/editor-page/${mainTitle.toLowerCase()}/${subItem.toLowerCase()}/${siteId}`
      );
    } else {
      navigate(
        `/editor-page/${mainTitle.toLowerCase()}/${subItem.toLowerCase()}`
      );
    }
  };

  if (showCustomSidebar) {
    return (
      <div className="w-96 h-screen bg-gray-50 text-black border-opacity-20 flex flex-col p-6">
        <PagesSidebar />
      </div>
    );
  }

  return (
    <div
      className="w-72 h-screen p-4 bg-white text-black border-opacity-20 flex flex-col"
      transition-all
      duration-300
      ease-in-out
    >
      {/* Header Section */}
      <header className="p-5 py-14 flex justify-between">
        {/* logo */}
        <div onClick={() => navigate("/")}>
          <svg
            className={`logo-path w-[150px] h-auto -ml-2 -mt-2 cursor-pointer`}
            xmlns="http://www.w3.org/2000/svg"
            width="166px"
            height="24px"
            viewBox="0 0 500 72"
          >
            <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z"></path>
            <path
              d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13 
              23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45
               67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z"
            ></path>
            <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z"></path>
          </svg>
        </div>
        <div>
          {/* search icon */}
          <button className="flex -mt-2" type="submit">
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
      {/* Sidebar Items */}
      <ul className="space-y-2 flex-1 overflow-y-auto">
        {sidebarItems.map(({ title, subItems, path }) => (
          <li key={title} className="relative">
            <button
              onClick={() => handleMainItemClick(title, path)}
              className={`w-full text-left p-2 rounded-md transition group hover:opacity-100 ${
                location.pathname.startsWith(path)
                  ? "opacity-100"
                  : "opacity-60"
              }`}
            >
              <span className="relative text-xl group-hover:text-black">
                {title}{" "}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full ${
                    location.pathname.startsWith(path)
                      ? "opacity-100 w-full"
                      : "opacity-60 group-hover:w-full"
                  }`}
                ></span>
              </span>
            </button>
            {/* Sub-items */}
            {expandedItems === title && subItems.length > 0 && (
              <ul className="pl-6 mt-2 space-y-2">
                {subItems.map((subItem) => (
                  <li key={subItem} className="relative">
                    <span
                      onClick={() => handleSubItemClick(title, subItem)}
                      className="relative cursor-pointer opacity-70 hover:opacity-100 font-medium"
                    >
                      {subItem}
                      <span
                        className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full ${
                          location.pathname
                            .toLowerCase()
                            .endsWith(subItem.toLowerCase())
                            ? "opacity-100 w-full"
                            : "opacity-60 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Footer Section */}
      <footer className="flex justify-between items-center p-6 pt-12 border-t border-black border-opacity-20">
        {!userData?.user ? (
          // Show black ball with "G" when no user is logged in
          <div className="w-10 h-10 rounded-full bg-black text-white justify-center items-center flex p-2 cursor-pointer">
            <span className="text-white text-xl font-bold">G</span>
          </div>
        ) : (
          // Show profile image or first letter of user's name when logged in
          <div
            onClick={() => navigate("/accountdashboard/dashboard")}
            className="w-12 h-12 rounded-full bg-black text-white justify-center items-center flex p-2 cursor-pointer"
          >
            {userData.user.profileImage ? (
              <img
                className="min-w-12 rounded-full aspect-square object-cover"
                alt="photo profile"
                src={userData.user.profileImage}
              />
            ) : (
              <span className="w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1">
                {userData.user.firstName?.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        )}
        {/* footer buttons */}
        <div className="flex flex-row-reverse gap-x-1">
          {/* settings button */}
          <div className="relative group">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a1 1 0 011 1v1.067a8.985 8.985 0 013.789 1.573l.756-.756a1 1 0 111.414 1.414l-.756.756A8.985 8.985 0 0119.933 11H21a1 1 0 110 2h-1.067a8.985 8.985 0 01-1.573 3.789l.756.756a1 1 0 11-1.414 1.414l-.756-.756A8.985 8.985 0 0113 19.933V21a1 1 0 11-2 0v-1.067a8.985 8.985 0 01-3.789-1.573l-.756.756a1 1 0 01-1.414-1.414l.756-.756A8.985 8.985 0 014.067 13H3a1 1 0 110-2h1.067a8.985 8.985 0 011.573-3.789l-.756-.756a1 1 0 111.414-1.414l.756.756A8.985 8.985 0 0111 4.067V3a1 1 0 011-1z"
                />
              </svg>
            </button>
            {/* Tooltip */}
            <span className="absolute shadow-sm shadow-black -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-black bg-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Settings
            </span>
          </div>
          <div className="relative group">
            {/* Help Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-.9 0-1.5.6-1.5 1.5S11.1 11 12 11s1.5-.6 1.5-1.5S12.9 8 12 8zM12 15h.01"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            {/* Tooltip */}
            <span className="absolute shadow-sm shadow-black -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-black bg-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Help
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EditorSidebar;
