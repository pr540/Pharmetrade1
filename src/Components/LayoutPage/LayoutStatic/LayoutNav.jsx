import React, { useState, useRef, useEffect } from "react";
import bid from "../../../assets/Bid3d.png";

import buy from "../../../assets/buy3d.png";
import sell from "../../../assets/sell3d.png";
import deals from "../../../assets/Sell1.png";
import dropdown from "../../../assets/Down-arrow .png";
import buyagain from "../../../assets/Buy.png";
import search from "../../../assets/search-icon.png";
import wishlist from "../../../assets/Wishlist1_icon.png";
import cartNav from "../../../assets/cartNav2.png";

const LayoutNav = ({ cartItems }) => {
  const [isContainerFocused, setIsContainerFocused] = useState(false);
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleFocusIn = (e) => {
    if (e.target.className.includes("container-focus")) {
      setIsContainerFocused(true);
    } else if (e.target.className.includes("button-focus")) {
      setIsButtonFocused(true);
    }
  };

  const handleFocusOut = (e) => {
    if (e.target.className.includes("container-focus")) {
      setIsContainerFocused(false);
    } else if (e.target.className.includes("button-focus")) {
      setIsButtonFocused(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleCart() {
    navigate("/cart");
  }

  const navItems = [
    { image: buy, text: "BUY" },
    { image: sell, text: "SELL" },
  ];

  const iconItems = [
    { icon: bid, text: "OTC Products" },
    { icon: deals, text: "DEALS" },
    { icon: buyagain, text: "Buy Again" },
  ];

  return (
    <div className="my-4  cursor-pointer">
      <div className="flex justify-between">
        {/* Navigation items with images */}
        <div className="flex">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 ml-2">
              <img src={item.image} className="w-8 h-8" alt={item.text} />
              <span className="text-base font-semibold my-1">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Search and dropdown */}
        <div className="flex bg-white rounded-l-md items-center w-[40%]">
          <div
            ref={dropdownRef}
            className={`w-full relative flex items-center ${
              isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
            }`}
          >
            <button
              className={`h-10 pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
                isButtonFocused ? "ring-2 ring-blue-500" : ""
              } button-focus`}
              onClick={handleDropdownToggle}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
            >
              All
              <span>
                <img src={dropdown} className="h-4 w-4" alt="dropdown" />
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 top-[30px] left-0">
                <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                  {/* Dropdown items */}
                  {components.map((item, index) => (
                    <ul key={index}>
                      <li>
                        <a
                          className="hover:text-black text-sm font-medium text-blue-900"
                          onClick={() => handleItemClick(item.name)}
                        >
                          {item.name}
                        </a>
                        {popUps === item.name && (
                          <div
                            className="absolute bg-white border border-gray-300 rounded shadow-lg"
                            style={{
                              top: "0%",
                              left: "100%",
                              width: "150px",
                            }}
                          >
                            {item.component}
                          </div>
                        )}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            )}

            <div className="flex w-full h-10 border container-focus">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow p-4 border-none focus:outline-none container-focus"
              />
              <button className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
                <img src={search} alt="search icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Icons with text */}
        <div className="flex items-center gap-3 ml-2">
          {iconItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <img src={item.icon} className="w-8 h-8" />
              <span className="text-base font-semibold my-1">{item.text}</span>
            </div>
          ))}
          <img src={wishlist} className="w-6 h-6" alt="wishlist icon" />
          <div className="relative">
          <div className="absolute  text-white rounded-full bg-blue-900 bottom-1/2 left-1.5 px-1 font-medium text-xs">{cartItems.length}</div>

          <img src={cartNav} className="w-6 h-6 mr-1" alt="cart icon" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutNav;
