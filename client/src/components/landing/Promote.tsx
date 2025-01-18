function Promote() {
  return (
    <div className="px-6 py-16 flex flex-col bg-violet-200">
      <h1 className={`text-[120px]`}>
        Promote your
        <br /> business
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/3 items-start ">
          <h2 className="text-xl text-black font-bold my-6">
            Grow your audience
          </h2>
          <p>
            Built-in SEO tools and social media integrations to maximize your
            reach and connect with your community.
          </p>
          <h2 className="text-xl text-black font-bold my-6">
            Engage with customers
          </h2>
          <p>
            Email campaigns that pull in your site's colors, products, and blog
            posts so your communications feel effortlessly on-brand.
          </p>
          <h2 className="text-xl text-black font-bold my-6">
            Optimize with analytics
          </h2>
          <p>
            Insights into who is visiting your site, how your online store is
            performing, and more.
          </p>
          <button className="relative flex items-center gap-2 px-6 py-4 mt-20 text-black hover:text-white font-semibold border-2 border-slate-500 border-opacity-40 overflow-hidden group">
            <span className="absolute inset-0 bg-black from-black to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10 text-xs">
              EXPLORE MARKETING TOOLS
            </span>
            <span className="material-icons relative z-10">arrow_forward</span>
          </button>
        </div>
        <div className="flex flex-col w-1/2 items-end mr-6">
          <img
            src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/market-your-business/en/market-your-business-1-500w.jpg"
            alt="An email displaying purple jello cake on a glass structure, illustrating email automation."
            loading="lazy"
            width="555"
            height="525"
            decoding="async"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Promote;
