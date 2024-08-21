// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import logo from "../../../assets/logo_05.png";
// import profile from "../../../assets/ProfileSetting.png";
// import Dashboard from "../../../assets/Dashboard_icon.png";
// import Wishlist from "../../../assets/ManageWishlist_icon.png";
// import OrderList from "../../../assets/MyOrders_icon.png";
// import AddProduct from "../../../assets/AddSingleProduct.png";
// import BulkProducts from "../../../assets/BulkProduct.png";
// import PostingProduct from "../../../assets/Products_icon.png";
// import Orders from "../../../assets/Orders_icon.png";
// import Customers from "../../../assets/Customers_icon.png";
// import PaymentHistory from "../../../assets/Payouts_icon.png";
// import Earnings from "../../../assets/Earnings_icon.png";
// import Returns from "../../../assets/Returns_icon.png";
// import SalesHistory from "../../../assets/MyOrders_icon.png";
// import UpsShipping from "../../../assets/UPSShipping_icon.png";
// import FedExShipping from "../../../assets/UPSShipping_icon.png";
// import AllRequestedQuotes from "../../../assets/RequestedForQuote_icon.png";
// import AllQuotedProducts from "../../../assets/RequestedForQuote_icon.png";
// import ShippingDetails from "../../../assets/ShippingSetting_icon.png";
// import RequestForQuote from "../../../assets/RequestForQuote_icon.png";
// import Setting from "../../../assets/Settings_icon.png";
// import Buy from "../../../assets/BuySideIcon.png";
// import Sell from "../../../assets/SellSideIcon.png";
// import Bid from "../../../assets/BidSideIcon.png";
// import Faqs from "../../../assets/Faqs.png";
// import Join from "../../../assets/JoinSideIcon.png";

// function LayoutSidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState(location.pathname);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [dropdownStates, setDropdownStates] = useState({});
//   const localData = JSON.parse(localStorage.getItem("login"));
//   const customerId = localData?.userId;
//   const [userDetails, setUserDetails] = useState(null);
//   useEffect(() => {
//     if (customerId) {
//       if (customerId.length > 1) fetchUserDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchUserDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Get?customerId=${customerId}`
//       );
//       const data = await response.json();
//       // if (data.statusCode === 200 && data.loginStatus === 'Success') {
//       //     console.log(userDetails);
//       // } else {
//       //     console.error('Failed to fetch user details:', data.message);
//       // }
//       setUserDetails(data);

//       console.log(userDetails);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     }
//   };

//   const handleClick = (path) => {
//     setActiveLink(path);
//     navigate(path);
//   };

//   const toggleDropdown = (section) => {
//     setDropdownStates((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const logos = 
//     {
//       src: profile,
//       name :  userDetails?.customerDetails?.firstName+ " "+ userDetails?.customerDetails.lastName,
//       Shop_name: "Valley Pharmacy",
//     }
//   ;

//   const navItems = [
//     {
//       label: "Dashboard",
//       icon: Dashboard,
//       to: "/layout",
//     },
//     {
//       label: "Buy",
//       icon: Buy,
//       to: null, // no direct link, used for dropdown
//       children: [
//         { label: "Buy Products", to: "/layout/layoutbuy", icon: AddProduct },
//         { label: "Wishlist", to: "/layout/layoutwishlist", icon: Wishlist },
//         { label: "OrderList", to: "/layout/layoutorderlist", icon: OrderList },
//       ],
//     },
//     {
//       label: "Sell",
//       icon: Sell,
//       to: null, // no direct link, used for dropdown
//       children: [
//         { label: "Add Product", to: "/layout/addproduct", icon: AddProduct },
//         {
//           label: "Add Bulk Product",
//           to: "/layout/addbulkproduct",
//           icon: BulkProducts,
//         },
//         {
//           label: "Posting Products",
//           to: "/layout/postingproducts",
//           icon: PostingProduct,
//         },
//         { label: "Orders", to: "/layout/sellorders", icon: Orders },
//         { label: "Customers", to: "/layout/sellcustomers", icon: Customers },
//         {
//           label: "Payment History",
//           to: "/layout/sellpaymenthistory",
//           icon: PaymentHistory,
//         },
//         { label: "Earnings", to: "/layout/sellearnings", icon: Earnings },
//         { label: "Returns", to: "/layout/sellreturn", icon: Returns },
//         {
//           label: "Sales History",
//           to: "/layout/saleshistory",
//           icon: SalesHistory,
//         },
//         {
//           label: "Shipping Details",
//           icon: ShippingDetails,
//           to: null, // no direct link, used for sub-dropdown
//           children: [
//             {
//               label: "UPS Shipping",
//               to: "/layout/ups-shipping",
//               icon: UpsShipping,
//             },
//             {
//               label: "FedEx Shipping",
//               to: "/layout/fedex-shipping",
//               icon: FedExShipping,
//             },
//           ],
//         },
//         {
//           label: "Request for Quote",
//           icon: RequestForQuote,
//           to: null, // no direct link, used for sub-dropdown
//           children: [
//             {
//               label: "All Requested Quotes",
//               to: "/layout/requestedquote",
//               icon: AllRequestedQuotes,
//             },
//             {
//               label: "All Quoted Products",
//               to: "/layout/quotedproducts",
//               icon: AllQuotedProducts,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "Join",
//       icon: Join,
//       to: "/signup",
//     },
//     {
//       label: "Bid",
//       icon: Bid,
//       to: "/layout/layoutbid",
//     },
//     {
//       label: "Setting",
//       icon: Setting,
//       to: "/layout/layoutsetting",
//     },
//     {
//       label: "FAQs",
//       icon: Faqs,
//       to: "/faqs",
//     },
//   ];

//   return (
//     <div
//       className={`p-2 overflow-scroll h-full w-full z-[100] font-normal font-sans flex flex-col shadow-lg ${
//         isCollapsed ? "min-w-16 items-center" : "min-w-64"
//       }`}
//       style={{ backgroundColor: "rgba(14, 81, 140, 1)" }}
//     >
//       <div className="w-full flex flex-col justify-center items-center my-5">
//         <Link to="/app">
//           <img src={logo} className="w-44 mb-2" alt="Logo" />
//         </Link>
//         <div className="flex w-40 h-28 justify-center items-center border rounded-md bg-white">
//           <div
//             className="flex justify-center flex-col items-center"
//           >
//             <img
//               src={logos.src}
//               className="w-10 h-10 rounded-full "
//               alt="Profile"
//             />
//             <p className="text-base text-red-500 font-semibold my-1">
//               {logos.Shop_name}
//             </p>
//             <p className=" text-sm font-semibold">{logos.name}</p>
//           </div>
//         </div>
//       </div>

//       <nav className="space-y-2 text-[16px]">
//         {navItems.map((item, index) => (
//           <div key={index}>
//             {item.children ? (
//               <div
//                 className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
//                 onClick={() => toggleDropdown(item.label)}
//               >
//                 <div className="flex items-center">
//                   <img src={item.icon} className="w-6 h-6" alt={item.label} />
//                   {!isCollapsed && <span className="ml-3">{item.label}</span>}
//                 </div>
//                 {!isCollapsed &&
//                   (dropdownStates[item.label] ? (
//                     <FaChevronUp className={`mr-2`} />
//                   ) : (
//                     <FaChevronDown className={`mr-2`} />
//                   ))}
//               </div>
//             ) : (
//               <Link
//                 to={item.to}
//                 onClick={() => handleClick(item.to)}
//                 className={`flex items-center p-2 ${
//                   activeLink === item.to
//                     ? "text-white bg-gray-400"
//                     : "text-white"
//                 } hover:text-white hover:bg-gray-400`}
//               >
//                 <img src={item.icon} className="w-6 h-6" alt={item.label} />
//                 {!isCollapsed && <span className="ml-3">{item.label}</span>}
//               </Link>
//             )}
//             {dropdownStates[item.label] && item.children && (
//               <ul className="ml-6">
//                 {item.children.map((child, idx) => (
//                   <li key={idx}>
//                     {child.children ? (
//                       <div>
//                         <div
//                           className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
//                           onClick={() => toggleDropdown(child.label)}
//                         >
//                           <div className="flex items-center">
//                             <img
//                               src={child.icon}
//                               className="w-4 h-4"
//                               alt={child.label}
//                             />
//                             <span className="ml-3">{child.label}</span>
//                           </div>
//                           {dropdownStates[child.label] ? (
//                             <FaChevronUp className="mr-2" />
//                           ) : (
//                             <FaChevronDown className="mr-2" />
//                           )}
//                         </div>
//                         {dropdownStates[child.label] && (
//                           <ul className="ml-6">
//                             {child.children.map((subChild, subIdx) => (
//                               <li key={subIdx}>
//                                 <Link
//                                   to={subChild.to}
//                                   onClick={() => handleClick(subChild.to)}
//                                   className={`flex items-center p-2 ${
//                                     activeLink === subChild.to
//                                       ? "text-white bg-gray-400"
//                                       : "text-white"
//                                   } hover:text-white hover:bg-gray-400`}
//                                 >
//                                   <img
//                                     src={subChild.icon}
//                                     className="w-4 h-4"
//                                     alt={subChild.label}
//                                   />
//                                   <span className="ml-3">{subChild.label}</span>
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     ) : (
//                       <Link
//                         to={child.to}
//                         onClick={() => handleClick(child.to)}
//                         className={`flex items-center p-2 ${
//                           activeLink === child.to
//                             ? "text-white bg-gray-400"
//                             : "text-white"
//                         } hover:text-white hover:bg-gray-400`}
//                       >
//                         <img
//                           src={child.icon}
//                           className="w-4 h-4"
//                           alt={child.label}
//                         />
//                         <span className="ml-3">{child.label}</span>
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default LayoutSidebar;


import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../../assets/logo_05.png";
import profile from "../../../assets/ProfileSetting.png";
import Dashboard from "../../../assets/Dashboard_icon.png";
import Wishlist from "../../../assets/ManageWishlist_icon.png";
import OrderList from "../../../assets/MyOrders_icon.png";
import AddProduct from "../../../assets/AddSingleProduct.png";
import BulkProducts from "../../../assets/BulkProduct.png";
import PostingProduct from "../../../assets/Products_icon.png";
import Orders from "../../../assets/Orders_icon.png";
import Customers from "../../../assets/Customers_icon.png";
import PaymentHistory from "../../../assets/Payouts_icon.png";
import Earnings from "../../../assets/Earnings_icon.png";
import Returns from "../../../assets/Returns_icon.png";
import SalesHistory from "../../../assets/MyOrders_icon.png";
import UpsShipping from "../../../assets/UPSShipping_icon.png";
import FedExShipping from "../../../assets/UPSShipping_icon.png";
import AllRequestedQuotes from "../../../assets/RequestedForQuote_icon.png";
import AllQuotedProducts from "../../../assets/RequestedForQuote_icon.png";
import ShippingDetails from "../../../assets/ShippingSetting_icon.png";
import RequestForQuote from "../../../assets/RequestForQuote_icon.png";
import Setting from "../../../assets/Settings_icon.png";
import Buy from "../../../assets/BuySideIcon.png";
import Sell from "../../../assets/SellSideIcon.png";
import Bid from "../../../assets/BidSideIcon.png";
import Faqs from "../../../assets/Faqs.png";

function LayoutSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const localData = JSON.parse(localStorage.getItem("login"));
  const customerId = localData?.userId;
  const [userDetails, setUserDetails] = useState(null);
  const [navItems,setnavItems]=useState([]);
  useEffect(() => {
    if (customerId) {
      if (customerId.length > 1) fetchUserDetails(customerId);
    }
  }, [customerId]);

  const fetchUserDetails = async (customerId) => {
    try {
      const response = await fetch(
        `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/GetByCustomerId?customerId=${customerId}`
      );
      const data = await response.json();
      if(data)
      {
        setUserDetails(data.result[0]);
        const menuResponse = await fetch(
            `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Menu/GetByAccountType?accountTypeId=${data.result[0].customerDetails.accountTypeId}`
          );
          const menuData = await menuResponse.json();
          if(menuData)
          {
            const navItems = buildNavItems(menuData.result);
            setnavItems(navItems);

          }

      }
      // if (data.statusCode === 200 && data.loginStatus === 'Success') {
      //     console.log(userDetails);
      // } else {
      //     console.error('Failed to fetch user details:', data.message);
      // }

      console.log(userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const toggleDropdown = (section) => {
    setDropdownStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logos = 
    {
      src: profile,
      name :  userDetails?.customerDetails?.firstName+ " "+ userDetails?.customerDetails?.lastName,
      Shop_name: "Valley Pharmacy",
    }
  ;
  const buildNavItems = (menuItems) => {
    // Step 1: Organize menu items by their parent property
    const menuMap = {};
    menuItems.forEach(item => {
      const { parent } = item;
      if (!menuMap[parent]) {
        menuMap[parent] = [];
      }
      menuMap[parent].push(item);
    });
  
    // Step 2: Function to recursively build the navigation structure
    const createNavItem = (menuItem) => {
      const children = menuMap[menuItem.menuId] || [];
  
      return {
        label: menuItem.menuName,
        icon: menuItem.iconPath, // Replace with appropriate icons or map menuName to icons
        to: menuItem.navigateUrl || null,
        ...(children.length > 0 && { children: children.map(createNavItem) }),
      };
    };
  
    // Step 3: Build navItems from top-level menu items
    const navItems = menuMap[0].map(createNavItem);
    
    return navItems;
  };
  
//   const menuItems = [ /* Your menu items array */ ];
//   const navItems = buildNavItems(menuItems);
  
//   console.log(navItems);
  
//   const navItems = [
//     {
//       label: "Dashboard",
//       icon: Dashboard,
//       to: "/layout",
//     },
//     {
//       label: "Buy",
//       icon: Buy,
//       to: null, // no direct link, used for dropdown
//       children: [
//         { label: "Buy Products", to: "/layout/layoutbuy", icon: Dashboard },
//         { label: "Wishlist", to: "/layout/layoutwishlist", icon: Wishlist },
//         { label: "OrderList", to: "/layout/layoutorderlist", icon: OrderList },
//       ],
//     },
//     {
//       label: "Sell",
//       icon: Sell,
//       to: null, // no direct link, used for dropdown
//       children: [
//         { label: "Add Product", to: "/layout/addproduct", icon: AddProduct },
//         {
//           label: "Add Bulk Product",
//           to: "/layout/addbulkproduct",
//           icon: BulkProducts,
//         },
//         {
//           label: "Posting Products",
//           to: "/layout/postingproducts",
//           icon: PostingProduct,
//         },
//         { label: "Orders", to: "/layout/sellorders", icon: Orders },
//         { label: "Customers", to: "/layout/sellcustomers", icon: Customers },
//         {
//           label: "Payment History",
//           to: "/layout/sellpaymenthistory",
//           icon: PaymentHistory,
//         },
//         { label: "Earnings", to: "/layout/sellearnings", icon: Earnings },
//         { label: "Returns", to: "/layout/sellreturn", icon: Returns },
//         {
//           label: "Sales History",
//           to: "/layout/sellassignproductlist",
//           icon: SalesHistory,
//         },
//         {
//           label: "Shipping Details",
//           icon: ShippingDetails,
//           to: null, // no direct link, used for sub-dropdown
//           children: [
//             {
//               label: "UPS Shipping",
//               to: "/layout/ups-shipping",
//               icon: UpsShipping,
//             },
//             {
//               label: "FedEx Shipping",
//               to: "/layout/fedex-shipping",
//               icon: FedExShipping,
//             },
//           ],
//         },
//         {
//           label: "Request for Quote",
//           icon: RequestForQuote,
//           to: null, // no direct link, used for sub-dropdown
//           children: [
//             {
//               label: "All Requested Quotes",
//               to: "/layout/requestedquote",
//               icon: AllRequestedQuotes,
//             },
//             {
//               label: "All Quoted Products",
//               to: "/layout/quotedproducts",
//               icon: AllQuotedProducts,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "Join",
//       icon: Dashboard,
//       to: "/signup",
//     },
//     {
//       label: "Bid",
//       icon: Bid,
//       to: "/layout/layoutbid",
//     },
//     {
//       label: "Setting",
//       icon: Setting,
//       to: "/layout/layoutbid",
//     },
//     {
//       label: "FAQs",
//       icon: Faqs,
//       to: "/faqs",
//     },
//   ];

function handleLogout() {
  localStorage.removeItem("login"); // Remove login data
  localStorage.removeItem("firstname"); // Remove first name or other user data
  navigate("/"); // Redirect to the login page
}


  return (
    <div
      className={`p-2 overflow-scroll h-full w-full z-[100] font-normal font-sans flex flex-col shadow-lg ${
        isCollapsed ? "min-w-16 items-center" : "min-w-64"
      }`}
      style={{ backgroundColor: "rgba(14, 81, 140, 1)" }}
    >
      <div className="w-full flex flex-col justify-center items-center my-5">
        <Link to="/app">
          <img src={logo} className="w-44 mb-2" alt="Logo" />
        </Link>
        <div className="flex w-40 h-28 justify-center items-center border rounded-md bg-white">
          <div
            className="flex justify-center flex-col items-center"
          >
            <img
              src={logos.src}
              className="w-10 h-10 rounded-full "
              alt="Profile"
            />
            <p className="text-base text-red-500 font-semibold my-1">
              {logos.Shop_name}
            </p>
            <p className=" text-sm font-semibold">{logos.name}</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2 text-[16px]">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <div
                className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                onClick={() => toggleDropdown(item.label)}
              >
                <div className="flex items-center">
                  <img src={item.icon} className="w-6 h-6" alt={item.label} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </div>
                {!isCollapsed &&
                  (dropdownStates[item.label] ? (
                    <FaChevronUp className={`mr-2`} />
                  ) : (
                    <FaChevronDown className={`mr-2`} />
                  ))}
              </div>
            ) : (
              <Link
                to={item.to}
                onClick={() => handleClick(item.to)}
                className={`flex items-center p-2 ${
                  activeLink === item.to
                    ? "text-white bg-gray-400"
                    : "text-white"
                } hover:text-white hover:bg-gray-400`}
              >
                <img src={item.icon} className="w-6 h-6" alt={item.label} />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            )}
            {dropdownStates[item.label] && item.children && (
              <ul className="ml-6">
                {item.children.map((child, idx) => (
                  <li key={idx}>
                    {child.children ? (
                      <div>
                        <div
                          className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                          onClick={() => toggleDropdown(child.label)}
                        >
                          <div className="flex items-center">
                            <img
                              src={child.icon}
                              className="w-4 h-4"
                              alt={child.label}
                            />
                            <span className="ml-3">{child.label}</span>
                          </div>
                          {dropdownStates[child.label] ? (
                            <FaChevronUp className="mr-2" />
                          ) : (
                            <FaChevronDown className="mr-2" />
                          )}
                        </div>
                        {dropdownStates[child.label] && (
                          <ul className="ml-6">
                            {child.children.map((subChild, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={subChild.to}
                                  onClick={() => handleClick(subChild.to)}
                                  className={`flex items-center p-2 ${
                                    activeLink === subChild.to
                                      ? "text-white bg-gray-400"
                                      : "text-white"
                                  } hover:text-white hover:bg-gray-400`}
                                >
                                  <img
                                    src={subChild.icon}
                                    className="w-4 h-4"
                                    alt={subChild.label}
                                  />
                                  <span className="ml-3">{subChild.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={child.to}
                        onClick={() => handleClick(child.to)}
                        className={`flex items-center p-2 ${
                          activeLink === child.to
                            ? "text-white bg-gray-400"
                            : "text-white"
                        } hover:text-white hover:bg-gray-400`}
                      >
                        <img
                          src={child.icon}
                          className="w-4 h-4"
                          alt={child.label}
                        />
                        <span className="ml-3">{child.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
      {/* <button className="text-white bg-red-600 p-2 rounded-lg font-semibold">Logout</button> */}
      <button
  className="text-white bg-red-600 p-2 rounded-lg font-semibold"
  onClick={handleLogout}
>
  Logout
</button>

    </div>
  );
}

export default LayoutSidebar;




























