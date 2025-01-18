import Profile from "../components/AccountDashboardComponents/ProfileDialog";
import DropDownUser from "../components/AccountDashboardComponents/DropDownUser";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthTokenFromCookie } from "../lib/api";
import { useUserProfile } from "../hooks/useUser";

const AccountDashboard = () => {
  const [activeButton, setActiveButton] = useState("Dashboard");
  const { data: userData, isLoading: isUserLoading } = useUserProfile();
  const btnName = "Account Settings";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getAuthTokenFromCookie();

    if ((!isUserLoading && !userData) || !token) {
      navigate("/login");
    }
  }, [userData, isUserLoading, navigate]);

  useEffect(() => {
    if (location.pathname.includes("domains")) {
      setActiveButton("Domains");
    } else {
      setActiveButton("Dashboard");
    }
  }, [location.pathname]);

  const navigateToHelp = () => {
    window.location.href = "https://support.squarespace.com/hc/en-us";
  };

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "Dashboard") {
      navigate("/accountdashboard/dashboard");
      setActiveButton(buttonName);
    } else if (buttonName === "Domains") {
      navigate("/accountdashboard/domains");
      setActiveButton(buttonName);
    }
  };

  return (
    <div>
      <div className="flex justify-between relative border-b border-b-[rgba(0,0,0,0.2)] min-w-[480px]">
        <div className="flex items-center">
          <svg
            onClick={() => {
              navigate("/");
            }}
            className="logo-pat pl-[15px] w-[210px] absolute  cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 72"
          >
            <title>Squarespace Logo</title>
            <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z"></path>
            <path
              d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13
          23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45
           67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z"
            ></path>
            <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z"></path>
          </svg>
          <div className="flex ml-[80px] gap-8 z-10">
            <button
              className={
                activeButton === "Dashboard"
                  ? "relative text-black font-semibold group hover:text-gray-900 focus:outline-none active:text-black"
                  : "relative text-[rgba(0,0,0,0.6)] font-semibold group hover:text-gray-900 focus:outline-none active:text-black"
              }
              onClick={() => handleClick("Dashboard")}
            >
              Dashboard
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] top-[51.5px] bg-black transition-all duration-300 group-hover:w-full ${
                  activeButton === "Dashboard" ? "w-full" : ""
                }`}
              ></span>
            </button>

            <button
              className={
                activeButton === "Domains"
                  ? "relative  font-semibold group hover:text-gray-900 focus:outline-none active:text-black text-black"
                  : "relative text-[rgba(0,0,0,0.6)] font-semibold group hover:text-gray-900 focus:outline-none active:text-black"
              }
              onClick={() => handleClick("Domains")}
            >
              Domains
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] top-[51.5px] bg-black transition-all duration-300 group-hover:w-full ${
                  activeButton === "Domains" ? "w-full" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        <div className="flex p-3">
          <div className="hidden gap-4 lg:flex mr-3">
            <button
              className="relative group overflow-hidden p-3"
              onClick={navigateToHelp}
            >
              <span className="text-black font-semibold text-sm group-hover:text-black transition-colors duration-300">
                Help
              </span>
              <span className="absolute left-2 bottom-3 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
            </button>
            <Profile btnName={btnName} />
          </div>
          <div className="pr-2">
            <DropDownUser />
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountDashboard;
