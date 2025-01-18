import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExploreTemp() {
  // State to track the current image
  const [currentImage, setCurrentImage] = useState(
    "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/lexington-1-500w.jpg"
  );

  const navigate = useNavigate();
  const handleNavigate = (filterKey: string, filterValue: string) => {
    const searchParams = new URLSearchParams();
    searchParams.append(filterKey, filterValue);

    navigate(`/templates?${searchParams.toString()}`);
  };

  // List of buttons and their corresponding images
  const templates = [
    {
      text: "Online Store",
      filterKey: "type",
      filterValue: "online-store",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/lexington-1-500w.jpg",
    },
    {
      text: "Local Business",
      filterKey: "topic",
      filterValue: "local-business",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/klipsan-1-500w.jpg",
    },
    {
      text: "Portfolio",
      filterKey: "type",
      filterValue: "portfolio",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/reseda-1-500w.jpg",
    },
    {
      text: "Restaurant",
      filterKey: "topic",
      filterValue: "restaurants",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/belisa-1-500w.jpg",
    },
    {
      text: "Services",
      filterKey: "type",
      filterValue: "services",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/clove-1-500w.jpg",
    },
    {
      text: "Personal & CV",
      filterKey: "topic",
      filterValue: "personal-cv",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/ortiz-1-500w.jpg",
    },
    {
      text: "Courses",
      filterKey: "type",
      filterValue: "courses",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/forma-1-500w.jpg",
    },
    {
      text: "Memberships",
      filterKey: "type",
      filterValue: "memberships",
      image:
        "https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/templates/desktop/meriden-500w.jpg",
    },
  ];

  return (
    <div className="px-6 py-16 flex">
      {/* Left side */}
      <div>
        <h1 className="mb-10 text-6xl font-bold">
          Website templates <br /> for every purpose
        </h1>
        <div className="flex flex-col gap-2 mt-32">
          {templates.map((template, index) => (
            <span
              key={index}
              className="relative inline-block group cursor-pointer text-4xl font-medium mb-6"
              onMouseEnter={() => setCurrentImage(template.image)}
              onClick={() =>
                handleNavigate(template.filterKey, template.filterValue)
              }
            >
              {/* Main Text */}
              <span className="group-hover:underline">{template.text}</span>
              {/* Arrow */}
              <span className="absolute opacity-0 ml-1 text-black transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                →
              </span>
            </span>
          ))}
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col ml-16">
        <div className="ml-72">
          <p className="mb-6 text-lg max-w-[650px]">
            Start with a flexible designer template or build your own, then
            customize to fit your style and professional needs using our
            drag-and-drop website builder. Use{" "}
            <span className="underline cursor-pointer">Squarespace AI</span> to
            generate a personalized website template that works for you.
          </p>
          <button className="relative flex items-center gap-2 px-6 py-4 mt-10 text-black hover:text-white font-semibold border-2 border-slate-500 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-black from-black to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">EXPLORE ALL TEMPLATES</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>

        {/* Image Container */}
        <div className="w-[50vw] h-[70vh] bg-slate-100 self-center mt-16 ml-40">
          <img
            src={currentImage}
            alt="Template preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreTemp;
