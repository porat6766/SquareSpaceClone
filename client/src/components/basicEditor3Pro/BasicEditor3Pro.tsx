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
  BasicEditor3Page,
  BasicEditor3Website,
} from "./BasicEditor3ProTypes";

import DraggableFrame3 from "./DraggableFrame3Pro";

import { hydrateRenderElement } from "./utils";
import Header3 from "./Header3";

import { EditorLayoutContext } from "../../pages/EditorLayout";
import { DialogAddElement } from "../EditorComponents/Element/DialogAddElements";
import BackgroundGrid from "./BackgroundGrid";

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
  currentWebsite?: BasicEditor3Website;
  saveCurrentWebsite?: (newWebsite?: any) => void;
  isEditModeProp?: boolean;
  saveTrigger?: boolean;
  setSaveTrigger?: Dispatch<SetStateAction<boolean>>;
  // pageNameFromLayout?: string
};

const defaultContext: BasicEditorContextType = {
  closestPosition: { x: 0, y: 0 },
  offset: { x: 0, y: 0 },
  setOffset: () => { },
  headerData: {
    logo: { text: "defaultFromDefaultContext", imgSrc: "", linkedPage: "Home" },
    pages: [],
    style: {
      headerStyle: {},
      logoContainerStyle: {},
      navContainerStyle: {},
      navItemStyle: {}
    },
    hasAccount: false,
    hasCart: false,
    hasExtraButton: false,
    hasLanguageSwitch: false,
    hasSocialLinks: false
  },
  setHeaderData: () => { }, // Or a function that updates the headerData
  // ... initialize other properties
};
export const BasicEditorContext = createContext<BasicEditorContextType>(defaultContext);


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
  const [originOfCoordinates, setOriginOfCoordinates] = useState<Position>();

  const [closestPosition, setClosestPosition] = useState<Position>({ x: 0, y: 0 });
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  const [headerData, setHeaderData]: any = useState(currentWebsite?.headerData);
  const [pages, setPages] = useState<BasicEditor3Page[]>(
    currentWebsite?.pages || []
  );
  const [currentPage, setCurrentPage] = useState<string>(currentWebsite?.lastEditorPage || pages[0]?.name);
  const [prevPage, setPrevPage] = useState<string>(currentWebsite?.lastEditorPage || pages[0]?.name);
  const [renderElements, setRenderElements] = useState<RenderElement3[]>([]);

  const [addBlockMenuVisible, setAddBlockMenuVisible] = useState<boolean>(false);

  // const defaultContext: BasicEditorContextType = {
  //   closestPosition: closestPosition,
  //   offset: offset,
  //   setOffset: setOffset,
  //   headerData:headerData,
  //   setHeaderData:setHeaderData
  // }

  // const BasicEditorContext = createContext<BasicEditorContextType>(defaultContext);

  const isFirstRender = useRef(true)

  const { pageNameFromLayout } = useContext(EditorLayoutContext) || {};

  const isPages = !(pages.length === 0);
  const isRenderElements = !(renderElements.length === 0);
  // const isPagesFetched = useRef(false);
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
    }
  }, [saveTrigger]);

  useEffect(() => {
    if (!currentWebsite) {
      return;
    }
    setPages(currentWebsite.pages);
    if (currentWebsite.pages[0]) {
      setCurrentPage(currentWebsite.lastEditorPage || currentWebsite.pages[0].name)
    }
    if (!isPages) {
      setCurrentPage("HomeFromEditor")
    }
    setHeaderData(currentWebsite.headerData);
  }, [currentWebsite]);

  useEffect(() => {
    if (!currentWebsite || !headerData) {
      return;
    }
    currentWebsite.headerData = headerData;
  }, [headerData]);

  useEffect(() => {
    //displays the current page
    if (!currentWebsite) return;
    if (!isFirstRender) {
      saveSnapshotToPages(prevPage, renderElements)
      console.log(prevPage, renderElements)
    }
    isFirstRender.current = false;
    displayPage(currentPage);
    currentWebsite.pages = pages;//what is the use of this line?
    currentWebsite.lastEditorPage = currentPage
    setPrevPage(currentPage)
  }, [currentPage, pages]);

  useEffect(() => {
    if (
      pageNameFromLayout &&
      pages.find((page) => page.name === pageNameFromLayout)
    ) {
      setCurrentPage(pageNameFromLayout);
    } else if (pageNameFromLayout) {
      // saveSnapshotToPages(pageNameFromLayout, []);
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
      Math.abs(newPosition.x - (originOfCoordinates?.x || 0)) > TOLERANCE ||
      Math.abs(newPosition.y - (originOfCoordinates?.y || 0)) > TOLERANCE;
    if (updateRule2) {
      setOriginOfCoordinates(newPosition);
    }
    setTimeout(updateOOC, 300);
  }

  function addRenderElement(
    renderElementName: RenderElementNames,
    position: Position = { x: 225, y: 225 },
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
      ? renderElements.map((element) => {
        // if(element.data.extraData?.isBackground){
        //   // baseFunctions.setPosition(element.data.id, originOfCoordinates);
        //   // baseFunctions.setStyle(element.data.id, {...element.data.style, width:'100vw'})
        //   element.data.style = {...element.data.style, position:'absolute', left:'0', top:'0', zIndex:'0'}
        //   return element.body;
        // }
        // else return <DraggableFrame3 key={element.data.id} renderElement={element} />
        return (
          <DraggableFrame3 key={element.data.id} renderElement={element} />
        );
      })
      : [];
  }

  function saveSnapshotToPages(
    pageName: string,
    pageElements?: RenderElement3[]
  ) {
    const newPage = { name: pageName, renderElements };
    if (pageElements) newPage.renderElements = pageElements;
    if (isPages) {
      const pageIndex = pages.findIndex((page) => page.name === pageName);
      if (pageIndex === -1) {
        setPages((prev) => [...prev, newPage]);
      } else {
        const newPages = [...pages];
        newPages[pageIndex].renderElements = renderElements;
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
    const displayPageElements = pages.find(
      (page) => page.name === pageName
    )?.renderElements;
    if (displayPageElements) {
      setRenderElements(displayPageElements);
    }
  }

  function closeMenuAndRemoveListener() {
    setAddBlockMenuVisible(false);
    window.removeEventListener("click", closeMenuAndRemoveListener);
  }

  function handleAddMenuClick(e: any) {
    e.stopPropagation();
    setAddBlockMenuVisible(true);
    window.addEventListener("click", closeMenuAndRemoveListener);
  }

  return (
    <BasicEditorContext.Provider
      value={{
        renderElements,
        baseFunctions,
        isEditMode,
        originOfCoordinates,
        duplicateElement,
        closestPosition,
        offset,
        setOffset,
        headerData,
        setHeaderData
      }}
    >
      <div ref={editorRef} style={{ position: "relative" }}>
        <Header3
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          headerEditMode={headerEditMode}
          setHeaderEditMode={setHeaderEditMode}
        // data={headerData}
        // setData={setHeaderData}
        />
        {isEditMode && <div style={{ position: 'relative', top: '200px' }}>
          {!addBlockMenuVisible ? (
            <div style={{ position: 'absolute', zIndex: '100' }}>
              <button
                onClick={(e) => handleAddMenuClick(e)}
                className="flex font-bold items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm"
              >
                <Plus size={26} />
                <span className="font-medium">Add Block</span>
              </button>
            </div>
          ) : (
            <div style={{ zIndex: '100' }}>
              <DialogAddElement addRenderElement={addRenderElement} />
            </div>
          )}
        </div>
        }
        <div>
          {isEditMode && <BackgroundGrid setClosestPosition={setClosestPosition} />}
          {mapRenderElements()}
        </div>
      </div>
    </BasicEditorContext.Provider>
  );
}

export default BasicEditor3Pro;
