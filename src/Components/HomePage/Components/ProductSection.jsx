

import React from "react";
import { Link } from "react-router-dom"; 

const ProductSection = ({ products, heading, path }) => {
  return (
    <div className="bg-white w-full p-4">
      <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
      <div className="grid grid-cols-3 grid-rows-2 p-2">
        {products.map((item) => (
          <div key={item.id} className="">
            <div className="">
              <img
                className="w-[160px] h-[140px] object-contain bg-slate-100 rounded-sm"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="text-base">{item.name}</div>
            <div className="text-sm mb-4">{item.price}</div>
          </div>
        ))}
      </div>
      <Link to={path} className="font-semibold hover:text-red-500">See all products</Link>
    </div>
  );
};

export default ProductSection;

