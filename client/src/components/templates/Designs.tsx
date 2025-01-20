import { useState } from "react";
import { SidebarProvider } from "../../components/ui/sidebar";
import { AppSidebar } from "./SideBar";
import { SidebarTrigger } from "../../components/ui/sidebar";
import Card from "./TemplateCard";
import CardsData from "./CardData";
import { useNavigate } from "react-router-dom";

function DesignCon() {
  const [markedTypes, setMarkedTypes] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  // Filter cards based on the marked "Types" from the sidebar
  const filteredCards = CardsData.filter((card) =>
    Object.keys(markedTypes).some(
      (type) => markedTypes[type] && card.type === type
    )
  );

  const handleTempleteClick = (data: any) => {
    if (!data) {
      return;
    }
    navigate("/editor-page", { state: data });
  };

  // Show all cards if no type is selected
  const cardsToRender = Object.values(markedTypes).some(Boolean)
    ? filteredCards
    : CardsData;

  // Remove duplicate titles
  const uniqueCards = cardsToRender.filter(
    (card, index, self) =>
      index === self.findIndex((t) => t.title === card.title)
  );

  return (
    <SidebarProvider>
      <div className="my-14 flex relative">
        {/* Sidebar Section */}
        <div className="w-64">
          <AppSidebar
            markedTypes={markedTypes}
            setMarkedTypes={setMarkedTypes}
          />
        </div>
        {/* Main Content Section */}
        <div className="flex-grow px-6">
          <div className="flex items-center mb-6">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">Popular Designs Templates</h1>
          </div>
          {/* Render Cards */}
          <div>
            {uniqueCards.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">
                No templates match the selected filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 overflow-y-auto max-h-screen scrollbar-hide">
                {uniqueCards.map((card) => (
                  <div>
                    <Card
                      handleTempleteClick={handleTempleteClick}
                      key={card.id} // Use id as the unique key
                      title={card.title}
                      type={card.type}
                      imageUrl={card.imageUrl}
                      id={card.id}
                      data={card?.data}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DesignCon;
