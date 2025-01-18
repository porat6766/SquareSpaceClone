function Domain() {
  return (
    <div className="px-6 py-16 flex w-screen justify-evenly bg-gray-100 border-opacity-20 border-gray-700 border-y">
      <div>
        <h1 className="text-5xl mb-20">
          Find a domain name for <br /> your website
        </h1>
        <p className="text-lg">
          Check domain name availability using our AI-powered domain search tool
          to <br /> get started.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex relative">
            <input
              className={`py-4 px-12 w-[550px]  bg-white`}
              placeholder="search for a domain"
            ></input>
            {/* search button */}
            <button
              className="absolute inset-y-0 left-5 flex items-center pr-3"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 hover:text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.9 14.32a8 8 0 111.42-1.42l4.93 4.93a1 1 0 11-1.42 1.42l-4.93-4.93zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button className="ml-4 p-4 bg-black text-white cursor-pointer">
            search
          </button>
        </div>
        <p className="mt-10 border-b-2 border-gray-950 w-1/3 text-lg cursor-pointer">
          learn more about domains
        </p>
      </div>
    </div>
  );
}

export default Domain;
