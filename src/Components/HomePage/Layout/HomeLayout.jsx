import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footers from "../../Footers";

const HomeLayout = ({ topDivRef, cartItems }) => {
  return (
    <div className="w-screen overflow-scroll ">
      <Nav topDivRef={topDivRef} cartItems={cartItems} />
      <div className="w-full flex justify-center">
        <div className="Largest:w-[1550px]  Laptop:w-full  w-full ">
          <Outlet />
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default HomeLayout;
