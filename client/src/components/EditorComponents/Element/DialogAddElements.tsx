import { useState } from "react";
import {
  Type,
  Square,
  Image,
  Play,
  FormInput,
  Circle,
  Minus,
  ChevronDown,
  ScrollText,
  Quote,
} from "lucide-react";

import { RenderElementNames } from "../../basicEditor3Pro/BasicEditor3ProTypes";

const menuItems = [
  { icon: Type, label: "Text" },
  { icon: Square, label: "Button" },
  { icon: Image, label: "Image" },
  { icon: Play, label: "Video" },
  { icon: FormInput, label: "Form" },
  // { icon: Mail, label: "Newsletter" },
  { icon: Circle, label: "Shape" },
  { icon: Minus, label: "Line" },
  // { icon: Map, label: "Map" },
  // { icon: FileText, label: "Markdown", highlight: true },
  // { icon: Music, label: "Audio" },
  { icon: ChevronDown, label: "Accordion" },
  { icon: ScrollText, label: "Scrolling" },
  { icon: Quote, label: "Quote" },
  // { icon: Download, label: "Embed" },
  // { icon: Code, label: "Code" },
];

const labelToRenderElementName: { [key: string]: RenderElementNames } = {
  Text: RenderElementNames.Text_Block3,
  Image: RenderElementNames.ImgContainer,
  Video: RenderElementNames.VideoContainer,
  Accordion: RenderElementNames.Accordion,
  Button: RenderElementNames.Button,
  Form: RenderElementNames.Form,
};

export type DialogAddElementProps = {
  addRenderElement?: (
    RenderElementName: RenderElementNames,
    ...args: any[]
  ) => void;
};

export const DialogAddElement: React.FC<DialogAddElementProps> = ({
  addRenderElement,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleItemClick(e: any, label: string) {
    e.stopPropagation();
    console.log(label);
    if (addRenderElement) {
      addRenderElement(labelToRenderElementName[label]);
    }
  }

  return (
    <div
      className="absolute z-50 top-full mt-2 left-0 w-auto bg-gray-50 rounded-lg shadow-lg border border-gray-300 flex flex-col p-6 min-w-[300px] overflow-y-auto"
      style={{ transform: "none" }}
    >
      {/* <Dialog
      onOpenChange={(isOpen: boolean) =>
        console.log("Dialog open state:", isOpen)
      }
      > */}
      {/* <DialogTrigger asChild>
        <button className="flex font-bold items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm">
          <Plus size={26} />
          <span className="font-medium">Add Block</span>
        </button>
      </DialogTrigger> */}

      {/* <DialogContent
        className="absolute top-full mt-2 left-0 w-auto bg-gray-50 rounded-lg shadow-lg border border-gray-300 flex flex-col p-6 min-w-[300px] overflow-y-auto"
        style={{ transform: "none" }}
        > */}
      <div className="w-full bg-gray-50 rounded-lg">
        <div className="relative flex items-center w-[300px] mb-5">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 p-2 pl-10 pr-10 w-full rounded-md focus:outline-none"
          />

          <button className="absolute left-2 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75L19.5 19.5m-7.5-3.75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4">
            {filteredMenuItems.map((item: any, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 py-2 px-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                onClick={(e) => handleItemClick(e, item.label)}
              >
                <item.icon className="w-5 h-5 text-gray-700" />
                <span
                  className={`${
                    item.highlight ? "text-red-800" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </DialogContent> */}
      {/* </Dialog> */}
    </div>
  );
};
