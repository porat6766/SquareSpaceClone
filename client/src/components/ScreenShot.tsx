import { forwardRef, useImperativeHandle } from "react";
import html2canvas from "html2canvas";
import Compressor from "compressorjs";

interface ScreenshotCaptureProps {
  onSave?: (imageData: string) => void; // Optional callback to save the image string
  setImageData: (imageData: string) => void; // Function to update imageData
}

const ScreenshotCapture = forwardRef((props: ScreenshotCaptureProps, ref) => {
  const { onSave, setImageData } = props;

  // Function to capture the screenshot
  const captureScreenshot = () => {
    const elementToCapture = document.documentElement;

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
        useCORS: true,
        scale: 0.5, // Lower resolution for better compression
      }).then((canvas) => {
        // Convert canvas to WebP format with compression (better than JPEG)
        const imageUrl = canvas.toDataURL("image/webp", 0.7); // Adjust quality here (0.5 for more compression)

        // Use Compressor.js for post-compression if necessary
        const imageBlob = dataURItoBlob(imageUrl); // Convert data URL to Blob for Compressor.js
        console.log(imageBlob);
        console.log(imageBlob.size);

        new Compressor(imageBlob, {
          quality: 0.5, // Reduce quality for further compression (keep experimenting with this value)
          success(result) {
            const reader = new FileReader();
            reader.readAsDataURL(result);

            reader.onloadend = () => {
              if (reader.result && typeof reader.result === "string") {
                const compressedImageUrl = reader.result;
                setImageData(compressedImageUrl);
                if (onSave) {
                  onSave(compressedImageUrl);
                }
              } else {
                console.error("Failed to read file as DataURL");
              }
            };
          },
          error(err) {
            console.error("Compression failed:", err);
          },
        });
      });
    });
  };

  // Helper function to convert dataURL to Blob (for Compressor.js)
  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([uintArray], { type: "image/webp" });
  };

  // Expose captureScreenshot to parent components
  useImperativeHandle(ref, () => ({
    captureScreenshot,
  }));

  return null; // No visible UI, it’s used programmatically
});

export default ScreenshotCapture;
