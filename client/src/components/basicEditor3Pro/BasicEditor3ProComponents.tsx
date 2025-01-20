import { useContext, useEffect, useRef, useState } from "react";
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
        <button style={finalStyle}>
          <span onClick={() => handleAddImage()}>+</span>
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
        <button style={finalStyle}>
          <span onClick={() => handleAddVideo()}>+</span>
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
  const { renderElements, baseFunctions, isEditMode } = useContext(BasicEditorContext);
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
      {isEditMode ?
      <textarea
      style={textAreaStyle}
      onChange={(e) => updateTextContentValue(e.target.value)}
      defaultValue={element?.data.content.textContent}
      ></textarea>
      :<div
      style={textAreaStyle}
      >{element?.data.content.textContent}</div>
    }

    </div>
  );
}

export function Accordion({ id }: { id: string }) {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { renderElements, baseFunctions, isEditMode } =
    useContext(BasicEditorContext);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const element = renderElements?.find(
    (element: any) => element.data.id === id
  );

  if (!element || !element.data.content) return null;
  const { style, content } = element.data;

  if (isEmpty(content)) {
    baseFunctions?.setContent(id, {
      items: [
        {
          itemId: "0",
          title: "Title 1",
          content: "Content for Title 1",
        },
        {
          itemId: "1",
          title: "Title 2",
          content: "Content for Title 2",
        },
        {
          itemId: "2",
          title: "Title 3",
          content: "Content for Title 3",
        },
      ],
    });
  }

  const toggleItem = (itemId: any) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const toggleEdit = (itemId: any) => {
    setIsEditing(isEditing === itemId ? null : itemId);
  };

  const updateTitle = (itemId: any, newTitle: string) => {
    const updatedItemIndex = content.items.findIndex(
      (item: any) => item.itemId === itemId
    );
    if (updatedItemIndex !== -1) {
      const updatedItems = [...content.items];
      updatedItems[updatedItemIndex].title = newTitle;
      baseFunctions?.setContent(id, { items: updatedItems });
    }
  };

  const updateContent = (itemId: any, newContent: string) => {
    const updatedItemIndex = content.items.findIndex(
      (item: any) => item.itemId === itemId
    );
    if (updatedItemIndex !== -1) {
      const updatedItems = [...content.items];
      updatedItems[updatedItemIndex].content = newContent;
      baseFunctions?.setContent(id, { items: updatedItems });
    }
  };

  const accordionStyle = {
    padding: "5px",
    width: "100%",
    border: "1px solid #ccc",
    margin: "5px 0",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle: any = {
    background: "#f7f7f7",
    padding: "12px",
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    border: "none",
    borderBottom: "1px solid #ccc",
    borderRadius: "8px 8px 0 0",
    fontWeight: "bold",
    transition: "background 0.3s",
  };

  const contentStyle = {
    width: "100%",
    padding: "12px",
    background: "#fff",
    borderTop: "1px solid #ccc",
    borderRadius: "0 0 8px 8px",
    fontSize: "14px",
    color: "#555",
  };

  return (
    <div style={style}>
      {content.items.map((item: any) => (
        <div key={item.itemId} style={{ ...accordionStyle, flexGrow: 1 }}>
          <button
            onClick={() => toggleItem(item.itemId)}
            style={buttonStyle}
            onMouseEnter={(e: any) => (e.target.style.background = "#e0e0e0")}
            onMouseLeave={(e: any) => (e.target.style.background = "#f7f7f7")}
          >
            <input
              type="text"
              value={item.title}
              onChange={(e) =>
                isEditMode && updateTitle(item.itemId, e.target.value)
              }
              style={{
                border: "none",
                background: "transparent",
                fontWeight: "bold",
                width: "80%",
              }}
              disabled={!isEditMode} // Disable if not in edit mode
            />
            <span>{openItem === item.itemId ? "-" : "+"}</span>
          </button>
          {openItem === item.itemId && (
            <div style={contentStyle}>
              {isEditing === item.itemId ? (
                <textarea
                  value={item.content}
                  onChange={(e) =>
                    isEditMode && updateContent(item.itemId, e.target.value)
                  }
                  rows={4}
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    color: "#555",
                    borderRadius: "8px",
                  }}
                  disabled={!isEditMode} // Disable if not in edit mode
                />
              ) : (
                <p>{item.content}</p>
              )}
              {isEditMode && (
                <button
                  onClick={() => isEditMode && toggleEdit(item.itemId)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#f7f7f7",
                    borderRadius: "5px",
                    border: "none",
                    cursor: isEditMode ? "pointer" : "not-allowed",
                    fontWeight: "bold",
                    marginTop: "8px",
                  }}
                  disabled={!isEditMode} // Disable if not in edit mode
                >
                  {isEditing === item.itemId ? "Save" : "Edit"}
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Button({ id }: any) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { renderElements, baseFunctions, isEditMode } =
    useContext(BasicEditorContext);
  const element = renderElements?.find(
    (element: any) => element.data.id === id
  );

  const lastClickTime = useRef<number>(0);

  if (!element || !element.data.content) return null;

  const { style, content } = element.data;
  if (isEmpty(content)) {
    baseFunctions?.setContent(id, { btnName: "Click me" });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    baseFunctions?.setContent(id, { btnName: event.target.value });
  };

  const handleButtonClick = () => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime.current < 300) {
      alert(`Button clicked with text: ${content.btnName}`);
    } else if (isEditMode) {
      setIsEditing(true);
    }
    lastClickTime.current = currentTime;
  };

  return (
    <button
      onClick={handleButtonClick}
      onDoubleClick={() => setIsEditing(false)}
      style={style}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {isEditing && isEditMode ? (
        <input
          type="text"
          value={content.btnName}
          onChange={handleChange}
          onBlur={() => setIsEditing(false)}
          autoFocus
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            width: "100%",
            textAlign: "center",
          }}
        />
      ) : (
        content.btnName
      )}
    </button>
  );
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export function Form({ id }: { id: string }) {
  const { renderElements, baseFunctions } = useContext(BasicEditorContext);
  const element = renderElements?.find(
    (element: any) => element.data.id === id
  );

  if (!element || !element.data.content) return null;

  const { style, content } = element.data;

  useEffect(() => {
    if (!content.firstName && !content.lastName && !content.email) {
      baseFunctions?.setContent(id, {
        firstName: "Your first name...",
        lastName: "Your last name...",
        email: "Your Email...",
      });
    }
  }, [content, id, baseFunctions]);

  const [formData, setFormData] = useState<FormData>({
    firstName: content.firstName,
    lastName: content.lastName,
    email: content.email,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    baseFunctions?.setContent(id, {
      ...content,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors: { [key: string]: string } = {};
    if (!formData.firstName)
      validationErrors.firstName = "First name is required";
    if (!formData.lastName) validationErrors.lastName = "Last name is required";
    if (!formData.email) validationErrors.email = "Email is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Form submitted: ${JSON.stringify(formData)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ ...style, maxWidth: "400px", margin: "0 auto" }}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName}</span>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
