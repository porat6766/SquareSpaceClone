import { ChevronLeft, ChevronRight } from "lucide-react";

const WebsiteTools = ({ setActiveSidebar }: any) => {
  return (
    <div className="p-6">
      <div className="flex items-center text-sm mb-8">
        <ChevronLeft className="w-4 h-4 mr-2" />
        <span onClick={() => setActiveSidebar("main")} className="uppercase">
          Website
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Website Tools</h1>

      <div className="mb-8">
        <h2 className="text-sm uppercase text-gray-500 mb-4">Custom Code</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <span>Custom CSS</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <span>Code Injection</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm uppercase text-gray-500 mb-4">Messaging</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <span>Announcement Bar</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <span>Promotional Pop-Up</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <span>Mobile Information Bar</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTools;
