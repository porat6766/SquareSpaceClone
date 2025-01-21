import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon-squarespace.svg";
import Banner from "../assets/splash-businesscard-copy.png";

function LogoMaker() {
  const navigate = useNavigate();

  return (
    <div className=" bg-white h-screen w-screen">
      <span
        className="absolute left-10 top-8 cursor-pointer"
        onClick={() => navigate("/templates")}
      >
        <img src={Icon} alt="logo" className="max-w-8 max-h-8 opacity-40" />
      </span>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="h-auto z-10 flex flex-col justify-center items-center">
          <h1 className=" text-black text-7xl font-bold">Create your Logo</h1>
          <p className=" opacity-60 mt-10">
            Enter your company name below to get started with our logo maker.
          </p>
        </div>
        <div className="relative bottom-0">
          <input
            placeholder="company name"
            className="absolute top-64 right-1/3 mr-10 p-1 pl-3 w-96 bg-black text-white z-10 placeholder:opacity-60"
          ></input>
          <img
            src={Banner}
            alt="banner"
            className="relative -bottom-4 -left-[300px] h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
}
export default LogoMaker;
