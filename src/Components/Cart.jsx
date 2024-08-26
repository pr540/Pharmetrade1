

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import searchimg from '../assets/search1.png';
 import deleteicon from '../assets/trash.png'
function Cart({ topMargin, cartItems, setCartItems }) {
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));
  let navigate = useNavigate();

  function handleremove(index) {
    const filtered = cartItems.filter((_, i) => i !== index);
    setCartItems(filtered);

    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(updatedQuantities);
  }

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const calculateSubtotal = (price, quantity) => price * quantity;
  const total = cartItems.reduce(
    (acc, item, index) =>
      acc + calculateSubtotal(item.price, quantities[index]),
    0
  );

  const handleProceed = () => {
    navigate("/checkout");
  };

  const handlemove =()=>{
    navigate("/detailspage/0")
  }

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
    // backgroundColor:'red',
    color:'black',
  zIndex:"1"
   
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // backgroundColor:'beige',
    border:'1px solid gray',
    // boxShadow:'1px 1px',
    borderRadius:'5px',
    color: "black",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
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
    <div
      className=" flex flex-col justify-center font-sans bg-gray-200 p-8  "
      style={{ marginTop: `${topMargin}px` }}
    >
      <p className="text-lg md:text-2xl mb-2 text-blue-900 flex font-semibold">
        PharmEtrade {`>`} Cart
      </p>
      <div className="w-full bg-white rounded-lg shadow-lg p-5">
      <div className="flex justify-between">
        <h2 className="text-xl md:text-2xl mb-4 font-semibold">Cart</h2>
        <div className='flex bg-white  m-5'>
            
            <Search className="">
         <SearchIconWrapper>
           <img src={searchimg} className="w-6 absolute " />
           {/* <SearchIcon /> */}
         </SearchIconWrapper>
         <StyledInputBase
           placeholder="Search..."
           inputProps={{ "aria-label": "search" }}
         />
       </Search>
         </div>
         </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-2/3">
              <table className="min-w-full border shadow-lg  rounded-lg">
                <thead className="" >
                  <tr className="border-b" >
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Image
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Product Name
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Price
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Quantity
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Subtotal
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-2 md:px-3 py-2 whitespace-nowrap">
                        <img
                          className="h-16 w-16 rounded-lg"
                          onClick={handlemove}
                          src={item.src}
                          alt={item.id}
                        />
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        {item.price}
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        <input
                          type="number"
                          value={quantities[index]}
                          onChange={(e) =>
                            handleQuantityChange(index, Number(e.target.value))
                          }
                          className="text-xl border rounded-lg p-1 w-16"
                          min="1"
                        />
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        <strong>
                          ${calculateSubtotal(item.price, quantities[index])}
                        </strong>
                      </td>
                      <td className="px-2 md:px-4 py-8 whitespace flex items-center justify-center">
                        <button
                          className="text-red-600 w-4 h-3"
                          onClick={() => handleremove(index)}
                        >
                          <img src={deleteicon} className="w-6 "/>
                          {/* <RiDeleteBinLine className="w-7 h-9" /> */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex gap-4">
                <input
                  placeholder="Coupon Code"
                  className="px-4 py-2 w-36 bg-gray-100 text-lg border rounded-full"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
                    Apply Coupon
                  </button>
                  <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="bg-white  border rounded-lg shadow-lg p-5">
                <h2 className="text-xl md:text-2xl mb-4 text-center font-semibold">
                  Cart Totals
                </h2>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Subtotal</td>
                      <td className="px-4 py-2 text-right">${total}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Total</td>
                      <td className="px-4 py-2 text-right">${total}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="w-full mt-4 px-4 py-2 font-bold text-white text-lg bg-blue-900 rounded-full"
                  onClick={handleProceed}
                >
                  Proceed to checkout
                </button>
                <button className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full">
                  <Link to="/products">Continue Shopping</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center m-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is currently empty.
            </h2>
            <Link
              to="/products"
              className="mt-5 px-8 py-2 font-semibold text-white text-lg bg-blue-900 rounded-full"
            >
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import searchimg from '../assets/search1.png';
// import deleteicon from '../assets/trash.png';

// function Cart({ topMargin, cartItems, setCartItems }) {
//   const [quantities, setQuantities] = useState([]);
//   let navigate = useNavigate();
//   const localData= JSON.parse(localStorage.getItem("login"));
//   const customerId = localData?.userId;

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(
//           `http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Cart/GetCartItems?customerId=${customerId}`
//         );
//         const items = response.data;
//         setCartItems(items);
//         setQuantities(items.map(() => 1)); // Set default quantity as 1 for all items
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, [setCartItems]);

//   function handleremove(index) {
//     const filtered = cartItems.filter((_, i) => i !== index);
//     setCartItems(filtered);

//     const updatedQuantities = quantities.filter((_, i) => i !== index);
//     setQuantities(updatedQuantities);
//   }

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = newQuantity;
//     setQuantities(updatedQuantities);
//   };

//   const calculateSubtotal = (price, quantity) => price * quantity;
//   const total = cartItems.reduce(
//     (acc, item, index) =>
//       acc + calculateSubtotal(item.price, quantities[index]),
//     0
//   );

//   const handleProceed = () => {
//     navigate("/checkout");
//   };

//   const handlemove = () => {
//     navigate("/detailspage/0");
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
//     color: "black",
//     zIndex: "1",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     border: "1px solid gray",
//     borderRadius: "5px",
//     color: "black",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   return (
//     <div
//       className="flex flex-col justify-center font-sans bg-gray-200 p-8"
//       style={{ marginTop: `${topMargin}px` }}
//     >
//       <p className="text-lg md:text-2xl mb-2 text-blue-900 flex font-semibold">
//         PharmEtrade {`>`} Cart
//       </p>
//       <div className="w-full bg-white rounded-lg shadow-lg p-5">
//         <div className="flex justify-between">
//           <h2 className="text-xl md:text-2xl mb-4 font-semibold">Cart</h2>
//           <div className="flex bg-white m-5">
//             <Search>
//               <SearchIconWrapper>
//                 <img src={searchimg} className="w-6 absolute" alt="search" />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search..."
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//           </div>
//         </div>
//         {cartItems.length > 0 ? (
//           <div className="flex flex-col lg:flex-row gap-2">
//             <div className="w-full lg:w-2/3">
//               <table className="min-w-full border shadow-lg rounded-lg">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Image
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Product Name
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Quantity
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Subtotal
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {cartItems.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-2 md:px-3 py-2 whitespace-nowrap">
//                         <img
//                           className="h-16 w-16 rounded-lg"
//                           onClick={handlemove}
//                           src={item.src}
//                           alt={item.id}
//                         />
//                       </td>
//                       <td className="px-2 md:px-4 py-3 whitespace-nowrap">
//                         {item.name}
//                       </td>
//                       <td className="px-2 md:px-4 py-3 whitespace-nowrap">
//                         {item.price}
//                       </td>
//                       <td className="px-2 md:px-4 py-3 whitespace-nowrap">
//                         <input
//                           type="number"
//                           value={quantities[index]}
//                           onChange={(e) =>
//                             handleQuantityChange(index, Number(e.target.value))
//                           }
//                           className="text-xl border rounded-lg p-1 w-16"
//                           min="1"
//                         />
//                       </td>
//                       <td className="px-2 md:px-4 py-3 whitespace-nowrap">
//                         <strong>
//                           ${calculateSubtotal(item.price, quantities[index])}
//                         </strong>
//                       </td>
//                       <td className="px-2 md:px-4 py-8 whitespace flex items-center justify-center">
//                         <button
//                           className="text-red-600 w-4 h-3"
//                           onClick={() => handleremove(index)}
//                         >
//                           <img src={deleteicon} className="w-6" alt="delete" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="mt-4 flex gap-4">
//                 <input
//                   placeholder="Coupon Code"
//                   className="px-4 py-2 w-36 bg-gray-100 text-lg border rounded-full"
//                 />
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
//                     Apply Coupon
//                   </button>
//                   <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
//                     Update Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
//               <div className="bg-white border rounded-lg shadow-lg p-5">
//                 <h2 className="text-xl md:text-2xl mb-4 text-center font-semibold">
//                   Cart Totals
//                 </h2>
//                 <table className="w-full">
//                   <tbody>
//                     <tr>
//                       <td className="px-4 py-2 font-semibold">Subtotal</td>
//                       <td className="px-4 py-2 text-right">${total}</td>
//                     </tr>
//                     <tr>
//                       <td className="px-4 py-2 font-semibold">Total</td>
//                       <td className="px-4 py-2 text-right">${total}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <button
//                   className="w-full mt-4 px-4 py-2 font-bold text-white text-lg bg-blue-900 rounded-full"
//                   onClick={handleProceed}
//                 >
//                   Proceed to checkout
//                 </button>
//                 <button className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full">
//                   <Link to="/products">Continue Shopping</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center m-8">
//             <h2 className="text-xl font-semibold text-gray-700">
//               Your cart is currently empty.
//             </h2>
//             <Link
//               to="/products"
//               className="mt-5 px-8 py-2 font-semibold text-white text-lg bg-blue-900 rounded-full"
//             >
//               RETURN TO SHOP
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;
