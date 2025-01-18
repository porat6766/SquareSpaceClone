import { useNavigate } from "react-router-dom";

function Helper() {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-16 flex flex-col bg-black text-white">
      <h1 className={`text-[115px]`}>
        Start your free
        <br /> website trial today
      </h1>
      <div className="flex mt-8 self-start">
        <button
          className="bg-white text-black hover:bg-gray-200 w-64 h-24 px-4 py-3 text-xl mr-3"
          onClick={() => navigate("/templates")}
        >
          <b>GET STARTED</b>
        </button>
        <p
          className="text-white ml-8 self-center lg:text-lg xl:text-lg xl:ml-4 2xl:text-2xl 3xl:text-3xl"
          style={{ opacity: "75%" }}
        >
          No credit card required.
          <br />
          Cancel anytime.
        </p>
      </div>
    </div>
  );
}

export default Helper;
