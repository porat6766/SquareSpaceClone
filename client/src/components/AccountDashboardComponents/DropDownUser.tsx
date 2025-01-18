import { useEffect, useState } from "react";
import { useUserProfile } from "../../hooks/useUser";
import { deleteToken } from "../../lib/api";
import ProfileDialog from "../../components/AccountDashboardComponents/ProfileDialog";

function DropDownUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: userData } = useUserProfile();

  useEffect(() => {
    setIsLoggedIn(!!userData);
    console.log(isLoggedIn);
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

  const navigateToHelp = () => {
    window.location.href = "https://support.squarespace.com/hc/en-us";
  };

  return (
    <div className="relative inline-block z-50">
      {
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
      }{" "}
      {isOpen && (
        <div className="absolute -right-16 mt-2 w-64 bg-white rounded-lg shadow-lg flex flex-col">
          {/* <div>
            <h1></h1>
            <span></span>
          </div> */}
          <ul className="py-2 text-black">
            <li className="px-4 py-2 font-semibold text-lg">
              {userData?.user?.firstName + " " + userData?.user?.lastName}{" "}
            </li>
            <li className="px-4 pb-2 text-sm opacity-60">
              {userData?.user?.email}{" "}
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <ProfileDialog btnName={"Profile"} />
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <ProfileDialog btnName={"Account and security"} />
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <ProfileDialog btnName={"Notifications"} />
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <ProfileDialog btnName={"Language"} />
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                navigateToHelp();
              }}
            >
              Help
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={handleLogOut}
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownUser;
