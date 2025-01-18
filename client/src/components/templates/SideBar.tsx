import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useUserProfile } from "../../hooks/useUser";

interface AppSidebarProps {
  markedTypes: Record<string, boolean>;
  setMarkedTypes: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const items = [
  {
    category: "Type",
    filters: [
      { title: "Online Store", url: "online-store" },
      { title: "Portfolio", url: "portfolio" },
      { title: "Memberships", url: "memberships" },
      { title: "Blog", url: "blog" },
      { title: "Scheduling", url: "scheduling" },
      { title: "One Page", url: "one-page" },
      { title: "Courses", url: "courses" },
      { title: "Services", url: "services" },
      { title: "Donations", url: "donations" },
    ],
  },
  {
    category: "Topic",
    filters: [
      { title: "Popular Designs", url: "popular-designs" },
      { title: "All Templates", url: "all-templates" },
      { title: "Collaborations", url: "collaborations" },
      { title: "Art & Design", url: "art-design" },
      { title: "Community & Non-Profits", url: "community-nonprofits" },
      { title: "Entertainment", url: "entertainment" },
      { title: "Events", url: "events" },
      { title: "Fashion", url: "fashion" },
      { title: "Fitness", url: "fitness" },
      { title: "Food", url: "food" },
      { title: "Health & Beauty", url: "health-beauty" },
      { title: "Home & Decor", url: "home-decor" },
      { title: "Local Business", url: "local-business" },
      { title: "Media & Podcasts", url: "media-podcasts" },
      { title: "Nature & Animals", url: "nature-animals" },
      { title: "Personal & CV", url: "personal-cv" },
      { title: "Photography", url: "photography" },
      { title: "Professional Services", url: "professional-services" },
      { title: "Real Estate & Properties", url: "real-estate" },
      { title: "Restaurants", url: "restaurants" },
      { title: "Travel", url: "travel" },
      { title: "Weddings", url: "weddings" },
    ],
  },
];

export function AppSidebar({ markedTypes, setMarkedTypes }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { data: userData } = useUserProfile();

  interface Favorite {
    title: string;
    type: string;
    imageUrl: string;
  }

  useEffect(() => {
    if (userData) {
      setFavorites(userData.user.favoriteTemplates);
    }
  }, [userData]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const activeFilters: Record<string, boolean> = {};

    // Iterate over all filters and check against lowercase category keys
    items.forEach((group) => {
      const categoryKey = group.category.toLowerCase(); // Normalize the key
      const currentFilters = searchParams.getAll(categoryKey);

      group.filters.forEach((filter) => {
        if (currentFilters.includes(filter.url)) {
          activeFilters[filter.title] = true; // Mark as active
        }
      });
    });

    setMarkedTypes(activeFilters);
  }, [location.search, setMarkedTypes]);

  const handleFilterToggle = (category: string, url: string, title: string) => {
    const searchParams = new URLSearchParams(location.search);
    const categoryKey = category.toLowerCase(); // Normalize the key
    const currentFilters = searchParams.getAll(categoryKey);

    // Toggle the filter in the URL
    if (currentFilters.includes(url)) {
      // Remove filter from URL
      searchParams.delete(categoryKey);
      currentFilters
        .filter((filter) => filter !== url)
        .forEach((filter) => searchParams.append(categoryKey, filter));
    } else {
      // Add filter to URL
      searchParams.append(categoryKey, url);
    }

    navigate(`/templates?${searchParams.toString()}`);

    // Update the marked state
    setMarkedTypes((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const clearFilters = () => {
    navigate("/templates");
  };

  return (
    <Sidebar className="absolute p-4 py-8 w-64 bg-transparent h-full max-h-[90vh]">
      <SidebarContent>
        {items.map((group) => (
          <SidebarGroup key={group.category}>
            {group.category === "Topic" && <hr className="my-12" />}
            <SidebarGroupLabel className="font-bold text-black text-lg mb-5">
              {group.category}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.filters.map((filter) => (
                  <SidebarMenuItem key={filter.title}>
                    <SidebarMenuButton asChild>
                      <div
                        className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                        onClick={() =>
                          handleFilterToggle(
                            group.category,
                            filter.url,
                            filter.title
                          )
                        }
                      >
                        {/* Checkbox for "Type" filters */}
                        {group.category === "Type" && (
                          <div
                            className={`w-5 h-5 mr-3 border-2 rounded-sm flex items-center justify-center ${
                              markedTypes[filter.title]
                                ? "border-black"
                                : "border-gray-400"
                            }`}
                          >
                            {markedTypes[filter.title] && (
                              <span className="text-sm font-bold">✔</span>
                            )}
                          </div>
                        )}
                        <span>{filter.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                {/* Option for clearing all filters */}
                {group.category === "Topic" && (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <div
                        className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                        onClick={clearFilters}
                      >
                        <span>All Templates</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <hr className="my-8" />
        <div className="flex items-center justify-evenly px-2 mb-6 cursor-pointer hover:bg-gray-100">
          <button
            onClick={() => navigate("/my-favorites")}
            className="flex justify-center"
          >
            <h3 className="text-lg font-bold text-black">
              My Favorites ({favorites.length})
            </h3>
            <span
              className={`relative transition-colors duration-300 text-3xl text-transparent ml-3 -mt-0.5`}
              style={{
                WebkitTextStroke: "2px black",
                zIndex: 20,
              }}
            >
              ♥
            </span>
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
