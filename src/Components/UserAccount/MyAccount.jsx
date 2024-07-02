// import React from 'react'

// const MyAccount = () => {
//   return (
//     <div className=' w-full '>  
//       <h2 className='text-2xl font-bold '>My Account</h2>
//     </div>
//   )
// }

// export default MyAccount


import React, { useState } from 'react';

const MyAccount = () => {
  const [selectedSection, setSelectedSection] = useState('details');

  const renderSection = () => {
    switch (selectedSection) {
      case 'details':
        return <div>Here are your account details...</div>;
      case 'address':
        return <div>Here is your address information...</div>;
      case 'delete':
        return <div>Here you can delete your account...</div>;
      case 'password':
        return <div>Here you can change your password...</div>;
      default:
        return <div>Here are your account details...</div>;
    }
  };

  return (
    <div className='w-full'>
      <h2 className='text-3xl font-bold'>My Account</h2>
      <div className='flex space-x-4 mt-4 border-b-2  text-2xl font-bold'>
        <div
          className={`py-2 px-4  ${selectedSection === 'details' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-white'}`}
          onClick={() => setSelectedSection('details')}
        >
          Details
        </div>
        <div
          className={`py-2 px-4  ${selectedSection === 'address' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-gray-200'}`}
          onClick={() => setSelectedSection('address')}
        >
          Address
        </div>
        <div
          className={`py-2 px-4  ${selectedSection === 'delete' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-gray-200'}`}
          onClick={() => setSelectedSection('delete')}
        >
          Delete Account
        </div>
        <div
          className={`py-2 px-4  ${selectedSection === 'password' ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-gray-200'}`}
          onClick={() => setSelectedSection('password')}
        >
          Change Password
        </div>
      </div>
      <div className='mt-4'>
        {renderSection()}
      </div>
    </div>
  );
};

export default MyAccount;
