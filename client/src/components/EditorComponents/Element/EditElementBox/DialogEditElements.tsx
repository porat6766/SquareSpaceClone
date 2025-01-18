import { useState } from "react";

const ContentForm = () => {
  const [activeTab, setActiveTab] = useState("content");
  const [cornerRadius, setCornerRadius] = useState(0);

  return (
    <div className="w-full max-w-md p-4">
      {/* Header Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 mr-4 ${
            activeTab === "content" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("content")}
        >
          Content
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "design" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("design")}
        >
          Design
        </button>
      </div>

      {/* Content Tab */}
      {activeTab === "content" && (
        <div className="space-y-6">
          {/* Add Media Button */}
          <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="block text-gray-600">
              + Replace or add image/video
            </span>
          </div>

          {/* Text Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Text:
            </label>
            <div className="relative group">
              <input
                type="text"
                className="peer w-full p-2 outline-none border-b border-gray-200"
                placeholder="Enter text"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-1000 group-focus-within:w-full" />
            </div>
          </div>

          {/* Link Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Link:
            </label>
            <div className="relative group">
              <input
                type="url"
                className="peer w-full p-2 outline-none border-b border-gray-200"
                placeholder="Enter link"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-1000 group-focus-within:w-full" />
            </div>
          </div>
        </div>
      )}

      {/* Design Tab */}
      {activeTab === "design" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="block text-sm font-medium text-gray-700">
              Corner Radius:
            </span>
            <div className="relative group">
              <input
                type="number"
                className="peer w-full p-2 outline-none border-b border-gray-200"
                value={cornerRadius}
                onChange={(e) => setCornerRadius(parseInt(e.target.value) || 0)}
                min="0"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-1000 group-focus-within:w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentForm;
