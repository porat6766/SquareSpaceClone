import {
  useState,
  useRef,
  useEffect,
  ReactNode,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "lucide-react";

import { Position } from "./BasicEditor3ProTypes";

import {
  DataObject3Content,
  DataObject3Style,
  RenderElement3,
  RenderElementNames,
  BasicEditorContextType,
  BasicEditor3Website,
} from "./BasicEditor3ProTypes";

import DraggableFrame3 from "./DraggableFrame3Pro";
import { hydrateRenderElement } from "./utils";
import Header3 from "./Header3";

import { EditorLayoutContext } from "../../pages/EditorLayout";
import { DialogAddElement } from "../EditorComponents/Element/DialogAddElements";
//goal 0.
// Update the data structure of BasicEditor3 to fit the new data structure:
// Website {
//
//       Header{
//           image/logo block
//           navigation blocks
//       }
//       Page(s){
//           blocks(5 different options)
//       }
//       Footer{
//           navigation blocks
//           social blocks
//       }
//
// }

//task DONE.
//create a basic header element that is editable, saveable, retrievable and serves to navigate the website

//task  DONE.
//create a saving and retrieving website from LS functions.
// (the editor should only deal with one website at a time. choosing the current website and switching
//websites is an outside function...)
//subtask: DONE.
//move the hydration functions to the utils file

//task DONE.
//make the editor display components based on the current website passed to it

//task DONE.
//create 2 different websites and toggle between them.

//task DONE.
//save changes to the website header as well

//task
//change things so it can start without a default website

// goal 1.
// Cover as 7 of the basic editor blocks functionality an unique editors if they exist.

// goal 2.
// Imitiate the style of the squarespace editor.

// goal 3.
// Save a few full websites and integrage with the back for saving and retrieving them.
//task
//create editor mode. the components should not be editable/moveable when not in editor mode
export type BasicEditor3ProProps = {
  // websites: BasicEditor3Website[]
  currentWebsite?: BasicEditor3Website;
  saveCurrentWebsite?: (data: any) => void;
  isEditModeProp?: boolean;
  saveTrigger?: boolean;
  setSaveTrigger?: Dispatch<SetStateAction<boolean>>;
  // setCurrentWebsite:Dispatch<SetStateAction<string>>
};

export const BasicEditorContext = createContext<BasicEditorContextType>({});

function BasicEditor3Pro({
  currentWebsite,
  saveCurrentWebsite,
  isEditModeProp = undefined,
  saveTrigger,
  setSaveTrigger,
}: // pageNameFromLayout
BasicEditor3ProProps) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [headerEditMode, setHeaderEditMode] = useState(false);
  const [originOfCoordinates, setOriginOfCoordinates] = useState<Position>({
    x: 0,
    y: 0,
  });

  const [headerData, setHeaderData] = useState(currentWebsite?.headerData);
  const [pages, setPages] = useState(currentWebsite?.pages);
  const [currentPage, setCurrentPage] = useState<string>(
    pages ? pages[0]?.name : ""
  );
  const [renderElements, setRenderElements] = useState<RenderElement3[]>([]);

  const [addBlockMenuVisible, setAddBlockMenuVisible] =
    useState<boolean>(false);

  const { pageNameFromLayout } = useContext(EditorLayoutContext) || {};

  const isPages = !(pages?.length === 0);
  const isRenderElements = !(renderElements.length === 0);
  const editorRef = useRef<HTMLDivElement>(null);
  const TOLERANCE = 1;

  useEffect(() => {
    if (typeof isEditModeProp !== "undefined") {
      setIsEditMode(isEditModeProp);
    }
    updateOOC();
  }, []);

  useEffect(() => {
    if (saveTrigger) {
      saveChangesToWebsite();
      if (setSaveTrigger) {
        setSaveTrigger(false);
      }
      console.log(saveTrigger + "is saving");
    }
    console.log(saveTrigger + "is Not !!!!!");
  }, [saveTrigger]);

  useEffect(() => {
    setPages(currentWebsite?.pages);
    if (currentWebsite?.pages[0]) {
      setCurrentPage(currentWebsite.pages[0].name);
    }
    setHeaderData(currentWebsite?.headerData);
  }, [currentWebsite]);

  useEffect(() => {
    if (headerData && currentWebsite) {
      currentWebsite.headerData = headerData;
    }
  }, [headerData, currentWebsite]);

  useEffect(() => {
    displayPage(currentPage);

    if (currentWebsite && pages) {
      currentWebsite.pages = pages;
    }
  }, [currentPage, pages, currentWebsite]);

  useEffect(() => {
    if (
      pageNameFromLayout &&
      pages?.find((page) => page.name === pageNameFromLayout)
    ) {
      setCurrentPage(pageNameFromLayout);
    } else if (pageNameFromLayout) {
      saveSnapshotToPages(pageNameFromLayout, []);
    }
  }, [pageNameFromLayout]);

  const baseFunctions = {
    deleteObject: function (id: string) {
      setRenderElements((prev) =>
        prev.filter((element) => element.data.id !== id)
      );
    },
    setPosition: function (id: string, newPosition: Position) {
      setRenderElements((prev) =>
        prev.map((element) =>
          element.data.id === id
            ? {
                data: { ...element.data, position: newPosition },
                body: element.body,
              }
            : element
        )
      );
    },
    setContent: function (id: string, newContent: DataObject3Content) {
      setRenderElements((prev) =>
        prev.map((element) =>
          element.data.id === id
            ? {
                data: { ...element.data, content: newContent },
                body: element.body,
              }
            : element
        )
      );
    },
    setStyle: function (id: string, newStyle: DataObject3Style) {
      //I want to edit only the element with matching id
      setRenderElements((prev) =>
        prev.map((element) =>
          element.data.id === id
            ? { data: { ...element.data, style: newStyle }, body: element.body }
            : element
        )
      );
    },
    saveChanges: () => {
      if (saveCurrentWebsite) {
        saveCurrentWebsite(currentWebsite);
      }
    },
  };

  //resize event? look for a react hooks that checks for a change in div position?
  function updateOOC() {
    //SHOULD REFACTOR currently works, but wasteful. For some reason the position is always considered different.
    if (!editorRef.current) return;
    const rect: DOMRect = editorRef.current.getBoundingClientRect();
    const newPosition: Position = { x: rect.left, y: rect.top };
    const updateRule2 =
      Math.abs(newPosition.x - originOfCoordinates.x) > TOLERANCE ||
      Math.abs(newPosition.y - originOfCoordinates.y) > TOLERANCE;
    if (updateRule2) {
      setOriginOfCoordinates(newPosition);
      // console.log("new OoC:", newPosition);
    }
    setTimeout(updateOOC, 300);
  }

  function addRenderElement(
    renderElementName: RenderElementNames,
    position: Position = { x: 0, y: 0 },
    content: DataObject3Content = {},
    style: DataObject3Style = {}
  ) {
    try {
      const id = uuidv4();
      const newRenderElement = hydrateRenderElement(
        id,
        renderElementName,
        position,
        content,
        style
      );
      if (isRenderElements)
        setRenderElements((prev) => [...prev, newRenderElement]);
      else setRenderElements([newRenderElement]);
    } catch (error) {
      console.log(error);
    }
  }

  function duplicateElement(element: RenderElement3) {
    const { renderElementName, position, content, style } = element.data;
    addRenderElement(
      renderElementName,
      { x: position.x + 10, y: position.y + 10 },
      content,
      style
    );
  }

  function mapRenderElements(): ReactNode[] {
    return isRenderElements
      ? renderElements.map((element) => (
          <DraggableFrame3 key={element.data.id} renderElement={element} />
        ))
      : [];
  }

  function saveSnapshotToPages(
    pageName: string,
    pageElements?: RenderElement3[]
  ) {
    const newPage = { name: pageName, renderElements };
    if (pageElements) newPage.renderElements = pageElements;
    if (isPages) {
      const pageIndex = pages?.findIndex((page) => page.name === pageName);
      if (pageIndex === -1) {
        setPages((prev: any) => [...prev, newPage]);
      } else {
        if (pageIndex !== undefined && pages) {
          const newPages = [...pages];
          newPages[pageIndex].renderElements = renderElements;
        }
        // setPages(newPages);
      }
    } else {
      setPages([newPage]);
    }
  }

  function saveChangesToWebsite() {
    saveSnapshotToPages(currentPage, renderElements);
    if (!saveCurrentWebsite) return;
    saveCurrentWebsite(currentWebsite);
  }

  function displayPage(pageName: string) {
    console.log("Attempting to display page:", pageName);
    const displayPageElements = pages?.find(
      (page) => page.name === pageName
    )?.renderElements;
    if (displayPageElements) {
      setRenderElements(displayPageElements);
    }
  }

  return (
    <BasicEditorContext.Provider
      value={{
        renderElements,
        baseFunctions,
        isEditMode,
        originOfCoordinates,
        duplicateElement,
      }}
    >
      <div ref={editorRef} style={{ position: "relative" }}>
        {isEditMode && (
          <div>
            <button
              onClick={saveChangesToWebsite}
              style={{ border: "1px solid gray" }}
            >
              save changes from Basic editor
            </button>
            {!addBlockMenuVisible ? (
              <button
                onClick={() => setAddBlockMenuVisible(true)}
                className="flex font-bold items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm"
              >
                <Plus size={26} />
                <span className="font-medium">Add Block</span>
              </button>
            ) : (
              <DialogAddElement />
            )}
            <div>
              <button
                onClick={() => addRenderElement(RenderElementNames.Text_Block3)}
              >
                +TextBlock3
              </button>
              <button
                onClick={() =>
                  addRenderElement(RenderElementNames.red_rectangle3)
                }
              >
                +RedRectangle3
              </button>
              <button
                onClick={() =>
                  addRenderElement(RenderElementNames.red_text_rectangle3)
                }
              >
                +RedTextRectangle3
              </button>
              <button
                onClick={() =>
                  addRenderElement(RenderElementNames.color_rectangle3)
                }
              >
                +ColorRectangle3
              </button>
              <button
                onClick={() => addRenderElement(RenderElementNames.text_box3)}
              >
                +TextBox3
              </button>
              <button>
                <span
                  onClick={() =>
                    addRenderElement(RenderElementNames.ImgContainer)
                  }
                >
                  +ImgContainer
                </span>
              </button>
              <button>
                <span
                  onClick={() =>
                    addRenderElement(RenderElementNames.VideoContainer)
                  }
                >
                  +VideoContainer
                </span>
              </button>
            </div>
          </div>
        )}
        <Header3
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          headerEditMode={headerEditMode}
          setHeaderEditMode={setHeaderEditMode}
          data={headerData}
          setData={setHeaderData}
        />
        <div>{mapRenderElements()}</div>
      </div>
    </BasicEditorContext.Provider>
  );
}

export default BasicEditor3Pro;
