// import React from "react";
// import { Link } from "react-router-dom";

// const ProductSection = ({ products, heading, path }) => {
//   return (
//     <div className="bg-white w-full p-4">
//       <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
//       <div className="grid grid-cols-3 grid-rows-2 p-2">
//         {products.map((item) => (
//           <div key={item.id} className="">
//             <div className="">
//               <img
//                 className="w-[160px] h-[140px] object-contain bg-slate-100 rounded-sm"
//                 src={item.img}
//                 alt={item.name}
//               />
//             </div>
//             <div className="text-base">{item.name}</div>
//             <div className="text-sm mb-4">{item.price}</div>
//           </div>
//         ))}
//       </div>
//       <Link to={path} className="font-semibold hover:text-red-500 flex justify-end ">See all products</Link>
//     </div>
//   );
// };

// export default ProductSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import addcart from "../../../assets/cartw_icon.png";
import fav from "../../../assets/Wishlist1_icon.png";
import nature from "../../../assets/img1.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import other from "../../../assets/CompareNav2.png";

const ProductSection = ({ products, heading, path, addCart, wishList }) => {
  const [rating, setRating] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const totalStars = 5;
  const images = Array(115).fill(nature);

  const handleCart = (index) => {
    console.log("Adding to cart:", index);
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
  };

  const handleClick = (index) => {
    const existingIndex = favoriteItems.indexOf(index);
    if (existingIndex === -1) {
      // Add to wishlist
      setFavoriteItems([...favoriteItems, index]);
    } else {
      // Remove from wishlist
      const updatedItems = favoriteItems.filter(
        (itemIndex) => itemIndex !== index
      );
      setFavoriteItems(updatedItems);
    }
  };

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

  return (
    <div className="bg-white w-full p-4">
      <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
      <div className="grid grid-cols-3 grid-rows-2  p-2">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="snap-center border rounded-sm bg-white shrink-0 m-3"
          >
            <div className="relative rounded-t-sm bg-slate-100 m-2">
              <img
                onClick={() => handleClick(index)}
                src={favoriteItems.includes(index) ? filledHeart : emptyHeart}
                className="absolute h-7 right-1 p-1 cursor-pointer"
                alt="Favorite Icon"
              />
              <img
                src={item.img} // Assuming item.img contains image URL
                className="h-40 w-40 object-contain rounded-lg"
                alt={item.name}
              />
              <img
                src={other}
                className="h-5 w-5 right-1 absolute bottom-1 text-green-700"
                alt="Other Icon"
              />
            </div>
            <div className="p-2 rounded-b-lg">
              <div className="flex justify-between flex-col font-medium">
                <h2 className="text-black font-bold">{item.name}</h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <h3 className="text-black font-semibold">{item.price}</h3>
                    <span className="text-[10px] line-through">($99.69)</span>
                  </div>
                </div>
              </div>
              <div>
                {Array.from({ length: totalStars }, (v, i) => (
                  <Star
                    key={i}
                    filled={i < rating}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
              {/* <div onClick={() => handleCart(index)}>
                <img src={addcart} className="h-7 p-1" alt="Add to Cart Icon" />
              </div> */}
              <div
                onClick={() => handleCart(index)}
                className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center  cursor-pointer"
              >
                <img src={addcart} className="h-7 p-1" />
                <p className="text-white font-semibold">ADD</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={path}
        className="font-semibold hover:text-red-500 flex justify-end underline"
      >
        See all products
      </Link>
    </div>
  );
};

export default ProductSection;
