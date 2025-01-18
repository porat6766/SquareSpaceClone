import { useState } from "react";
import { ArrowUp, ArrowDown, MoveVertical, ChevronDown } from "lucide-react";

interface PositionContentProps {
  isOpen: boolean;
  setIsOpen: (string: boolean) => void;
}

const PositionContent: React.FC<PositionContentProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [position, setPosition]: any = useState<string>("middle");

  const getPositionIcon = () => {
    switch (position) {
      case "top":
        return <ArrowUp size={18} />;
      case "bottom":
        return <ArrowDown size={18} />;
      default:
        return <MoveVertical size={18} />;
    }
  };

  return (
    <div>
      <button
        className="p-2 mx-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded focus:outline-none flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        title="Change Position"
      >
        {getPositionIcon()}
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute flex left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 w-36 z-10">
          <button
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            onClick={() => {
              setPosition("top");
              setIsOpen(false);
            }}
          >
            <ArrowUp size={16} />
          </button>
          <button
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            onClick={() => {
              setPosition("middle");
              setIsOpen(false);
            }}
          >
            <MoveVertical size={16} />
          </button>
          <button
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            onClick={() => {
              setPosition("bottom");
              setIsOpen(false);
            }}
          >
            <ArrowDown size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PositionContent;
