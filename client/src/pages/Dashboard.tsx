import { useState } from "react";
import ListDashboard from "../components/AccountDashboardComponents/ListDashboard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cards");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleNavigateToTemplete = () => {
    navigate("/templates");
  };

  return (
    <div className="p-[60px] px-[140px] min-w-[480px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-[30px] mr-10">Dashboard</h1>
        <div className="flex gap-5 justify-center items-center">
          <div
            role="tablist"
            className="hidden md:flex bg-gray-300 p-[2px] h-[40px] w-[110px] "
          >
            <button
              aria-controls="cards-tab"
              aria-selected={activeTab === "cards"}
              role="tab"
              value="cards"
              className={`flex justify-center items-center css-1fixg92 flex-1 transition-all duration-300 ${
                activeTab === "cards" ? "bg-white text-black" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab("cards")}
            >
              <svg
                fill="currentColor"
                height="22"
                viewBox="0 0 22 22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
                className="css-gy660l"
              >
                <path d="M10 11H6v4h4v-4zM12 12h4v2h-4v-2z"></path>
                <path
                  clipRule="evenodd"
                  d="M2 3h18v16H2V3zm2 4h14V5H4v2zm14 2H4v8h14V9z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              aria-controls="table-tab"
              aria-selected={activeTab === "table"}
              role="tab"
              value="table"
              className={`flex justify-center items-center css-sc1uxn flex-1 transition-all duration-300 ${
                activeTab === "table" ? "bg-white text-black" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab("table")}
            >
              <svg
                fill="currentColor"
                height="22"
                viewBox="0 0 22 22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
                className="css-gy660l"
              >
                <path d="M10 4H2v2h8V4zM10 8H2v2h8V8zM12 10V8h8v2h-8zM10 12H2v2h8v-2zM12 14v-2h8v2h-8zM10 16H2v2h8v-2zM12 18v-2h8v2h-8zM12 6V4h8v2h-8z"></path>
              </svg>
            </button>
          </div>

          <div className="relative flex items-center w-[300px]">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-gray-100 p-2 pl-10 pr-10 w-full"
            />
            <button className="absolute left-2 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75L19.5 19.5m-7.5-3.75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
                />
              </svg>
            </button>
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="absolute right-2 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <button
            onClick={() => handleNavigateToTemplete()}
            className="bg-black text-white p-3 min-w-[132px]"
          >
            Create Website
          </button>
        </div>
      </div>
      <div>
        <ListDashboard activeTab={activeTab} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default Dashboard;
