function OpenSoon() {
  return (
    <div className="flex bg-orange-50 w-screen h-screen text-black justify-center">
      <div className="flex justify-center items-center w-1/2">
        <img
          className="max-w-[800px] max-h-[700px]"
          src="https://images.squarespace-cdn.com/content/v1/624b503ae7dc6c1b936dfc4c/1649102907377-5QD9AHIFDPK57TLORYUY/Stocksy_txp46315712VFE200_Large_2317055.jpg?format=1500w"
        ></img>
      </div>
      <div className="flex flex-col items-start w-1/3 ml-5 mt-16">
        <h1 className="text-7xl font-bold">Opening soon.</h1>
        <p className="max-w-[440px] text-3xl mt-12">
          Our flagship location is opening this fall. Sign up with your email
          address to get notified.
        </p>
        <div className="flex w-1/2 relative">
          <input
            placeholder="Email Address"
            className="p-5 w-screen mt-20"
          ></input>
          <button className="absolute -right-28 bottom-0 border-2 border-orange-300 text-orange-300 bg-transparent w-24 h-16 p-0 flex items-center justify-center">
            sign up
          </button>
        </div>
        <div className="flex gap-x-14 mt-20">
          <div>
            <p>
              <span className="font-bold text-2xl">
                Location <br />
              </span>
              123 Demo StreetNew York,
              <br /> NY 12345
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-2xl">
                Contact
                <br />
              </span>
              email@example.com
              <br />
              (555) 555-5555
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSoon;
