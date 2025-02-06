import { ReactNode, SetStateAction, Dispatch } from "react";
import { Header3Data } from "./Header3";
import { Footer3Data } from "./Footer3";

export type CssPosition = 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';

export type MarkerDivStyleType = {
  width: string,
  height: string,
  position: CssPosition,
  [key:string]:any
}

export type Position = {
  x: number;
  y: number;
};

export type BasicEditor3User = {
  mongoId: string;
  username: string;
};

export type DataObject3Content = {
  [key: string]: any;
};

export type DataObject3Style = {
  [key: string]: any;
};

export type DataObject3 = {
  id: string;
  renderElementName: RenderElementNames;
  position: Position;
  content: DataObject3Content;
  style: DataObject3Style;
  extraData: {
    zIndex?: string;
    isBackground?: boolean;
    [key: string]: any;
  };
};

export type RenderElement3 = {
  data: DataObject3;
  body: ReactNode;
};

export type BasicEditor3Page = {
  name: string;
  renderElements: RenderElement3[];
};

// export type BasicEditor3Header = {
//     // renderElements:RenderElement3[]
// }

// export type BasicEditor3Footer = {
//     // renderElements:RenderElement3[]
// }

export type BasicEditor3Website = {
  owner: BasicEditor3User;
  name: string;
  headerData: Header3Data;
  pages: BasicEditor3Page[];
  lastEditorPage?: string;
  footerData: Footer3Data;
};

export type BaseFunctions = {
  deleteObject: (id: string) => void;
  setPosition: (id: string, newPosition: Position) => void;
  setContent: (id: string, newContent: DataObject3Content) => void;
  setStyle: (id: string, newStyle: DataObject3Style) => void;
  saveChanges: () => void;
};

export enum RenderElementNames {
  red_rectangle3 = "red_rectangle3",
  red_text_rectangle3 = "red_text_rectangle3",
  text_box3 = "text_box3",
  color_button = "color_button",
  color_rectangle3 = "color_rectangle3",
  ImgContainer = "ImgContainer",
  VideoContainer = "VideoContainer",
  Text_Block3 = "Text_Block3",
  Accordion = "Accordion",
  Button = "Button",
  Form = "Form",
}

export type BasicEditorContextType = {
  renderElements?: RenderElement3[];
  baseFunctions?: BaseFunctions;
  isEditMode?: boolean;
  originOfCoordinates?: Position;
  duplicateElement?: (element: RenderElement3) => void;
  closestPosition:Position;
  offset:Position,
  setOffset:Dispatch<SetStateAction<Position>>,
  headerData:Header3Data,
  setHeaderData:Dispatch<SetStateAction<Header3Data>>
};
