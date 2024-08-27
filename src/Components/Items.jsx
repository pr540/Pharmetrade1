// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import nature from "../assets/nature.png";
// import logo from "../assets/pharmalogo.png";
// import arrowleft from "../assets/leftarr.png";
// import heart from "../assets/love.png";
// import gal from "../assets/gal.png";
// import ProductDetails from "./ProductDetails";
// import Img2 from "../assets/img2.png";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import other from "../assets/other.png";
// import PRight from "./PRight";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import { CiDiscount1 } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";
// import { TbSquareRoundedCheckFilled } from "react-icons/tb";
// import product from "../assets/Icons/Product_icon.png";
// import phone from "../assets/Icons/phone_icon.png";
// import report from "../assets/Icons/report_icon.png";
// import ScrollToTop from "./ScrollToTop";
// import compare from "../assets/compare_icon.png";
// import aproduct from "../assets/aboutproduct_icon.png";
// import wishlist from "../assets/Wishllist_icon.png";
// import videoSample from "../assets/Icons/videoSample.mp4";
// import offer1 from "../assets/offers_1.png";
// import ProductSlider from "./HomePage/Components/ProductSlider";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";

// function Items({ onClose, topMargin, addCart, cartItems, setCartItems }) {
//   const [count, setCount] = useState(0);
//   const [selectedDiv, setSelectedDiv] = useState("div1");
//   const [img, setimg] = useState(nature);
//   const [show, setshow] = useState(1);
//   const { id } = useParams();
//   const images = Array(8).fill(nature);

//   const [selectedMl, setSelectedMl] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [showViewCart, setShowViewCart] = useState(false);
//   const [isItemAdded, setIsItemAdded] = useState(false);

//   const { productID } = useParams();
//   const [ProductData, setProductData] = useState(null);

//   useEffect(() => {
//     const GetProductById = async () => {
//       try {
//         const response = await fetch(
//           `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetById?productId=${productID}`,
//           {
//             method: "GET",
//           }
//         );

//         if (!response.ok) {
//           const errorDetails = await response.json();
//           throw new Error(
//             `Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorDetails)}`
//           );
//         }

//         const result = await response.json();
//         setProductData(result.result[0]);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//       }
//     };

//     GetProductById();
//   }, [productID]); // Adding productID to the dependency array

//   console.log(ProductData);

//   const handleAddToCart = () => {
//     setShowViewCart(true);
//     setIsItemAdded(true);
//   };

//   const mlOptions = [250, 350, 500];
//   const colorOptions = [
//     { color: "sky-500", textColor: "text-sky-500" },
//     { color: "green-500", textColor: "text-green-500" },
//     { color: "orange-400", textColor: "text-orange-400" },
//   ];

//   const clearSelection = () => {
//     setSelectedMl(null);
//     setSelectedColor(null);
//   };

//   function handleCart(index) {
//     const prolist = {
//       id: index,
//       src: images[index],
//       price: "$50.99",
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     addCart(prolist);
//     navigate("/cart");
//   }

//   const components = {
//     div1: (
//       <div>
//         <button>shell</button>
//       </div>
//     ),
//     div2: (
//       <div>
//         <button>marble</button>
//       </div>
//     ),
//   };

//   let navigate = useNavigate();

//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     country: "",
//     state: "",
//     postalCode: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     console.log("Form data submitted:", formData);
//   };

//   const [isHovered, setIsHovered] = useState(false);

//   const contents = [
//     {
//       name: "Vitamin C(1000IU) Cap X",
//       name2: "UPN Member Price $25.00",
//       price3: "$30.00-$40.00",
//     },
//   ];
//   const [rating, setRating] = useState(0);

//   const totalStars = 5;
//   const Star = ({ filled, onClick }) => (
//     <span
//       onClick={onClick}
//       style={{
//         cursor: "pointer",
//         fontSize: "25px",
//         color: "orange",
//         marginLeft: "8px",
//       }}
//     >
//       {filled ? "★" : "☆"}
//     </span>
//   );

//   const ratingPercentages = {
//     5: 40, // 40% of ratings are 5 stars
//     4: 30, // 30% of ratings are 4 stars
//     3: 20, // 20% of ratings are 3 stars
//     2: 5, // 5% of ratings are 2 stars
//     1: 5, // 5% of ratings are 1 star
//   };

//   const newProducts = [
//     { id: 1, img: img1, name: "Nature Mask", price: "$99.00" },
//     { id: 2, img: img2, name: "Eco-Friendly Mask", price: "$89.00" },
//     { id: 3, img: img3, name: "Reusable Mask", price: "$79.00" },
//     { id: 4, img: img4, name: "Protective Mask", price: "$69.00" },
//     { id: 5, img: img5, name: "Breathable Mask", price: "$59.00" },
//     { id: 6, img: img1, name: "Comfy Mask", price: "$49.00" },
//     { id: 7, img: img2, name: "Stylish Mask", price: "$39.00" },
//     { id: 8, img: img3, name: "Daily Mask", price: "$29.00" },
//     { id: 9, img: img4, name: "Night Mask", price: "$19.00" },
//     { id: 10, img: img5, name: "Morning Mask", price: "$9.00" },
//   ];

//   return (
//     <div
//       className="Largest:w-[1550px]  Laptop:w-full  w-full  flex flex-col font-sans overflow-hidden"
//       style={{
//         marginTop: `${topMargin}px`,
//       }}
//     >
//       <div className="  flex gap-20 mt-4 justify-around h-full w-full">
//         <div className="w-[40%] h-full">
//           <div className="flex flex-col ml-16  cursor-pointer">
//             <div className="bg-gray-200 border rounded-lg w-68 h-[350px] flex justify-center items-center">
//               {img === videoSample ? (
//                 <video className="object-contain h-72" controls>
//                   <source src={videoSample} type="video/mp4" />
//                 </video>
//               ) : (
//                 <img src={img} className="object-contain h-72" alt="Product" />
//               )}
//             </div>
//             <div className="flex mt-4 overflow-y-scroll">
//               <img
//                 onMouseEnter={() => setimg(Img2)}
//                 src={Img2}
//                 className="w-20 mx-2 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-28"
//               />
//               <img
//                 onMouseEnter={() => setimg(nature)}
//                 src={nature}
//                 className="w-20 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-28"
//               />
//               <img
//                 onMouseEnter={() => setimg(Img2)}
//                 src={Img2}
//                 className="w-20 mx-2 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-28"
//               />
//               <div
//                 className={`border rounded-lg w-20 h-28 ${
//                   isHovered ? "bg-gray-200" : ""
//                 }`}
//                 onMouseEnter={() => {
//                   setimg(videoSample);
//                   setIsHovered(true);
//                 }}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <iframe
//                   src={videoSample}
//                   type="video/mp4"
//                   className="w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-[60%] overflow-scroll h-[500px] flex">
//           <div className="w-[50%] ">
//             <div>
//               <h1 className="text-2xl font-semibold text-box">
//                 Vitamin C(1000IU) Cap X
//                 {/* {ProductData?.productName} */}
//               </h1>
//               <h3 className="text-orange-400 font-light text-base mb-2">
//                 UPN Member Price{" "}
//                 <span className="text-orange-400 font-semibold">$25.00</span>
//               </h3>

//               <p className="text-sky-500 font-semibold text-[20px] my-2">
//                 $30.00-$40.00
//               </p>
//               <div className="-mt-3">
//                 {Array.from({ length: totalStars }, (v, i) => (
//                   <Star
//                     key={i}
//                     filled={i < rating}
//                     onClick={() => setRating(i + 1)}
//                     className="text-orange-400 "
//                   />
//                 ))}
//                 <p className="-mt-2">
//                   The rating is {rating} out of {totalStars}.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col text-[17px] border-y-2 w-[320px] py-4 mb-2">
//               <div className="flex items-center ">
//                 <TbSquareRoundedCheckFilled className="text-sky-500  mr-1" />
//                 <span>In Stock</span>
//                 <div className="flex">
//                   <p className="text-sky-500 font-semibold ml-4">NDC/UPC: </p>
//                   <span>6545555</span>
//                 </div>
//               </div>
//               <div className="flex">
//                 <div className="flex">
//                   <p className="text-sky-500 font-semibold ">SKU:</p>
//                   <span>6545555</span>
//                 </div>
//                 <div className="flex">
//                   <p className="text-sky-500 font-semibold ml-4">
//                     Expiration Date:
//                   </p>
//                   <span>20/06/2025</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="w-[320px] h-[150px] flex flex-col justify-center items-center border rounded-lg bg-gray-200">
//                 <div className="flex flex-row p-1 items-center gap-2">
//                   <button
//                     onClick={() => setCount((prevCount) => prevCount - 1)}
//                     className="bg-gray-500 text-white border px-4 text-[14px] py-1 rounded-full"
//                   >
//                     -
//                   </button>
//                   <h2 className="text-xl bg-gray-100 border rounded-lg w-16 flex justify-center py-1">
//                     {count}
//                   </h2>
//                   <button
//                     onClick={() => setCount((prevCount) => prevCount + 1)}
//                     className="bg-blue-900 text-white border px-4 text-[14px] py-1 rounded-full"
//                   >
//                     +
//                   </button>

//                   <button
//                     className="bg-sky-500 w-32 border rounded-full font-semibold p-2 text-white flex justify-center items-center"
//                     onClick={handleAddToCart}
//                   >
//                     <FiShoppingCart className="text-[17px] mx-1" />
//                     Add to Cart
//                   </button>
//                 </div>
//                 <div className="flex flex-row gap-2 mt-2">
//                   <button
//                     className={`w-32 text-white font-semibold text-lg border rounded-full p-1 items-center flex justify-center ${
//                       isItemAdded ? "bg-green-500" : "bg-gray-500"
//                     }`}
//                     onClick={() => handleCart(id)}
//                   >
//                     View Cart
//                   </button>
//                   <button className="w-40 bg-blue-900 text-white font-semibold text-lg border rounded-full p-1 flex justify-center">
//                     More Offers
//                   </button>
//                 </div>
//                 <button className="bg-orange-400 mt-2 w-[300px] text-white font-semibold text-lg border rounded-full p-1 flex justify-center">
//                   {/* <FiShoppingCart className="text-[20px] mt-1 mx-1" /> */}
//                   Buy Now
//                 </button>
//               </div>

//               <div className="flex flex-col my-8">
//                 <div className="flex ">
//                   <div className="flex text-[17px] ">
//                     <p className="text-blue-400 mr-2">
//                       {/* <FaRegHeart /> */}
//                       <img src={wishlist} className="w-6 h-6" />
//                     </p>
//                     <p className="underline">Add to wishlist</p>
//                   </div>
//                   <div className="flex text-[17px] ml-2">
//                     <p className="text-blue-400  mr-2">
//                       {/* <FaRegHeart /> */}
//                       <img src={compare} className="w-6 h-6" />
//                     </p>
//                     <p className="underline">Add to compare</p>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex text-[17px] mt-2 ">
//                     <p className="text-blue-400  mr-2">
//                       {/* <MdOutlineMail /> */}
//                       <img src={aproduct} className="w-6 h-6" />
//                     </p>
//                     <p className="underline">Ask about product </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-100 p-2 w-full border rounded-lg my-2 flex text-sky-400">
//               <p>
//                 <CiDiscount1 className=" text-2xl" />
//               </p>{" "}
//               {""} {""}
//               <p className=" text-[15px]  font-semibold">
//                 Add 15 products to cart and get 10$ discount
//               </p>
//             </div>

//             <div className=" w-full flex justify-center flex-col ">
//               <div className="w-full flex items-center justify-between p-2  bg-gray-100 rounded-lg">
//                 <span className="text-base font-semibold">Ship to</span>
//                 <button
//                   onClick={() => setIsFormVisible(!isFormVisible)}
//                   className="text-base"
//                 >
//                   {" "}
//                   Calculate Shipping Cost
//                   {isFormVisible ? "˄" : "˅"}
//                 </button>
//               </div>
//               {isFormVisible && (
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col  w-[80%]  p-4  bg-gray-100 rounded-lg"
//                 >
//                   <div className="w-full mb-4">
//                     <label
//                       htmlFor="country"
//                       className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                       Country
//                     </label>
//                     <input
//                       type="text"
//                       id="country"
//                       name="country"
//                       placeholder="United States"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       className="w-full p-1 border border-gray-300 rounded-md"
//                       required
//                     />
//                   </div>
//                   <div className="w-full mb-4">
//                     <label
//                       htmlFor="state"
//                       className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                       State
//                     </label>
//                     <input
//                       type="text"
//                       id="state"
//                       name="state"
//                       placeholder="Please select a region, state or province"
//                       value={formData.state}
//                       onChange={handleInputChange}
//                       className="w-full p-1 border border-gray-300 rounded-md"
//                       required
//                     />
//                   </div>
//                   <div className="w-full mb-4">
//                     <label
//                       htmlFor="postalCode"
//                       className="block mb-2 text-sm font-medium text-gray-700"
//                     >
//                       Postal Code
//                     </label>
//                     <input
//                       type="text"
//                       id="postalCode"
//                       name="postalCode"
//                       value={formData.postalCode}
//                       onChange={handleInputChange}
//                       className="w-full p-1 border border-gray-300 rounded-md"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="px-2 py-2 w-52  font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-600"
//                   >
//                     Calculate
//                   </button>
//                 </form>
//               )}

//               <div className=" w-[80%] mt-3  bg-white space-y-4">
//                 <h1 className="text-lg font-bold">Quick Overview</h1>
//                 <p>
//                   The Ordinary's Azelaic Acid 10% Suspension Brightening Cream
//                   is a multi-functional formula great for those looking for
//                   solutions for dullness, uneven tone, and textural
//                   irregularities.
//                 </p>
//                 <div className="border-t border-gray-200 pt-4 text-[15px] font-sans">
//                   <div className="p-2 bg-gray-100 rounded-lg mr-4">
//                     <p className="font-semibold text-gray-600">SOLD BY</p>
//                     <p className="text-red-600">Manda</p>
//                     <p className="hover:text-red-600">Company Website</p>
//                     <div className="flex flex-col">
//                       <div className="flex  items-center space-x-2 hover:text-red-500">
//                         <img src={product} className="w-fit h-10" />
//                         <span className=" font-semibold">17 PRODUCTS</span>
//                       </div>
//                       <div className="flex items-center space-x-2 hover:text-red-500">
//                         <img src={phone} className="w-fit h-10" />
//                         <span>Contact Seller</span>
//                       </div>
//                       <div className="flex items-center space-x-2 hover:text-red-500">
//                         <img src={report} className="w-fit h-8" />
//                         <span>Report Product</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-[40%] h-full mr-4 border ounded-lg shadow-lg p-3">
//             <div className="">
//               <h1 className=" text-lg text-red-500 ">Offers</h1>
//               <div className="flex justify-center items-center cursor-pointer">
//                 <img src={offer1} className="w-44" />

//                 {contents.map((content, index) => {
//                   <div key={index}>
//                     <h1>{content.name}</h1>
//                   </div>;
//                 })}
//               </div>
//               <div className="flex flex-col justify-center items-center cursor-pointer">
//                 <h1 className="text-lg font-semibold text-blue-900">
//                   {" "}
//                   Vitamin C(1000IU) Cap X
//                 </h1>
//                 <h1 className="text-sm">UPN Member Price $25.00</h1>
//                 <p className="text-red-500">$30.00-$40.00</p>

//                 <div>
//                   {Array.from({ length: totalStars }, (v, i) => (
//                     <Star
//                       key={i}
//                       filled={i < rating}
//                       onClick={() => setRating(i + 1)}
//                       className="text-orange-400 mt-2"
//                     />
//                   ))}
//                   <p>
//                     The rating is {rating} out of {totalStars}.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-evenly items-center mt-4">
//                 <button className=" mt-2 w-32 text-white bg-orange-400 font-semibold text-base border rounded-full p-2 flex justify-center ">
//                   {/* <FiShoppingCart className="text-[20px] mt-1 mx-1" /> */}
//                   Buy Now
//                 </button>
//                 <button
//                   className=" mt-2 w-32  text-white font-semibold text-base border rounded-full p-2 flex justify-center items-center bg-blue-900 hover:text-blue-900 hover:bg-white"
//                   onClick={handleAddToCart}
//                 >
//                   <FiShoppingCart className=" mx-1" />
//                   Add to Cart
//                 </button>
//               </div>
//               <div>
//                 <div className=" mt-2 text-[17px] flex justify-center items-center  cursor-pointer hover:text-red-400 ">
//                   <p className=" flex ">Add to wishlist</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-full w-full flex flex-col justify-center items-center">
//         <ProductDetails />

//         <div className="w-[92%] ">
//           <ProductSlider
//             addCart={addCart}
//             Title={"Alterntives"}
//             data={newProducts}
//           />
//         </div>

//         <div className="w-[92%] flex flex-col md:flex-row justify-start gap-8 p-4">
//           <div className="w-full md:w-1/3">
//             <h2 className="text-xl font-bold text-black mb-4">
//               RATINGS & REVIEWS
//             </h2>
//             {[5, 4, 3, 2, 1].map((rating) => (
//               <div key={rating} className="flex items-center mb-4">
//                 <span className="text-sm font-medium flex text-gray-700">
//                   {rating} <span> ★</span>
//                 </span>
//                 <div className="w-full h-3 mx-3 bg-gray-200 rounded">
//                   <div
//                     className={`h-full bg-blue-500 rounded`}
//                     style={{ width: `${ratingPercentages[rating]}%` }}
//                   ></div>
//                 </div>
//                 <span className="text-sm text-gray-700">
//                   {ratingPercentages[rating]}%
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="w-full md:w-2/3">
//             <h2 className="text-xl font-bold text-blue-900 mb-4">
//               Customer Say
//             </h2>
//             {/* Example of a single review */}
//             <div className="p-4 mb-4 bg-white border border-gray-200 rounded shadow-sm">
//               <p className="text-gray-800">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vivamus lacinia odio vitae vestibulum vestibulum."
//               </p>
//               <div className="mt-2 text-sm text-gray-500">- Testing</div>
//             </div>
//             {/* Repeat above div for multiple reviews */}
//           </div>
//         </div>
//       </div>

//       <ScrollToTop />
//     </div>
//   );
// }

// export default Items;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import nature from "../assets/nature.png";
import logo from "../assets/pharmalogo.png";
import arrowleft from "../assets/leftarr.png";
import heart from "../assets/love.png";
import gal from "../assets/gal.png";
import ProductDetails from "./ProductDetails";
import Img2 from "../assets/img2.png";
// import addcart from "../assets/addcart.png";
import addcart from "../assets/cartw_icon.png";
import fav from "../assets/fav.png";
import other from "../assets/other.png";
import PRight from "./PRight";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import product from "../assets/Icons/Product_icon.png";
import phone from "../assets/Icons/phone_icon.png";
import report from "../assets/Icons/report_icon.png";
import ScrollToTop from "./ScrollToTop";
// import compare from "../assets/compare_icon.png";
import aproduct from "../assets/aboutproduct_icon.png";
// import wishlist from "../assets/Wishllist_icon.png";
import videoSample from "../assets/Icons/videoSample.mp4";
import offer1 from "../assets/offers_1.png";
import ProductSlider from "./HomePage/Components/ProductSlider";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import wishlist from "../assets/wishlistnav_icon.png";
import cart from "../assets/CartNav_icon.png";
import compare from "../assets/CompareNav2.png";
import dropdown from "../assets/Down-arrow .png";

import DropUpIcon from "../assets/Icons/dropDownb.png";
import DropDownIcon from "../assets/Icons/dropUpB.png";

function Items({
  onClose,
  topMargin,
  addCart,
  cartItems,
  setCartItems,
  whishlist,
}) {
  const [count, setCount] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState("div1");
  const [img, setimg] = useState(nature);
  const [show, setshow] = useState(1);
  const { id } = useParams();
  console.log(id);
  const images = Array(8).fill(nature);

  const [selectedMl, setSelectedMl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  // const [showViewCart, setShowViewCart] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [newProducts,setnewProducts] = useState([]);
  const [prod, setprod] = useState(null);

  useEffect(() => {
    const NewProductsAPI =async ()=>{
      try {
        const response = await fetch(
          `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetRecentSoldProducts?numberOfProducts=10`
      );
      const getbyid = await fetch(
        `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetById?productId=${id}`
    );
      const data = await response.json();
      const prod = await getbyid.json();
      setnewProducts(data.result);
      console.log(data.result)
      console.log("getbyid",prod.result)
      setprod(prod.result[0])
      } catch (error) { 
        console.log(error);
      }
    }
    NewProductsAPI();
    
  }, [])
  const handleAddToCart = () => {
    // setShowViewCart(true);
    setIsItemAdded(true);
  };

  const mlOptions = [250, 350, 500];
  const colorOptions = [
    { color: "sky-500", textColor: "text-sky-500" },
    { color: "green-500", textColor: "text-green-500" },
    { color: "orange-400", textColor: "text-orange-400" },
  ];

  const clearSelection = () => {
    setSelectedMl(null);
    setSelectedColor(null);
  };

  function handleCart(index) {
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
    // navigate("/cart");
  }

  function handleClick(index) {
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    whishlist(prolist);
    // navigate("/cart");
  }

  const components = {
    div1: (
      <div>
        <button>shell</button>
      </div>
    ),
    div2: (
      <div>
        <button>marble</button>
      </div>
    ),
  };

  let navigate = useNavigate();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form data submitted:", formData);
  };

  const [isHovered, setIsHovered] = useState(false);

  const contents = [
    {
      name: "Vitamin C(1000IU) Cap X",
      name2: "UPN Member Price $25.00",
      price3: "$30.00-$40.00",
    },
  ];
  const [rating, setRating] = useState(0);

  const totalStars = 5;
  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontSize: "25px",
        color: "orange",
        marginLeft: "8px",
      }}
    >
      {filled ? "★" : "☆"}
    </span>
  );

  const ratingPercentages = {
    5: 40, // 40% of ratings are 5 stars
    4: 30, // 30% of ratings are 4 stars
    3: 20, // 20% of ratings are 3 stars
    2: 5, // 5% of ratings are 2 stars
    1: 5, // 5% of ratings are 1 star
  };

  // const newProducts = [
  //   { id: 1, img: img1, name: "Nature Mask", price: "$99.00" },
  //   { id: 2, img: img2, name: "Eco-Friendly Mask", price: "$89.00" },
  //   { id: 3, img: img3, name: "Reusable Mask", price: "$79.00" },
  //   { id: 4, img: img4, name: "Protective Mask", price: "$69.00" },
  //   { id: 5, img: img5, name: "Breathable Mask", price: "$59.00" },
  //   { id: 6, img: img1, name: "Comfy Mask", price: "$49.00" },
  //   { id: 7, img: img2, name: "Stylish Mask", price: "$39.00" },
  //   { id: 8, img: img3, name: "Daily Mask", price: "$29.00" },
  //   { id: 9, img: img4, name: "Night Mask", price: "$19.00" },
  //   { id: 10, img: img5, name: "Morning Mask", price: "$9.00" },
  // ];

  const [popup, SetPopup] = useState(false);

  const handleopen = () => {
    SetPopup(true);
  };
  const handleremove = () => {
    SetPopup(false);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  console.log(prod)
  return (
    <div
      className="Largest:w-[1550px] mt-2  Laptop:w-full  w-full  flex flex-col font-sans overflow-hidden"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="  flex gap-4 mt-4 justify-around h-full w-full  mb-4">
        <div className="w-[40%] h-full mb-3">
          <div className="flex ml-10  cursor-pointer">
          <div className="flex flex-col mr-4 items-center overflow-y-scroll">
              <img
                onMouseEnter={() => setimg(prod?.imageUrl)}
                src={prod?.imageUrl}
                className="w-16 object-cover my-2 bg-gray-200 border rounded-lg object-fit hover:border-sky-500 hover:border-2 h-20"
              />
              <img
                onMouseEnter={() => setimg(prod?.imageUrl)}
                src={nature}
                className="w-16 bg-gray-200 border rounded-lg object-fit hover:border-sky-500 hover:border-2 h-20"
              />
              <img
                onMouseEnter={() => setimg(Img2)}
                src={Img2}
                className="w-16 my-2 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-20"
              />
              <div
                className={` w-16 h-20 ${
                  isHovered ? "bg-gray-200" : ""
                }`}
                onMouseEnter={() => {
                  setimg(videoSample);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                <iframe
                  src={videoSample}
                  type="video/mp4"
                  className="w-full h-full rounded-lg border"
                />
              </div>
            </div>
            <div className="bg-gray-200 border rounded-lg w-68 h-[400px] flex justify-center items-center">
              {img === videoSample ? (
                <video className="object-contain w-96 h-72 " controls>
                  <source src={videoSample} type="video/mp4" className="" />
                </video>
              ) : (
                <img src={prod?.imageUrl} className="object-contain w-96 h-72" alt="Product" />
              )}
            </div>
         
          </div>
        </div>

        <div className="w-[60%] overflow-scroll justify-between h-[500px] flex border-none">
          <div className="w-[50%] ">
            <div className="  border-b-2">
              <h1 className="text-2xl font-semibold text-box">
                {/* Vitamin C(1000IU) Cap X */}
                {prod?.productName}
              </h1>
              <h3 className="text-orange-400 font-light text-sm">
                UPN Member Price{" "}
                <span className="text-orange-400 font-semibold">$25.00</span>
              </h3>

              <div className="flex items-center">
                <span className="text-sky-500 font-semibold text-[18px] ">
                  $30.00
                </span>
                <p 
                   className="text-xs ml-1 line-through">$40{" "}
                </p>
              </div>
              <div className="text-[12px]">Inclusive of all taxes</div>

              <div className="flex items-center   ">
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>★</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <span style={{ fontSize: "24px", color: "orange" }}>☆</span>
                <div className="ml-2 text-[13px]">(1048 ratings)</div>
              </div>
            </div>

            {/* <div className="flex flex-col text-[17px] border-y-2 w-[320px] py-4 mb-2 ">
              <div className="flex items-center ">
                <TbSquareRoundedCheckFilled className="text-sky-500  mr-1" />
                <span>In Stock</span>
                <div className="flex">
                  <p className="text-sky-500 font-semibold ml-4">NDC/UPC: </p>
                  <span>6545555</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex">
                  <p className="text-sky-500 font-semibold ">SKU:</p>
                  <span>6545555</span>
                </div>
                <div className="flex">
                  <p className="text-sky-500 font-semibold ml-4">
                    Expiration Date:
                  </p>
                  <span>20/06/2025</span>
                </div>
              </div>
            </div> */}

            <div className="bg-gray-100 p-2 w-full border rounded-lg my-4 flex text-green-600">
              <p>
                <CiDiscount1 className=" text-2xl" />
              </p>{" "}
              {""} {""}
              <p className=" text-[15px]  font-normal">
                Add 15 Products to cart and get 10$ Discount
              </p>
            </div>

            <div className=" w-full flex justify-center flex-col ">
              <div className="w-full flex items-center justify-between p-2  bg-gray-100 rounded-lg">
                <span className="text-base font-semibold">Ship to</span>
                <button
                  onClick={() => setIsFormVisible(!isFormVisible)}
                  className="text-sm flex items-center"
                >
                  Calculate Shipping Cost
                  <img
                    src={isFormVisible ? DropDownIcon : DropUpIcon}
                    alt="Toggle Dropdown"
                    className=" w-6 h-6"
                  />
                </button>
                {/* <button
                  onClick={() => setIsFormVisible(!isFormVisible)}
                  className="text-base"
                >
                  {" "}
                  Calculate Shipping Cost
                  {isFormVisible ? "˄" : "v"}
                </button> */}
              </div>
              {isFormVisible && (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col  w-full  p-4  bg-gray-100 rounded-lg"
                >
                  <div className="w-full mb-4">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      htmlFor="state"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Please select a region, state or province"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      htmlFor="postalCode"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-1 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-2 py-2 w-52  font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-600"
                  >
                    Calculate
                  </button>
                </form>
              )}

              <div className=" w-[80%] mt-3  bg-white space-y-4">
                <h1 className="text-lg font-bold">Quick Overview</h1>
                <p>
                  <li>
                    The Ordinary's Azelaic Acid 10% Suspension Brightening Cream
                    is a multi-functional formula great for those looking for
                    solutions for dullness, uneven tone, and textural
                    irregularities.
                  </li>
                  <li>
                    The Ordinary's Azelaic Acid 10% Suspension Brightening Cream
                    is a multi-functional formula great for those looking for
                    solutions for dullness, uneven tone, and textural
                    irregularities.
                  </li>
                  <li>
                    The Ordinary's Azelaic Acid 10% Suspension Brightening Cream
                    is a multi-functional formula great for those looking for
                    solutions for dullness, uneven tone, and textural
                    irregularities.
                  </li> <li>
                    The Ordinary's Azelaic Acid 10% Suspension Brightening Cream
                    is a multi-functional formula great for those looking for
                    solutions for dullness, uneven tone, and textural
                    irregularities.
                  </li> <li>
                    The Ordinary's Azelaic Acid 10% Suspension Brightening Cream
                    is a multi-functional formula great for those looking for
                    solutions for dullness, uneven tone, and textural
                    irregularities.
                  </li>
                </p>
                {/* <div className="border-t border-gray-200 pt-4 text-[15px] font-sans">
                  <div className="p-2 bg-gray-100 rounded-lg mr-4">
                    <p className="font-semibold text-gray-600">SOLD BY</p>
                    <p className="text-red-600">Manda</p>
                    <p className="hover:text-red-600">Company Website</p>
                    <div className="flex flex-col">
                      <div className="flex  items-center space-x-2 hover:text-red-500">
                        <img src={product} className="w-fit h-10" />
                        <span className=" font-semibold">17 PRODUCTS</span>
                      </div>
                      <div className="flex items-center space-x-2 hover:text-red-500">
                        <img src={phone} className="w-fit h-10" />
                        <span>Contact Seller</span>
                      </div>
                      <div className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                        <img src={report} className="w-fit h-8" />
                        <span>Report Product</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div>
              <p className="text-teal-400 underline">
                Report an issue with this product
              </p>
            </div> */}
          </div>

          <div className="w-[50%] min-h-full mr-12  p-3 flex flex-col items-center  ">
            <div className="border rounded-lg shadow-lg  pb-4 w-full h-full">
              <div className="p-4">
                <p className="text-black text-[22px]">$30.00</p>

                <p className="text-gray-600 text-[14px]">
                  Delivery by{" "}
                  <span className="text-black">
                    Tommorrow, 8:00 am - 12:00 pm
                  </span>
                </p>
              </div>

              <div className="flex flex-col text-[15px]  w-[320px] px-4 mb-2 ">
                <div className="flex flex-col  ">
                  <div className="flex items-center text-[18px] mb-1">
                    <TbSquareRoundedCheckFilled className="text-sky-500  mr-1" />
                    <span>In Stock</span>
                  </div>
                  <div className="flex">
                    <p className="text-sky-500 font-normal">NDC/UPC: </p>
                    <span>6545555</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="text-sky-500 font-normal ">SKU:</p>
                    <span>6545555</span>
                  </div>
                  <div className="flex">
                    <p className="text-sky-500 font-normal ">
                      Expiration Date:
                    </p>
                    <span>20/06/2025</span>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col justify-center items-center cursor-pointer">
                <h1 className="text-lg font-semibold text-blue-900">
                  {" "}
                  Vitamin C(1000IU) Cap X
                </h1>
                <h1 className="text-sm">UPN Member Price $25.00</h1>
                <p className="text-red-500">$30.00-$40.00</p>

                <div>
                  {Array.from({ length: totalStars }, (v, i) => (
                    <Star
                      key={i}
                      filled={i < rating}
                      onClick={() => setRating(i + 1)}
                      className="text-orange-400 mt-2"
                    />
                  ))}
                  <p>
                    The rating is {rating} out of {totalStars}.
                  </p>
                </div>
              </div> */}

              <div className="flex items-center space-x-2 pb-2 px-4">
                <label className="text-lg font-semibold">Quantity:</label>
                <button
                  onClick={handleDecrease}
                  className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded focus:outline-none"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 py-1 text-center border border-gray-300 rounded focus:outline-none"
                />
                <button
                  onClick={handleIncrease}
                  className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded focus:outline-none"
                >
                  +
                </button>
              </div>

              <div className="flex gap-2 mx-2">
                <button
                  className={`bg-blue-900 w-40 flex  rounded-lg justify-center  items-center py-1 cursor-pointer
                     `}
                  onClick={() => handleCart(id)}
                >
                  <img src={addcart} className="h-7 p-1" />
                  <p className="text-white font-semibold">ADD</p>
                </button>

                <button
                  className={`w-40 text-white font-semibold text-lg border rounded-lg  items-center  bg-orange-400 flex justify-center`}
                >
                  {/* <FiShoppingCart className="text-[20px] mt-1 mx-1" /> */}
                  Buy Now
                </button>
              </div>
              <div>
                {/* <div className=" mt-2 text-[17px] flex justify-center items-center  cursor-pointer hover:text-red-400 ">
                  <p className=" flex "
                    onClick={()=>handleClick}>Add to wishlist</p>
                </div> */}
              </div>
            </div>

            <div className="w-full  pt-4 text-[15px] font-sans">
              <div className="p-2 bg-gray-100 rounded-lg mr-4">
                <p className="font-semibold text-gray-600">SOLD BY</p>
                <p className="text-red-600">Manda</p>
                <p className="hover:text-red-600">Company Website</p>
                <div className="flex flex-col">
                  <div className="flex  items-center space-x-2 hover:text-red-500">
                    <img src={product} className="w-fit h-10" />
                    <span className=" font-semibold">17 PRODUCTS</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-red-500">
                    <img src={phone} className="w-fit h-10" />
                    <span>Contact Seller</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                    <img src={report} className="w-fit h-8" />
                    <span>Report Product</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col  justify-center items-center">
        <ProductDetails />

       

        <div className="w-[92%] flex flex-col md:flex-row border-t-2 shadow-inner justify-start gap-8 p-4">
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-black mb-4">
              RATINGS & REVIEWS
            </h2>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-4">
                <span className="text-sm font-medium flex text-gray-700">
                  {rating} <span> ★</span>
                </span>
                <div className="w-full h-3 mx-3 bg-gray-200 rounded">
                  <div
                    className={`h-full bg-blue-500 rounded`}
                    style={{ width: `${ratingPercentages[rating]}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">
                  {ratingPercentages[rating]}%
                </span>
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Customer Say
            </h2>
            {/* Example of a single review */}
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded shadow-sm">
              <p className="text-gray-800">
                "Cough syrups may contain antitussives (like dextromethorphan),
                expectorants (like guaifenesin), or antihistamines (like
                diphenhydramine) depending on the type."
              </p>
              <div className="mt-2 text-sm text-gray-500">- Testing</div>
            </div>
            {/* Repeat above div for multiple reviews */}
          </div>
        </div>
        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            addCart={addCart}
            Title={"Alterntives"}
            data={newProducts}
          />
        </div>

        <div className="w-[92%] border-t-2 shadow-inner ">
          <ProductSlider
            addCart={addCart}
            Title={"More Products By Same Seller(Manda)"}
            data={newProducts}
          />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default Items;
