import React, { useState } from "react";
import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";
import slider3 from "../assets/3.png";
import slider4 from "../assets/4.png";

import bg2 from "../assets/doc.png";
import allproduct from "../assets/AllProduct.png";
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import right2 from "../assets/right.png";
import Context from "./Content";
import line from "../assets/linee.png";
function Landing2() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const slides = [slider1, slider2, slider3, slider4];
  const texts = [
    "Boost sales by promoting new and special products.",
    "Receive payments more quickly.",
    "Increase your profits by reducing your inventory.",
    "Utilize deals and discounts to attract pharmacies.",
    "Compare and list products with competitive prices.",
    "Save up to 60% with deals and discounts.",
    "Cashbacks and rewards.",
    "Multi-order merge shipment.",
  ];
  return (
    <div className="2xl:ml-2 md:pt-10">
      <div className="md:w-screen md:mx-0 lg:w-screen lg:pl-2 items-center rounded-lg overflow-hidden xl:mx-0 pl-2">
        <div
          className="  md:w-screen lg:w-screen md:flex md:flex-row md:justify-center flex flex-row ml-8  rounded-xl xl:items-center "
          // style={{ width: "800vh" }}
        >
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 md:w-56 lg:w-64 xl:w-fit h-fit rounded-xl transition duration-300  ease-in-out max-w-sm flex justify-center items-center p-2"
            >
              <img
                src={item}
                alt={`Slide ${key}`}
                className="h-auto  rounded-xl"
                style={{ width: "200vh" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex  flex-col items-center ">
        <p className="text-text-blue text-[60px] font-semibold mt-8">
          Grow your buisness with Pharm Etrade
        </p>
        <br></br>
        <p className="text-2xl font-light ">
          We understand your needs. We care about your buisness.
        </p>
        <br></br>
        <p className="text-2xl font-light">
          We've designed a platform especially for you Start saving today.{" "}
        </p>
        <p>
          <img src={line} className="w-fit h-8 mt-8" />
        </p>
      </div>
      <div className="ml-24 md:flex md:gap-2 lg:items-center flex-row xl:justify-between ">
        <div
          className=" bg-inp md:w-12 lg:w-36  "
          style={{ width: "200vh", height: "fit-content" }}
        >
          <ul className="  space-y-5 md xl:w-100% md:pb-10 md:text-xl xl:text-2xl xl:mt-12 font-normal pl-8 ">
            {texts.map((items, key) => (
              <li className="flex flex-row  text-ink items-center gap-2">
                <img src={right2} className="w-8 bg-arr rounded-full" />
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:h-auto lg:h-auto xl:h-85vh"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "contain",
            backgroundPosition: "top ",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        ></div>
      </div>
      <div className="flex  justify-center ">
        <Link to="/products">
          {/* <img
            src={product}
            alt="Descriptive Alt Text"
            className="cursor-pointer w-96" // Make the image clickable
            onClick={() => setIsVisible(true)} // Change state on click
          /> */}
           <img
            src={allproduct}
            alt="Descriptive Alt Text"
            className="cursor-pointer w-80" // Make the image clickable
            onClick={() => setIsVisible(true)} // Change state on click
          />
        </Link>
      </div>
      {/* <Context /> */}
    </div>
  );
}

export default Landing2;
