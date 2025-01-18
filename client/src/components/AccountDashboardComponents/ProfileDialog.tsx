import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import EditProfile from "../AccountDashboardComponents/EditProfile";
import { deleteToken } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";
import SideBar from "../AccountDashboardComponents/EditProfieSideBar";
import AccountAndSecurity from "../AccountDashboardComponents/AccountAndSecurity";
import Notifications from "../AccountDashboardComponents/Notifications";
import Language from "../AccountDashboardComponents/Language";

type ProfileDialogProps = {
  btnName: string;
};

const ProfileDialog: React.FC<ProfileDialogProps> = ({ btnName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(btnName);
  const [componentTorender, setComponentToRender] =
    useState<JSX.Element | null>(
      <EditProfile isOpen={isOpen} setIsOpen={setIsOpen} />
    );
  const [isMobileView, setIsMobileView] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setComponentToRender(renderComponent(selectedMenuItem));
  }, [selectedMenuItem]);

  const renderComponent = (menuItem: string): any => {
    switch (menuItem) {
      case "Profile":
        return <EditProfile isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "Account and security":
        return <AccountAndSecurity />;
      case "Notifications":
        return <Notifications />;
      case "Language":
        return <Language />;
      case "Help":
        navigateToHelp(); //
        return null;
      case "Log out":
        handleLogOut();
        return null;
      default:
        return <EditProfile isOpen={isOpen} setIsOpen={setIsOpen} />;
    }
  };

  const navigateToHelp = () => {
    window.location.href = "https://support.squarespace.com/hc/en-us";
  };

  const handleLogOut = () => {
    deleteToken();
    navigate("/login");
    window.location.reload();
  };

  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 850);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobileView);
    checkMobileView();

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const handleMoveToSideBar = () => {
    setComponentToRender(
      <SideBar
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
        setIsOpen={setIsOpen}
        setComponentToRender={setComponentToRender}
        renderComponent={renderComponent}
      />
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="relative text-start group overflow-hidden w-full">
          <span
            className={`${
              btnName === "Account Settings" ? "font-semibold" : "w-full"
            }  text-sm group-hover:text-black transition-colors duration-300`}
          >
            {btnName}
          </span>
          {btnName === "Account Settings" && (
            <span className="absolute left-0 bottom-3 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
          )}
        </button>
      </DialogTrigger>

      <DialogContent
        id="cloudinary-container"
        className="bg-white shadow-lg min-w-[430px] sm:w-screen sm:h-screen"
      >
        <div className="flex">
          {isMobileView ? (
            <div className="flex flex-col w-full">
              <div className="absolute mt-5 ml-5">
                {componentTorender?.type?.name !== "SideBar" && (
                  <button
                    className="flex items-center text-gray-700 hover:text-gray-900 group relative"
                    onClick={() => handleMoveToSideBar()}
                  >
                    <ChevronLeftIcon className="h-5 w-5 transition-all duration-300 group-hover:opacity-0" />
                    <ArrowLeftIcon className="h-5 w-5 absolute left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90" />
                    <span className="ml-2">BACK</span>
                  </button>
                )}
              </div>
              <div className=" w-full h-screen">{componentTorender}</div>
            </div>
          ) : (
            <div className="flex w-full">
              {componentTorender?.type?.name === "SideBar" ? (
                <>
                  <SideBar
                    selectedMenuItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                    setIsOpen={setIsOpen}
                    setComponentToRender={setComponentToRender}
                    renderComponent={renderComponent}
                  />
                  <div className="px-[28px] pb-[20px] pt-6 w-full">
                    <EditProfile isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
                </>
              ) : (
                <>
                  <SideBar
                    selectedMenuItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                    setIsOpen={setIsOpen}
                    setComponentToRender={setComponentToRender}
                    renderComponent={renderComponent}
                  />
                  {/* Displaying the selected component */}
                  <div className="px-[28px] pb-[20px] pt-6 w-full">
                    {componentTorender}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
