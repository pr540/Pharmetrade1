


import React from "react";
import AccountSideBar from "./AccountSideBar";
import { Outlet } from "react-router-dom";
import AdminNav from "../Admin/Layout/AdminNav";
// import AccountSideBar from "../UserAccount/AccountSideBar";


const AccountPanel = ({ topMargin }) => {
  return (
    // <div className="w-full h-full flex flex-col justify-center "  >
    //   <AdminNav/>
    //   <div className="flex-1 flex" >
    //     <AccountSideBar/>
    //     <Outlet/>
    // </div>
    // </div>
    <div className="flex flex-col h-screen overflow-hidden  w-screen bg-gray-100 font-ubuntu">
      <AdminNav />
      <div className="flex w-screen overflow-hidden   ">
        <AccountSideBar />
        <div className="w-full h-full flex  ">
          <div
            className={`medium:w-[calc(100%-256px)] h-full overflow-scroll w-[calc(100%-4rem)] `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPanel;
