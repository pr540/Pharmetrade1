


import React from 'react';
import { Link } from 'react-router-dom';

const AccountSideBar = () => {
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
      <div className='w-full pl-8 '>
        <div className='border rounded-lg'>
        <ul>
          {links.map(link => (
            <li key={link.path} className='p-4 border border-b-gray-200'>
              <Link to={link.path} className='text-black text-xl hover:text-blue-700'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
  );
};

export default AccountSideBar;
