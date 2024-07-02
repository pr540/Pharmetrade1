// import React from 'react'

// const Orders = () => {
//   return (
//     <div className='text-[25px]'>
//       Orders
//     </div>
//   )
// }

// export default Orders

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
    {
      id: "000",
      thumbnail: "D061D23",
      name: "Generic Medicine",
      attributeSet: "350",
      productStatus: "",
      status: "",
      type: "View Order",
    },
  ];
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 w-[calc(100%-288px)] h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-8">
        <div className="flex  justify-between ">
          <h1 className="text-2xl text-gray-800 font-medium">List of Orders</h1>

          <button className="bg-blue-900 flex  items-center text-white p-2 text-xl rounded-md">
            {" "}
            <FaPlus />
            Add New Product
          </button>
        </div>

        <div className="flex justify-evenly mt-6 -ml-8">
          <div className="bg-white w-72 rounded-xl h-32 p-4">
            <div className="flex  items-center justify-between">
              <h1 className="text-[17px] text-gray-700 font-normal">Total Orders</h1>
              <BsThreeDotsVertical />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-3xl font-semibold">2,420</h1>
              <span className="bg-green-100 h-7  flex w-16 text-green-500">
                {" "}
                <IoIosArrowRoundUp />
                20%
              </span>
            </div>
          </div>
          <div className="bg-white w-72 rounded-xl h-32 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[17px] text-gray-700 font-normal">Total Products</h1>
              <BsThreeDotsVertical />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-3xl font-semibold">3,843</h1>
              <span className="bg-green-100 h-7  flex w-16 text-green-500 ">
                {" "}
                <IoIosArrowRoundUp />
                25%
              </span>
            </div>
          </div>
          <div className="bg-white w-72 rounded-xl h-32 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[17px] text-gray-700 font-normal">Base Amount</h1>
              <BsThreeDotsVertical />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-3xl font-semibold">1,700</h1>
              <span className="bg-red-100 h-7  text-red-500 flex w-16">
                {" "}
                <IoIosArrowRoundDown />
                -11%
              </span>
            </div>
          </div>
          <div className="bg-white w-72 rounded-xl h-32 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[17px] text-gray-700 font-normal">Purchase Amount</h1>
              <BsThreeDotsVertical />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-3xl font-semibold">2,530</h1>
              <span className="bg-green-100 h-7  flex w-16 text-green-500">
                {" "}
                <IoIosArrowRoundUp />
                17%
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          {/* search start */}
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-xl  h-12 w-64 text-left p-2"
            />
            <CiSearch
              className="
                absolute right-0 top-4 text-gray-400 mr-2
                "
            />
          </div>
          {/* search end */}
          <div className="flex">
            <div className="flex  p-1 ">
              <FaFilter className="m-2" />
              {/* <button className='text-2xl'>Filter</button> */}
            </div>
            <div className="flex bg-white mx-4 h-11 w-48 justify-evenly border rounded-md">
              {/* <IoMdSettings className='m-2 text-3xl' /> */}
              {/* <label className='text-2xl mt-2'>Columns</label> */}
              <select className="m-2">
                <option>-Select Group-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border rounded-md bg-white mt-4">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className=" border-b-2">
                <th className="px-4 py-2 text-left ">Order ID</th>
                <th className="px-4 py-2 text-left ">Purchased On</th>
                <th className="px-4 py-2 text-left ">Products</th>
                <th className="px-4 py-2 text-left ">Total</th>
                <th className="px-4 py-2 text-left ">Customer</th>
                <th className="px-4 py-2 text-left ">Status</th>
                <th className="px-4 py-2 text-left ">View</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 ">{product.id}</td>
                  <td className="px-4 py-2">{product.thumbnail}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.attributeSet}</td>
                  <td className="px-4 py-2">{product.productStatus}</td>
                  <td className="px-4 py-2">{product.status}</td>
                  <td className="px-4 py-2">{product.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
