import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiDollarSign, FiSettings, FiHome, } from 'react-icons/fi';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import dashboard from "../../assets/Dashboard_icon.png"
import payout from "../../assets/Payouts_icon.png"
import earnings from "../../assets/Earning_icon.png"
import review from "../../assets/Review_icon.png"
import returnicon from "../../assets/Returns_icon.png"
import quote from "../../assets/Request_for_quote_icon.png"
import settings from "../../assets/Settings_icon.png"
import sellerinfo from "../../assets/Seller_info_icon.png"
import assign from "../../assets/Products_list_icon.png"

const Sidebar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-72 p-8 bg-white font-normal shadow-lg font-ubuntu">
      <nav className='space-y-4'>
        <div className="flex items-center justify-between p-2 text-gray-700 hover:text-blue-900 cursor-pointer" onClick={toggleDropdown}>
          <div className='flex items-center'>
          {/* <FiHome className="w-6 h-6" /> */}
          <img src={dashboard} className='w-6 h-6'/>
            <span className="ml-3">Dashboard</span>
          </div>
          {isDropdownOpen ? <FaChevronUp className='mr-2' /> : <FaChevronDown className='mr-2' />}
        </div>
        {isDropdownOpen && (
          <ul className="ml-6">
            <li>
              <Link
                to="/admin"
                onClick={() => handleClick("/admin")}
                className={`flex items-center p-2 ${activeLink === "/admin" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
              >
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/orders"
                onClick={() => handleClick("/admin/orders")}
                className={`flex items-center p-2 ${activeLink === "/admin/orders" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
              >
                <span className="ml-3">Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/addproducts"
                onClick={() => handleClick("/admin/addproducts")}
                className={`flex items-center p-2 ${activeLink === "/admin/addproducts" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
              >
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/customers"
                onClick={() => handleClick("/admin/customers")}
                className={`flex items-center p-2 ${activeLink === "/admin/customers" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
              >
                <span className="ml-3">Customers</span>
              </Link>
            </li>
          </ul>
        )}
        <Link
          to="/admin/payouts"
          onClick={() => handleClick("/admin/payouts")}
          className={`flex items-center p-2 ${activeLink === "/admin/payouts" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiDollarSign className="w-6 h-6" /> */}
          <img src={payout} className='w-6 h-6'/>
          <span className="ml-3">Pay Outs</span>
        </Link>
        <Link
          to="/admin/earnings"
          onClick={() => handleClick("/admin/earnings")}
          className={`flex items-center p-2 ${activeLink === "/admin/earnings" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
        <img src={earnings} className='w-6 h-6'/>
          {/* <FiDollarSign className="w-6 h-6" /> */}
          <span className="ml-3">Earnings</span>
        </Link>
        <Link
          to="/admin/review"
          onClick={() => handleClick("/admin/review")}
          className={`flex items-center p-2 ${activeLink === "/admin/review" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={review} className='w-6 h-6'/>
          <span className="ml-3">Review</span>
        </Link>
        <Link
          to="admin/returns"
          onClick={() => handleClick("admin/returns")}
          className={`flex items-center p-2 ${activeLink === "/admin/returns" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={returnicon} className='w-6 h-6'/>
          <span className="ml-3">Returns</span>
        </Link>
        <Link
          to="/admin/assign-products"
          onClick={() => handleClick("/admin/assign-products")}
          className={`flex items-center p-2 ${activeLink === "/admin/assign-products" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={assign} className='w-6 h-6'/>
          <span className="ml-3">Assign Products</span>
        </Link>
        <Link
          to="/admin/assign-product-list"
          onClick={() => handleClick("/admin/assign-product-list")}
          className={`flex items-center p-2 ${activeLink === "/admin/assign-product-list" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={assign} className='w-6 h-6'/>
          <span className="ml-3">Assign Product List</span>
        </Link>
        <Link
          to="/admin/request-quote"
          onClick={() => handleClick("/admin/request-quote")}
          className={`flex items-center p-2 ${activeLink === "/admin/request-quote" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={quote} className='w-6 h-6'/>
          <span className="ml-3">Request for Quote</span>
        </Link>
        <Link
          to="/admin/settings"
          onClick={() => handleClick("/admin/settings")}
          className={`flex items-center p-2 ${activeLink === "/admin/settings" ? "text-blue-900 bg-gray-400" : "text-gray-600"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={settings} className='w-6 h-6'/>
          <span className="ml-3">Settings</span>
        </Link>
        <Link
          to="/admin/seller-info"
          onClick={() => handleClick("/admin/seller-info")}
          className={`flex items-center p-2 ${activeLink === "/admin/seller-info" ? "text-blue-900 bg-gray-400" : "text-gray-900"} hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={sellerinfo} className='w-6 h-6'/>
          <span className="ml-3">Seller Information</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

