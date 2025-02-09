import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon-squarespace.svg";
import Banner from "../assets/splash-businesscard-copy.png";
import { useState } from "react";

function LogoMaker() {
  const [companyNameParams, setCompanyNameParams] = useState("");
  const navigate = useNavigate();

  const makerNavigate = () => {
    if (!companyNameParams) {
      alert("you have'nt entered any name");
    } else {
      localStorage.setItem("companyName", companyNameParams);
      navigate(`/logo-maker/${companyNameParams}`);
    }
  };

  return (
    <div className="bg-white h-screen w-screen pt-20 overflow-hidden">
      <span
        className="absolute opacity-30 hover:opacity-60 left-10 top-8 cursor-pointer"
        onClick={() => navigate("/templates")}
      >
        <img src={Icon} alt="logo" className="max-w-10 max-h-10" />
      </span>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="h-auto z-10 flex flex-col justify-center items-center">
          <h1 className="text-black text-7xl font-bold mt-14">
            Create your Logo
          </h1>
          <p className="opacity-60 mt-10">
            Enter your company name below to get started with our logo maker.
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative flex items-center p-1 pl-3 w-80 mb-10">
              <input
                value={companyNameParams}
                onChange={(e) => setCompanyNameParams(e.target.value)}
                placeholder="your logo / company name . . ."
                className="bg-black text-white placeholder:opacity-70 p-2 rounded-sm w-screen"
              />
              <span
                onClick={makerNavigate}
                className="text-4xl pb-3 opacity-50 ml-3 text-black transition-all duration-300 hover:opacity-100 cursor-pointer"
              >
                →
              </span>
            </div>
          </div>
          <img
            src={Banner}
            alt="banner"
            className="relative h-auto w-[50%] object-cover left-52"
          />
        </div>
      </div>
    </div>
  );
}
export default LogoMaker;
