import { useState, useContext, Dispatch, SetStateAction } from "react";
import { BasicEditor3Page } from "./BasicEditor3ProTypes";

import defaultLogo from "../../assets/icons8-website-50.png";
import { BasicEditorContext } from "./BasicEditor3Pro";

import AddBtn from "../EditorComponents/HeaderEditorTools/AddBtn";
import { DialogAddElementHeader } from "../EditorComponents/HeaderEditorTools/DialogAddElementHeader";
import EditBtn from "../EditorComponents/HeaderEditorTools/EditBtn";
import { DialogEditHeader } from "../EditorComponents/HeaderEditorTools/DialogEditHeader";
import LogoEditorForm from "../EditorComponents/HeaderEditorTools/LogoEditorForm";

export type Header3Props = {
  pages: BasicEditor3Page[];
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  headerEditMode: boolean;
  setHeaderEditMode: Dispatch<SetStateAction<boolean>>;
  data: Header3Data;
  setData: Dispatch<SetStateAction<Header3Data>>;
};

export type Header3Data = {
  logo: {
    text: string;
    imgSrc: string | null;
    linkedPage:string;
  };
  pages: string[];
  hasExtraButton: boolean;
  hasSocialLinks: boolean;
  hasAccount: boolean;
  style: {
    headerStyle: { [key: string]: any };
    logoContainerStyle: { [key: string]: any };
    navContainerStyle: { [key: string]: any };
    navItemStyle: { [key: string]: any };
  };
  hasCart: boolean;
  hasLanguageSwitch: boolean;
};

//task DONE.
//Make a header editing mode. It will turn on when clicking the edit header button, and turn off
//when clicking outside of the header and it's editing buttons.

//task DONE
//create the Add Elements menu with the options to add social links, button, and account.
//for now they will add placeholder elements without functionality.

//task DONE.
//save and retrieve preferences for the header to LS and recreate it on app start.(minimally);

//task
//Add some design editing capabilities to the design menu

//don't overdo the design now. focus on functionality.
function Header3({
  pages,
  setCurrentPage,
  headerEditMode,
  setHeaderEditMode,
}: any) {
  const { isEditMode, headerData, setHeaderData } = useContext(BasicEditorContext);
  const data = headerData;
  const setData = setHeaderData;
  const [editButtonVisible, setEditButtonVisible] = useState(false);
  const [headerEditButtonsVisible, setHeaderEditButtonsVisible] =
    useState(false);
  const [addElementsMenuVisible, setAddElementsMenuVisible] = useState(false);
  const [editDesignMenuVisible, setEditDesignMenuVisible] = useState(false);

  const [isLogoHover, setIsLogoHover] = useState<boolean>(false);
  const [isLogoEditMenu, setIsLogoEditMenu] = useState<boolean>(false);

  const logo = data.logo || {
    text: "LOGO",
    imgSrc: defaultLogo,
    // linkedPage: "Home"
  };
  logo.imgSrc = data.logo.imgSrc || defaultLogo;
  logo.linkedPage = data.logo.linkedPage || "Home";

  const headerWrapperStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: "100",
    width: "100%",
  };

  const headerStyle: React.CSSProperties = {
    position: "relative",
    zIndex: "100",
    // border: "3px solid gray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...headerData.style.headerStyle
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const overlayButtonStyle = {
    border: "2px solid white",
    borderRadius: "0.5rem",
    padding: "0.5rem",
  };

  const logoContainerStyle: React.CSSProperties = {
    padding: "0.5rem 1rem 0.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    border: headerEditMode && isLogoHover ? "1px solid blue" : "none",
    textAlign: "center",
  };

  const navContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "0 1rem 0 1rem",
  };

  const navItemStyle = {
    padding: "0.5rem",
    cursor: "pointer",
  };

  const headerEditButtonsContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  const menusContainerStyle = {
    width: "100%",
    display: "flex",
  };

  //   const addElementsMenuStyle = {
  //     backgroundColor: "white",
  //     color: "black",
  //     display: "flex",
  //     flexDirection: "column",
  //   };

  //   const editDesignMenuStyle = {
  //     marginLeft: "auto",
  //     backgroundColor: "white",
  //     color: "black",
  //   };

  function handleNavigateToPage(pageName: string) {
    setCurrentPage(pageName);
  }

  function handleHeaderMouseEnter() {
    if (!isEditMode) return;
    setEditButtonVisible(true);
    window.removeEventListener("click", cancelHeaderEditMode);
  }

  function handleHeaderMouseLeave() {
    setEditButtonVisible(false);
    window.addEventListener("click", cancelHeaderEditMode);
    //what if I will click one of the editing buttons?
    //will stopping the event propagation suffice?
  }

  function cancelHeaderEditMode() {
    setHeaderEditMode(false);
    window.removeEventListener("click", cancelHeaderEditMode);
    setAddElementsMenuVisible(false);
    setEditDesignMenuVisible(false);
  }

  function handleEditSiteHeaderClick() {
    setHeaderEditMode(true);
    setHeaderEditButtonsVisible(true);
  }

  function handleAddHeaderElementsClick(e: any) {
    e.stopPropagation();
    setHeaderEditButtonsVisible(false);
    setAddElementsMenuVisible(true);
  }

  function handleEditHeaderDesignClick(e: any) {
    e.stopPropagation();
    setHeaderEditButtonsVisible(false);
    setEditDesignMenuVisible(true);
  }

  function handleToggleElement(checked: boolean, elementName: string) {
    // e.stopPropagation();
    // const checked = e.target.checked;
    if (elementName === "button") {
      setData({ ...data, hasExtraButton: checked });
    }
    if (elementName === "social_links") {
      setData({ ...data, hasSocialLinks: checked });
    }
    if (elementName === "account") {
      setData({ ...data, hasAccount: checked });
    }
  }

  function handleLogoDivClick() {
    if (isLogoHover) {
      setIsLogoEditMenu((prev) => !prev);
    }
    if (!isEditMode) {
      console.log(logo.linkedPage)
      handleNavigateToPage(logo.linkedPage)
    }
  }

  return (
    <div style={headerWrapperStyle}>
      <div
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
        style={headerStyle}
      >
        {editButtonVisible && !headerEditMode && (
          <div style={overlayStyle}>
            <button
              style={overlayButtonStyle}
              onClick={handleEditSiteHeaderClick}
            >
              EDIT SITE HEADER
            </button>
          </div>
        )}
        <div
          onClick={handleLogoDivClick}
          onMouseEnter={() => setIsLogoHover(true)}
          onMouseLeave={() => setIsLogoHover(false)}
          style={logoContainerStyle}
        >
          <img
            style={{ maxWidth: "70px", maxHeight: "70px" }}
            src={logo.imgSrc}
            onError={() => {
              logo.imgSrc = defaultLogo;
            }}
          />
          {logo.text}
        </div>
        {isLogoEditMenu && isEditMode && (
          <LogoEditorForm />
        )}
        <div>
          <div style={navContainerStyle}>
            {data.pages.length > 0
              ? data.pages.map((name: any) => (
                <div
                  key={name}
                  style={navItemStyle}
                  onClick={() => handleNavigateToPage(name)}
                >
                  {name}
                </div>
              ))
              : pages.map((page: any) => (
                <div
                  key={page.name}
                  style={navItemStyle}
                  onClick={() => handleNavigateToPage(page.name)}
                >
                  {page.name}
                </div>
              ))}
            {data.hasExtraButton && (
              <button style={navItemStyle}>Extra button</button>
            )}
            {data.hasSocialLinks && (
              <div style={navItemStyle}>SOCIAL LINKS...</div>
            )}
            {data.hasAccount && <div style={navItemStyle}>Login</div>}
          </div>
        </div>
      </div>
      {headerEditMode && headerEditButtonsVisible && (
        <div style={headerEditButtonsContainerStyle}>
          <div onClick={(e) => handleAddHeaderElementsClick(e)}>
            <AddBtn />
          </div>
          <div onClick={(e) => handleEditHeaderDesignClick(e)}>
            <EditBtn nameBtn={"EDIT DESIGN"} />
          </div>
        </div>
      )}
      <div style={menusContainerStyle}>
        {
          addElementsMenuVisible && headerEditMode && (
            <DialogAddElementHeader
              handleToggleElement={handleToggleElement}
              data={data}
            />
          )
        }
        {editDesignMenuVisible && headerEditMode && (
          <DialogEditHeader />
        )}
      </div>
    </div>
  );
}

export default Header3;
