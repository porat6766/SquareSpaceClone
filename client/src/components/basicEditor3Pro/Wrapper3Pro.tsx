import { useEffect, useState } from "react";

import BasicEditor3Pro from "./BasicEditor3Pro";
import {
  BasicEditor3Page,
  BasicEditor3User,
  BasicEditor3Website,
} from "./BasicEditor3ProTypes";
import WebsiteNav3 from "./WebsiteNav3";
import { Header3Data } from "./Header3";
import { hydrateWebsites } from "./utils";
import { Footer3Data } from "./Footer3";
import { useCreateSite } from "../../hooks/useSite";
import { useUserProfile } from "../../hooks/useUser";

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
    { name: "Home2", renderElements: [] },
    { name: "Home3", renderElements: [] },
  ],
  footerData: {},
};

export type Wrapper3ProProps = {
  currentUser: BasicEditor3User;
};

function Wrapper3Pro({ currentUser = defaultUser }: any) {
  const [websites, setWebsites] = useState<BasicEditor3Website[]>([
    defaultWebsite,
  ]);
  const [currentWebsite, setCurrentWebsite] = useState<BasicEditor3Website>(
    websites[0]
  );
  const websiteDataString = JSON.stringify(currentWebsite);

  const { mutate: createNewSite } = useCreateSite(() => console.log(""));
  const { data: userData } = useUserProfile();

  useEffect(() => {
    retrieveWebsitesFromLS();
  }, []);

  function saveChangesToCurrentWebsite(newWebsite: BasicEditor3Website) {
    if (websites.length > 0) {
      const websiteIndex = websites.findIndex(
        (website) => website.name === newWebsite.name
      );
      if (websiteIndex === -1) {
        setWebsites((prev) => [...prev, newWebsite]);
      } else {
        const newWebsites = [...websites];
        newWebsites[websiteIndex] = newWebsite;
        // setWebsites(newWebsites);
      }
    } else setWebsites([newWebsite]);
    // console.log("current website:", currentWebsite.name);
    // console.log("current website pages:", currentWebsite.pages);
  }

  //this is sort of an interface. keep this function name and signature unchanged.
  function saveCurrentWebsite() {
    saveChangesToCurrentWebsite(currentWebsite);
    saveWebsitesToLS();
    createNewSite({
      data: websiteDataString,
      owner: userData?.user?._id,
      screenShot:
        "https://images.squarespace-cdn.com/content/624b503a44c70245022f56eb/4f087c54-b53a-44f7-9234-01f8e58d8ffb/image-asset.jpeg?content-type=image%2Fjpeg&amp;format=1000w",
      name: "First website",
      domain: "jjsjdcvhs324jb23h4.jhsdhv",
    });
  }

  function saveWebsitesToLS() {
    console.log("Wrapper save websites says:", websites);
    try {
      const websitesSnapshot = JSON.stringify(websites);
      localStorage.setItem("websites", websitesSnapshot);
    } catch (error) {
      console.error(error);
    }
  }

  function retrieveWebsitesFromLS() {
    try {
      const websitesSnapshot = localStorage.getItem("websites");
      if (!websitesSnapshot) return;
      const retrieved = JSON.parse(websitesSnapshot);
      hydrateWebsites(retrieved);
      setWebsites(retrieved);
      console.log(websites);
    } catch (error) {
      console.error(error);
    }
  }

  function addWebsite(
    name: string,
    owner: BasicEditor3User = currentUser,
    headerData: Header3Data = defaultHeaderData,
    pages: BasicEditor3Page[] = [],
    footerData: Footer3Data = {}
  ) {
    const newWebsite: BasicEditor3Website = {
      owner,
      name,
      headerData,
      pages,
      footerData,
    };
    if (websites.find((website) => website.name === newWebsite.name)) {
      console.log("This name is already taken");
      return;
    }
    setWebsites((prev) => [...prev, newWebsite]);
  }

  return (
    <>
      Wrapper3Pro
      <button onClick={retrieveWebsitesFromLS}>retrieveWebsites</button>
      <WebsiteNav3
        websites={websites}
        currentWebsite={currentWebsite}
        setCurrentWebsite={setCurrentWebsite}
        saveChangesToCurrentWebsite={saveChangesToCurrentWebsite}
        saveWebsitesToLS={saveWebsitesToLS}
        retrieveWebsitesFromLS={retrieveWebsitesFromLS}
        addWebsite={addWebsite}
      />
      <BasicEditor3Pro
        currentWebsite={currentWebsite}
        saveCurrentWebsite={saveCurrentWebsite}
      />
      {/* <DisplayWebsite3 websiteDataString={websiteDataString}/> */}
    </>
  );
}

export default Wrapper3Pro;
