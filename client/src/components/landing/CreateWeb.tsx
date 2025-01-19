function CreateWeb() {
  return (
    <div className="px-10 pb-32 flex bg-stone-200 border-opacity-20 border-gray-700 border-b justify-center items-center">
      <div className="p-10">
        <div>
          <video
            className="w-full h-auto object-cover shadow-md"
            loop
            playsInline
            autoPlay
            muted
            preload="metadata"
            controls // You can also add controls to show the video controls
          >
            <source
              src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/intro/en/intro.mp4"
              type="video/mp4"
            />
          </video>
          <button
            className="video-base__control"
            aria-pressed="false"
            aria-label="Play video"
            onClick={() => {
              const video =
                document.querySelector<HTMLVideoElement>(".video-base__video");

              if (video) {
                if (video.paused) {
                  video.play();
                  // Update button label to pause (optional)
                  video.closest("button")?.setAttribute("aria-pressed", "true");
                } else {
                  video.pause();
                  // Update button label to play (optional)
                  video
                    .closest("button")
                    ?.setAttribute("aria-pressed", "false");
                }
              }
            }}
          >
            <svg
              className="video-base__button-svg"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 10h3v10h-3zM16 10h3v10h-3z" fill="white"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-8 bg-transparent text-gray-800">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Create a website</h1>
          <p className="text-gray-600">
            Design a website using our industry-leading website templates,
            designer fonts, and color palettes.
          </p>
          <button className="relative flex items-center gap-2 px-6 py-2 text-black hover:text-white font-semibold border-2 border-slate-500 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-black from-black to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Choose a template</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold mt-16">
            Sell your products and offerings
          </h1>
          <p className="text-gray-600">
            Create an online store, book appointments, or sell your services or
            content—all on a single platform built just for you.
          </p>
          <button className="relative flex items-center gap-2 px-6 py-2 text-black hover:text-white font-semibold border-2 border-slate-500 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-black from-black to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Create an online store</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold mt-16">Market your business</h1>
          <p className="text-gray-600">
            Promote your business and grow your customer base with email
            marketing, social media, and SEO tools.
          </p>
          <button className="relative flex items-center gap-2 px-6 py-2 text-black hover:text-white font-semibold border-2 border-slate-500 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-black from-black to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Grow your audience</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateWeb;
