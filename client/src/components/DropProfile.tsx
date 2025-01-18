import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../hooks/useUser";
import { deleteToken } from "../lib/api";

interface ProfileDropdownProps {
  isMenuOpen: boolean;
}

function ProfileDropdown({ isMenuOpen }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { data: userData } = useUserProfile();

  useEffect(() => {
    setIsLoggedIn(!!userData);
  }, [userData]);

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle logout
  const handleLogOut = () => {
    deleteToken();
    setIsLoggedIn(false);
    setIsOpen(false);
    window.location.href = "/login";
  };

  const handleClickProfile = () => {
    setIsOpen(false);
    navigate("/accountdashboard/dashboard");
  };

  const handleClickDomain = () => {
    setIsOpen(false);
    navigate("/accountdashboard/domains");
  };

  const handleClickLogIn = () => {
    navigate("/login");
  };
  // const headerTextColor =
  //   location.pathname === "/"
  //     ? "text-white"
  //     : location.pathname === "/templates"
  //     ? "text-black"
  //     : "text-white";

  return (
    <div className="relative inline-block">
      {!isLoggedIn ? (
        <button
          onClick={() => {
            handleClickLogIn();
          }}
          className={`font-semibold flex ${
            !isMenuOpen ? "headerTextColor" : "text-white"
          } items-center justify-center w-14 h-14 rounded-full cursor-pointer overflow-hidden`}
        >
          LOG IN
        </button>
      ) : (
        <div
          onClick={toggleDropdown}
          className="flex items-center justify-center w-14 h-14 rounded-full cursor-pointer overflow-hidden"
        >
          <span className="text-white text-xl ml-4">
            {userData?.user?.profileImage ? (
              <img
                className="min-w-12 rounded-full aspect-square object-cover"
                alt="photo profile"
                src={userData.user.profileImage}
              />
            ) : (
              <span className="w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1">
                {userData?.user?.firstName?.charAt(0).toUpperCase()}
              </span>
            )}
          </span>
          <span
            className={`ml-2 w-3 h-3 border-solid border-t-2 border-r-2 border-transparent border-white transform ${
              isOpen ? "rotate-135" : "rotate-45"
            }`}
          />
        </div>
      )}{" "}
      {/* Profile div with arrow */}
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute -right-16 mt-2 w-48 bg-black rounded-lg shadow-lg">
          <ul className="py-2 text-white">
            <li className="px-4 py-2 font-semibold text-lg">
              {userData?.user?.firstName + " " + userData?.user?.lastName}{" "}
            </li>
            <li className="px-4 pb-2 text-sm opacity-60">
              {userData?.user?.email}{" "}
            </li>
            <li
              onClick={() => {
                handleClickProfile();
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Profile
            </li>
            <li
              onClick={handleClickDomain}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Domains
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={handleLogOut}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
