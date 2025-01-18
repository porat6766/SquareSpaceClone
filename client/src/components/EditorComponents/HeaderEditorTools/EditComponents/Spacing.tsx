import { useState } from "react";
import { Slider } from "../../../ui/slider";

const Spacing = () => {
  const [linkSpacing, setLinkSpacing] = useState([50]);
  const [elementSpacing, setElementSpacing] = useState([50]);

  return (
    <div>
      <h3 className="opacity-70 text-sm font-mono">SPACING</h3>
      <div className="flex flex-col gap-3 relative">
        <div className="flex justify-between items-center">
          <span>Link Spacing</span>
          <span className="text-sm font-bold">{linkSpacing} VW</span>
        </div>
        <Slider
          value={linkSpacing}
          onValueChange={(value) => setLinkSpacing(value)}
          max={100}
          step={1}
          className="w-[100%]"
        />
      </div>
      <hr className="border-black border-1 opacity-30 my-5" />
      <div className="flex flex-col gap-3 relative">
        <div className="flex justify-between items-center">
          <span>Element Spacing</span>
          <span className="text-sm font-bold">{elementSpacing} VW</span>
        </div>
        <Slider
          value={elementSpacing}
          onValueChange={(value) => setElementSpacing(value)}
          max={100}
          step={1}
          className="w-[100%]"
        />
      </div>
    </div>
  );
};

export default Spacing;
