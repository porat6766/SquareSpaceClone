import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon-squarespace.svg";
import Banner from "../assets/splash-businesscard.jpg";

function LogoMaker() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-end items-center bg-white h-screen">
      <span
        className="absolute left-10 top-8 cursor-pointer"
        onClick={() => navigate("/templates")}
      >
        <img src={Icon} alt="logo" className="max-w-8 max-h-8 opacity-40" />
      </span>
      <div className="h-full z-10 -mb-96 flex flex-col items-center justify-end">
        <h1 className="text-black text-8xl font-bold">Create your Logo</h1>
        <p className="opacity-60 -mb-10 mt-10">
          Enter your company name below to get started with our logo maker.
        </p>
      </div>
      <div className="bottom-0">
        <img src={Banner} alt="banner" className="h-full w-auto" />
      </div>
    </div>
  );
}
export default LogoMaker;
