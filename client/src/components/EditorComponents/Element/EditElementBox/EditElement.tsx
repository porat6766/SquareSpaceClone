import { Pencil, X, Copy, Trash2 } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import PositionContent from "./PositionContent";
import { RenderElement3 } from "../../../basicEditor3Pro/BasicEditor3ProTypes";
import { BasicEditorContext } from "../../../basicEditor3Pro/BasicEditor3Pro";

import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import ColorPicker from "../../ColorPicker";

export type EditElementProps = {
  element?: RenderElement3;
  handleEditClick: () => void;
  handleDeleteClick: () => void;
};

const EditElement = ({
  element,
  handleEditClick,
  handleDeleteClick,
}: EditElementProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { baseFunctions, duplicateElement }: any =
    useContext(BasicEditorContext);
  const [backgroundColor, setBackgroundColor] = useState(
    element?.data.style.backgroundColor || "clear"
  );

  useEffect(() => {
    const style = element?.data.style;
    if (!element) {
      return;
    }
    baseFunctions?.setStyle(element.data.id, {
      ...style,
      backgroundColor: backgroundColor,
    });
  }, [backgroundColor]);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="w-fit flex items-center bg-gray-100 p-2 rounded-lg shadow">
      <button
        onClick={handleEditClick}
        className="p-2 mx-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded focus:outline-none"
      >
        <Pencil size={18} />
        <span className="font-medium"></span>
      </button>
      <button className="p-1 hover:bg-gray-100 rounded ">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex justify-between items-center cursor-pointer ">
              <div
                className="w-6 h-6 rounded-full border-[1.5px] border-black"
                style={{ backgroundColor }}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <ColorPicker
              color={backgroundColor}
              onChange={setBackgroundColor}
            />
          </PopoverContent>
        </Popover>{" "}
      </button>
      {/* <button
        className="p-2 mx-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded focus:outline-none"
        data-action="color"
        title="Color"
      >
        <Palette size={18} />
      </button> */}
      <div className="relative">
        <PositionContent isOpen={isOpen} setIsOpen={handleToggleOpen} />
      </div>
      <button
        className="p-2 mx-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded focus:outline-none"
        data-action="cross"
        title="Cross"
      >
        <X size={18} />
      </button>
      <button
        className="p-2 mx-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded focus:outline-none"
        data-action="duplicate"
        title="Duplicate"
        onClick={() => duplicateElement(element)}
      >
        <Copy size={18} />
      </button>
      <button
        onClick={handleDeleteClick}
        className="p-2 mx-1 text-red-600 hover:text-red-800 hover:bg-red-100 rounded focus:outline-none"
        data-action="delete"
        title="Delete"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default EditElement;
