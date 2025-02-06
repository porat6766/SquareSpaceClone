import { useEffect, useRef, useContext, useState } from "react";

import {
  BasicEditorContextType,
  type RenderElement3,
} from "./BasicEditor3ProTypes";
import { Position } from "./BasicEditor3ProTypes";
import BlockEditor3 from "./BlockEditor3Pro";
import { BasicEditorContext } from "./BasicEditor3Pro";
import { utils2 } from "./utils2";

export type DraggableFrame3Props = {
  renderElement: RenderElement3;
};

function DraggableFrame3({ renderElement }: DraggableFrame3Props) {
  const { baseFunctions, originOfCoordinates, isEditMode, closestPosition, setOffset }: BasicEditorContextType = useContext(BasicEditorContext);
  const [position, setPosition] = useState<Position>(renderElement.data.position);
  const [displayEditButtons, setDisplayEditButtons] = useState(false);
  const [borderHover, setBorderHover] = useState<string>("none");
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [positionTrigger, setPositionTrigger] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);
  const borderWidth = 5;

  const frameBorder = isEditMode && isHovering ? "1px solid blue" : "none";

  const frameZIndex = renderElement.data.extraData ? renderElement.data.extraData.zIndex : false;

  const BACKGROUND_LEFT = 0;

  const frameStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x,
    top: position.y,
    cursor: "grab",
    overflow: "hidden",
    borderTop: frameBorder,
    borderRight:
      borderHover === "right" && isEditMode
        ? `${borderWidth}px solid blue`
        : frameBorder,
    borderBottom:
      borderHover === "bottom" && isEditMode
        ? `${borderWidth}px solid blue`
        : frameBorder,
    borderLeft: frameBorder,
    backgroundColor: "none",
  };

  if (frameZIndex) {
    frameStyle.zIndex = frameZIndex;
  }

  useEffect(() => {
    if (renderElement.data.extraData?.isBackground) {
      setPosition({ x: BACKGROUND_LEFT, y: renderElement.data.position.y });
      baseFunctions?.setStyle(renderElement.data.id, {
        ...renderElement.data.style,
        width: "100vw",
      });
      if (!renderElement.data.extraData) renderElement.data.extraData = {};
      renderElement.data.extraData.zIndex = "0";
    }
  }, [renderElement.data.extraData?.isBackground]);

  useEffect(() => {
    setPosition(renderElement.data.position);
  }, [renderElement.data.position]);

  useEffect(() => {
    if (positionTrigger) {
      baseFunctions?.setPosition(renderElement.data.id, closestPosition)
    }
    setPositionTrigger(false);
  }, [positionTrigger])

  function detectBorderHoverWrapper(e: any) {
    if (!divRef.current) return;
    const result = utils2.detectBorderHover(
      divRef.current.getBoundingClientRect(),
      e.clientX,
      e.clientY,
      borderWidth + 3
    );
    //should I debounce this?
    if (result !== borderHover) {
      setBorderHover(result);
    }
  }

  function handleMouseEnter() {
    setIsHovering(true);
    window.addEventListener("mousemove", detectBorderHoverWrapper);
    setTimeout(() => {
      window.removeEventListener("mousemove", detectBorderHoverWrapper);
    }, 2000);
  }

  function handleMouseLeave() {
    setIsHovering(false);
    window.removeEventListener("mousemove", detectBorderHoverWrapper);
  }

  //the problem might be that the ooc from the pov of the div is the ooc of wrapper3,
  //but the ooc for e.client and rect are relative to the viewport.

  const handleMouseDown = (e: any) => {
    if (!isEditMode) return;
    const rect = divRef?.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setOffset({x:offsetX, y:offsetY});

    const handleMouseMove = (e: any) => {
      if (borderHover === "none") {
        const newPosition = {
          x: e.clientX - offsetX - (originOfCoordinates?.x ?? 0),
          y: e.clientY - offsetY - (originOfCoordinates?.y ?? 0),
        };

        //change in testing, for the background element.
        if (renderElement.data.extraData?.isBackground) {
          newPosition.x = BACKGROUND_LEFT;
        }
        setPosition(newPosition);
        baseFunctions?.setPosition(renderElement.data.id, newPosition);
      } else if (borderHover === "right") {
        const newWidth = e.clientX - rect.left;
        if (!baseFunctions) return;
        utils2.update0LayerStyle(
          renderElement,
          "width",
          `${newWidth}px`,
          baseFunctions
        );
      } else if (borderHover === "bottom") {
        const newHeight = e.clientY - rect.top;
        if (!baseFunctions) {
          return;
        }
        utils2.update0LayerStyle(
          renderElement,
          "height",
          `${newHeight}px`,
          baseFunctions
        );
      }
    };

    const handleMouseUp = () => {
      setOffset({x:0, y:0});
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      //In testing, may need to remove>
      if (!renderElement.data.extraData?.isBackground) {
        setPositionTrigger(true);
      }
      //<In testing, may need to remove
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  function toggleDisplayEditButtons() {
    setDisplayEditButtons((prev) => !prev);
  }

  return (
    <>
      {displayEditButtons && divRef.current && isEditMode && (
        <BlockEditor3
          blockId={renderElement.data.id}
          blockRect={divRef.current.getBoundingClientRect()}
        />
      )}
      <div
        ref={divRef}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleDisplayEditButtons}
        style={frameStyle}
      >
        {renderElement.body}
        {/* <DynamicComponent element={renderElement.body} propsForElement={{}}/> */}
      </div>
    </>
  );
}

export default DraggableFrame3;

