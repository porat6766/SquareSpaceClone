import React, { useState } from "react";

const Guide: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="px-6 py-16 flex flex-col bg-rose-50 items-center">
      <div className="flex w-full">
        {/* Title */}
        <div className="relative w-1/2">
          <h1 className="text-5xl text-left">
            Learn how to get started with Squarespace
          </h1>
        </div>
        {/* Sections */}
        <div className="w-1/2">
          {/* Section 1 */}
          <div>
            <p
              onClick={() => toggleSection("website")}
              className="flex justify-between items-center border-t border-black py-6 text-xl cursor-pointer"
            >
              <b>How to create a website</b>
              <button
                onClick={() => toggleSection("website")}
                className="text-2xl font-bold transition-transform duration-300"
              >
                {openSection === "website" ? "-" : "+"}
              </button>
            </p>
            {openSection === "website" && (
              <ol className="mt-2 pb-6 space-y-2 list-decimal list-inside">
                <li className="pl-5">
                  Choose a template and start a free trial.
                </li>
                <li className="pl-5">
                  Get a free custom domain name for the first year of an annual
                  website plan.
                </li>
                <li className="pl-5">
                  Use our website builder to add your own text and photos.
                </li>
                <li className="pl-5">
                  Customize the site to fit your brand with hundreds of fonts,
                  colors, and stock photos.
                </li>
                <li className="pl-5">
                  Don't have a logo? Make one for free with our online tool.
                </li>
                <li className="pl-5">
                  Publish your site and promote it using social media and email
                  marketing tools.
                </li>
              </ol>
            )}
          </div>
          {/* Section 2 */}
          <div>
            <p
              onClick={() => toggleSection("sell")}
              className="flex justify-between items-center border-t border-black py-6 text-xl cursor-pointer"
            >
              <b>How to sell online</b>
              <button className="text-2xl font-bold transition-transform duration-300">
                {openSection === "sell" ? "-" : "+"}
              </button>
            </p>
            {openSection === "sell" && (
              <ol className="mt-2 pb-6 space-y-2 list-decimal list-inside">
                <li className="pl-5">
                  Find an ecommerce template and start your free trial.
                </li>
                <li className="pl-5">
                  Register or transfer your business’s domain name.
                </li>
                <li className="pl-5">
                  Set up your online store by adding products and connecting a
                  payment processor.
                </li>
                <li className="pl-5">
                  If you sell services, set up appointments through Squarespace
                  scheduling.
                </li>
                <li className="pl-5">
                  Customize online store categories and content with the website
                  builder.
                </li>
                <li className="pl-5">
                  Grow your online store with email marketing and SEO tools.
                </li>
              </ol>
            )}
          </div>
          {/* Section 3 */}
          <div>
            <p
              onClick={() => toggleSection("blog")}
              className="flex justify-between items-center border-t border-black py-6 text-xl cursor-pointer"
            >
              <b>How to start a blog</b>
              <button
                onClick={() => toggleSection("blog")}
                className="text-2xl font-bold transition-transform duration-300"
              >
                {openSection === "blog" ? "-" : "+"}
              </button>
            </p>
            {openSection === "blog" && (
              <ol className="mt-2 pb-6 space-y-2 list-decimal list-inside">
                <li className="pl-5">
                  Choose a website template to showcase your blog.
                </li>
                <li className="pl-5">
                  Add a blog page and customize the layout and design with our
                  website builder.
                </li>
                <li className="pl-5">
                  Create, publish, and manage content with blog and image
                  editing tools.
                </li>
                <li className="pl-5">
                  Market your blog using Squarespace’s suite of integrated
                  marketing tools.
                </li>
              </ol>
            )}
          </div>
          {/* Section 4 */}
          <div>
            <p
              onClick={() => toggleSection("portfolio")}
              className="flex justify-between items-center border-t border-black py-6 text-xl cursor-pointer"
            >
              <b>How to create a portfolio website</b>
              <button
                onClick={() => toggleSection("portfolio")}
                className="text-2xl font-bold transition-transform duration-300"
              >
                {openSection === "portfolio" ? "-" : "+"}
              </button>
            </p>
            {openSection === "portfolio" && (
              <ol className="mt-2 pb-6 space-y-2 list-decimal list-inside">
                <li className="pl-5">
                  Select a website template to start building your online
                  portfolio.
                </li>
                <li className="pl-5">
                  Create a portfolio page or section and personalize the layout
                  and design to fit your style.
                </li>
                <li className="pl-5">
                  Highlight your work with customizable project pages, using
                  flexible sections to showcase each example.
                </li>
                <li className="pl-5">
                  Boost your portfolio's visibility with Squarespace;s
                  integrated marketing tools.
                </li>
              </ol>
            )}
          </div>
        </div>
      </div>
      <div className="w-11/12 h-auto flex mt-40 relative ">
        <div className="w-1/2">
          <img
            src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/made-with/made-with-2-1000w.jpg"
            alt="Orange stiletto shoes on orange and blue fabric, with an off-white portfolio website displaying dark text."
            loading="lazy"
            width="1840"
            height="1380"
            decoding="async"
          ></img>
        </div>
        <div
          className={`flex flex-col w-1/2 h-auto justify-center items-start bg-[#534936;]`}
        >
          <div className="ml-40 text-white">
            <p className="text-2xl font-bold mb-12">Made with Squarespace</p>
            <p>
              Get inspired by a collection of websites made by Squarespace users
              just like you.
            </p>
            <button className="mt-8 relative flex items-center gap-2 px-2 py-6 text-white hover:text-black  font-semibold border-2 border-slate-100 border-opacity-40 overflow-hidden group">
              <span className="absolute inset-0 bg-white from-white to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 font-bold">Choose a template</span>
              <span className="material-icons relative z-10">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
