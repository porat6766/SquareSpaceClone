import { useState, useContext, Dispatch, SetStateAction } from "react";
import { BasicEditor3Page } from "./BasicEditor3ProTypes";

import defaultLogo from "../../assets/icons8-website-50.png";
import { BasicEditorContext } from "./BasicEditor3Pro";

import AddBtn from "../EditorComponents/HeaderEditorTools/AddBtn";
import { DialogAddElementHeader } from "../EditorComponents/HeaderEditorTools/DialogAddElementHeader";
import EditBtn from "../EditorComponents/HeaderEditorTools/EditBtn";
import { DialogEditHeader } from "../EditorComponents/HeaderEditorTools/DialogEditHeader";

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
  logo: { text: string; imgSrc: string | null };
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
  data,
  setData,
}: any) {
  //will depend on current screen width?
  const { isEditMode } = useContext(BasicEditorContext);
  const [editButtonVisible, setEditButtonVisible] = useState(false);
  const [headerEditButtonsVisible, setHeaderEditButtonsVisible] =
    useState(false);
  const [addElementsMenuVisible, setAddElementsMenuVisible] = useState(false);
  const [editDesignMenuVisible, setEditDesignMenuVisible] = useState(false);

  const [isHamburger, setIsHamburger] = useState(false);
  // const chosenPagesRef = useRef(pages.map(page => page.name));
  // const [chosenPages, setChosenPages] = useState(pages.map(page => page.name));
  console.log(setIsHamburger);

  const logo = {
    text: "LOGO",
    imgSrc: defaultLogo,
  };

  const headerStyle: React.CSSProperties = {
    position: "relative",
    border: "3px solid gray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1",
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

  return (
    <>
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
        <div style={logoContainerStyle}>
          <img src={logo.imgSrc} />
          {logo.text}
        </div>
        <div>
          {/* {isHamburger && hamburger} */}
          {!isHamburger && (
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
          )}
        </div>
      </div>
      {headerEditMode && headerEditButtonsVisible && (
        <div style={headerEditButtonsContainerStyle}>
          {/* <button onClick={(e) => handleAddHeaderElementsClick(e)}>ADD ELEMENTS</button> */}
          <div onClick={(e) => handleAddHeaderElementsClick(e)}>
            <AddBtn />
            {/* <DialogAddElementHeader /> */}
          </div>
          {/* <button onClick={(e) => handleEditHeaderDesignClick(e)}>EDIT DESIGN</button> */}
          <div onClick={(e) => handleEditHeaderDesignClick(e)}>
            <EditBtn nameBtn={"EDIT DESIGN"} />
          </div>
        </div>
      )}
      <div style={menusContainerStyle}>
        {
          addElementsMenuVisible && headerEditMode && (
            // <div style={addElementsMenuStyle}>
            //     <label>
            //         Button
            //         <input type='checkbox' defaultChecked={data.hasExtraButton} onChange={(e) => handleToggleElement(e, 'button')}></input>
            //     </label>
            //     <label>
            //         Social Links
            //         <input type='checkbox' defaultChecked={data.hasSocialLinks} onChange={(e) => handleToggleElement(e, 'social_links')}></input>
            //     </label>
            //     <label>
            //         Account
            //         <input type='checkbox' defaultChecked={data.hasAccount} onChange={(e) => handleToggleElement(e, 'account')}></input>
            //     </label>
            // </div>
            <DialogAddElementHeader
              handleToggleElement={handleToggleElement}
              data={data}
            />
          )
          // <></>
        }
        {editDesignMenuVisible && headerEditMode && (
          // <div style={editDesignMenuStyle}>
          //     this is the edit design menu
          // </div>
          <DialogEditHeader />
        )}
      </div>
    </>
  );
}

export default Header3;
