function Footer() {
  const allText = [
    {
      PRODUCTS: [
        "Website Templates",
        "Websites",
        "Domains",
        "Online Stores",
        "Scheduling",
        "Marketing Tools",
        "Email Marketing",
        "Extensions",
        "Professional Email",
        "Logo Maker",
        "Business Name Generator",
        "Courses",
        "Memberships",
        "Pricing",
        "Feature List",
      ],
      CUSTOMERS: [
        "Website Examples",
        "Squarespace Collection",
        "Fitness",
        "Beauty",
        "Creators",
        "Restaurants",
        "Artists",
        "Bloggers",
        "Photographers",
        "Weddings",
        "Enterprise",
      ],
      COMPANY: [
        "About",
        "Careers",
        "Our Brand",
        "Our History",
        "Accessibility",
        "Affiliates",
        "Press & Media",
        "Terms of Service",
        "Privacy Policy",
        "Security Measures",
        "Contact Us",
      ],
      COMMUNITY: [
        "Help Center",
        "Hire an Expert",
        "Forum",
        "Webinars",
        "Developer Platform",
        "Professionals",
      ],
      FOLLOW: [
        "Newsroom",
        "Squarespace Blog",
        "Circle Blog",
        "Engineering Blog",
        "Enterprise Blog",
        "Service Status",
        "Instagram",
        "YouTube",
        "LinkedIn",
        "Facebook",
        "Twitter",
      ],
    },
  ];

  return (
    <div className="bg-black text-white h-[750px] w-screen ">
      <div className="flex w-full h-auto ml-20 py-10 ">
        {/* Map over the object */}
        {Object.entries(allText[0]).map(([title, items], index) => (
          <div key={index} className="flex flex-col w-1/5">
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {/* List */}

            {items.map((item, idx) => (
              <span
                key={idx}
                className=" opacity-55 hover:opacity-100 cursor-pointer mb-4"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
