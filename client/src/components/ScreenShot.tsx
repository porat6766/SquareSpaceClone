import { forwardRef, useImperativeHandle } from "react";
import html2canvas from "html2canvas";

interface ScreenshotCaptureProps {
  onSave?: (imageData: string) => void; // Optional callback to save the image string
  setImageData: (imageData: string) => void; // Function to update imageData
}

const ScreenshotCapture = forwardRef((props: ScreenshotCaptureProps, ref) => {
  const { onSave, setImageData } = props;

  // Function to capture the screenshot
  const captureScreenshot = () => {
    const elementToCapture = document.body; // Capture the entire page (you can adjust this).

    // Wait for all images to load
    const images = Array.from(document.images);
    const promises = images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    );

    Promise.all(promises).then(() => {
      html2canvas(elementToCapture, {
        useCORS: true, // Handles cross-origin images
        scale: 1, // Reduces the resolution to 50% to reduce image size
      })
        .then((canvas) => {
          // Convert the canvas to a data URL (Base64) with reduced quality (JPEG compression)
          const compressedImageUrl = canvas.toDataURL("image/jpeg", 0.7); // The second argument is the quality (0.0 to 1.0)

          // Update imageData in the parent component (via setImageData)
          setImageData(compressedImageUrl);

          // If the onSave callback is provided, call it with the image data
          if (onSave) {
            onSave(compressedImageUrl);
          }
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    });
  };

  // Expose captureScreenshot to parent components
  useImperativeHandle(ref, () => ({
    captureScreenshot,
  }));

  return null; // No visible UI, it’s used programmatically
});

export default ScreenshotCapture;
