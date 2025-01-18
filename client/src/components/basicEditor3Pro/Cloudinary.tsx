export const handleOpenWidget = () => {
    return new Promise<string>((resolve, reject) => {
      if (window.cloudinary) {
        window.cloudinary.openUploadWidget(
          {
            cloudName: "dcswpgg7a",
            uploadPreset: "pop102030",
            sources: ["local", "url", "camera"],
            folder: "SquareSpace_Profile_Photo",
            zIndex: 1500,
            container: "#cloudinary-container",
            resourceType: "auto",
            clientAllowedFormats: ["image", "video"],
          },
          (
            error: any,
            result: {
              event: string;
              info: { secure_url: string; resource_type: string };
            }
          ) => {
            if (error) {
              console.error("Upload error:", error);
              reject(error);
              return;
            }
  
            if (result && result.event === "success") {
              console.log("Uploaded URL:", result.info.secure_url);
              resolve(result.info.secure_url);
            }
          }
        );
      } else {
        console.error("Cloudinary script not loaded");
        reject("Cloudinary not loaded");
      }
    });
  };
  
  //
  