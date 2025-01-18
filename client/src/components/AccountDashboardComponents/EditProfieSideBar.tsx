import { ReactElement } from "react";

type SideBarProps = {
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  setComponentToRender: (component: ReactElement) => void;
  renderComponent: (menuItem: string) => ReactElement;
};
const SideBar: React.FC<SideBarProps> = ({
  selectedMenuItem,
  setSelectedMenuItem,
  setIsOpen,
  setComponentToRender,
  renderComponent,
}) => {
  const menuItems = [
    "Profile",
    "Account and security",
    "Notifications",
    "Language",
    "Help",
    "Log out",
  ];

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item);
    setComponentToRender(renderComponent(item));
  };

  return (
    <div className="bg-[rgb(242,242,242)] w-[60%] p-2 pt-10 h-[100vh] xs:w-[100%]">
      <button
        className="relative group overflow-hidden m-5"
        onClick={() => setIsOpen(false)}
      >
        <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
          Close
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
      </button>
      <h1 className="text-lg font-bold ml-3">Account settings</h1>
      <div className="flex flex-col justify-start items-start pl-2">
        {menuItems.map((item, index) => (
          <button
            onClick={() => handleMenuItemClick(item)}
            key={index}
            className="relative group overflow-hidden mt-3"
          >
            <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
              {item}
            </span>
            {selectedMenuItem === item && (
              <span className="absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-700 w-full"></span>
            )}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
