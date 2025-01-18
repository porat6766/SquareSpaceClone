function Selling() {
  return (
    <div className="pt-24 px-6 py-16 flex flex-col bg-[#2e2827] text-white">
      {/* head */}
      <div>
        <div className="w-1/2">
          <h1 className="text-9xl">Grow your business online</h1>
          <p className="text-6xl w-4/5 my-28">
            Create an online store website designed to sell anything
          </p>
        </div>
        <div className="mb-10">
          <img
            src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/grow-your-business/designed-to-sell/en/designed-to-sell-2-500w.jpg"
            alt="An ecommerce website showcasing a beige lighting fixture sculpture with a red curtain-like background, featuring a 'Shop Now' button and sale highlights."
            loading="lazy"
            width="2744"
            height="2744"
            decoding="async"
          ></img>
        </div>
      </div>
      {/* selling Section */}
      <div className="flex text-2xl">
        <div className="w-1/2">
          <p>Power your online store</p>
          <p className="text-6xl max-w-[400px] mt-72">
            Selling tools to offer your time and expertise
          </p>
        </div>
        <div className="w-1/2">
          <p className="max-w-[600px] mb-20">
            Everything you need to run an ecommerce business, from payments and
            checkout to shipping and fulfillment.
          </p>
          <button className="text-base relative mt-8 flex items-center gap-2 px-2 py-6 text-white hover:text-black font-semibold border-2 border-slate-100 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-white from-white to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 font-bold">EXPLORE SELLING</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="mt-10">
        <img
          src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/grow-your-business/tools/en/tools-2-500w.jpg"
          alt="A fitness brand website with off-white background, maroon text, and a woman working out, offering scheduling capabilities with fitness professionals."
          loading="lazy"
          width="1500"
          height="2000"
          decoding="async"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* scheduling Section */}
      <div className="flex text-xl mt-10">
        <div className="w-1/2">
          <p className="w-[350px] mb-64 text-2xl font-bold">
            Schedule classes and appointments
          </p>
          <h1 className="text-2xl font-bold mb-10">Create an online course</h1>
          <p>
            Turn your expertise into a passive income stream. Offer exclusive
            access to member-only content, create an online course, and paywall
            your content.
          </p>
          <button className="text-base relative mt-8 flex items-center gap-2 px-2 py-6 text-white hover:text-black font-semibold border-2 border-slate-100 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-white from-white to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 font-bold">
              Explore Content & Memberships
            </span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <p>
            Take the hassle out of online scheduling with tools to keep your
            clients happy and your calendar booked. Promote your availability,
            accept payments, and more.
          </p>
          <button className="text-base mb-32 relative mt-8 flex items-center gap-2 px-2 py-6 text-white hover:text-black font-semibold border-2 border-slate-100 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-white from-white to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 font-bold">Explore Scheduling→</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
          <video
            className="w-full h-auto object-cover shadow-md"
            loop
            playsInline
            autoPlay
            muted
            preload="metadata"
          >
            <source
              src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/grow-your-business/courses/en/courses.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* invoicing Section */}
      <div className="flex text-xl mt-40">
        <div className="w-1/2 flex flex-col items-start">
          <video
            className="w-full h-auto object-cover shadow-md"
            loop
            playsInline
            autoPlay
            muted
            preload="metadata"
          >
            <source
              src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/grow-your-business/invoice/en/invoice.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-1/2 ml-10">
          <h1 className="text-2xl font-bold mb-10">Get paid with invoices</h1>
          <p>
            The simplest way to collect payments so you can focus on delivering
            projects and growing your business.
          </p>
          <button className="text-base relative mt-8 flex items-center gap-2 px-2 py-6 text-white hover:text-black font-semibold border-2 border-slate-100 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-white from-white to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 font-bold">Explore Invoicing</span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selling;
