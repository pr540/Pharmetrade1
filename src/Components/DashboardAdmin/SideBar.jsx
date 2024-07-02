// import React from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { FiHome, FiBox, FiUsers, FiDollarSign, FiSettings } from 'react-icons/fi';

// const Sidebar = ({ onNavClick }) => {

//     function handleclicked() {
//         navigate("/app");
//       }
//       let navigate = useNavigate();
//   return (
//     <div className="w-64 bg-white shadow-lg">
//       <div className="p-4 font-bold text-xl cursor-pointer" onClick={handleclicked}>Admin Dashboard</div>
//       <nav className="mt-10">
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900" onClick={() => onNavClick('dashboard')}>
//           <FiHome className="w-6 h-6" />
//           <span className="ml-3">Dashboard</span>
//         </a>
//         {/* <Link to="dashboard" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900" >
//           <FiHome className="w-6 h-6" />
//           <span className="ml-3">Dashboard</span>
//         </Link> */}
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiBox className="w-6 h-6" />
//           <span className="ml-3">Orders</span>
//         </a>
//         {/* <Link href="addproducts" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900" >
//           <FiUsers className="w-6 h-6" />
//           <span className="ml-3">Products</span>
//         </Link> */}
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900" onClick={() => onNavClick('products')}>
//           <FiUsers className="w-6 h-6" />
//           <span className="ml-3">Products</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiUsers className="w-6 h-6" />
//           <span className="ml-3">Customers</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiDollarSign className="w-6 h-6" />
//           <span className="ml-3">Pay Outs</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiDollarSign className="w-6 h-6" />
//           <span className="ml-3">Earnings</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Manage Print PDF Header Info</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Review</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Returns</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Assign Products</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Assign Product List</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Request for Quote</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Settings</span>
//         </a>
//         <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Seller Information</span>
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiUsers, FiDollarSign, FiSettings } from 'react-icons/fi';

const Sidebar = ({}) => {
  let navigate = useNavigate();

  return (
    <div className="w-64 bg-white font-semibold shadow-lg">
      <nav className="">
        <Link to="/admin" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiHome className="w-6 h-6" />
          <span className="ml-3">Dashboard</span>
        </Link>
        <Link to="/admin/orders" className="flex items-center p-2 text-gray-600  hover:text-blue-400">
          <FiBox className="w-6 h-6" />
          <span className="ml-3">Orders</span>
        </Link>
        <Link to="/admin/addproducts" className="flex items-center p-2 text-gray-600  hover:text-blue-400">
          <FiUsers className="w-6 h-6" />
          <span className="ml-3">Products</span>
        </Link>
        <Link to="/customers" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiUsers className="w-6 h-6" />
          <span className="ml-3">Customers</span>
        </Link>
        <Link to="/payouts" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiDollarSign className="w-6 h-6" />
          <span className="ml-3">Pay Outs</span>
        </Link>
        <Link to="/earnings" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiDollarSign className="w-6 h-6" />
          <span className="ml-3">Earnings</span>
        </Link>
        <Link to="/manage-pdf-header" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Manage Print PDF Header Info</span>
        </Link>
        <Link to="/review" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Review</span>
        </Link>
        <Link to="/returns" className="flex items-center p-2 text-gray-600  hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Returns</span>
        </Link>
        <Link to="/assign-products" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Assign Products</span>
        </Link>
        <Link to="/assign-product-list" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Assign Product List</span>
        </Link>
        <Link to="/request-quote" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Request for Quote</span>
        </Link>
        <Link to="/settings" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Settings</span>
        </Link>
        <Link to="/seller-info" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Seller Information</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

