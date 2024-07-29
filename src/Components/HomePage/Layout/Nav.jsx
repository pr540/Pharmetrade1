import React from "react";
// import Logo from "../assets/Icons/Etrade.png";
// import Logo from "../assets/Icons/logo.png";
import Logo from "../../../assets/logo_04.png";
import Search from "../../../assets/search.png";
import Buy from "../../../assets/Buy.png";
import cart from "../../../assets/CartNav_icon.png";
import bid from "../../../assets/Bid.png";
// import like from "../assets/Icons/Favorate.png";
import like from "../../../assets/wishlistnav_icon.png";
import compare from "../../../assets/CompareNav_icon.png";
import note from "../../../assets/Icons/Compare.png";
import sale from "../../../assets/Sell.png";
import hand from "../../../assets/Join.png";
import BackgroundImage from "../../../assets/BackgroundImage.png";
import { Link, useNavigate } from "react-router-dom";
import menu from "../../../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../../../assets/add.png";
// import linkedin from "../assets/linkedin.png";

import linkedin from "../../../assets/Icons/linkedin_icon.png";
import facebook from "../../../assets/Icons/facebook_icon.png";
import insta from "../../../assets/Icons/instagram_icon.png";
import twitter from "../../../assets/Icons/twitter_icon.png";
// import facebook from "../assets/facebook.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
// import { useNavbarContext } from "./NavbarContext";
import myaccount from "../../../assets/My Account.png";
import { TbTruckReturn } from "react-icons/tb";
import Baby from "../../All Category/Baby";
import Beauty from "../../All Category/Beauty";
import Grocery from "../../All Category/Grocery";
import HealthTopics from "../../All Category/HealthTopics";
import Herbs from "../../All Category/Herbs";
import Home from "../../All Category/Home";
import Medicines from "../../All Category/Medicines";
import PersonalCare from "../../All Category/PersonalCare";
import Pets from "../../All Category/Pets";
import SportsNutrition from "../../All Category/SportsNutrition";
import Suppliments from "../../All Category/Suppliments";
import WhyPharma from "../NavLinks/WhyPharma";

function Nav({ topDivRef, cartItems }) {

  const [selectedIndex, setSelectedIndex] = useState();
  const MenuItems = [
    "Home",
    "Products",
    "Why PharamEtrade",
    "About Us",
    "Contact Us",
    "Offers",
  ];

  const downDivItems = [
    { label: "Buy", icon: Buy, path: "/products" },
    { label: "Join", icon: hand, path: "/login" },
    { label: "Sell", icon: sale, path: "/admin/addproducts/Create" },
    { label: "Bid", icon: bid, path: "/bid" },
    { label: "LinkedIn", icon: linkedin, path: "#" },
    { label: "Facebook", icon: facebook, path: "#" },
    { label: "Insta", icon: insta, path: "#" },
    { label: "Twitter", icon: twitter, path: "#" },
  ];

  const components = [
    { name: "Allergies", component: <Baby /> },
    { name: "Bath & Body ", component: <Beauty /> },
    { name: "Cough Cold & flu", component: <HealthTopics /> },
    { name: "Digestive", component: <Home /> },
    { name: "drug", component: <Medicines /> },
    { name: "Eye Care", component: <PersonalCare /> },
    { name: "Ear Nose", component: <Pets /> },
    { name: "First Aid", component: <SportsNutrition /> },
    { name: "Foot Care", component: <Suppliments /> },
    { name: "Home  Test Monitoring ", component: <Suppliments /> },
    { name: "Incontinence ", component: <Suppliments /> },
    { name: "Pain Relief & Management ", component: <Suppliments /> },
    { name: "Pediatric Care ", component: <Suppliments /> },
    { name: "Personal Care ", component: <Suppliments /> },
    { name: "Pet  ", component: <Suppliments /> },
    { name: "Prescription & Packaging  ", component: <Suppliments /> },
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
    if (MenuItems[index] === "Home") navigate("/app");
    else if (MenuItems[index] === "Products") navigate("/products");
    else if (MenuItems[index] === "Why PharamEtrade") navigate("/whypharmetrade");
    else if (MenuItems[index] === "About Us") navigate("/aboutus");
    else if (MenuItems[index] === "Contact Us") navigate("/contactus");
  };


  let navigate = useNavigate();

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [popUps, setPopUps] = useState(<Baby />);
  const FormData = JSON.parse(localStorage.getItem("formData"));

  const handleMouseEnter = () => {
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };
  const mouseUp = () => {
    setIsCategory(true);
  };
  const mouseDown = () => {
    setIsCategory(false);
  };
  function handleredirect() {
    navigate("/login");
  }

  function handleCart() {
    navigate("/cart");
  }

  function handleclick() {
    navigate("/wishlist");
  }

  function handleuser() {
    navigate("/user");
  }
  function handleorder() {
    navigate("/orderhistory");
  }
  function hanldeUp(items) {
    setPopUps(items);
  }

  return (
    <div
      ref={topDivRef}
      className=" fixed w-screen pt-1  px-2 z-10 bg-white text-grey-500"
    >
      <div className=" flex flex-col w-full justify-between ">
        <ul className=" text-3xl w-full  ">
          <div className="flex flex-row justify-between  gap-4 md:gap-12 lg:gap-10  items-center  text-xl fontbg-white text-gray-500 ">
            <div>
              <img
                src={Logo}
                onClick={() => navigate("/")}
                className="w-12 md:w-20 lg:w-36 xl:w-64 h-14 ml-2 md:ml-4 lg:ml-14 lg:overflow-x-hidden xl-0"
              />
            </div>
            <div className="  h-full   md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 px-4 items-center">
              <div className="flex gap-6 justify-around h-full">
                {MenuItems.map((item, index) => (
                  <li
                    className={`text-blue-900 flex justify-center items-center w-fit cursor-pointer font-medium text-[17px] ${
                      selectedIndex === index
                        ? "text-green-500"
                        : "hover:text-green-500"
                    }`}
                    key={item}
                    onClick={() => handleSelect(index)}
                  >
                    {item}
                  </li>
                ))}
              </div>

              <div className=" flex  flex-row gap-4 text-md  items-center font-thin">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex  items-center" onClick={handleredirect}>
                    <img
                      src={add}
                      className="w-4 md:w-6 lg:w-8 h-8 cursor-pointer"
                      alt="clickable"
                      onClick={handleredirect}
                    />
                    <div className="text-blue-900  ">
                      <div className="text-sm font-medium -mb-2">
                        Hello, Sign in
                      </div>
                      <div className="text-base font-semibold">
                        Account & Lists
                      </div>
                    </div>
                  </div>
                  {isPopupVisible && (
                    <div className="fixed flex z-10">
                      <div className="bg-white p-4 rounded shadow-lg w-64">
                        <div className="w-full justify-center items-center">
                          <a
                            className="bg-blue-900 text-white py-1 px-2 rounded "
                            onClick={handleredirect}
                          >
                            Sign In
                          </a>
                        </div>
                        <p className="mb-1 text-lg">New customer? Start here</p>
                        <h2
                          className="text-lg font-semibold cursor-pointer"
                          onClick={handleuser}
                        >
                          Your Account
                        </h2>
                        <ul>
                          <li className="">
                            <a
                              href="#"
                              className="text-lg text-blue-900"
                              onClick={handleorder}
                            >
                              Order List
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="text-blue-900"
                              onClick={handleclick}
                            >
                              Wishlist
                            </a>
                          </li>
                          <li
                            className={`${
                              FormData?.userType === "Normal Customer"
                                ? "hidden"
                                : ""
                            }`}
                          >
                            <Link to="/admin" className="text-lg text-blue-900">
                              Seller Dashboard
                            </Link>
                          </li>
                          <li>
                            <a href="#" className="text-lg text-blue-900">
                              Account Settings
                            </a>
                          </li>
                          <li
                            className="cursor-pointer"
                            onClick={() => localStorage.removeItem("formData")}
                          >
                            <Link to="/login" className="text-lg text-blue-900">
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <li className="relative ">
                  <a>
                    {/* <img
                      src={Cart}
                      className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-10 lg:h-10 xl:h-12"
                      onClick={handleCart}
                    /> */}
                    <img
                      src={cart}
                      className="w-2  md:w-4 lg:w-6 xl:w-8 pt-2 h-2 md:h-4 lg:h-6 xl:h-8 text-blue-900 hover:text-gray-400 hover:scale-110 transi duration-500"
                      onClick={handleCart}
                    />
                  </a>
                  <div
                    className={`absolute -top-2  text-blue-900 right-4 font-semibold ${
                      cartItems.length == 0 ? "hidden" : ""
                    }`}
                  >
                    {cartItems.length}
                  </div>
                </li>
                <li>
                  <a>
                    <img
                      src={like}
                      onClick={handleclick}
                      className="w-2 md:w-4 lg:w-6 xl:w-8 pt-2 h-2 md:h-4 lg:h-6 xl:h-8 hover:scale-110 transition duration-300"
                    />{" "}
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src={compare}
                      // onClick={handleclick}
                      className="w-2 md:w-4 lg:w-6 xl:w-8 pt-2 h-2 md:h-4 lg:h-6 xl:h-8 hover:scale-110 transition duration-300"
                    />{" "}
                  </a>
                </li>
              </div>
            </div>
          </div>
        </ul>
        {/* down div elemenet  */}
        <div
          className="flex justify-evenly bg-gray-200 h-fit flex-row  md:w-screen  
           items-center text-black border-2 border-grey-500 shadow-lg "
        >
          <div className="flex items-center  w-[40%]  lg:gap-10 ">
            <div className="w-full relative flex items-center">
              <a
                className="h-8 px-3 pt-2 text-left text-[12px] text-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onMouseEnter={mouseUp}
                onMouseLeave={mouseDown}
              >
                All Categories
                {isCategory && (
                  <div className="">
                    <div
                      className=" absolute z-10"
                      style={{
                        top: "30px",
                        left: "0px",
                      }}
                    >
                      <div className="bg-white px-4 py-3 rounded shadow-lg w-64">
                        <div className="w-full justify-center items-center"></div>
                        {components.map((items, index) => (
                          <ul key={index}>
                            <li className="mt-2">
                              <a
                                className="hover:text-black text-xl m text-blue-500"
                                onClick={() => hanldeUp(items.name)}
                                onMouseLeave={() => handleLeave(items.name)}
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
                                  }} // Adjust width and position as needed
                                >
                                  {items.component}
                                </div>
                              )}
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </a>

              <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow h-8 p-2 px-4 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <a className="w-[40px] flex items-center justify-center h-8 p-2 bg-blue-500 text-white border border-blue-500 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.85-2.15A7 7 0 1113 5a7 7 0 015 12.35z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-5  items-center justify-around text-blue-900 text-xs p-4 w-full md:w-fit">
            {downDivItems.map((item, index) => (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className={`flex gap-1 items-center justify-center cursor-pointer hover:text-green-400 ${
                  item.label == "Sell"
                    ? FormData?.userType === "Normal Customer"
                      ? "hidden"
                      : ""
                    : ""
                }`}
              >
                <img
                  src={item.icon}
                  className="max-w-8 max-h-8"
                  alt={item.label}
                />
                <div className="text-[15px] ml-1 ">{item.label}</div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
