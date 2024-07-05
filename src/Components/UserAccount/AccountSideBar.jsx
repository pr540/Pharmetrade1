import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPackage, FiUser, FiCreditCard, FiEdit, FiClipboard, FiHeart, FiRotateCw, FiBookmark, FiDollarSign, FiSettings } from 'react-icons/fi';

import myaccount from "../../assets/My Account.png";
import orders from "../../assets/MyOrders_icon.png";
import downloads from "../../assets/MyDownloadableProducts_icon.png";
import addressBook from "../../assets/AddressBook_icon.png";
import accountInfo from "../../assets/AccountInformation_icon.png";
import paymentMethods from "../../assets/StoredPayment_icon.png";
import productReviews from "../../assets/MyProductReviews_icon.png";
import newsletter from "../../assets/NewsLetterSubscription_icon.png";
import savedLater from "../../assets/SavedForLater_icon.png";
import returns from "../../assets/Returns1_icon.png";
import wishlist from "../../assets/ManageWishlist_icon.png";
import quote from "../../assets/Request_for_quote_icon.png";


const AccountSideBar = () => {


  const links = [
        { name: 'My Account', path: '/user', icon: myaccount },
        { name: 'My Orders', path: '/user/orders', icon: orders  },
        { name: 'My Downloadable Products', path: '/user/downloads', icon: downloads },
        { name: 'Address Book', path: '/user/address-book', icon: addressBook },
        { name: 'Account Information', path: '/user/account-info', icon: accountInfo },
        { name: 'Stored Payment Methods', path: '/user/payment-methods', icon: paymentMethods },
        { name: 'My Product Reviews', path: '/user/reviews', icon: productReviews },
        { name: 'Newsletter Subscription', path: '/user/newsletter', icon: newsletter  },
        { name: 'Saved for Later', path: '/user/saved', icon: savedLater },
        { name: 'Returns', path: '/user/returns', icon: returns },
        { name: 'Manage Wishlist', path: '/user/wishlist', icon: wishlist},
        { name: 'My Requested Quote', path: '/user/quote', icon: quote },
      ];

  return (
    <div className="w-80 p-8 bg-white font-normal shadow-lg font-ubuntu">
      <nav className='space-y-4'>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='flex items-center p-2 text-gray-700 hover:text-blue-900 cursor-pointer'>
            <img src={link.icon} className='w-6 h-6' alt={link.name} />
            <span className="ml-3">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AccountSideBar;

