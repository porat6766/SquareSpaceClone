import {
  useEffect,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useRef,
} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditorHeader from "../components/EditorComponents/EditorHeader";
import EditorSideBar from "../components/EditorComponents/EditorSidebar";
import EditorWrapper from "../components/basicEditor3Pro/EditorWrapper";
import { useCreateSite, useUpdateSite } from "../hooks/useSite";
import { useUserProfile } from "../hooks/useUser";
import { ISite } from "../types/siteTypes";
import { dataStringToWebsite } from "../components/basicEditor3Pro/utils";
import LoadingSpinner from "../components/LoadingSpinner";
import WebsiteNameDialog from "../components/WebsiteNameDialog";
import { BasicEditor3Website } from "../components/basicEditor3Pro/BasicEditor3ProTypes";
import ScreenshotCapture from "../components/ScreenShot";

export type EditorLayoutContextType = {
  currentWebsite?: BasicEditor3Website | undefined;
  pageNameFromLayout?: string;
  setPageNameFromLayout?: Dispatch<SetStateAction<string>>;
  setSaveTrigger?: Dispatch<SetStateAction<boolean>>;
  setCurrentWebsite?: Dispatch<SetStateAction<BasicEditor3Website | undefined>>;
};

export const EditorLayoutContext = createContext<EditorLayoutContextType>({});

function EditorLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [template, setTemplate] = useState<BasicEditor3Website | undefined>(
    undefined
  );
  const [websiteToEdit, setWebsiteToEdit]: any = useState(null);
  const [isOpenDialogName, setIsOpenDialogName] = useState(false);
  const [websiteName, setWebsiteName] = useState("");
  const [websiteToSave, setWebsiteToSave]: any = useState();
  const [currentWebsite, setCurrentWebsite] = useState<BasicEditor3Website>();
  const [saveTrigger, setSaveTrigger] = useState(false);
  const [imageData, setImageData] = useState("");
  const screenshotRef = useRef<{ captureScreenshot: () => void }>(null);

  const [pageNameFromLayout, setPageNameFromLayout] = useState<string>(
    currentWebsite?.lastEditorPage || currentWebsite?.pages[0]?.name!// || "HomeFromLayout"//test. Should fix the ts here
  );

  const { id } = useParams();
  const location = useLocation();
  const dataTemplete = location?.state;

  const navigate = useNavigate();

  useEffect(() => {
    if (!dataTemplete) {
      return;
    }
    const hydrateTemplate = dataStringToWebsite(dataTemplete);
    setTemplate(hydrateTemplate);
  }, []);

  const { mutate: createNewSite } = useCreateSite({
    onSuccess: (data: any) => {
      const newSiteId = data?.id || data?._id;
      navigate(`/editor-page/website/${newSiteId}`);
      window.location.reload();
    },
  });

  const { mutate: updateSite } = useUpdateSite({
    onSuccess: () => {
      navigate(`/editor-page/website/${id}`);
      window.location.reload();
    },
  });

  const { data: userData, isLoading } = useUserProfile();

  // Effect to fetch the website to edit
  useEffect(() => {
    if (!userData || !id) return;

    const existWeb = userData?.user?.sites.find((site: any) => site._id === id);
    if (existWeb) {
      const web = dataStringToWebsite(existWeb.data);
      setWebsiteToEdit(web);
    }
  }, [userData, id]);

  // Handle save action
  function saveCurrentWebsite(currentWebsite: ISite) {
    //this makes the system fragile.
    // if (!imageData) return;
    //the image data should be sent separately from the website data.
    //they should not depend on each other.
    const websiteDataString = JSON.stringify(currentWebsite);
    setWebsiteToSave(websiteDataString);
    if (websiteToEdit) {
      updateSite({
        siteId: id!,
        updatedData: { data: websiteDataString, screenShot: imageData },
      });
    } else {
      if (!websiteName) {
        setIsOpenDialogName(true);
        return;
      }
    }
  }

  useEffect(() => {
    if (!websiteName || websiteToEdit) return;
    if (websiteToSave) {
      createNewSite({
        data: websiteToSave,
        owner: userData?.user?._id,
        screenShot: imageData,
        name: websiteName,
        domain: `https://squarespaceclone.onrender.com/userwebsite/${websiteName}SquarespaceServices`,
      });
    }
  }, [websiteName]);

  // Toggle sidebar layout
  const toggleSidebarLayout = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Set mobile view mode
  const setMobileView = (view: "mobile" | "full") => {
    setIsMobileView(view === "mobile");
  };

  // Set the page position based on location
  const counterPageTop =
    location.pathname === "/"
      ? "top-0"
      : location.pathname === "/editor-page/website" ||
        location.pathname === "/editor-page/website/pages" ||
        location.pathname === `/editor-page/website/${id}` ||
        location.pathname === `/editor-page/website/pages/${id}`
      ? "top-[73px]"
      : "top-0";

  // Loading spinner if data is still loading
  if (isLoading) {
    return (
      <div className="absolute right-0 top-0 mr-4 mt-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isLoading && !userData) {
    navigate("/login", {
      state: {
        toastMessage:
          "Hold up! You need to log in first to start building your awesome website!",
      },
    });
    return null;
  }

  return (
    <EditorLayoutContext.Provider
      value={{
        currentWebsite,
        pageNameFromLayout,
        setPageNameFromLayout,
        setSaveTrigger,
        setCurrentWebsite,
      }}
    >
      <div className="flex min-h-screen bg-gray-50 overflow-hidden relative ">
        {/* Sidebar */}
        <div
          className={`flex-shrink-0 ${
            isSidebarOpen ? "w-72" : "w-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ height: "100vh" }}
        >
          <EditorSideBar siteId={id} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col relative">
          <ScreenshotCapture setImageData={setImageData} ref={screenshotRef} />
          {/* Header */}
          <EditorHeader
            screenshotRef={screenshotRef}
            setSaveTrigger={setSaveTrigger}
            siteId={id!}
            toggleSidebarLayout={toggleSidebarLayout}
            setMobileView={setMobileView}
            isMobileView={isMobileView}
            isSidebarOpen={isSidebarOpen}
          />

          {/* Editor Page */}
          <div
            className={`absolute ${counterPageTop} transition-all duration-500 bottom-0 ${
              isMobileView
                ? "w-[375px] mx-auto left-0 right-0"
                : "w-full h-screen left-0 right-0"
            } ${
              isSidebarOpen ? "overflow-x-scroll" : "overflow-auto"
            } bg-white shadow transition-all duration-300 overflow-y-scroll`}
          >
            <EditorWrapper
              saveTrigger={saveTrigger}
              setSaveTrigger={setSaveTrigger}
              currentWebsite={currentWebsite}
              setCurrentWebsite={setCurrentWebsite}
              templete={template}
              websiteToEdit={websiteToEdit}
              saveCurrentWebsite={saveCurrentWebsite}
            />
          </div>
        </div>

        {isOpenDialogName && (
          <WebsiteNameDialog
            setWebsiteName={(name) => {
              setWebsiteName(name);
            }}
            setIsOpen={(isOpen) => setIsOpenDialogName(isOpen)}
          />
        )}
      </div>
    </EditorLayoutContext.Provider>
  );
}

export default EditorLayout;
