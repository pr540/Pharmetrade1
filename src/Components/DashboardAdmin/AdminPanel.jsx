
// import React, { useState } from 'react';
// import Sidebar from "./SideBar";
// import AdminNav from './AdminNav';
// import Dashboard from './Dashboard';
// import Products from './AddProducts';

// function AdminPanel() {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const handleNavClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="flex h-screen bg-gray-200">
//       <Sidebar onNavClick={handleNavClick} /> 
//       <div className="flex-1 flex flex-col">
//         <AdminNav  />
//         {activeTab === 'dashboard' && <Dashboard />}
//         {activeTab === 'products' && <Products />}
//       </div>
//     </div>
//   );
// }

// export default AdminPanel;


import React, { useState } from 'react';
import Sidebar from "./SideBar";
import AdminNav from './AdminNav';
import Dashboard from './Dashboard';
import Products from './AddProducts';
import AddProducts from './AddProducts';
import { useLocation } from 'react-router-dom';
import Orders from './Orders';

function AdminPanel() {

  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-200">
      < AdminNav/> 
      <div className="flex-1 flex">
        <Sidebar />
        {/* <Outlet/> */}
        {location.pathname === '/admin' && <Dashboard />}
        {location.pathname === '/admin/orders' && <Orders />}
        {location.pathname === '/admin/addproducts' && <AddProducts />}
      </div>
    </div>
  );
}

export default AdminPanel;

