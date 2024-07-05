import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiDollarSign, FiSettings, FiHome } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import dashboard from "../../assets/Dashboard_icon.png";
import payout from "../../assets/Payouts_icon.png";
import earnings from "../../assets/Earning_icon.png";
import review from "../../assets/Review_icon.png";
import returnicon from "../../assets/Returns_icon.png";
import quote from "../../assets/Request_for_quote_icon.png";
import settings from "../../assets/Settings_icon.png";
import sellerinfo from "../../assets/Seller_info_icon.png";
import assign from "../../assets/Products_list_icon.png";

const Sidebar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQDropdownOpen, setIsQDropdownOpen] = useState(false);
  const [isSDropdownOpen, setIsSDropdownOpen] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleQDropdown = () => {
    setIsQDropdownOpen(!isQDropdownOpen);
  };

  const toggleSDropdown = () => {
    setIsSDropdownOpen(!isSDropdownOpen);
  };

  return (
    <div className="w-64 p-2 bg-white font-normal shadow-lg font-ubuntu ">
      <nav className="space-y-2 text-[14px]">
        <div
          className="flex items-center justify-between p-2 text-gray-700 hover:text-blue-900 cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            {/* <FiHome className="w-6 h-6" /> */}
            <img src={dashboard} className="w-6 h-6" />
            <span className="ml-3">Dashboard</span>
          </div>
          {isDropdownOpen ? (
            <FaChevronUp className="mr-2" />
          ) : (
            <FaChevronDown className="mr-2" />
          )}
        </div>
        {isDropdownOpen && (
          <ul className="ml-6">
            <li>
              <Link
                to="/admin"
                onClick={() => handleClick("/admin")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/orders"
                onClick={() => handleClick("/admin/orders")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/orders"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/addproducts"
                onClick={() => handleClick("/admin/addproducts")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/addproducts"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/customers"
                onClick={() => handleClick("/admin/customers")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/customers"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Customers</span>
              </Link>
            </li>
          </ul>
        )}
        <Link
          to="/admin/payouts"
          onClick={() => handleClick("/admin/payouts")}
          className={`flex items-center p-2 ${
            activeLink === "/admin/payouts"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-600"
          } hover:text-blue-900`}
        >
          {/* <FiDollarSign className="w-6 h-6" /> */}
          <img src={payout} className="w-6 h-6" />
          <span className="ml-3">Pay Outs</span>
        </Link>
        <Link
          to="/admin/earnings"
          onClick={() => handleClick("/admin/earnings")}
          className={`flex items-center p-2 ${
            activeLink === "/admin/earnings"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-600"
          } hover:text-blue-900`}
        >
          <img src={earnings} className="w-6 h-6" />
          {/* <FiDollarSign className="w-6 h-6" /> */}
          <span className="ml-3">Earnings</span>
        </Link>
        <Link
          to="/admin/review"
          onClick={() => handleClick("/admin/review")}
          className={`flex items-center p-2 ${
            activeLink === "/admin/review"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-600"
          } hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={review} className="w-6 h-6" />
          <span className="ml-3">Review</span>
        </Link>
        <Link
          to="admin/returns"
          onClick={() => handleClick("admin/returns")}
          className={`flex items-center p-2 ${
            activeLink === "/admin/returns"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-600"
          } hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={returnicon} className="w-6 h-6" />
          <span className="ml-3">Returns</span>
        </Link>
        <Link
          to="/admin/assign-products"
          onClick={() => handleClick("/admin/assign-products")}
          className={`flex items-center p-2 ${
            activeLink === "/admin/assign-products"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-600"
          } hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={assign} className="w-6 h-6" />
          <span className="ml-3">Assign Products</span>
        </Link>
        <Link
          to="/admin/assign-product-list"
          onClick={() => handleClick("/admin/assign-product-list")}
          className={`flex items-center p-2 ${
            activeLink === "/admin/assign-product-list"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-600"
          } hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={assign} className="w-6 h-6" />
          <span className="ml-3">Assign Product List</span>
        </Link>

        <div
          className="flex items-center justify-between p-2 text-gray-700 hover:text-blue-900 cursor-pointer"
          onClick={toggleQDropdown}
        >
          <div className="flex items-center">
            {/* <FiHome className="w-6 h-6" /> */}
            <img src={quote} className="w-6 h-6" />
            <span className="ml-3">Request for Quote</span>
          </div>
          {isQDropdownOpen ? (
            <FaChevronUp className="mr-2" />
          ) : (
            <FaChevronDown className="mr-2" />
          )}
        </div>

        {isQDropdownOpen && (
          <ul className="ml-6">
            <li>
              <Link
                to="/admin/request-quote"
                onClick={() => handleClick("/admin/request-quote")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/request-quote"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">All Requested Quote</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/quoted-product"
                onClick={() => handleClick("/admin/quoted-product")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/quoted-product"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">All Quoted Products</span>
              </Link>
            </li>
          </ul>
        )}

        <div
          className="flex items-center justify-between p-2 text-gray-700 hover:text-blue-900 cursor-pointer"
          onClick={toggleSDropdown}
        >
          <div className="flex items-center">
            {/* <FiHome className="w-6 h-6" /> */}
            <img src={settings} className="w-6 h-6" />
            <span className="ml-3">Settings</span>
          </div>
          {isSDropdownOpen ? (
            <FaChevronUp className="mr-2" />
          ) : (
            <FaChevronDown className="mr-2" />
          )}
        </div>


        {isSDropdownOpen && (
          <ul className="ml-6">
            <li>
              <Link
                to="/admin/settings"
                onClick={() => handleClick("/admin/settings")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/settings"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Profile Setting</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/ups-shipping"
                onClick={() => handleClick("/admin/ups-shipping")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/ups-shipping"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">UPS Shipping</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/fedex-shipping"
                onClick={() => handleClick("/admin/fedex-shipping")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/fedex-shipping"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Fedex Shipping</span>
              </Link>
            </li><li>
              <Link
                to="/admin/shipping-settings"
                onClick={() => handleClick("/admin/shipping-settings")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/shipping-settings"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Shipping Setting</span>
              </Link>
            </li><li>
              <Link
                to="/admin/manage-shipping"
                onClick={() => handleClick("/admin/manage-shipping")}
                className={`flex items-center p-2 ${
                  activeLink === "/admin/manage-shipping"
                    ? "text-blue-900 bg-gray-400"
                    : "text-gray-600"
                } hover:text-blue-900`}
              >
                <span className="ml-3">Manage Multi Shipping</span>
              </Link>
            </li>
          </ul>
        )}


        <Link
          to="/user"
          onClick={() => handleClick("/user")}
          className={`flex items-center p-2 ${
            activeLink === "/user"
              ? "text-blue-900 bg-gray-400"
              : "text-gray-900"
          } hover:text-blue-900`}
        >
          {/* <FiSettings className="w-6 h-6" /> */}
          <img src={sellerinfo} className="w-6 h-6" />
          <span className="ml-3">Seller Information</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
