import React from "react";

const AssignProduct = () => {
  return (
    <div className=" bg-gray-100 w-[calc(100%-288px)] h-full flex justify-center items-center">
      <div className="w-[95%] h-full mt-8">
        <p className="text-2xl mb-8 text-blue-900 font-medium">
          Marketplace Assigned Product
        </p>
        <p className="bg-yellow-50 p-2 mb-8">
          Assign product is available for Simple, Configurable and Virtual type
          products.
        </p>

        <h2 className="text-2xl border-b p-2 border-b-black mb-8">
          Assign Product
        </h2>
        <div className="flex items-center">
          <label className="text-xl">
            Search For Product<span className="text-red-700"> *</span>
          </label>
          <input className="p-1 border m-2 " />
          <button className="p-2 bg-blue-900 text-white w-24 rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignProduct;
