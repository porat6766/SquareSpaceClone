import React from "react";

interface LoadingSpinnerProps {
  size?: number; //
  color?: string;
  thickness?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 50,
  color = "gray",
  thickness = 4,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
      <div
        style={{
          width: size,
          height: size,
          borderWidth: thickness,
          borderColor: `${color} transparent ${color} transparent`,
        }}
        className="rounded-full border-solid animate-spin"
      ></div>
    </div>
  );
};

export default LoadingSpinner;
