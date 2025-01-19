import React, { useState } from "react";
import { Header3Data } from "../../basicEditor3Pro/Header3";

export type LogoEditorFormProps = {
  data: Header3Data;
  setData: any;
};

const LogoEditorForm = ({ data, setData }: LogoEditorFormProps) => {
  const [activeTab, setActiveTab] = useState("Logo");

  function handleChangeLogoTextInput(e: React.ChangeEvent<HTMLInputElement>) {
    // if (e.target.value === "") return;
    setData({ ...data, logo: { ...data.logo, text: e.target.value } });
  }

  function handleChangeLogoSrcInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") return;
    setData({ ...data, logo: { ...data.logo, imgSrc: e.target.value } });
  }

  return (
    <div className="absolute z-10 top-full bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col min-w-[300px] font-serif">
      <header className="relative pl-4 min-h-[60px] flex gap-6 items-center border-b-1 border-solid border-black text-[19px] mb-6">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
        <button
          className={`relative pb-2 ${
            activeTab === "Logo"
              ? "text-black font-semibold after:content-[''] after:absolute after:-bottom-[12px] after:left-0 after:w-full after:h-[2px] after:bg-black"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("Logo")}
        >
          Logo
        </button>
        <button
          className={`relative pb-2 ${
            activeTab === "Text"
              ? "text-black font-semibold after:content-[''] after:absolute after:-bottom-[12px] after:left-0 after:w-full after:h-[2px] after:bg-black"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("Text")}
        >
          Text
        </button>
      </header>
      <div className="px-8 flex flex-col gap-4 mb-3">
        <div className="space-y-4">
          {activeTab === "Logo" ? (
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-sm font-medium">
                Logo Image Source
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                // defaultValue={data.logo.imgSrc || "No source provided"}
                value={data.logo.imgSrc || "No source provided"}
                onChange={(e: any) => handleChangeLogoSrcInput(e)}
                placeholder="Enter image URL"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-sm font-medium">
                Logo Text
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                // defaultValue={data.logo.text}
                onChange={(e: any) => handleChangeLogoTextInput(e)}
                value={data.logo.text || "default logo text"}
                placeholder="Enter logo text"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoEditorForm;
