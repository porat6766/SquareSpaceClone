import DesignCon from "../components/templates/Designs";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";

function TemplatesPage() {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col">
      <ScrollToTop />
      <div className="flex justify-between px-14 mt-20">
        <h1 className="text-5xl lg:text-6xl lg:pr-40">
          Make any template yours with ease.
        </h1>
        <h2 className="relative text-lg">
          Whether you need a portfolio website, an online store, or a personal
          blog, you can use Squarespace's customizable and responsive website
          templates to get started.
          <div className="absolute right-14 -bottom-10 lg:-bottom-20 flex flex-col space-y-2">
            <button
              onClick={() => navigate("/editor-page/website")}
              className="relative group border border-black border-opacity-20 p-2 font-bold cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 bg-gray-100 from-gray-100 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10">Build From Scratch</span>
            </button>
            <button className="relative group border border-black border-opacity-20 p-2 font-bold cursor-pointer overflow-hidden">
              <span className="absolute inset-0 bg-gray-100 from-gray-100 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10">Build With AI</span>
            </button>
          </div>
        </h2>
      </div>

      <div>
        <DesignCon />
      </div>
    </div>
  );
}

export default TemplatesPage;
