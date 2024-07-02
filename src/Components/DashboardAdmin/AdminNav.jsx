import React from 'react';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";


const AdminNav = () => {

  function handleclicked() {
    navigate("/app");
  }

  let navigate = useNavigate();


  return (
    <div className="flex justify-between items-center bg-white p-4">
      <div className="font-bold text-xl cursor-pointer" onClick={handleclicked}> Admin Dashboard </div>
      <div className="flex items-center space-x-4">
        <FiUser className="w-6 h-6" />
        <div>Account Settings</div>
      </div>
    </div>
  );
};

export default AdminNav;
