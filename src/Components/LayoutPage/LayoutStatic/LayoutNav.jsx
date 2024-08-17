import React, {useState, useRef,useEffect } from "react";
import wishlist from '../../../assets/Wishlist1_icon.png'
import cartNav from '../../../assets/cartNav2.png'
import sell from '../../../assets/sell3d.png'
import buy from '../../../assets/buy3d.png'
import deals from '../../../assets/Sell1.png'
import dropdown from "../../../assets/Down-arrow .png";
import buyagain from '../../../assets/Buy.png'
import search from '../../../assets/search-icon.png'
import { GiMedicines } from "react-icons/gi";
import { FaVirusCovidSlash } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

const LayoutNav = () => {
    const [isContainerFocused, setIsContainerFocused] = useState(false);

    const [isButtonFocused, setIsButtonFocused] = useState(false);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

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

    const dropdownRef = useRef(null);
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
  return (
    <div>
            <div className="mt-3 cursor-pointer">
        <div className="flex  justify-between">
          <div className="flex">
          <div className="flex bg-white rounded-l-md items-center w-[40%]  lg:gap-10">
            <div
              ref={dropdownRef}
              className={`w-full relative flex items-center ${
                isContainerFocused ? "ring-2 ring-blue-500 rounded-md" : ""
              }`}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
            >
              <button
                className={`h-10  pl-2 mr-[1px] font-semibold text-left gap-1 text-[14px] flex items-center text-gray-600 bg-gray-100 border-gray-300 rounded-l-md border ${
                  isButtonFocused ? "ring-2 ring-blue-500" : ""
                } button-focus`}
                onClick={handleDropdownToggle}
                onFocus={handleFocusIn}
                onBlur={handleFocusOut}
              >
                All
                <span>
                  <img src={dropdown} className="h-4 w-4" />
                </span>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute z-10"
                  style={{ top: "30px", left: "0px" }}
                >
                  <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                    {components.map((items, index) => (
                      <ul key={index}>
                        <li className="">
                          <a
                            className="hover:text-black text-sm font-medium text-blue-900"
                            onClick={() => handleItemClick(items.name)}
                            onMouseLeave={handleCatMouseLeave}
                          >
                            {items.name}
                          </a>
                          {popUps === items.name && (
                            <div
                              className="absolute bg-white border border-gray-300 rounded shadow-lg"
                              style={{
                                top: "0%",
                                left: "100%",
                                width: "150px",
                              }}
                            >
                              {items.component}
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
                <a className="w-[40px] flex items-center justify-center p-2 bg-blue-900 text-white border-blue-500 rounded-r-md focus:outline-none container-focus">
                  <img src={search} />
                </a>
              </div>
            </div>
          </div>


            <div className="flex mx-10">
              <div className="flex gap-2">
                <img src={buy} className="w-8 h-8" />
                <snap className="text-base font-semibold my-1">BUY</snap>
              </div>
              <div className="flex gap-2 ml-2">
                <img src={sell} className="w-8 h-8" />
                <span className="text-base font-semibold my-1">SELL</span>
              </div>
              <div className="flex gap-2 ml-2">
                <img src={deals} className="w-8 h-8" />
                <span className="text-base font-semibold my-1">DEALS</span>
              </div>

            </div>

          </div>

          <div className="flex gap-3 mx-5 ">
            <img src={wishlist} className="w-6 h-6" />
            <img src={cartNav} className="w-6 h-6 " />
          </div>




        </div>

      </div>

      <div className="flex justify-start gap-6 mt-4 ml-3 cursor-pointer">
        <div className="flex flex-col">
          <img src={buyagain} className="w-8 h-8 ml-3  flex items-center justify-center"/>
        <p className="font-semibold hover:text-red-500">Buy Again</p>
        </div>

        <div className="flex flex-col">
          <img src={deals} className="w-8 h-8 flex items-center justify-center"/>
        <p  className="font-semibold hover:text-red-500">Deals</p>
        </div>

        <div className="flex flex-col">
          <p  className="flex items-center justify-center"><GiMedicines className="w-8 h-8"/></p>
        <p  className="font-semibold hover:text-red-500">OTC  Products</p>
        </div>

        <div className="flex flex-col">
          <p  className="flex items-center justify-center"><IoIosNotifications className="w-8 h-8"/></p>
        <p  className="font-semibold hover:text-red-500">Notifications</p>
        </div>

        <div className="flex flex-col">
          <p className="flex items-center justify-center"><BiSolidOffer className="w-8 h-8 "/></p>
        <p  className="font-semibold hover:text-red-500">Special Offers</p>
        </div>

        <div className="flex flex-col">
          <p  className="flex items-center justify-center"><FaVirusCovidSlash className="w-8 h-8"/></p>
        <p  className="font-semibold hover:text-red-500">Covid-19 Supplies</p>
        </div>
      </div>



      <div className=" bg-blue-900 mt-2 ">
        {/* <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1> */}
        <div className="flex justify-between m-2 cursor-pointer h-20 items-center ">

          <div className="flex gap-4 ">
            <div >
            <select className="h-9 p-1 border rounded-lg  ">
              <option>Categories</option>
              <option>
                <input type=" checkbox"/>
                Prescription Categories
              </option>
            </select>
            </div>

            <div>
            <select className="h-9 p-1 border rounded-lg  ">
              <option>Brands</option>
              <option>
                <input type=" checkbox"/>
                Prescription Brand
              </option>
            </select>
            </div>

            <div>
            <select className="h-9 p-1 border rounded-lg  ">
              <option>Packing</option>
              <option>
                <input type=" checkbox"/>
                (EA)
              </option>
            </select>
            </div>

            <div>
            <select className="h-9 p-1 border rounded-lg  ">
              <option>Form</option>
              <option>
                <input type=" checkbox"/>
                
              </option>
            </select>
            </div>

            <div>
            <select className="h-9  p-1 border rounded-lg ">
              <option>Size</option>
              <option>
                <input type=" checkbox"/>
                Others
              </option>
            </select>
            </div>
            <div>
            <select className="h-9 p-1 border rounded-lg  ">
              <option>Price</option>
              <option>
                <div>
                <input type=" checkbox"/>
                
                </div>
              </option>
            </select>
            </div>
          </div>
          <div className="flex gap-1 ">
            {/* <img src={filter} className="w-5 h-4" />
            <p className="text-white">Filter</p> */}
            <select className="bg-white h-9 px-2 p-1 cursor-pointer text-black border rounded-lg items-center justify-center">
              <option>Discounted Price Low to High</option>
              <option>Discounted Price High to Low</option>
              <option>Posted date : Old to Latest</option>
              <option>Show Prescription Products First</option>
              <option>Show OTC Products First</option>
              <option>Discount Percentage Low to High</option>
              <option>Discounted Percentage High to Low</option>
              <option>Expiry date : Short to Long</option>
              <option>Expiry date : Long to Short</option>
              <option>Name : Ascending (A-Z)</option>
              <option>Name : Decending (Z-A)</option>
              <option>Strength Low to High</option>
              <option>Strength Hign to Low</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LayoutNav
