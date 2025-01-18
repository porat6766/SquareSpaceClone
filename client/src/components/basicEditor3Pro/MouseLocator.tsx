import { useState } from "react";
import { Position } from "./BasicEditor3ProTypes";

function MouseLocator() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "3px solid purple",
        pointerEvents: "none",
      }}
    >
      MouseLocator
      {`(x,y) : (${position.x},${position.y})`}
    </div>
  );
}

export default MouseLocator;
