import { useContext } from "react";
import { BasicEditorContext } from "./BasicEditor3Pro";
import { isEmpty } from "./utils";
import { handleOpenWidget } from "./Cloudinary"; //

export function RedRectangle3({ id }: { id: string }) {
  const { renderElements } = useContext(BasicEditorContext);
  const element = renderElements?.filter(
    (element) => element.data.id === id
  )[0];
  const defaultStyle = {
    width: "8rem",
    height: "4rem",
    backgroundColor: "red",
  };
  const style = element?.data.style;
  const finalStyle = isEmpty(style) ? defaultStyle : style;
  return <div style={finalStyle}>RedRectangle3</div>;
}

const colorRectangle3Styles = [
  { width: "8rem", height: "4rem", backgroundColor: "purple" },
  { width: "8rem", height: "4rem", backgroundColor: "red" },
  { width: "8rem", height: "4rem", backgroundColor: "green" },
  { width: "8rem", height: "4rem", backgroundColor: "blue" },
];

export function ColorRectangle3({ id }: { id: string }) {
  const { renderElements, baseFunctions } = useContext(BasicEditorContext);
  const element = renderElements?.filter(
    (element) => element.data.id === id
  )[0];

  function handleClick() {
    const choice = Math.floor(Math.random() * 3);
    const newStyle = colorRectangle3Styles[choice];
    baseFunctions?.setStyle(id, newStyle);
  }

  const defaultStyle = colorRectangle3Styles[0];
  const style = element?.data.style;
  const finalStyle = isEmpty(style) ? defaultStyle : style;
  return (
    <div onClick={handleClick} style={finalStyle}>
      ColorRectangle3
    </div>
  );
}

export function TextBox3({ id }: { id: string }) {
  const { renderElements, baseFunctions } = useContext(BasicEditorContext);
  const element = renderElements?.filter(
    (element) => element.data.id === id
  )[0];
  // const textAreaRef = useRef();

  function onTextChange(e: any) {
    const newText = e.target.value;
    baseFunctions?.setContent(id, { text: newText });
  }

  // const defaultStyle = { width: "8rem", height: "4rem" };
  // const style = element?.data.style;
  // const finalStyle = isEmpty(style) ? defaultStyle : style;
  return (
    <div>
      TextBox3
      <textarea
        // ref={textAreaRef}
        defaultValue={element?.data.content.text}
        onChange={onTextChange}
      ></textarea>
    </div>
  );
}

export function RedTextRectangle3({ id }: { id: string }) {
  const { renderElements } = useContext(BasicEditorContext);
  const element = renderElements?.filter(
    (element) => element.data.id === id
  )[0];
  const defaultStyle = {
    width: "8rem",
    height: "4rem",
    backgroundColor: "red",
  };
  const style = element?.data.style;
  const finalStyle = isEmpty(style) ? defaultStyle : style;
  return (
    <div style={finalStyle}>
      RedRectangle3
      <br></br>
      {element?.data.content.textContent}
    </div>
  );
}

export function ImgContainer({ id }: { id: string }) {
  const { renderElements, baseFunctions } = useContext(BasicEditorContext);

  const element = renderElements?.find(
    (element: any) => element.data.id === id
  );

  if (!element || !element.data.content) return null;

  const { style, content } = element.data;
  const finalStyle = style;

  const handleAddImage = async () => {
    try {
      const url = await handleOpenWidget();
      baseFunctions?.setContent(id, { src: url });
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <div>
      {!content.src ? (
        <button style={finalStyle} onClick={() => handleAddImage()}>
          +
        </button>
      ) : (
        <img src={content.src} alt={content.alt} style={finalStyle} />
      )}
    </div>
  );
}

export function VideoContainer({ id }: { id: string }) {
  const { renderElements, baseFunctions } = useContext(BasicEditorContext);

  const element = renderElements?.find(
    (element: any) => element.data.id === id
  );

  if (!element || !element.data.content) return null;

  const { style, content } = element.data;
  const finalStyle = style;

  const handleAddVideo = async () => {
    try {
      const url = await handleOpenWidget();
      baseFunctions?.setContent(id, { src: url });
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <div>
      {!content.src && (
        <button onClick={() => handleAddVideo()} style={finalStyle}>
          +
        </button>
      )}
      {content.src && (
        <video
          autoPlay
          loop
          muted
          controls={false}
          disablePictureInPicture
          style={finalStyle}
        >
          <source src={content.src} type="video/mp4" />
          {content.alt}
        </video>
      )}
    </div>
  );
}

export function TextBlock3({ id }: { id: string }) {
  const { renderElements, baseFunctions } = useContext(BasicEditorContext);
  const element = renderElements?.filter(
    (element) => element.data.id === id
  )[0];
  const style = element?.data.style;

  function updateTextContentValue(newText: string) {
    const content = element?.data.content;
    baseFunctions?.setContent(id, { ...content, textContent: newText });
  }

  const textAreaStyle: React.CSSProperties = {
    overflow: "hidden",
    background: "none",
    border: "none",
    outline: "none",
    resize: "none",
    height: "100%",
    width: "100%",
    ...style,
  };

  return (
    <div style={style}>
      <textarea
        style={textAreaStyle}
        onChange={(e) => updateTextContentValue(e.target.value)}
        defaultValue={element?.data.content.textContent}
      ></textarea>
    </div>
  );
}
