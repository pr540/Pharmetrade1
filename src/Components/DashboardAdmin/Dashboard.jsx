import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 flex-grow bg-gray-100" >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg mb-2">Order Status</h2>
          <ul>
            <li>Pending: 10</li>
            <li>Processing: 5</li>
            <li>Complete: 20</li>
          </ul>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg mb-2">Products</h2>
          <ul>
            <li>Total Products: 50</li>
            <li>Out of Stock: 10</li>
          </ul>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg mb-2">Customers</h2>
          <ul>
            <li>Total Customers: 100</li>
            <li>New Customers: 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
