import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Slider } from "../../../../components/ui/slider";
import { Switch } from "../../../../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { Info } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ColorPicker from "../../../EditorComponents/ColorPicker";
import ColorPicker2 from "../../ColorPicker2";
import { BasicEditorContext } from "../../../basicEditor3Pro/BasicEditor3Pro";

function ColorThemeSelector(){
  const { headerData, setHeaderData } = useContext(BasicEditorContext);

  const [selectedType, setSelectedType] = useState("solid");
  const [opacity, setOpacity] = useState([100]);
  const [blurBackground, setBlurBackground] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(headerData.style.headerStyle.backgroundColor || "#FFFFFF");
  const [navigationColor, setNavigationColor] = useState("#000000");
  
  useEffect(() => {
    setHeaderData({...headerData, style:{...headerData.style, headerStyle:{...headerData.style.headerStyle, backgroundColor:backgroundColor}}})
    console.log(backgroundColor)
  },[backgroundColor])

  return (
    <div
      className="w-80 p-4 bg-background rounded-lg border">
      <Select value={selectedType} onValueChange={setSelectedType}>
        <SelectTrigger className="w-full mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-5 h-5 rounded ${selectedType === "solid"
                ? "bg-black"
                : selectedType === "gradient"
                  ? "bg-gradient-to-br from-gray-700 to-gray-900"
                  : "bg-gray-100"
                }`}
            />
            <SelectValue placeholder="Select style" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="solid">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-black" />
              Solid
            </div>
          </SelectItem>
          <SelectItem value="gradient">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-gray-700 to-gray-900" />
              Gradient
            </div>
          </SelectItem>
          <SelectItem value="adaptive">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gray-100" />
              Adaptive
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Tabs defaultValue="color" className="mb-4">
        <TabsList className="w-full">
          <TabsTrigger value="color" className="flex-1">
            Color
          </TabsTrigger>
          <TabsTrigger value="theme" className="flex-1">
            Theme
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-6">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex justify-between items-center cursor-pointer">
              <span className="text-sm">Background color</span>
              <div
                className="w-6 h-6 rounded-full border border-gray-200"
                style={{ backgroundColor: backgroundColor }}
              />
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-64 z-200">
              <ColorPicker2
                color={backgroundColor}
                onChange={setBackgroundColor}
              />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <div className="flex justify-between items-center cursor-pointer">
              <span className="text-sm">Navigation color</span>
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: navigationColor }}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <ColorPicker
              color={navigationColor}
              onChange={setNavigationColor}
            />
          </PopoverContent>
        </Popover>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Opacity</span>
            <span className="text-sm text-gray-500">{opacity}%</span>
          </div>
          <Slider
            value={opacity}
            onValueChange={setOpacity}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm">Blur background</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <Switch
            checked={blurBackground}
            onCheckedChange={setBlurBackground}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorThemeSelector;
