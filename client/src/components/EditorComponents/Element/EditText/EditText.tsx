import {
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Copy,
  Trash2,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import ColorPicker from "../../ColorPicker";
import { useState, useContext, useEffect } from "react";
import { BasicEditorContext } from "../../../basicEditor3Pro/BasicEditor3Pro";
import { RenderElement3 } from "../../../basicEditor3Pro/BasicEditor3ProTypes";

// const heading1 = {
//   fontSize:'2rem',
//   fontWeight:'bold'
// }

const styleOptions: {
  [key: string]: { [key: string]: any };
} = {
  "Heading 1": {
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  "Heading 2": {
    fontSize: "1.8rem",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  "Heading 3": {
    fontSize: "1.6rem",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  "Heading 4": {
    fontSize: "1.4rem",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  "Paragraph 1": {
    fontSize: "1rem",
    lineHeight: "1.5",
    fontFamily: "serif",
  },
  "Paragraph 2": {
    fontSize: "0.9rem",
    lineHeight: "1.4",
    fontFamily: "serif",
  },
  "Paragraph 3": {
    fontSize: "0.8rem",
    lineHeight: "1.3",
    fontFamily: "serif",
  },
  Monospace: {
    fontFamily: "monospace",
  },
};

const paragraphOptions = [
  "Heading 1",
  "Heading 2",
  "Heading 3",
  "Heading 4",
  "Paragraph 1",
  "Paragraph 2",
  "Paragraph 3",
  "Monospace",
];

const fontSizeOptions = [
  "1rem",
  "1.5rem",
  "2rem",
  "4rem",
  "6rem",
  "8rem"
]

const boldButtonPressed = "p-1 bg-gray-100 rounded";
const boldButtonNotPressed = "p-1 hover:bg-gray-100 rounded";

// const italicsButtonPressed = "p-1 bg-gray-100 rounded";
// const italicsButtonNotPressed = "p-1 hover:bg-gray-100 rounded";

const FormattingToolbar = ({ element }: { element: RenderElement3 }) => {
  const { baseFunctions, duplicateElement }: any =
    useContext(BasicEditorContext);
  const [textColor, setTextColor] = useState(
    element.data.style.color || "#060606"
  );
  const [isBold, setIsBold] = useState<boolean>(
    element.data.style.fontWeight === "bold"
  );
  const [isItalics, setIsItalics] = useState<boolean>(
    element.data.style.fontStyle === "italic"
  );
  const [textAlign, setTextAlign] = useState<string>(
    element.data.style.textAlign || "left"
  );

  // const [currentParagraphOption, setCurrentParagraphOption] = useState();

  useEffect(() => {
    const style = element.data.style;
    baseFunctions?.setStyle(element.data.id, {
      ...style,
      fontWeight: isBold ? "bold" : "normal",
      fontStyle: isItalics ? "italic" : "normal",
      textAlign: textAlign,
      color: textColor,
    });
    console.log(textAlign);
  }, [isBold, isItalics, textColor, textAlign]);

  function handleParagraphOptionChange(newValue: string) {
    const style = element.data.style;
    baseFunctions?.setStyle(element.data.id, {
      ...style,
      ...styleOptions[newValue],
    });
  }

  function handleFontSizeOptionChange(newValue:string){
    const style = element.data.style;
    baseFunctions?.setStyle(element.data.id, {
      ...style,
      fontSize:newValue,
    });
  }

  function handleDuplicateClick() {
    duplicateElement(element);
  }

  return (
    <div className="w-fit flex items-center gap-2 p-2 border rounded-md bg-white">
      <div className="relative">
        <select
          onChange={(e) => handleParagraphOptionChange(e.target.value)}
          className="p-1 min-w-36 border rounded-md text-sm bg-white hover:bg-gray-50"
        >
          {paragraphOptions.map((option, index) => (
            <option
              key={index}
              // value={option.toLowerCase().replace(" ", "-")}
              className="hover:bg-gray-50"
            >
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <select
          onChange={(e) => handleFontSizeOptionChange(e.target.value)}
          className="p-1 min-w-36 border rounded-md text-sm bg-white hover:bg-gray-50"
        >
          {fontSizeOptions.map((option, index) => (
            <option
              key={index}
              // value={option.toLowerCase().replace(" ", "-")}
              className="hover:bg-gray-50"
            >
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="h-4 w-px bg-gray-300 mx-1" />

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsBold((prev) => !prev)}
          className={isBold ? boldButtonPressed : boldButtonNotPressed}
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => setIsItalics((prev) => !prev)}
          className={isItalics ? boldButtonPressed : boldButtonNotPressed}
        >
          <Italic size={18} />
        </button>

        <button className="p-1 hover:bg-gray-100 rounded">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex justify-between items-center cursor-pointer">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: textColor }}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <ColorPicker color={textColor} onChange={setTextColor} />
            </PopoverContent>
          </Popover>{" "}
        </button>
      </div>

      {/* <div className="h-4 w-px bg-gray-300 mx-1" /> */}

      {/* <div className="flex items-center gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Link size={18} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded text-sm">Aa</button>
      </div> */}

      {/* <div className="h-4 w-px bg-gray-300 mx-1" /> */}
      {/* 
      <div className="flex items-center gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Quote size={18} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <List size={18} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <ListOrdered size={18} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Undo size={18} />
        </button>
      </div> */}

      <div className="h-4 w-px bg-gray-300 mx-1" />

      <div className="flex items-center gap-2">
        <button
          onClick={() => setTextAlign("left")}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <AlignLeft size={18} />
        </button>
        <button
          onClick={() => setTextAlign("center")}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <AlignCenter size={18} />
        </button>
        <button
          onClick={() => setTextAlign("right")}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <AlignRight size={18} />
        </button>
      </div>

      <div className="h-4 w-px bg-gray-300 mx-1" />

      <div className="flex items-center gap-2">
        <button
          onClick={handleDuplicateClick}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Copy size={18} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded text-red-500">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default FormattingToolbar;
