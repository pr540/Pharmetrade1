

import React, { useState } from "react";
// import slider1 from "../assets/1.png";
// import slider2 from "../assets/2.png";
// import slider3 from "../assets/3.png";
// import slider4 from "../assets/4.png";
import slider1 from "../../../assets/S1.jpg";
import slider2 from "../../../assets/S2.jpg";
import slider3 from "../../../assets/S3.jpg";
import slider4 from "../../../assets/S4.jpg";

import bg2 from "../../../assets/doc.png";
// import allproduct from "../assets/AllProduct.png";
import allproduct from "../../../assets/Products.png";
import { Link, useNavigate } from "react-router-dom";
import right2 from "../../../assets/right.png";
import line from "../../../assets/linee.png";
import PLefts from "../../PLefts";

function Landing2() {
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
    <div className=" mt-5 pt-3 w-full  ">
      <PLefts />
      <div className="w-full ">
        <div
          className="flex justify-around gap-6 "
          // style={{ width: "800vh" }}
        >
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 w-fit h-fit  rounded-xl transition duration-300  ease-in-out max-w-sm p-1"
            >
              <img
                src={item}
                alt={`Slide ${key}`}
                className="h-full w-full  rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex  flex-col items-center ">
        <p className="text-text-blue text-[45px] xl:text-4xl font-semibold mt-6">
          Grow your buisness with Pharm Etrade
        </p>
        <br></br>
        <p className="text-xl font-light xl:text-xl ">
          We understand your needs. We care about your buisness.
        </p>
        <br></br>
        <p className="text-xl font-light xl:text-xl">
          We've designed a platform especially for you Start saving today.{" "}
        </p>
        <p>
          <img src={line} className="w-fit h-8 mt-6" />
        </p>
      </div>
      <div className=" flex items-center  justify-evenly ">
        <div
          className=" bg-yellow-50 mt-  p-4 rounded-2xl transition duration-300 "
          style={{ height: "fit-content" }}
        >
          <ul className="    space-y-2 lg:w-100% xl:w-auto xl:pr-10 md:pb-6 md:text-lg xl:text-2xl xl:mt-6 font-light pl-4 ">
            {texts.map((items, key) => (
              <li key={key} className="flex flex-row  text-ink items-center gap-2">
                <img src={right2} className="w-6 bg-green-500 rounded-full" />
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className=" ">
          <img
            src={bg2}
            alt="Pharmacy"
            className="rounded-xl object-cover "
          />
        </div>
      </div>
      <div className="flex justify-center ">
          <img
            src={allproduct}
            alt="Descriptive Alt Text"
            onClick={()=>navigate('/products')}
            className="cursor-pointer w-64" 
          />
      </div>
    </div>
  );
}

export default Landing2;


