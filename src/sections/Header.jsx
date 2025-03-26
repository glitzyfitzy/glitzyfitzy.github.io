import { useState } from "react";

export const Header = () => {
  // State for tracking which dropdown is active
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdowns, setActiveSubDropdowns] = useState([]);

  // Menu data structure with nested dropdowns and unclickable items
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/#/",
      dropdown: null,
    },
    {
      id: 3,
      title: "Portfolio",
      link: null, // unclickable
      dropdown: [
        {
          id: 31,
          title: "Kendra Scott",
          link: null, // unclickable
          subDropdown: [
            {
              id: 311,
              title: "Instagram",
              link: "/#/portfolio/kendra/instagram",
            },
            { id: 312, title: "TikTok", link: "/#/portfolio/kendra/tiktok" },
            {
              id: 313,
              title: "College Tours",
              link: "/#/portfolio/kendra/college_tours",
            },
            {
              id: 314,
              title: "Celebrity & Influencer",
              link: "/#/portfolio/kendra/celebrity_influencer",
            },
            {
              id: 315,
              title: "Collaborations",
              link: "/#/portfolio/kendra/collaborations",
            },
            {
              id: 316,
              title: "Photo Shoot BTS",
              link: "/#/portfolio/kendra/photo_shoot_bts",
            },
            { id: 317, title: "Events", link: "/#/portfolio/kendra/events" },
          ],
        },
        {
          id: 32,
          title: "UT Austin",
          link: "/#/portfolio/ut_austin",
          subDropdown: null,
        },
      ],
    },
    {
      id: 4,
      title: "Glitzy Fitzy",
      link: "/#/glitzy_fitzy",
      dropdown: null,
    },
    // {
    //   id: 5,
    //   title: "Contact",
    //   link: "/#/contact",
    //   dropdown: null,
    // },
  ];

  // Handler for mouse enter on main items
  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };

  // Handler for mouse leave on main items
  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdowns([]);
  };

  // Handler for click on submenu items
  const handleSubMenuClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    if (activeSubDropdowns.includes(id)) {
      // If already open, close it
      setActiveSubDropdowns((prev) => prev.filter((item) => item !== id));
    } else {
      // If closed, open it
      setActiveSubDropdowns((prev) => [...prev, id]);
    }
  };

  return (
    <nav className="flex flex-col justify-center">
      <h1 className="text-center text-8xl font-milton-one mb-2 font-semibold">
        Hayley Fitzsimmons
      </h1>
      <div className="w-full mx-auto px-4 mb-4">
        <div className="flex justify-center">
          {/* Main Menu - Horizontal Tabs */}
          <div className="flex">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    className="flex items-center relative h-full py-4 px-6 font-semibold text-gray-800 transition duration-300 hover:text-accent"
                  >
                    {item.title}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    )}

                    {/* Dot indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full transition-all duration-300 ${
                        activeDropdown === item.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                    ></span>
                  </a>
                ) : (
                  <span className="flex items-center relative h-full py-4 px-6 font-semibold text-gray-800 transition duration-300 hover:text-accent cursor-default">
                    {item.title}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    )}

                    {/* Dot indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full transition-all duration-300 ${
                        activeDropdown === item.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                    ></span>
                  </span>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b z-10">
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem.id} className="relative">
                        {dropdownItem.link ? (
                          <a
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white"
                          >
                            {dropdownItem.title}
                          </a>
                        ) : (
                          <div className="w-full">
                            <button
                              onClick={(e) =>
                                dropdownItem.subDropdown &&
                                handleSubMenuClick(e, dropdownItem.id)
                              }
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white cursor-pointer flex items-center justify-between"
                            >
                              <span>{dropdownItem.title}</span>
                              {dropdownItem.subDropdown && (
                                <svg
                                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                                    activeSubDropdowns.includes(dropdownItem.id)
                                      ? "transform rotate-180"
                                      : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  ></path>
                                </svg>
                              )}
                            </button>

                            {/* Sub Dropdown - Shows only when clicked */}
                            {dropdownItem.subDropdown &&
                              activeSubDropdowns.includes(dropdownItem.id) && (
                                <div className="w-full bg-gray-100 shadow-inner transition-all duration-300">
                                  {dropdownItem.subDropdown.map(
                                    (subDropdownItem) => (
                                      <a
                                        key={subDropdownItem.id}
                                        href={subDropdownItem.link}
                                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white border-l-2 border-accent"
                                      >
                                        {subDropdownItem.title}
                                      </a>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
