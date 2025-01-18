import { useState, useEffect, useRef } from "react";

type Option =
  | "PERMISSION"
  | "BILLING"
  | "SETTING"
  | "DUPLICATE WEBSITE"
  | "DELETE";

interface DropdownMenuProps {
  onDelete: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options: Option[] = [
    "PERMISSION",
    "BILLING",
    "SETTING",
    "DUPLICATE WEBSITE",
    "DELETE",
  ];

  const actions: Record<Option, () => void> = {
    PERMISSION: () => console.log("Opening permission settings..."),
    BILLING: () => console.log("Redirecting to billing page..."),
    SETTING: () => console.log("Opening settings page..."),
    "DUPLICATE WEBSITE": () => console.log("Duplicating the website..."),
    DELETE: () => onDelete(),
  };

  const handleOptionClick = (option: Option): void => {
    if (actions[option]) {
      actions[option]();
    } else {
      console.warn(`No action defined for: ${option}`);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center text-center items-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none pb-[1px]"
      >
        <span className="text-xl font-bold">⋮</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`text-gray-700 block px-5 py-3 text-sm hover:bg-gray-100 w-full text-left ${
                  option === "DELETE" ? "text-red-500" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
