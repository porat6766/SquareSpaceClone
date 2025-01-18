import { ChevronLeft, ChevronRight } from "lucide-react";

const SystemPages = ({ setActiveSidebar }: any) => {
  return (
    <div className="p-6">
      <div className="flex items-center text-sm mb-8">
        <ChevronLeft className="w-4 h-4 mr-2" />
        <span onClick={() => setActiveSidebar("main")} className="uppercase">
          Website
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-8">System Pages</h1>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-4 border-t border-gray-200">
          <span>404 Page</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center justify-between py-4 border-t border-gray-200">
          <span>Checkout</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center justify-between py-4 border-t border-gray-200">
          <span>Lock Screen</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SystemPages;
