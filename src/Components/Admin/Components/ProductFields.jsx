// import React, { useState } from "react";
// import { FaAlignLeft } from "react-icons/fa";
// import { FaAlignJustify } from "react-icons/fa";
// import { FaAlignCenter } from "react-icons/fa";
// import { FaAlignRight } from "react-icons/fa";
// import { SlCamera } from "react-icons/sl";
// import EditingPara from "../Components/EditingPara";
// import filter from "../../../assets/Icons/filter_icon.png";
// function ProductFields() {
//   const products = [
//     {
//       serial: "",
//       id: "26509",
//       thumbnail: "Image",
//       name: "CARNITOR TAB 330MG UD 90",
//       attribute: "Rx Product",
//       status: "Enable",
//       type: "Simple Product",
//       sku: "54482014407-208",
//       price: "$75.99",
//     },
//     {
//       serial: "",
//       id: "26509",
//       thumbnail: "Image",
//       name: "CARNITOR TAB 330MG UD 90",
//       attribute: "Rx Product",
//       status: "Enable",
//       type: "Simple Product",
//       sku: "54482014407-208",
//       price: "$75.99",
//     },
//     {
//       serial: "",
//       id: "26509",
//       thumbnail: "Image",
//       name: "CARNITOR TAB 330MG UD 90",
//       attribute: "Rx Product",
//       status: "Enable",
//       type: "Simple Product",
//       sku: "54482014407-208",
//       price: "$75.99",
//     },
//   ];

//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleClick = () => {
//     setIsPopupVisible(true);
//   };
//   const handleremove = () => {
//     setIsPopupVisible(false);
//   };

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [dragActive, setDragActive] = useState(false);

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);

//     const files = e.dataTransfer.files;
//     if (files && files[0]) {
//       setSelectedImage(URL.createObjectURL(files[0]));
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   const [selectedOption, setSelectedOption] = useState("full");

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const [selectedProductOption, setSelectedProductOption] = useState("");

//   const handleProductOptionChange = (e) => {
//     setSelectedProductOption(e.target.value);
//   };

//   // filter upsell pop ups
//   const [isVisible, setIsVisible] = useState(false);
//   const [ButtonUpClick, setButtonUpClick] = useState(false);

//   const click = () => {
//     setIsVisible(true);
//     setButtonUpClick(true);
//   };

//   const Click = () => {
//     setIsVisible(false);
//     setButtonUpClick(false);
//   };
//   // Relate filter
//   const [isvisible, setIsvisible] = useState(false);
//   const [buttonClick, setButtonClick] = useState(false);
//   const handleRelateclick = () => {
//     setIsvisible(true);
//     setButtonClick(true);
//   };

//   const handleRelateClick = () => {
//     setIsvisible(false);
//     setButtonClick(false);
//   };

//   // crosee sell filter
//   const [visible, setVisible] = useState(false);
//   const [isButtonClicked, setButtonClicked] = useState(false);
//   const handleCrossClick = () => {
//     setVisible(true);
//     setButtonClicked(true);
//   };
//   const handleCrossRemoveClick = () => {
//     setVisible(false);
//     setButtonClicked(false);
//   };
//   return (
//     <div className="w-full h-full justify-center overflow-x-hidden flex items-center">
//       <div className="w-[95%]  h-full">
//         <div className="  flex flex-col my-8">
//           <h1 className="text-2xl font-normal text-gray-600 ">ADD PRODUCT</h1>
//           <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
//         </div>
//         {/* section1 start */}

//         <div className="flex  w-full Largest:w-[80%] flex-row justify-between">
//           <div className="flex flex-col  gap-5 items-center text-gray-600  ">
//             <div className="flex  flex-col">
//               <label className="">
//                 Category Specification :
//                 <span className="text-red-600 text-xl ">*</span>
//               </label>{" "}
//               <select className=" w-44 h-8 border-slate-300 border">
//                 <option>Merchandise</option>
//                 <option>OTC Product</option>
//                 <option>Rx Product</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">Brand Name:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">Sale Price ($):</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">Form:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>
//           </div>

//           {/* section1 end */}

//           {/* section2 start */}
//           <div className="flex flex-col gap-5 items-center text-gray-600 ">
//             <div className="flex flex-col">
//               <label className="">
//                 Product Type:<span className="text-red-600 text-xl ">*</span>
//               </label>
//               <select className=" w-44 h-8 border-slate-300 border">
//                 <option>General</option>
//                 <option>Customizable</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="">
//                 Price ($) Name:<span className="text-red-600 text-xl">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base"> Sale Price Form:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex  flex-col">
//               <label className="text-base"> Lot Number:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>
//           </div>

//           {/* section2 end */}

//           {/* section3 start */}

//           <div className="flex flex-col  gap-5 items-baseline text-gray-600 ">
//             <div className="flex flex-col">
//               <label className="">
//                 Product Category:
//                 <span className="text-red-600 text-xl ">*</span>
//               </label>{" "}
//               <select className=" w-44 h-8 border-slate-300 border">
//                 <option>Default Category</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">UPN Member Price ($):</label>
//               <input
//                 type="text"
//                 id="Upn_Mem"
//                 className="w-44 h-8 border-slate-300 border "
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">Sale Price To:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base"> Expiration Date:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>
//           </div>

//           {/* section3 end */}

//           {/* section4 start */}
//           <div className="flex flex-col  gap-5 items-center text-gray-600 ">
//             <div className="flex flex-col">
//               <label className="">
//                 Product Name:<span className="text-red-600 text-xl ">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="">
//                 Amount In Stock:<span className="text-red-600 text-xl ">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">Manufacturer:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>
//           </div>
//           {/* section-5 start */}
//           <div className="flex flex-col gap-5  items-center text-gray-600 ">
//             <div className="flex flex-col">
//               <label className="">
//                 NDC / UPC:<span className="text-red-600 text-xl">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="">
//                 Taxable:<span className="text-red-600 text-xl">*</span>
//               </label>
//               <select className=" w-44 h-8 border-slate-300 border">
//                 <option>No</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-base">Strength:</label>
//               <input
//                 type="text"
//                 id="product_name"
//                 className=" w-44 h-8 border-slate-300 border"
//               />
//             </div>
//           </div>
//           {/* section-5 end */}
//         </div>

//         {/* section6 start */}
//         <div>
//           <div className="text-gray-600 my-6 flex items-center">
//             <span className="text-base">Pack Quantity :</span>

//             <div className=" flex items-center">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="full"
//                   name="option"
//                   value="full"
//                   checked={selectedOption === "full"}
//                   onChange={handleOptionChange}
//                   className=""
//                 />
//                 <label htmlFor="full">Full</label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="partial"
//                   name="option"
//                   value="partial"
//                   checked={selectedOption === "partial"}
//                   onChange={handleOptionChange}
//                   className="ml-2"
//                 />
//                 <label htmlFor="partial">Partial</label>
//               </div>
//             </div>

//             <input
//               type="text"
//               className="w-[30%] Largest:w-[15%] h-8 border-slate-300 border"
//             />
//             <label>EA</label>
//           </div>
//         </div>
//         {/* section6 end */}
//         {/* section7 start */}

//         <div>
//           <div className="text-gray-600 my-6 flex items-center">
//             <span className="text-base">Pack Type :</span>

//             {/* <input type="radio" className="ml-[2%]" /> {""}
//             <label className="text-base ml-3">ORIGINAL PACKAGE</label>
//             <input type="radio" className="ml-[2%]" />
//             <label className="text-base ml-3">
//               ORIGINAL PACKAGE - NON SEALED
//             </label> */}

//             <div className="flex items-center">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="original"
//                   name="product"
//                   value="original"
//                   checked={selectedProductOption === "original"}
//                   onChange={handleProductOptionChange}
//                   className="ml-2"
//                 />
//                 <label htmlFor="original">ORIGINAL PACKAGE</label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="non-original"
//                   name="product"
//                   value="non-original"
//                   checked={selectedProductOption === "non-original"}
//                   onChange={handleProductOptionChange}
//                   className="ml-2"
//                 />
//                 <label htmlFor="non-original">
//                   ORIGINAL PACKAGE - NON SEALED
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* section6 end */}
//         {/* section7 start */}
//         <div className="text-gray-600 my-6">
//           <div>
//             <span className="text-base">Pack Condition :</span>
//             <input type="checkbox" className="ml-[2%]" />
//             <label className="text-base ml-1">TORN PACKAGE LABEL</label>

//             <input type="checkbox" className="ml-[2%]" />
//             <label className="text-base ml-1">OTHER</label>

//             <input
//               type="text"
//               className="w-[30%] Largest:w-[15%] h-8 border-slate-300 border"
//             />
//           </div>
//         </div>
//         {/* section7 end */}

//         {/* paragraph start */}
//         <div className="w-full Largest:w-[80%]">
//           <EditingPara />
//         </div>

//         {/* paragraph end */}
//         {/* section 8 strt */}
//         <div className="flex justify-between items-baseline w-full  Largest:w-[80%] text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">
//               Uri Key: (Related to goggle search)
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-8 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col ml-2">
//             <label className="text-base">
//               Meta Title:(Related to google search)
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-8 border-slate-300 border "
//             />
//           </div>

//           <div className="flex flex-col mx-3">
//             <label className="text-base">
//               Meta Keywords:(Related to google search)
//             </label>
//             <textarea
//               type=""
//               id="product_name"
//               className=" w-64 h-8 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               Meta Description:(Research to google search)
//             </label>
//             <textarea
//               type="area"
//               id="product_name"
//               className=" w-64 h-8 border-slate-300 border"
//             />
//           </div>
//         </div>
//         {/* section8 end */}
//         {/* section text are start */}

//         {/* section text area end */}

//         {/* section9 start */}
//         <div className="flex justify-between w-full Largest:w-[80%] items-baseline text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">Salt Composition:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-44 h-8 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">Height {""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-44 h-8 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Width{""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-44 h-8 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Length{""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-44 h-8 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base"> Weight{""}(in):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-44 h-8 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section9 end */}

//         {/* table1 start */}

//         <div className="flex flex-col w-full Largest:w-[80%]">
//           <label className="text-base">Tier Price:</label>
//           <div className="border rounded-md  bg-white mt-4">
//             <table className="w-full">
//               <thead>
//                 <tr className="text-xl border-b bg-blue-900 text-white">
//                   <th className="px-4 font-normal text-left text-base h-11">
//                     Websites
//                   </th>
//                   <th className=" px-4 font-normal text-left text-base ">
//                     Customer Group
//                   </th>
//                   <th className="  px-4  font-normal text-base  text-left p-2">
//                     Qty
//                   </th>
//                   <th className=" px-4  font-normal  text-base  text-left p-2">
//                     ($) Price
//                   </th>
//                   <th className=" px-4 font-normal  text-base  text-left p-2 ">
//                     Action
//                   </th>
//                   <th className=" px-4  font-normal   text-base  text-left p-2 ">
//                     <button
//                       className="border border-gray-950 bg-white text-black w-14"
//                       onClick={handleClick}
//                     >
//                       Add
//                     </button>{" "}
//                   </th>
//                 </tr>
//               </thead>
//               {isPopupVisible && (
//                 // <div>
//                 <tbody>
//                   <tr>
//                     <td className="border bg-slate-200">
//                       <select className="px-4 py-1 text-left text-base h-11  w-44 m-2 ">
//                         <option className="px-4 py-2 text-left text-base h-11 ">
//                           All Websites
//                         </option>
//                         <option>Main Website</option>
//                       </select>
//                     </td>
//                     <td className="border bg-slate-200">
//                       <select className="px-4 py-1 text-left text-base h-11 w-44 m-2">
//                         <option className="px-4 py-1 text-left text-base h-11 hover:bg-blue-900">
//                           All Groups
//                         </option>
//                         <option>Not Logged In</option>
//                         <option>General</option>
//                         <option>Prescription seller</option>
//                         <option>General Merchandise seller</option>
//                         <option>UPN Member</option>
//                       </select>
//                     </td>
//                     <td className="border bg-slate-200">
//                       <input
//                         type="text"
//                         className=" py-1  m-2  text-left text-base h-11 w-44 "
//                       />
//                     </td>
//                     <td className="border bg-slate-200">
//                       <input
//                         type="text"
//                         className=" border m-2   py-1 text-left text-base h-11 w-44"
//                       />
//                     </td>
//                     <td className=" w-36">
//                       <button
//                         className=" m-2 border-slate-700 bg-blue-900 text-white w-24 flex justify-center p-2"
//                         onClick={handleremove}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               )}
//             </table>
//           </div>
//         </div>

//         {/* table1 end */}

//         {/* section start */}
//         <div className="my-6">
//           <span className="text-base">
//             States (Please select multiple states by clicking on Ctrl Button) :
//           </span>
//           <div>
//             <select className="w-60 h-8 border border-slate-500">
//               <option>All Selected</option>
//             </select>
//           </div>
//         </div>
//         {/* section end */}
//         {/* images & video start */}
//         <p>Product Image : (Accepted Formats: JPEG, PNG)</p>
//         <div className="App">
//           <main className="container mx-auto p-4">
//             <div className="flex flex-col items-start">
//               <div
//                 className={`border-4 border-dashed p-2 rounded-lg ${
//                   dragActive ? "border-blue-500" : "border-gray-300"
//                 }`}
//                 onDragEnter={handleDragEnter}
//                 onDragLeave={handleDragLeave}
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//               >
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   id="file-upload"
//                   onChange={handleImageUpload}
//                 />
//                 <label htmlFor="file-upload" className="cursor-pointer">
//                   <div className="flex flex-col items-start">
//                     {selectedImage ? (
//                       <img
//                         src={selectedImage}
//                         alt="Selected"
//                         className="max-w-xs mb-2"
//                       />
//                     ) : (
//                       <div className="text-justify flex flex-col justify-start items-start text-gray-500 p-2">
//                         <div>
//                           <SlCamera className="mx-7 my-2   text-4xl" />
//                         </div>
//                         <p>Drag & drop an </p>
//                         <p>image here, or</p>
//                         <p>click to select one</p>
//                       </div>
//                     )}
//                   </div>
//                 </label>
//               </div>
//             </div>
//           </main>
//         </div>
//         {/* images & video end */}
//         <div className="w-full Largest:w-[80%]">
//           <div className="flex justify-between my-6">
//             <div className="flex flex-col">
//               <p>
//                 Customizable products allow customers to choose options (Ex:
//                 shirt color). You need to create a simple product for each
//               </p>
//               <p>customization (Ex: a product for each color).</p>
//             </div>
//             <div>
//               <button className="border border-gray-600 bg-blue-900 text-white text-base p-2 font-semibold w-60">
//                 {" "}
//                 Create Customization
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* section end */}

//         {/* section inputs start */}
//         <div className="my-6">
//           <div className="flex">
//             <div className="flex flex-col w-44">
//               <label>Height {""} in</label>
//               <input type="text" className="h-8 border border-gray-400" />
//             </div>
//             <div className="flex flex-col mx-6 w-44">
//               <label>Width {""} in</label>
//               <input type="text" className="h-8 border border-gray-400" />
//             </div>
//             <div className="flex flex-col  w-44">
//               <label>Length {""} in</label>
//               <input type="text" className="h-8 border border-gray-400" />
//             </div>
//           </div>
//           <button className="border my-6 border-gray-400  bg-blue-900 text-white text-base  font-semibold  p-2 w-28 ">
//             SAVE
//           </button>
//         </div>
//         {/* section inputs end */}
//         {/* section start */}
//         <h1 className="text-2xl font-semibold">Related Products </h1>
//         <div className="flex  justify-between w-full Largest:w-[80%]">
//           <p>
//             Related products are shown to customers in addition to the item the
//             customer is looking at.{" "}
//           </p>
//           <button
//             className={`  text-base font-medium p-2 flex items-center  ${
//               buttonClick ? "bg-white text-blue-900" : "bg-blue-900 text-white"
//             }`}
//             onClick={handleRelateclick}
//           >
//             <img src={filter} className="w-6 h-4 px-1" />
//             Filter
//           </button>
//         </div>
//         {isvisible && (
//           <div className=" bg-white p-2 px-5  w-full Largest:w-[80%] ">
//             <div className="flex justify-between">
//               <div className="flex flex-col w-52">
//                 <label>Id From</label>
//                 <input className="border rounded-sm" />
//               </div>
//               <div className="flex flex-col w-52">
//                 <label>Price From</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Name</label>
//                 <input className="border rounded-sm" />
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <div className="flex flex-col w-52">
//                 <label>to</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>to</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Status</label>
//                 <select className="border rounded-sm">
//                   <option></option>
//                   <option>Enable</option>
//                   <option>Disable</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-between  ">
//               <div className="flex flex-col w-52">
//                 <label> Attribute Set</label>
//                 <select className="border rounded-sm">
//                   <option></option>
//                   <option>Merchandise</option>
//                   <option>OTC Product</option>
//                   <option>Rx Product</option>
//                 </select>
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Type</label>
//                 <select className="border rounded-sm w-">
//                   <option></option>
//                   <option>Simple Product</option>
//                   <option>Virtual Product</option>
//                   <option>Configurable Product</option>
//                   <option>Downloadable Product</option>
//                   <option>Grouped Product</option>
//                   <option>Bundle Product</option>
//                   <option>Quote </option>
//                 </select>
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>SKU</label>
//                 <input className="border rounded-sm" />
//               </div>
//             </div>

//             <div className="my-4 flex justify-end">
//               <button
//                 onClick={handleRelateClick}
//                 className="bg-blue-900 p-2 text-white border rounded-md"
//               >
//                 {" "}
//                 Cancel
//               </button>
//               <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">
//                 Apply Filter
//               </button>
//             </div>
//           </div>
//         )}
//         {/* section end */}

//         {/* section table start */}

//         <div className="my-6 border w-full Largest:w-[80%] rounded-md bg-white ">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white">
//               <tr className="border-b">
//                 <th className=" p-4  text-left text-sm  w-32">
//                   <select className="text-black">
//                     <option>-</option>
//                   </select>
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">ID</th>
//                 <th className=" p-2 font-medium text-left text-sm w-40">
//                   Thumbnail
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm  w-80">
//                   Name
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-48">
//                   Attribute Set
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">
//                   Status
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm bw-44">
//                   Type
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm  w-44">
//                   SKU
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm  w-44">
//                   Price
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className=" p-2">
//                     <input className=" h-6 w-4" type="checkbox" />
//                   </td>
//                   <td className="text-sm p-2"> {product.id}</td>
//                   <td className="text-sm p-2">{product.thumbnail}</td>
//                   <td className="text-sm p-2">{product.name}</td>
//                   <td className="text-sm p-2">{product.attribute}</td>
//                   <td className="text-sm p-2">{product.status}</td>
//                   <td className="text-sm p-2">{product.type}</td>
//                   <td className="text-sm p-2">{product.sku}</td>
//                   <td className="text-sm p-2">{product.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* section table end */}
//         {/* section start */}
//         <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
//         <div className="flex  justify-between w-full Largest:w-[80%]">
//           <p>
//             An up-sell item is offered to the customer as a pricier or
//             higher-quality alternative to the product the customer is looking
//             at.
//           </p>
//           <button
//             className={`   text-base font-medium p-2 flex items-center ${
//               ButtonUpClick
//                 ? "bg-white text-blue-900"
//                 : "bg-blue-900 text-white"
//             }`}
//             onClick={click}
//           >
//             {" "}
//             <img src={filter} className="w-6 h-4 px-1" />
//             Filter
//           </button>
//         </div>
//         {isVisible && (
//           <div className=" bg-white p-2 px-5   w-full Largest:w-[80%]">
//             <div className="flex justify-between">
//               <div className="flex flex-col w-52">
//                 <label>Id From</label>
//                 <input className="border rounded-sm" />
//               </div>
//               <div className="flex flex-col w-52">
//                 <label>Price From</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Name</label>
//                 <input className="border rounded-sm" />
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <div className="flex flex-col w-52">
//                 <label>to</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>to</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Status</label>
//                 <select className="border rounded-sm">
//                   <option></option>
//                   <option>Enable</option>
//                   <option>Disable</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-between ">
//               <div className="flex flex-col w-52">
//                 <label> Attribute Set</label>
//                 <select className="border rounded-sm">
//                   <option></option>
//                   <option>Merchandise</option>
//                   <option>OTC Product</option>
//                   <option>Rx Product</option>
//                 </select>
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Type</label>
//                 <select className="border rounded-sm w-">
//                   <option></option>
//                   <option>Simple Product</option>
//                   <option>Virtual Product</option>
//                   <option>Configurable Product</option>
//                   <option>Downloadable Product</option>
//                   <option>Grouped Product</option>
//                   <option>Bundle Product</option>
//                   <option>Quote </option>
//                 </select>
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>SKU</label>
//                 <input className="border rounded-sm" />
//               </div>
//             </div>

//             <div className="my-4 flex justify-end">
//               <button
//                 onClick={Click}
//                 className="bg-blue-900 p-2 text-white border rounded-md"
//               >
//                 {" "}
//                 Cancel
//               </button>
//               <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">
//                 Apply Filter
//               </button>
//             </div>
//           </div>
//         )}
//         {/* section end */}

//         {/* section table start */}

//         <div className="my-6 border rounded-md bg-white w-full Largest:w-[80%] ">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white  ">
//               <tr className="border-b">
//                 <th className=" p-4  text-left text-sm  w-32">
//                   <select className="text-black">
//                     <option>-</option>
//                   </select>
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">ID</th>
//                 <th className=" p-2 font-medium text-left text-sm w-40">
//                   Thumbnail
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm  w-80">
//                   Name
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-48">
//                   Attribute Set
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">
//                   Status
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm bw-44">
//                   Type
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm  w-44">
//                   SKU
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm  w-44">
//                   Price
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className=" p-2">
//                     <input className=" h-6 w-4" type="checkbox" />
//                   </td>
//                   <td className="text-sm p-2"> {product.id}</td>
//                   <td className="text-sm p-2">{product.thumbnail}</td>
//                   <td className="text-sm p-2">{product.name}</td>
//                   <td className="text-sm p-2">{product.attribute}</td>
//                   <td className="text-sm p-2">{product.status}</td>
//                   <td className="text-sm p-2">{product.type}</td>
//                   <td className="text-sm p-2">{product.sku}</td>
//                   <td className="text-sm p-2">{product.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* section table end */}
//         {/* section start */}
//         <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
//         <div className="flex justify-between w-full Largest:w-[80%]">
//           <p>
//             These "impulse-buy" products appear next to the shopping cart as
//             cross-sells to the items already in the shopping cart.
//           </p>
//           <button
//             className={` text-base font-medium  p-2 flex items-center ${
//               isButtonClicked
//                 ? "bg-white text-blue-900"
//                 : "bg-blue-900 text-white"
//             }`}
//             onClick={handleCrossClick}
//           >
//             <img src={filter} className="w-6 h-4 px-1" />
//             Filter
//           </button>
//         </div>
//         {visible && (
//           <div className=" bg-white p-2 px-5  w-full Largest:w-[80%] ">
//             <div className="flex justify-between">
//               <div className="flex flex-col w-52">
//                 <label>Id From</label>
//                 <input className="border rounded-sm" />
//               </div>
//               <div className="flex flex-col w-52">
//                 <label>Price From</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Name</label>
//                 <input className="border rounded-sm" />
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <div className="flex flex-col w-52">
//                 <label>to</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>to</label>
//                 <input className="border rounded-sm" />
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Status</label>
//                 <select className="border rounded-sm">
//                   <option></option>
//                   <option>Enable</option>
//                   <option>Disable</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-between ">
//               <div className="flex flex-col w-52">
//                 <label> Attribute Set</label>
//                 <select className="border rounded-sm">
//                   <option></option>
//                   <option>Merchandise</option>
//                   <option>OTC Product</option>
//                   <option>Rx Product</option>
//                 </select>
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>Type</label>
//                 <select className="border rounded-sm w-">
//                   <option></option>
//                   <option>Simple Product</option>
//                   <option>Virtual Product</option>
//                   <option>Configurable Product</option>
//                   <option>Downloadable Product</option>
//                   <option>Grouped Product</option>
//                   <option>Bundle Product</option>
//                   <option>Quote </option>
//                 </select>
//               </div>

//               <div className="flex flex-col w-52">
//                 <label>SKU</label>
//                 <input className="border rounded-sm" />
//               </div>
//             </div>

//             <div className="my-4 flex justify-end">
//               <button
//                 onClick={handleCrossRemoveClick}
//                 className="bg-blue-900 p-2 text-white border rounded-md"
//               >
//                 {" "}
//                 Cancel
//               </button>
//               <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">
//                 Apply Filter
//               </button>
//             </div>
//           </div>
//         )}
//         {/* section end */}

//         {/* section table start */}

//         <div className="my-6 border rounded-md bg-white w-full Largest:w-[80%]">
//           <table className="w-full">
//             <thead className="bg-blue-900 text-white ">
//               <tr className="border-b ">
//                 <th className=" p-4  text-left text-sm   w-32">
//                   <select className="text-black">
//                     <option>-</option>
//                   </select>
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">ID</th>
//                 <th className="p-2 font-medium text-left text-sm  w-40">
//                   Thumbnail
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-80">
//                   Name
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-48 ">
//                   Attribute Set
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">
//                   Status
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-44">
//                   Type
//                 </th>
//                 <th className=" p-2 font-medium text-left text-sm w-44">SKU</th>
//                 <th className=" p-2 font-medium text-left text-sm w-32">
//                   Price
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className=" p-2">
//                     <input className=" h-6 w-4" type="checkbox" />
//                   </td>
//                   <td className="text-sm p-2"> {product.id}</td>
//                   <td className="text-sm p-2">{product.thumbnail}</td>
//                   <td className="text-sm p-2">{product.name}</td>
//                   <td className="text-sm p-2">{product.attribute}</td>
//                   <td className="text-sm p-2">{product.status}</td>
//                   <td className="text-sm p-2">{product.type}</td>
//                   <td className="text-sm p-2">{product.sku}</td>
//                   <td className="text-sm p-2">{product.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* section table end */}
//       </div>
//     </div>
//   );
// }

// export default ProductFields;




import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import filter from "../../../assets/Icons/filter_icon.png";
import deleteicon from '../../../assets/trash.png'
function ProductFields() {

  const products = [
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
    {
      serial: "",
      id: "26509",
      thumbnail: "Image",
      name: "CARNITOR TAB 330MG UD 90",
      attribute: "Rx Product",
      status: "Enable",
      type: "Simple Product",
      sku: "54482014407-208",
      price: "$75.99",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = () => {
    setIsPopupVisible(true);
  };
  const handleremove = () => {
    setIsPopupVisible(false);
  };


  // Relate filter
  const [isvisible, setIsvisible] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const handleRelateclick = () => {
    setIsvisible(true);
    setButtonClick(true);
  };

  const handleRelateClick = () => {
    setIsvisible(false);
    setButtonClick(false);
  };

  // filter upsell pop ups
  const [isVisible, setIsVisible] = useState(false);
  const [ButtonUpClick, setButtonUpClick] = useState(false);

  const click = () => {
    setIsVisible(true);
    setButtonUpClick(true);
  };

  const Click = () => {
    setIsVisible(false);
    setButtonUpClick(false);
  };
  // crosee sell filter
  const [visible, setVisible] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleCrossClick = () => {
    setVisible(true);
    setButtonClicked(true);
  };
  const handleCrossRemoveClick = () => {
    setVisible(false);
    setButtonClicked(false);
  };

  // video 
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);

  const handleVideoSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedVideos(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setVideoPreviews(previews);
  };

  const handleClearSelection = () => {
    setSelectedVideos([]);
    setVideoPreviews([]);
  };


  const tabs = ["Product Info", "Price Details", " Key Details", "Related Products", " Products", " Images & Videos"];

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const handleEditProduct = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          // <div className="space-y-4 w-full flex">
          <div className="  h-full flex font-sans font-medium ">


            <div className="flex flex-col w-full Largest:w-[80%]  justify-between text-sm">
              <div className="w-[80%] mx-4">
                <div className="flex gap-4 my-4">
                  <div>
                    <label className="font-semibold">
                      Category Specification:
                      <span className="text-red-600">*</span>
                    </label>
                    <select className="w-56 h-8 
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                    >
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold">
                      Product Type:<span className="text-red-600">*</span>
                    </label>
                    <select
                      // style={{boxShadow:'5px 1px 18px blue'}}                      
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                    >
                      <option>General</option>
                      <option>Customizable</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold">
                      Product Category:
                      <span className="text-red-600">*</span>
                    </label>
                    <select className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                    >
                      <option>Default Category</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 my-4">
                  <div className="font-semibold">
                    <label>
                      Product Name:<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      // className="w-56 h-8 border border-gray-300 rounded p-2"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="font-semibold">
                    <label>
                      NDC / UDC:<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="font-semibold">
                    <label>
                      Brand Name:<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                </div>
                <div className="flex gap-4 my-4 font-semibold">
                  <div>
                    <label>
                      Price ($):<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="font-semibold">
                    <label>
                      Amount in Stock:<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-56 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>

                  <div>
                    <label className="font-semibold">
                      Taxable:<span className="text-red-600">*</span>
                    </label>
                  
                    <select
                      className="w-56 h-8 pl-3  pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                    >
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div >
                  <div className="flex flex-col ">
                    <div>
                      <label className="font-semibold">Product Details:</label>
                      <textarea
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                    <div>
                      <label className="font-semibold">About the Product:</label>
                      <textarea
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[20%]">
              <div className="my-3 ">
                <p className="text-sm font-semibold w-24">Product Image: (JPEG, PNG)</p>
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
                  <div
                    {...getRootProps()}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                  >
                    <input {...getInputProps()} />
                    <p className="text-gray-500 text-center">
                      Click here or drag and drop images
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {images.map((image, index) => (
                      <div key={index} className="">
                        <img
                          src={image.preview}
                          alt={`Preview ${index}`}
                          className="w-48 h-14 object-cover "
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className=" rounded-full p-1 hover:bg-gray-100 text-red-400"
                        >
                          <img src={deleteicon} className="w-24" />

                          {/* <FaTrash className="w-4" /> */}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          // </div> 
        );
      case 1:
        return (
          <div className="flex flex-col w-full Largest:w-[80%] font-medium font-sans justify-between text-sm">
            <div className="flex ">
              <div className='flex flex-col w-[80%]'>

                <div className="flex items-center gap-8 my-3">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">UPN Member Price ($):</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Sale Price ($):</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8 
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Sale Price Form ($):</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>


                </div>

                <div className="flex items-center gap-8 my-3">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Sale Price To($):</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Manufacturer:</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8 
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Strength:</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8 
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>



                </div>

                <div className="flex items-center gap-8 my-3">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Form:</label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Lot Number:
                    </label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8 
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">
                      Expiration Date:
                    </label>
                    <input
                      type="text"
                      id="Upn_Mem"
                      className="w-56 h-8
                      pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                  </div>
                </div>
              </div>
            </div>

            {/* section 2 */}
            <div className="">
              <div className=" my-4 flex items-center">
                <span className="text-sm font-semibold">Pack Quantity : {" "}</span>

                <div className=" flex items-center">
                  <div className="flex items-center">
                    {" "}
                    <input
                      type="radio"
                      id="full"
                      name="option"
                      value="full"
                      // checked={selectedOption === "full"}
                      // onChange={handleOptionChange}
                      className="mx-1"
                    /> {" "}
                    <label htmlFor="full" className='text-sm mx-1 font-semibold'>Full</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="partial"
                      name="option"
                      value="partial"
                      // checked={selectedOption === "partial"}
                      // onChange={handleOptionChange}
                      className="ml-2
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"

                    />
                    <label htmlFor="partial" className='text-sm mx-1 font-semibold'>Partial</label>
                  </div>
                </div>

                <input
                  type="text"
                  className="w-[30%] Largest:w-[15%] mx-1 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none  focus:shadow focus:shadow-blue-400"
                />
                <label className='text-sm mx-1 font-semibold'>EA</label>
              </div>
            </div>
            {/* section 2 end */}

            {/* section3 start */}
            <div>
              <div>
                <div className=" my-4 flex items-center">
                  <span className="text-sm font-semibold">Pack Type :</span>



                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="original"
                        name="product"
                        value="original"
                        // checked={selectedProductOption === "original"}
                        // onChange={handleProductOptionChange}
                        className="ml-2"
                      />
                      <label htmlFor="original" className='text-sm mx-1 font-semibold'> {" "} ORIGINAL PACKAGE</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="non-original"
                        name="product"
                        value="non-original"
                        // checked={selectedProductOption === "non-original"}
                        // onChange={handleProductOptionChange}
                        className="ml-2"
                      />
                      <label htmlFor="non-original" className='text-sm mx-1 font-semibold'>
                        ORIGINAL PACKAGE - NON SEALED
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section 3 end */}

            {/* section4 start */}
            <div>
              <div className=" my-4">
                <div>
                  <span className="text-sm font-semibold">Pack Condition :</span>
                  <input type="checkbox" className="ml-[2%]" />
                  <label className="text-sm ml-1 font-semibold">TORN PACKAGE LABEL</label>

                  <input type="checkbox" className="ml-[2%]" />
                  <label className="text-sm ml-1 font-semibold">OTHER</label>

                  <input
                    type="text"
                    className=" mx-1 w-[30%] Largest:w-[15%] h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none  focus:shadow focus:shadow-blue-400"
                  />
                </div>
              </div>
            </div>
            {/* section4 end */}



          </div>
        );
      case 2:
        return (
          <div className="flex flex-col font-sans w-full Largest:w-[80%] font-medium justify-between text-sm ">
            <div className="font-medium ">
              <div className="flex justify-between items-baseline w-full  Largest:w-[80%]  my-6 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">
                    Uri Key : (Related to google <br />
                    search)
                  </label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>
                <div className="flex flex-col ml-4">
                  <label className="text-sm font-semibold">
                    Meta Title:(Related to google search)
                  </label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>

                <div className="flex flex-col mx-4">
                  <label className="text-sm font-semibold">
                    Meta Keywords:(Related to google search)
                  </label>
                  <textarea
                    type=""
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>

                <div className="flex flex-col mx-1">
                  <label className="text-sm font-semibold">
                    Meta Description:(Research to google search)
                  </label>
                  <textarea
                    type="area"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>
              </div>
              {/* section2 start */}
              <div className="flex justify-between w-full Largest:w-[80%] items-baseline  my-6 gap-6">
                <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Salt Composition:</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>
                <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Height {""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>

                <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Width{""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>

                <div className="flex flex-col ">
                  <label className="text-sm font-semibold">Length{""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>

                {/* <div className="flex flex-col">
            <label className="text-sm"> Weight{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-44 h-8 pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-blue-900 focus:shadow-sm focus:shadow-blue-400"
            />
          </div> */}
              </div>

              {/* section2 end */}

              {/* section 3 start  */}
              <div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold"> Weight{""}(in):</label>
                  <input
                    type="text"
                    id="product_name"
                    className=" w-48 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"            />
                </div>
              </div>
              {/* section3 end */}


            </div>
            {/* section4 start */}
            <div className="flex flex-col w-full Largest:w-[80%]  justify-between text-sm my-4">
              <div className="flex flex-col  ">
                <label className="text-base">Tier Price:</label>
                <div className="border rounded-md  bg-white ">
                  <table className="w-full Largest:w-[80%] ">
                    <thead className="p-10">
                      <tr className="text-xl border-b bg-blue-900 text-white">
                        <th className=" font-normal text-center text-base h-10">
                          Websites
                        </th>
                        <th className="  font-normal text-center text-base ">
                          Customer Group
                        </th>
                        <th className="    font-normal text-base  text-center ">
                          Qty
                        </th>
                        <th className="  font-normal  text-base  text-center ">
                          ($) Price
                        </th>
                        <th className="  font-normal  text-base  text-center  ">
                          Action
                        </th>
                        <th className="   font-normal   text-base  text-center  ">
                          <button
                            className="border border-gray-950 -ml-3 bg-white text-black w-14"
                            onClick={handleClick}
                          >
                            Add
                          </button>{" "}
                        </th>
                      </tr>
                    </thead>
                    {isPopupVisible && (
                      // <div>
                      <tbody className="w-full Largest:w-[80%]">
                        <tr>
                          <td className="border bg-slate-200">
                            <select className=" py-1 text-left text-base h-9  w-40 m-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400">
                              <option className=" py-2 text-left text-base h-9  ">
                                All Websites
                              </option>
                              <option>Main Website</option>
                            </select>
                          </td>
                          <td className="border bg-slate-200">
                            <select className=" py-1 text-left text-base h-9 w-40 m-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400">
                              <option className=" py-1 text-left text-base h-9 hover:bg-blue-900 ">
                                All Groups
                              </option>
                              <option>Not Logged In</option>
                              <option>General</option>
                              <option>Prescription seller</option>
                              <option>General Merchandise seller</option>
                              <option>UPN Member</option>
                            </select>
                          </td>
                          <td className="border bg-slate-200">
                            <input
                              type="text"
                              className=" py-1  m-2  text-left text-base h-9 w-40  border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                            />
                          </td>
                          <td className="border bg-slate-200">
                            <input
                              type="text"
                              className=" border m-2   py-1 text-left text-base h-9 w-40  border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                            />
                          </td>
                          <td className=" w-36">
                            <button
                              className=" m-2 border-slate-700 bg-blue-900 text-white w-20 flex justify-center p-2"
                              onClick={handleremove}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
            {/* section4 end */}
            {/* section 5 start */}
            <div>
              <div className="my-6">
                <span className="text-base">
                  States (Please select multiple states by clicking on Ctrl Button) :
                </span>
                <div>
                  <select className="w-48 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  >
                    <option>All Selected</option>
                  </select>
                </div>
              </div>
            </div>

            {/* section5 end */}

            {/* section 6 start */}
            <div>
              {/* <div className="w-full Largest:w-[80%]">
          <div className="flex justify-between my-6">
            <div className="flex flex-col">
              <p>
                Customizable products allow customers to choose options (Ex:
                shirt color). You need to create a simple product for each
              </p>
              <p>customization (Ex: a product for each color).</p>
            </div>
            <div>
              <button className="border border-gray-600 bg-blue-900 text-white text-base p-2 font-semibold w-60">
                {" "}
                Create Customization
              </button>
            </div>
          </div>
        </div> */}
            </div>

            {/* section 6 end */}
          </div>
        );
      case 3:
        return (
          <div className="font-medium font-sans">

            <div className="w-full Largest:w-[80%] ">
              <div className="flex justify-between my-6">
                <div className="flex flex-col">
                  <p>
                    Customizable products allow customers to choose options (Ex:
                    shirt color). You need to create a simple product for each
                  </p>
                  <p>customization (Ex: a product for each color).</p>
                </div>
                <div>
                  <button className="border rounded-md flex items-center justify-center border-gray-600 bg-blue-900 text-white text-base p-2 font-semibold w-44 h-9">
                    {" "}
                    Create Customization
                  </button>
                </div>
              </div>
            </div>
            {/* section start */}
            <div className="my-3 font-semibold">
              <div className="flex flex-row w-[80%] gap-4">
                <div className="flex flex-col">
                  <label className='text-sm'>Height {""} in</label>
                  <input type="text"
                    className="w-56 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  />
                </div>
                <div className="flex flex-col mx-6 ">
                  <label className='text-sm'>Width {""} in</label>
                  <input type="text" className="w-56 h-8
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  />
                </div>
                <div className="flex flex-col  ">
                  <label className='text-sm'>Length {""} in</label>
                  <input type="text" className="w-56 h-8 
                   pl-3 pr-3 py-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-300 focus:shadow focus:shadow-blue-400"
                  />
                </div>
                <div className='flex my-5 justify-end mx-7'>
                  <button className="border rounded-lg border-gray-400  bg-blue-900 text-white text-base  font-semibold  w-20 h-8  ">
                    SAVE
                  </button>
                </div>
              </div>

            </div>

            {/* section start */}

            <h1 className="text-2xl font-semibold">Related Products </h1>
            <div className="flex  justify-between w-full Largest:w-[80%]">
              <p>
                Related products are shown to customers in addition to the item the
                customer is looking at.{" "}
              </p>
              <button
                className={`  text-base font-medium p-2 rounded-md  h-8 flex items-center  ${buttonClick ? "bg-white text-blue-900" : "bg-blue-900 text-white"
                  }`}
                onClick={handleRelateclick}
              >
                <img src={filter} className='w-6 h-3 px-1' />
                Filter
              </button>
            </div>
            {isvisible && (
              <div className=" bg-white p-2 px-5  w-full Largest:w-[80%] ">
                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div>
                  <div className="flex flex-col w-52">
                    <label>Price From</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Name</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Status</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between  ">
                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Type</label>
                    <select className="border rounded-sm w-">
                      <option></option>
                      <option>Simple Product</option>
                      <option>Virtual Product</option>
                      <option>Configurable Product</option>
                      <option>Downloadable Product</option>
                      <option>Grouped Product</option>
                      <option>Bundle Product</option>
                      <option>Quote </option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
                    <label>SKU</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="my-4 flex justify-end">
                  <button
                    onClick={handleRelateClick}
                    className="bg-blue-900 p-2 text-white border rounded-md"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}

            {/* section start */}
            <div>
              <div className="my-6 border w-full Largest:w-[80%] rounded-md bg-white ">
                <table className="w-full">
                  <thead className="bg-blue-900 text-white">
                    <tr className="border-b font-semibold">
                      <th className=" p-4  text-left text-sm  w-32">
                        <select className="text-black">
                          <option>-</option>
                        </select>
                      </th>
                      <th className=" p-2  text-left text-sm w-32">ID</th>
                      <th className=" p-2  text-left text-sm w-40">
                        Thumbnail
                      </th>
                      <th className=" p-2  text-left text-sm  w-80">
                        Name
                      </th>
                      <th className=" p-2  text-left text-sm w-48">
                        Attribute Set
                      </th>
                      <th className=" p-2  text-left text-sm w-32">
                        Status
                      </th>
                      <th className=" p-2  text-left text-sm bw-44">
                        Type
                      </th>
                      <th className=" p-2  text-left text-sm  w-44">
                        SKU
                      </th>
                      <th className=" p-2  text-left text-sm  w-44">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} className="border-b">
                        <td className=" p-2">
                          <input className=" h-6 w-4" type="checkbox" />
                        </td>
                        <td className="text-sm p-2"> {product.id}</td>
                        <td className="text-sm p-2">{product.thumbnail}</td>
                        <td className="text-sm p-2">{product.name}</td>
                        <td className="text-sm p-2">{product.attribute}</td>
                        <td className="text-sm p-2">{product.status}</td>
                        <td className="text-sm p-2">{product.type}</td>
                        <td className="text-sm p-2">{product.sku}</td>
                        <td className="text-sm p-2">{product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* section end */}
          </div>
        );
      case 4:
        return (
          <div className="font-sans font-medium">
            <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
            <div className="flex  justify-between w-full Largest:w-[80%]">
              <p>
                An up-sell item is offered to the customer as a pricier or
                higher-quality alternative to the product the customer is looking
                at.
              </p>
              <button
                className={` text-base font-medium p-2 rounded-md  h-8 flex items-center ${ButtonUpClick
                  ? "bg-white text-blue-900"
                  : "bg-blue-900 text-white"
                  }`}
                onClick={click}
              >
                {" "}
                <img src={filter} className="w-6 h-3 px-1" />
                Filter
              </button>
            </div>
            {isVisible && (
              <div className=" bg-white p-2 px-5   w-full Largest:w-[80%]">
                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div>
                  <div className="flex flex-col w-52">
                    <label>Price From</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Name</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Status</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between ">
                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Type</label>
                    <select className="border rounded-sm w-">
                      <option></option>
                      <option>Simple Product</option>
                      <option>Virtual Product</option>
                      <option>Configurable Product</option>
                      <option>Downloadable Product</option>
                      <option>Grouped Product</option>
                      <option>Bundle Product</option>
                      <option>Quote </option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
                    <label>SKU</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="my-4 flex justify-end">
                  <button
                    onClick={Click}
                    className="bg-blue-900 p-2 text-white border rounded-md"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}
            <div className="my-6 border rounded-md bg-white w-full Largest:w-[80%] ">
              <table className="w-full">
                <thead className="bg-blue-900 text-white  ">
                  <tr className="border-b font-semibold">
                    <th className=" p-4  text-left text-sm  w-32">
                      <select className="text-black">
                        <option>-</option>
                      </select>
                    </th>
                    <th className=" p-2  text-left text-sm w-32">ID</th>
                    <th className=" p-2  text-left text-sm w-40">
                      Thumbnail
                    </th>
                    <th className=" p-2  text-left text-sm  w-80">
                      Name
                    </th>
                    <th className=" p-2  text-left text-sm w-48">
                      Attribute Set
                    </th>
                    <th className=" p-2  text-left text-sm w-32">
                      Status
                    </th>
                    <th className=" p-2 text-left text-sm bw-44">
                      Type
                    </th>
                    <th className=" p-2  text-left text-sm  w-44">
                      SKU
                    </th>
                    <th className=" p-2  text-left text-sm  w-44">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b">
                      <td className=" p-2">
                        <input className=" h-6 w-4" type="checkbox" />
                      </td>
                      <td className="text-sm p-2"> {product.id}</td>
                      <td className="text-sm p-2">{product.thumbnail}</td>
                      <td className="text-sm p-2">{product.name}</td>
                      <td className="text-sm p-2">{product.attribute}</td>
                      <td className="text-sm p-2">{product.status}</td>
                      <td className="text-sm p-2">{product.type}</td>
                      <td className="text-sm p-2">{product.sku}</td>
                      <td className="text-sm p-2">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* section start */}
            <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
            <div className="flex justify-between w-full Largest:w-[80%]">
              <p>
                These "impulse-buy" products appear next to the shopping cart as
                cross-sells to the items already in the shopping cart.
              </p>
              <button
                className={` text-base font-medium  p-2 rounded-md  h-8 flex items-center ${isButtonClicked
                  ? "bg-white text-blue-900"
                  : "bg-blue-900 text-white"
                  }`}
                onClick={handleCrossClick}
              >
                <img src={filter} className="w-6 h-3 px-1" />
                Filter
              </button>
            </div>
            {visible && (
              <div className=" bg-white p-2 px-5  w-full Largest:w-[80%] ">
                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>Id From</label>
                    <input className="border rounded-sm" />
                  </div>
                  <div className="flex flex-col w-52">
                    <label>Price From</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Name</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>to</label>
                    <input className="border rounded-sm" />
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Status</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Enable</option>
                      <option>Disable</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between ">
                  <div className="flex flex-col w-52">
                    <label> Attribute Set</label>
                    <select className="border rounded-sm">
                      <option></option>
                      <option>Merchandise</option>
                      <option>OTC Product</option>
                      <option>Rx Product</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
                    <label>Type</label>
                    <select className="border rounded-sm w-">
                      <option></option>
                      <option>Simple Product</option>
                      <option>Virtual Product</option>
                      <option>Configurable Product</option>
                      <option>Downloadable Product</option>
                      <option>Grouped Product</option>
                      <option>Bundle Product</option>
                      <option>Quote </option>
                    </select>
                  </div>

                  <div className="flex flex-col w-52">
                    <label>SKU</label>
                    <input className="border rounded-sm" />
                  </div>
                </div>

                <div className="my-4 flex justify-end">
                  <button
                    onClick={handleCrossRemoveClick}
                    className="bg-blue-900 p-2 text-white border rounded-md"
                  >
                    {" "}
                    Cancel
                  </button>
                  <button className="bg-blue-900 text-white p-2 mx-4 border rounded-md">
                    Apply Filter
                  </button>
                </div>
              </div>
            )}
            <div className="my-6 border rounded-md bg-white w-full Largest:w-[80%]">
              <table className="w-full">
                <thead className="bg-blue-900 text-white  ">
                  <tr className="border-b font-semibold">
                    <th className=" p-4  text-left text-sm   w-32">
                      <select className="text-black">
                        <option>-</option>
                      </select>
                    </th>
                    <th className=" p-2  text-left text-sm w-32">ID</th>
                    <th className="p-2  text-left text-sm  w-40">
                      Thumbnail
                    </th>
                    <th className=" p-2  text-left text-sm w-80">
                      Name
                    </th>
                    <th className=" p-2  text-left text-sm w-48 ">
                      Attribute Set
                    </th>
                    <th className=" p-2  text-left text-sm w-32">
                      Status
                    </th>
                    <th className=" p-2 text-left text-sm w-44">
                      Type
                    </th>
                    <th className=" p-2  text-left text-sm w-44">SKU</th>
                    <th className=" p-2 text-left text-sm w-32">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b">
                      <td className=" p-2">
                        <input className=" h-6 w-4" type="checkbox" />
                      </td>
                      <td className="text-sm p-2"> {product.id}</td>
                      <td className="text-sm p-2">{product.thumbnail}</td>
                      <td className="text-sm p-2">{product.name}</td>
                      <td className="text-sm p-2">{product.attribute}</td>
                      <td className="text-sm p-2">{product.status}</td>
                      <td className="text-sm p-2">{product.type}</td>
                      <td className="text-sm p-2">{product.sku}</td>
                      <td className="text-sm p-2">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* section end */}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4 font-sans font-medium">
            <p className="font-semibold">Product Image: (Accepted Formats: JPEG, PNG)</p>
            <div className="flex flex-col  p-4 border rounded-lg shadow-md">
              <h1 className="text-xl font-bold mb-4 text-justify">Upload Images</h1>

              <div
                {...getRootProps()}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              >
                <input {...getInputProps()} />
                <p className="text-gray-500 text-center">
                  Click here or drag and drop images
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.preview}
                      alt={`Preview ${index}`}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="text-sm absolute top-0 right-0 m-1 text-red-500 bg-white rounded-full p-1 hover:bg-gray-100"
                    >
                      <img src={deleteicon} className="w-4" />
                      {/* <FaTrash /> */}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-semibold">Product Video :(Accepted Format :MP4,MPEG)  </h1>
            <div className="border shadow-md flex w-full rounded-md  mb-4">

              <div className="w-[50%]">
                <div className="p-3">
                  <h1 className="text-xl font-bold mb-4">Upload Videos</h1>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoSelect}
                    className="block mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <div className="flex flex-wrap gap-4 mb-4">
                    {videoPreviews.map((preview, index) => (
                      <div key={index} className="w-1/4">
                        <video
                          src={preview}
                          controls
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                  {selectedVideos.length > 0 && (
                    <button
                      onClick={handleClearSelection}
                      className="bg-red-500 h-7 font-semibold text-white px-4  rounded shadow hover:bg-red-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

              </div>

              <div className="flex flex-col w-[50%] p-4 font-semibold">

                <div className="flex flex-col">
                  <span>Url :</span>
                  <input className="w-96 h-8 border  focus:outline-none  rounded-md focus:shadow focus:shadow-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span>Title :</span>
                  <input className="w-96 h-8 border focus:outline-none rounded-md focus:shadow focus:shadow-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span >Description :</span>
                  <textarea className="w-96 h-10 border focus:outline-none rounded-md focus:shadow focus:shadow-blue-400" />
                </div>

              </div>



            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex flex-col justify-start ">
        <h1 className="text-2xl font-bold text-blue-900 -mt-5">ADD PRODUCT</h1>
        <p className="border-b border-blue-900 w-40  "></p>
      </div>
      <div className=" mb-6   ">
        <ul className="flex  border-b border-white  w-[76%] opacity-1">
          {tabs.map((tab, index) => (
            <li key={index} className=" mr-2 ">
              <button
                className={`w-full  flex justify-center items-center px-2  p-3 py-1 mt-7   shadow-md  ${activeTab === index
                  ? "text-white  bg-blue-900 rounded-t-xl font-semibold "
                  : "text-blue-900  shadow-none rounded-t-xl bg-white "
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>{renderTabContent()}</div>
      {/* <div className="flex justify-end mt-4">
        <button
          onClick={handleEditProduct}
          className="bg-blue-900 p-3 rounded-md text-white font-medium"
        >
          More Option
        </button>
      </div> */}
      {/* {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg">
            <button
              onClick={handleClosePopup}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
            >
              Close
            </button>
            <OtherProductFields />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ProductFields;