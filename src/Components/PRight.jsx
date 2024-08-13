// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import addcart from "../assets/addcart.png";
// // import fav from "../assets/fav.png";
// // import other from "../assets/other.png";
// // import other from "../assets/compare1_Icon.png";
// import addcart from "../assets/cartw_icon.png";
// import fav from "../assets/Wishlist1_icon.png";
// import nature from "../assets/img1.png";
// import Items from "./Items";
// import next from "../assets/Next_icon.png";
// // import next from "../assets/Icons/Next_icon.png"
// // import previous from "../assets/Icons/Previous_icon.png"
// import previous from "../assets/Previous_icon.png";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import search from "../assets/search-icon.png";
// import { useNavbarContext } from "./NavbarContext";
// import { useNavigate } from "react-router-dom";
// import emptyHeart from "../assets/Wishlist1_icon.png";
// import filledHeart from "../assets/wishlist2_icon.png";
// import other from "../assets/CompareNav2.png";

// function PRight({ topMargin, addCart, wishList }) {
//   const { pop, setPop } = useNavbarContext();
//   const navigate = useNavigate();
//   const images = Array(115).fill(nature);
//   const itemsPerPage = 12;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [favoriteItems, setFavoriteItems] = useState({});
//   const [rating, setRating] = useState(0);
//   const totalStars = 5;

//   const handleClose = (event) => {
//     event.stopPropagation();
//     console.log("Clicked to close Items");
//     setPop(false);
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
//   }

//   function handleClick(index) {
//     setFavoriteItems((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//     // alert("Add 1 item into wishlist");
//     const prolist = {
//       id: index,
//       src: images[index],
//       price: "$50.99",
//       rate: "SKU 6545555",
//       rates: "UPN member price:",
//       ratesupn: "$45.00",
//     };
//     wishList(prolist);
//   }

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(images.length / itemsPerPage);

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "white",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   const Star = ({ filled, onClick }) => (
//     <span
//       onClick={onClick}
//       style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
//     >
//       {filled ? "★" : "☆"}
//     </span>
//   );

//   return (
//     <div className="w-full mt-4 h-full overflow-y-scroll">
//       <div className=" flex justify-between bg-blue-900 p-1 rounded-lg">
//         <div className="text-2xl text-white"> Rx Drug</div>

//         <Search>
//           <SearchIconWrapper>
//             <img src={search} className="w-4" />
//             {/* <SearchIcon /> */}
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search…"
//             inputProps={{ "aria-label": "search" }}
//           />
//         </Search>
//       </div>

//       <div className="w-[95%]">
//         <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
//           {currentItems.map((img, index) => (
//             <div
//               key={index + indexOfFirstItem}
//               className="w-full max-w-md border p-2  shadow-md"
//             >
//               {/* <Link to={`/detailspage/${index + indexOfFirstItem}`}> */}
//               <div className="flex justify-center bg-slate-200 relative">
//                 <img
//                   onClick={() => handleClick(index + indexOfFirstItem)}
//                   src={favoriteItems[index] ? filledHeart : emptyHeart}
//                   className="h-8 p-[6px]  absolute right-0 "
//                   alt="Favorite Icon"
//                 />
//                 <img
//                   src={other}
//                   className="h-5 w-5 right-1 absolute bottom-1 text-green-700"
//                   alt="Other Icon"
//                 />

//                 <Link to={`/detailspage/${index + indexOfFirstItem}`}>
//                   <img
//                     src={img}
//                     alt={`nature-${index + indexOfFirstItem}`}
//                     className="h-40 w-28 rounded-lg"
//                   />
//                 </Link>
//               </div>
//               {/* </Link> */}
//               <div className="w-full py-1">
//                 <h2 className="text-fonts">SKU 6545555</h2>
//                 <h1 className="text-fonts font-semibold">$50.99</h1>
//               </div>
//               <div>
//                 {Array.from({ length: totalStars }, (v, i) => (
//                   <Star
//                     key={i}
//                     filled={i < rating}
//                     onClick={() => setRating(i + 1)}
//                   />
//                 ))}
//               </div>
//               <div className="flex flex-row items-center justify-between w-full px-1">
//                 <div className="text-foot text-xs">UPN Member Price:</div>
//                 <div className="text-base font-semibold">$45.00</div>
//               </div>
//               <div
//                 className="flex bg-blue-900 p-1 rounded-md justify-center"
//                 onClick={() => handleCart(index + indexOfFirstItem)}
//               >
//                 <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
//                 <button className="text-white font-semibold">ADD</button>
//               </div>
//               {/*<ul className="flex flex-row justify-around border bg-gray-100 border-gray-300 shadow-md rounded-xl  py-2">
//               <li>
//                 <img
//                   src={addcart}
//                   alt="Add to cart"
//                   className="h-8 p-[6px]"
//                   onClick={() => handleCart(index + indexOfFirstItem)}
//                 />
//               </li>

//                <li>
//                 <img
//                   src={fav}
//                   alt="Favorite"
//                   className="h-8 p-[6px]"
//                   onClick={() => handleClick(index + indexOfFirstItem)}
//                 />
//               </li>
//               <li>
//                 <img src={other} alt="Other" className="h-8 p-[6px]" />
//               </li>
//             </ul>*/}
//               {pop && <Items topMargin={topMargin} onClose={handleClose} />}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-end my-2">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="mx-2 px-4 border p-2 text-white rounded-lg"
//         >
//           <img src={previous} className="w-2" />
//         </button>
//         <span className="mx-2 px-4 flex items-center  bg-white text-black rounded-lg">
//           {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="mx-2 px-4 border p-2 text-white rounded-lg"
//         >
//           <img src={next} className="w-2" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PRight;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import other from "../assets/compare1_Icon.png";
import addcart from "../assets/cartw_icon.png";
import fav from "../assets/Wishlist1_icon.png";
import nature from "../assets/img1.png";
import Items from "./Items";
import next from "../assets/Next_icon.png";
import previous from "../assets/Previous_icon.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../assets/search1.png";
import { useNavbarContext } from "./NavbarContext";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../assets/Wishlist1_icon.png";
import filledHeart from "../assets/wishlist2_icon.png";
import filter from "../assets/Icons/filter_icon.png";
import image1 from "../assets/offers_1.png";
import image2 from "../assets/offers_2.png";
import image3 from "../assets/offers_3.png";
import cart from "../assets/cartw_icon.png";
import Expicon from "../assets/Expicon.png";

function PRight({ topMargin, addCart, wishList }) {
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const images = Array(115).fill(nature);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [quantities, setQuantities] = useState(Array(images.length).fill(1));
  const [ProductsList, setProductsList] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/ProductFilter/GetAllProducts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductsList(data.productfilter);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(ProductsList);

  const products = [
    {
      src: image2,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image1,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image2,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image3,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image1,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image2,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image3,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "3/2040",
    },
    {
      src: image1,
      Details: "STANGEL-BARRQ NH MCR CVD 4 1/2 Others",
      Details1: "STANGEL-BARRQ NH MCR CVD 4 1/2 Sklar Instruments",
      package: "( EA)",
      package1: "Original Package-Sealed",
      price: "$50.99",
      Date: "2/2044",
    },
    // Add more products here if needed
  ];

  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Clicked to close Items");
    setPop(false);
  };

  function handleCart(index) {
    const prolist = {
      id: index,
      src: image3[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
  }

  function handleClick(index) {
    setFavoriteItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    wishList(prolist);
  }

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="w-full mt-4 h-full overflow-y-scroll">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-blue-900">Buy Products</h1>
        <div className="flex">
          <div className="flex gap-1 ">
            {/* <img src={filter} className="w-5 h-4" />
            <p className="text-white">Filter</p> */}

            <select className="bg-white h-10 px-2 p-2 cursor-pointer text-black border rounded-md items-center justify-center">
              <option>Discounted Price Low to High</option>
              <option>Discounted Price High to Low</option>
              <option>Posted date : Old to Latest</option>
              <option>Show Prescription Products First</option>
              <option>Show OTC Products First</option>
              <option>Discount Percentage Low to High</option>
              <option>Discounted Percentage High to Low</option>
              <option>Expiry date : Short to Long</option>
              <option>Expiry date : Long to Short</option>
              <option>Name : Ascending (A-Z)</option>
              <option>Name : Decending (Z-A)</option>
              <option>Strength Low to High</option>
              <option>Strength Hign to Low</option>
            </select>
          </div>
          <div>
            <Search>
              <SearchIconWrapper>
                <img src={search} className="w-6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-5">
        <div className="">
          <div className="flex flex-col">
            <div className="flex flex-col  justify-between">
              {ProductsList?.map((product, index) => (
                <div
                  key={index}
                  className="flex p-4 border shadow-lg rounded-md  mb-4"
                >
                  <div className="flex flex-col mx-2">
                    <p></p>
                    <img
                      src={product.imageUrl}
                      className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200 "
                      alt="Product"
                      onClick={() => navigate("/detailspage/0")}
                    />
                  </div>

                  <div className="flex flex-col mx-3">
                    <p className="font-semibold">Item Details</p>
                    <div className="mt-2">
                      <p className="font-semibold">{product.productName}</p>
                      <p className="text-xs mt-1">
                        {product.productDescription}
                      </p>
                      <div className="flex mt-1 gap-1">
                        <img src={Expicon} className="w-6 h-6" />
                        <div className="flex gap-2">
                          <p>Exp.Date :</p>
                          <p className="font-semibold">
                            {product.expirationDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mx-3">
                    <p className="font-semibold">Package Details</p>
                    <div className="mt-2">
                      <p className=" text-red-500 font-semibold">
                        {product.package}
                      </p>
                      <p className="text-xs mt-1">{product.package1}</p>
                    </div>
                  </div>

                  <div className="flex flex-col mx-3">
                    <p className="font-semibold">Unit Price</p>
                    <div className="mt-2">
                      <p className="font-semibold ">{product.priceName}</p>
                    </div>
                  </div>

                  <div className="flex flex-col mx-3">
                    <p className="font-semibold">Quantity</p>
                    <div className="my-2">
                      <input
                        type="number"
                        value={quantities[index]}
                        onChange={(e) =>
                          handleQuantityChange(index, Number(e.target.value))
                        }
                        className="text-xl border rounded-lg p-1 w-10 h-8"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="flex  flex-col mx-3 items-center gap-2 justify-between">
                    <img
                      src={favoriteItems[index] ? filledHeart : emptyHeart}
                      alt="Wishlist"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleClick(index)}
                    />
                    <div className="flex h-8 w-16 cursor-pointer bg-blue-900 text-white items-center justify-center gap-1 rounded-md p-2">
                      <img src={cart} className="w-5 h-5" alt="Cart" />
                      <button
                        className="font-semibold"
                        onClick={() => handleCart(index)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" alt="Previous" />
        </button>
        <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default PRight;
