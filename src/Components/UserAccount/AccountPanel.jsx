// import React from "react";
// import AccountSideBar from "./AccountSideBar";
// import { Outlet } from "react-router-dom";

// const AccountPanel = ({ topMargin }) => {
//   return (
//     // <div className="w-full h-full flex justify-center  bg-gray-600" style={{
//     //   marginTop: `${topMargin}px`,
//     // }}>
//       <div className=" flex-1 flex">
//         <AccountSideBar topMargin={topMargin} />
//         <Outlet topMargin={topMargin} />
//       </div>
//     //  </div>
//   );
// };

// export default AccountPanel;


import React from "react";
import AccountSideBar from "./AccountSideBar";
import { Outlet } from "react-router-dom";

const AccountPanel = ({ topMargin }) => {
  return (
    <div className="w-full h-full flex justify-center mt-8"  >
      <div className="w-80" style={{ marginTop: `${topMargin}px` }}>
        <AccountSideBar />
      </div>
      <div className="w-[calc(100%-320px)] p-6 flex-1 " style={{ marginTop: `${topMargin}px` }}>
        <Outlet/>
      </div>
    </div>
  );
};

export default AccountPanel;
