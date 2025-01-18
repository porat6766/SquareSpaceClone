import React from "react";

interface EditorPageProps {
  isMobileView: boolean; // Prop to control mobile view
}

const EditorPage: React.FC<EditorPageProps> = ({ isMobileView }) => {
  return (
    <div
      className={`relative flex w-full h-auto bg-orange-50 flex-col items-center justify-center ${
        isMobileView ? "overflow-hidden" : "overflow-x-auto"
      }`}
    >
      {/* Content */}
      <div
        className={`bg-white mx-auto flex ${
          isMobileView
            ? "w-[375px] min-h-[667px] h-full border border-gray-300 shadow-md"
            : "w-full h-full"
        }`}
        style={{
          width: isMobileView ? "375px" : "100%",
          height: isMobileView ? "667px" : "100%",
        }}
      >
        <div
          className={`flex ${
            isMobileView
              ? "flex-col" // Force column layout when isMobileView is true
              : "flex-row xl:flex-row " // Default responsive behavior for media queries
          } w-full h-screen text-black bg-orange-50 justify-center items-center`}
        >
          {/* Image Section */}
          <div
            className={`flex items-center justify-center ${
              isMobileView ? "w-full px-4" : "2xl:w-1/2"
            }`}
          >
            <img
              className={`${
                isMobileView
                  ? "max-w-full max-h-[300px] mb-4"
                  : "max-w-[700px] max-h-[600px]"
              }`}
              src="https://images.squarespace-cdn.com/content/v1/624b503ae7dc6c1b936dfc4c/1649102907377-5QD9AHIFDPK57TLORYUY/Stocksy_txp46315712VFE200_Large_2317055.jpg?format=1500w"
              alt="Preview"
            />
          </div>
          {/* Text Section */}
          <div
            className={`flex flex-col items-start ${
              isMobileView ? "w-full px-4 mt-8" : "sm:w-1/3 ml-5 mt-16"
            }`}
          >
            <h1
              className={`font-bold ${
                isMobileView ? "text-4xl text-center w-full" : "text-7xl"
              }`}
            >
              Opening soon.
            </h1>
            <p
              className={`${
                isMobileView
                  ? "max-w-full mt-6 text-lg text-center"
                  : "max-w-[440px] mt-12 text-3xl"
              }`}
            >
              Our flagship location is opening this fall. Sign up with your
              email address to get notified.
            </p>
            <div
              className={`relative flex ${
                isMobileView
                  ? "w-full flex-col gap-4 mt-6"
                  : "sm:w-5/6 md:w-3/4 lg:w-2/3 2xl:w-1/2"
              }`}
            >
              <input
                placeholder="Email Address"
                className={`w-full p-4 ${
                  isMobileView ? "text-base" : "p-5 mt-20"
                }`}
              />
              <button
                className={`${
                  isMobileView
                    ? "w-full py-3 text-white bg-orange-300"
                    : "absolute bottom-0 flex items-center justify-center w-24 h-16 p-0 -right-28 text-orange-300 bg-transparent border-2 border-orange-300"
                }`}
              >
                Sign Up
              </button>
            </div>
            <div
              className={`flex ${
                isMobileView ? "flex-col gap-6 mt-8" : "gap-x-14 mt-20"
              }`}
            >
              <div>
                <p>
                  <span className="font-bold text-2xl">Location</span> <br />
                  123 Demo Street
                  <br />
                  New York, NY 12345
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold text-2xl">Contact</span>
                  <br />
                  email@example.com
                  <br />
                  (555) 555-5555
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
