import React from "react";
import html2canvas from "html2canvas";

interface ScreenshotCaptureProps {
  onSave: (imageData: string) => void; // Callback to save the image string to the database
}

const ScreenshotCapture: React.FC<ScreenshotCaptureProps> = ({ onSave }) => {
  const captureScreenshot = () => {
    // Select the element to capture (or you can use 'document.body' to capture the whole page)
    const elementToCapture = document.body;

    html2canvas(elementToCapture).then((canvas) => {
      const imageData = canvas.toDataURL(); // This is the base64 string

      // Call the onSave function passed as a prop to save it to the database
      onSave(imageData);
    });
  };

  return (
    <div>
      <button
        onClick={captureScreenshot}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Take Screenshot
      </button>
    </div>
  );
};

export default ScreenshotCapture;
