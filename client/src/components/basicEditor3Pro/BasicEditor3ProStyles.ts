import { display } from "html2canvas/dist/types/css/property-descriptors/display";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";
import { color } from "html2canvas/dist/types/css/types/color";
import { AlignJustify } from "lucide-react";

const styles = {
  default_red_rectangle_style: {
    width: "8rem",
    height: "4rem",
    backgroundColor: "red",
  },
  default_Img_Container_Style: {
    width: "10rem",
    height: "10rem",
    backgroundColor: "black",
    color: "#fff",
    objectFit: "cover",
    boxSizing: "border-box",
  },
  default_video_Container_Style: {
    width: "10rem",
    height: "10rem",
    backgroundColor: "black",
    color: "#fff",
    objectFit: "cover",
    boxSizing: "border-box",
  },
  default_Text_Block_Style: {
    width: "8rem",
    height: "4rem",
  },
  default_Accordion_Style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
};

export default styles;
