


// import React from 'react';
// import { Link } from 'react-router-dom';

// const AccountSideBar = () => {
//   const links = [
//     { name: 'My Account', path: '/user' },
//     { name: 'My Orders', path: '/user/orders' },
//     { name: 'My Downloadable Products', path: '/user/downloads' },
//     { name: 'Address Book', path: '/user/address-book' },
//     { name: 'Account Information', path: '/user/account-info' },
//     { name: 'Stored Payment Methods', path: '/user/payment-methods' },
//     { name: 'My Product Reviews', path: '/user/reviews' },
//     { name: 'Newsletter Subscription', path: '/user/newsletter' },
//     { name: 'Saved for Later', path: '/user/saved' },
//     { name: 'Returns', path: '/user/returns' },
//     { name: 'Manage Wishlist', path: '/user/wishlist' },
//     { name: 'My Requested Quote', path: '/user/quote' },
//   ];

//   return (
//       <div className='w-72 font-ubuntu shadow-lg '>
//         <div className=' border '>
//         <ul>
//           {links.map(link => (
//             <li key={link.path} className='p-4 '>
//               <Link to={link.path} className='text-black text-xl hover:text-blue-700'>
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         </div>
//       </div>
//   );
// };

// export default AccountSideBar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPackage, FiUser, FiCreditCard, FiEdit, FiClipboard, FiHeart, FiRotateCw, FiBookmark, FiDollarSign, FiSettings } from 'react-icons/fi';

// import dashboard from "../../assets/Dashboard_icon.png";
// import orders from "../../assets/Orders_icon.png";
// import downloads from "../../assets/Download_icon.png";
// import addressBook from "../../assets/Address_Book_icon.png";
// import accountInfo from "../../assets/Account_Information_icon.png";
// import paymentMethods from "../../assets/Payment_Methods_icon.png";
// import productReviews from "../../assets/Review_icon.png";
// import newsletter from "../../assets/Newsletter_icon.png";
// import savedLater from "../../assets/Saved_Later_icon.png";
// import returns from "../../assets/Returns_icon.png";
// import wishlist from "../../assets/Wishlist_icon.png";
// import quote from "../../assets/Request_for_quote_icon.png";

const AccountSideBar = () => {
  // const links = [
  //   { name: 'Dashboard', path: '/user', icon: dashboard },
  //   { name: 'Orders', path: '/user/orders', icon: orders },
  //   { name: 'Downloadable Products', path: '/user/downloads', icon: downloads },
  //   { name: 'Address Book', path: '/user/address-book', icon: addressBook },
  //   { name: 'Account Information', path: '/user/account-info', icon: accountInfo },
  //   { name: 'Stored Payment Methods', path: '/user/payment-methods', icon: paymentMethods },
  //   { name: 'My Product Reviews', path: '/user/reviews', icon: productReviews },
  //   { name: 'Newsletter Subscription', path: '/user/newsletter', icon: newsletter },
  //   { name: 'Saved for Later', path: '/user/saved', icon: savedLater },
  //   { name: 'Returns', path: '/user/returns', icon: returns },
  //   { name: 'Manage Wishlist', path: '/user/wishlist', icon: wishlist },
  //   { name: 'My Requested Quote', path: '/user/quote', icon: quote },
  // ];


  const links = [
        { name: 'My Account', path: '/user' },
        { name: 'My Orders', path: '/user/orders' },
        { name: 'My Downloadable Products', path: '/user/downloads' },
        { name: 'Address Book', path: '/user/address-book' },
        { name: 'Account Information', path: '/user/account-info' },
        { name: 'Stored Payment Methods', path: '/user/payment-methods' },
        { name: 'My Product Reviews', path: '/user/reviews' },
        { name: 'Newsletter Subscription', path: '/user/newsletter' },
        { name: 'Saved for Later', path: '/user/saved' },
        { name: 'Returns', path: '/user/returns' },
        { name: 'Manage Wishlist', path: '/user/wishlist' },
        { name: 'My Requested Quote', path: '/user/quote' },
      ];

  return (
    <div className="w-80 p-8 bg-white font-normal shadow-lg font-ubuntu">
      <nav className='space-y-4'>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='flex items-center p-2 text-gray-700 hover:text-blue-900 cursor-pointer'
          >
            {/* <img src={link.icon} className='w-6 h-6' alt={link.name} /> */}
            <span className="ml-3">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AccountSideBar;

