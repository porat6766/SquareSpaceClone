import { useDeleteSite } from "../../hooks/useSite";
import { useUserProfile } from "../../hooks/useUser";
import { ISite } from "../../types/siteTypes";
import DropdownMenu from "./DropdownMenu";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ListDashboardProps {
  activeTab: string;
  searchValue: string;
}

const ListDashboard: React.FC<ListDashboardProps> = ({
  activeTab,
  searchValue,
}) => {
  const navigate = useNavigate();
  const { data: userData } = useUserProfile();
  const deleteSiteMutation = useDeleteSite();
  const [loadingSiteId, setLoadingSiteId] = useState<string | null>(null);

  const handleDelete = (siteId: string): void => {
    toast((t) => (
      <div>
        <p>Are you sure you want to delete this site?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              confirmDelete(siteId);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const handleMoveDisplayWeb = (id: string, domain: string) => {
    window.location.href = `${domain}/${id}`;
  };

  const handleMoveEditWeb = (id: string) => {
    navigate(`/editor-page/website/${id}`);
  };

  const confirmDelete = (siteId: string): void => {
    setLoadingSiteId(siteId);
    deleteSiteMutation.mutate(siteId, {
      onSuccess: () => {
        setLoadingSiteId(null);
        toast.success("Site deleted successfully.");
      },
      onError: () => {
        setLoadingSiteId(null);
        toast.error("Failed to delete the site. Please try again.");
      },
    });
  };

  const filteredSites = userData?.user?.sites.filter((site: ISite) =>
    site.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      className={`${
        activeTab === "table" ? "border-2 border-black p-10 m-10" : ""
      } py-5`}
    >
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {filteredSites?.length > 0 ? (
          filteredSites?.map((site: any, index: number) => (
            <div
              key={index}
              className="border relative shadow-lg flex flex-col lg:flex-row items-center lg:items-start mb-10"
            >
              <div className="relative group w-full lg:w-[450px] h-[260px]">
                <img
                  src={site.screenShot}
                  alt={site.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-25 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleMoveDisplayWeb(site._id, site.domain)}
                    className="relative opacity-0 group-hover:opacity-100 text-white bg-black px-4 py-2 overflow-hidden transition duration-300"
                  >
                    <span className="z-10">Go to Website</span>
                  </button>
                </div>
              </div>

              <div className="relative lg:ml-6  lg:mt-0 text-start lg:text-left p-4 flex flex-col gap-5 w-full">
                <div className="absolute right-0 top-0 mr-4 mt-4">
                  {loadingSiteId === site._id ? (
                    <LoadingSpinner />
                  ) : (
                    <DropdownMenu onDelete={() => handleDelete(site._id)} />
                  )}
                </div>

                <h3 className="text-lg font-semibold">{site.name}</h3>
                <p className="text-sm text-gray-600 flex truncate">
                  {site.domain + "/" + site._id}
                </p>

                <p className="text-sm text-gray-600">
                  Website trial expires on{" "}
                  {new Date(site.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <div className="flex font-semibold justify-center lg:justify-start gap-4 mt-4">
                  <button
                    onClick={() => handleMoveDisplayWeb(site._id, site.domain)}
                    className="relative overflow-hidden px-4 py-2 bg-white text-black rounded group border-[1px] min-w-[95px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-transparent to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    Website
                  </button>
                  <button
                    onClick={() => handleMoveEditWeb(site._id)}
                    className="relative overflow-hidden px-4 py-2 bg-white text-black rounded group border-[1px] min-w-[95px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-transparent to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No results found for "{searchValue}"
          </p>
        )}
      </div>
    </div>
  );
};

export default ListDashboard;
