import { useRef, Dispatch, SetStateAction } from "react";
import {
  BasicEditor3Page,
  BasicEditor3Website,
  BasicEditor3User,
} from "./BasicEditor3ProTypes";
import { Header3Data } from "./Header3";
import { Footer3Data } from "./Footer3";

export type WebsiteNav3Props = {
  currentWebsite: BasicEditor3Website;
  websites: BasicEditor3Website[];
  setCurrentWebsite: Dispatch<SetStateAction<BasicEditor3Website>>;
  saveChangesToCurrentWebsite: (newWebsite: BasicEditor3Website) => void;
  saveWebsitesToLS: () => void;
  retrieveWebsitesFromLS: () => void;
  addWebsite: (
    name: string,
    owner?: BasicEditor3User,
    headerData?: Header3Data,
    pages?: BasicEditor3Page[],
    footerData?: Footer3Data
  ) => void;
};

function WebsiteNav3({
  websites,
  currentWebsite,
  setCurrentWebsite,
  saveChangesToCurrentWebsite,
  saveWebsitesToLS,
  addWebsite,
}: WebsiteNav3Props) {
  // const [pageNames, setPageNames] = useState<string[]>(pages.map(page => page.name));
  const websiteNames = websites.map((website) => website.name);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddWebsite() {
    if (!inputRef.current) return;
    const newWebsiteName = inputRef.current.value;
    if (!newWebsiteName || newWebsiteName === "") return;
    addWebsite(newWebsiteName);
    saveWebsitesToLS();
    inputRef.current.value = "";
  }

  function handleNavigateToWebsite(websiteName: string) {
    handleSaveClick();
    try {
      const website = websites.find((website) => website.name === websiteName);

      if (website) {
        setCurrentWebsite(website);
      } else {
        console.log("Website not found");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleSaveClick() {
    saveChangesToCurrentWebsite(currentWebsite);
    saveWebsitesToLS();
  }

  return (
    <div style={{ border: "1px solid green" }}>
      WebsiteNav3
      <br></br>
      <label>Select a Website:</label>
      <select
        // ref={selectPageRef}
        onChange={(e) => handleNavigateToWebsite(e.target.value)}
      >
        {websiteNames.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </select>
      <div>
        <button onClick={handleAddWebsite}>Add a new website</button>
        <input ref={inputRef}></input>
      </div>
      <div>
        {/* <button onClick={handleSaveClick}>Save</button> */}
        {/* <button>Retrieve snapshot</button> */}
      </div>
    </div>
  );
}

export default WebsiteNav3;
