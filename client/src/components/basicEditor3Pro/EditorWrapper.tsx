import { useEffect } from "react";

import BasicEditor3Pro from "./BasicEditor3Pro";
import { BasicEditor3User, BasicEditor3Website } from "./BasicEditor3ProTypes";
// import { Header3Data } from "./Header3";

const defaultHeaderData: any = {
  logo: { text: "LOGO1", imgSrc: null },
  pages: [],
  hasExtraButton: false,
  hasSocialLinks: false,
  hasAccount: true,
  style: {
    headerStyle: {},
    logoContainerStyle: {},
    navContainerStyle: {},
    navItemStyle: {},
  },
};

const defaultUser = { mongoId: "1234abcd", username: "user1" };

const defaultWebsite: BasicEditor3Website = {
  owner: defaultUser,
  name: "defaultWebsite0",
  headerData: defaultHeaderData,
  pages: [
    // { name: "HomeFromDefaultWebsite", renderElements: [] }
  ],
  footerData: {},
};

export type Wrapper3ProProps = {
  currentUser: BasicEditor3User;
};

//for taking the string from the db and turning it into a website:
//dataStringToWebsite takes a websiteDataString and returns a BasicEditor3Website

//for adding a new website:
//conform to the BasicEditor3Website type, can use the addWebsite function here for reference.

// interface EditorWrapperProps {
//   templete: any;
//   websiteToEdit: any;
//   saveCurrentWebsite?: () => void;
//   currentWebsite: any;
//   setCurrentWebsite: (website: any) => void;
//   saveTrigger: boolean;
//   setSaveTrigger: Dispatch<SetStateAction<boolean>>;
// }

function EditorWrapper({
  templete,
  websiteToEdit,
  saveCurrentWebsite,
  currentWebsite,
  setCurrentWebsite,
  saveTrigger,
  setSaveTrigger,
}: any) {
  useEffect(() => {
    if (websiteToEdit) {
      setCurrentWebsite(websiteToEdit);
    } else if (templete) {
      setCurrentWebsite(templete);
    } 
    else {
      setCurrentWebsite(defaultWebsite);
    }
  }, [websiteToEdit, templete]);

  return (
    <>
      {currentWebsite && (
        <BasicEditor3Pro
          saveTrigger={saveTrigger}
          setSaveTrigger={setSaveTrigger}
          currentWebsite={currentWebsite}
          saveCurrentWebsite={saveCurrentWebsite}
        />
      )}
    </>
  );
}

export default EditorWrapper;
