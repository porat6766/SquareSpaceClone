import React, { useState, useContext, useRef } from "react";
import { BasicEditorContext } from "./BasicEditor3Pro";

import EditElement from "../EditorComponents/Element/EditElementBox/EditElement";
import EditText from "../EditorComponents/Element/EditText/EditText";

export type BlockEditor3Props = {
  blockId: string;
  blockRect: DOMRect;
};

const defaultElement: any = {
  // Provide default values for all properties in RenderElement3
  // Example:
  id: "",
  data: {
    content: {
      textContent: "",
    },
  },
  // Add any other required fields
};

function BlockEditor3({ blockId, blockRect }: BlockEditor3Props) {
  const { renderElements, baseFunctions, originOfCoordinates } =
    useContext(BasicEditorContext);
  const element = renderElements?.filter(
    (element) => element.data.id === blockId
  )[0];
  const [editMenuVisibility, setEditMenuVisibility] = useState(true);
  const [textEditMenuVisibility, setTextEditMenuVisibility] = useState(false);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [contentMode, setContentMode] = useState(true);
  const textContentInputRef = useRef<HTMLInputElement>(null);
  const backgroundColors = [
    "white",
    "black",
    "gray",
    "red",
    "green",
    "blue",
    "yellow",
  ];
  const fixedHeights = ["1rem", "2rem", "3rem", "4rem"];

  const isTextElement = element?.data.renderElementName === "Text_Block3";

  const editButtonsStyle: React.CSSProperties = {
    position: "absolute",
    left: blockRect.left - (originOfCoordinates?.x ?? 0),
    top: blockRect.top - 60 - (originOfCoordinates?.y ?? 0),
    zIndex:'100'
  };

  const editFormStyle: React.CSSProperties = {
    position: "absolute",
    left: 5 + blockRect.right - (originOfCoordinates?.x ?? 0),
    top: blockRect.y - (originOfCoordinates?.y ?? 0),
    zIndex: '100',
  };

  function handleEditClick() {
    if (isTextElement) {
      setEditMenuVisibility(false);
      setTextEditMenuVisibility(true);
    } else {
      setEditMenuVisibility(true);
      setEditFormVisibility((prev) => !prev);
    }
  }

  function handleDeleteClick() {
    baseFunctions?.deleteObject(blockId);
  }

  function handleEditTextContent(newText: string) {
    baseFunctions?.setContent(blockId, {
      ...element?.data.content,
      textContent: newText,
    });
    // baseFunctions.saveChanges();
  }

  function updateBackgroundColor(newColor: string) {
    baseFunctions?.setStyle(blockId, {
      ...element?.data.style,
      backgroundColor: newColor,
    });
  }

  function updateStyle(field: string, newValue: string | number) {
    const newStyle = { ...element?.data.style };
    newStyle[field] = newValue;
    baseFunctions?.setStyle(blockId, newStyle);
  }

  return (
    <div>
      <div style={editButtonsStyle}>
        {editMenuVisibility && (
          <EditElement
            element={element}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        )}
        {textEditMenuVisibility && (
          <EditText element={element || defaultElement} />
        )}{" "}
        {/* <button onClick={handleEditClick}>EDIT</button> */}
        {/* <button onClick={handleDeleteClick}s>DELETE</button> */}
      </div>
      {editFormVisibility && (
        <div style={editFormStyle}>
          <button onClick={() => setContentMode(true)}>Content</button>
          <button onClick={() => setContentMode(false)}>Design</button>
          {contentMode && (
            <div>
              Content edit div
              {element?.data.content.textContent && (
                <div>
                  <label>Text Content:</label>
                  <br></br>
                  <input
                    defaultValue={element.data.content.textContent}
                    ref={textContentInputRef}
                  ></input>
                  <button
                    onClick={() =>
                      handleEditTextContent(
                        textContentInputRef.current?.value ?? ""
                      )
                    }
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          )}
          {!contentMode && (
            <div>
              Design edit div
              <br></br>
              <label>background color:</label>
              <br></br>
              <select
                defaultValue={element?.data.style.backgroundColor}
                onChange={(e) => updateBackgroundColor(e.target.value)}
              >
                {backgroundColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <br></br>
              <label>Text color:</label>
              <br></br>
              <select
                defaultValue={element?.data.style.color}
                onChange={(e) => updateStyle("color", e.target.value)}
              >
                {backgroundColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <select onChange={(e) => updateStyle("height", e.target.value)}>
                {fixedHeights.map((height) => (
                  <option>{height}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlockEditor3;
