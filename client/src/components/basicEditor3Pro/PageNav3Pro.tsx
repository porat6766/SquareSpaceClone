import { useRef, Dispatch, SetStateAction } from "react";
import { BasicEditor3Page, RenderElement3 } from "./BasicEditor3ProTypes";

export type PageNav3Props = {
  pages: BasicEditor3Page[];
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  saveSnapshotToPages: (
    pageName: string,
    pageElements?: RenderElement3[]
  ) => void;
  savePagesToLS: () => void;
};

function PageNav3({
  pages,
  currentPage,
  setCurrentPage,
  saveSnapshotToPages,
}: PageNav3Props) {
  // const [pageNames, setPageNames] = useState<string[]>(pages.map(page => page.name));
  const pageNames = pages.map((page) => page.name);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddPage() {
    if (!inputRef.current) return;
    const newPageName = inputRef.current.value;
    if (!newPageName || newPageName === "") return;
    saveSnapshotToPages(newPageName, []);
    // savePagesToLS();
    inputRef.current.value = "";
  }

  function handleNavigateToPage(pageName: string) {
    saveSnapshotToPages(currentPage); //save the former page's state
    // savePagesToLS();//save to ls the last state of the pages.
    setCurrentPage(pageName);
  }

  //   function handleSaveClick() {
  //     saveSnapshotToPages(currentPage);
  //     // savePagesToLS();
  //   }

  return (
    <div style={{ border: "1px solid green" }}>
      PageNav3
      <br></br>
      <label>Select a Page:</label>
      <select
        // ref={selectPageRef}
        onChange={(e) => handleNavigateToPage(e.target.value)}
      >
        {pageNames.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </select>
      <div>
        <button onClick={handleAddPage}>Add a new page</button>
        <input ref={inputRef}></input>
      </div>
      <div>
        {/* <button onClick={handleSaveClick}>Save</button> */}
        {/* <button>Retrieve snapshot</button> */}
      </div>
    </div>
  );
}

export default PageNav3;
