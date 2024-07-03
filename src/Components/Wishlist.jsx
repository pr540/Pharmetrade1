

// import React, { useState } from "react";
// // import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router-dom";

// function Wishlist({ topMargin, wishItems, setWishItems }) {
//   const [quantities, setQuantities] = useState(wishItems.map(() => 1));
//   // console.log(wishItems)
//   function handleremove(index) {
//     const filtered = wishItems.filter((_, i) => i !== index);
//     setWishItems(filtered);

//     const updatedQuantities = quantities.filter((_, i) => i !== index);
//     setQuantities(updatedQuantities);
//   }
//   // function handleCart(index) {
//   //   const prolist = {
//   //     id: index,
//   //     src: images[index],
//   //     price: "$50.99",
//   //     rate: "SKU 6545555",
//   //     rates: "UPN member price:",
//   //     ratesupn: "$45.00",
//   //   };
//   //   addCart(prolist);
//   // }

//   return (
//     <div className="   bg-gray-200 p-8" style={{ marginTop: `${topMargin}px` }}>
//       <h1 className="text-2xl mb-2"> Pharmetrade {">"} Wishlist</h1>
//       <div className=" w-full h-full bg-white rounded-lg shadow-lg p-4">
//         <h1 className="text-2xl m-5"> Wishlist</h1>
//         {wishItems.length > 0 ? (
//           <div className="flex flex-col  gap-6">
//             {wishItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded-lg  justify-evenly flex h-56 p-4 max-w-6xl bg-white shadow-md"
//               >
//                 <img
//                   className="h-40 w-44   rounded-lg"
//                   src={item.src}
//                   alt={item.id}
//                 />
//                 <div className="flex flex-col justify-center">
//                   <h3 className="text-2xl font-semibold">
//                     Vitamin C(1000IU) Cap X
//                   </h3>
//                   <p className="text-blue-950 text-2xl">{item.price}</p>

//                   <p className="font-bold text-2xl">{item.price}</p>
//                   <p className="text-xl pt-2"> Mfr. India Pvt.Ltd</p>
//                 </div>
//                 <div className="  flex flex-col  justify-between ">
//                   <button
//                     className="font-semibold text-3xl p-0"
//                     onClick={() => handleremove(index)}
//                   >
//                     {/* <RxCross2 /> */}
//                     <FaHeart className="text-red-600" />
//                     {}
//                   </button>
//                   <button
//                     className=" text-lg bg-blue-500 w-32 h-14 rounded-full"
//                     // onClick={handleCart(index)}
//                   >
//                     Add To Cart
//                   </button>
//                   {/* <button className="justify-between text-lg bg-blue-500 w-28 rounded-2xl">Buy Now</button> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center mt-20">
//             <h2 className="text-2xl font-semibold text-gray-700">
//               Your wishlist is currently empty.
//             </h2>
//             <Link
//               to="/products"
//               className="mt-5 px-8 py-3 font-bold text-white text-xl bg-sky-700 border-2 rounded-full"
//             >
//               RETURN TO SHOP
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { RiShare2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPinterest, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Wishlist({ topMargin, wishItems, setWishItems }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState(wishItems.map(() => 1));
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  function handleremove(index) {
    const filtered = wishItems.filter((_, i) => i !== index);
    setWishItems(filtered);

    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(updatedQuantities);
  }

  function handleCart(index) {
    const prolist = {
      id: index,
      src: wishItems[index].src,
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
    navigate("/cart");
  }

  const Star = ({ filled, onClick }) => (
    <span onClick={onClick} style={{ cursor: 'pointer', fontSize: '25px' }}>
      {filled ? '★' : '☆'}
    </span>
  );

  const handlePopupToggle = () => setShowPopup(!showPopup);
  const handleSharePopupToggle = () => setIsShowPopup(!isShowPopup);

  return (
    <div className="bg-gray-200 p-8" style={{ marginTop: `${topMargin}px` }}>
      <h1 className="text-2xl mb-2">Pharmetrade {">"} Wishlist</h1>
      <div className="w-full h-full bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl m-5">Wishlist</h1>
          <div className='flex bg-white border rounded-xl h-12 w-64 p-2 m-5'>
            <input
              type='text'
              placeholder='Search product'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='text-left relative'
            />
          </div>
        </div>

        {wishItems.length > 0 ? (
          <div className="flex flex-col gap-6">
            {wishItems.map((item, index) => (
              <div key={index} className="border rounded-lg flex justify-evenly h-56 p-4 max-w-6xl bg-white shadow-md">
                <img className="h-48 w-40 rounded-lg" src={item.src} alt={item.id} />
                <div className="flex flex-col font-medium">
                  <Link to={`/detailspage/${item.id}`} className="hover:text-red-600">
                    <h3 className="text-xl font-semibold">Vitamin C(1000IU) Cap X Syrup 1000mg Nature Made</h3>
                    <p className="text-xl">Cough Syrup 1000mg</p>
                    <p className="text-xl">{item.price}</p>
                  </Link>
                  <p className="pt-2 text-xl">Mfr. PharmaEtrade Pvt.Ltd</p>
                  <p>Quantity: 1</p>
                  <div className="flex flex-col">
                    <span className="text-lg">Expires on or after :</span>
                    <p>Dec-24</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button className="text-lg bg-sky-500 w-56 p-1 rounded-full" onClick={() => handleCart(index)}>
                    Add To Cart
                  </button>
                  <div className="flex items-center justify-evenly my-4">
                    <RiShare2Fill className="border rounded-md mx-5 text-2xl w-8 hover:bg-sky-200" onClick={handleSharePopupToggle} />
                    {isShowPopup && (
                      <div className="flex flex-col justify-center items-center h-full absolute inset-0 bg-transparent z-auto">
                        <div className="border w-[13%] rounded-lg bg-gray-100">
                          <div className="flex border-b justify-between p-2">
                            <div className="flex items-center">
                              <MdOutlineMailOutline className="text-2xl" />
                              <p className="ml-3">Email</p>
                            </div>
                            <RxCross2 onClick={handleSharePopupToggle} />
                          </div>
                          <div className="flex border-b p-2">
                            <FaPinterest className="text-red-500 text-2xl" />
                            <p className="ml-3">Pinterest</p>
                          </div>
                          <div className="flex border-b p-2">
                            <FaFacebook className="text-blue-400 text-2xl" />
                            <p className="ml-3">Facebook</p>
                          </div>
                          <div className="flex border-b p-2">
                            <FaSquareXTwitter className="text-2xl" />
                            <p className="ml-3">Twitter</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <MdDeleteOutline className="border rounded-md text-2xl w-11 hover:bg-sky-200" onClick={() => handleremove(index)} />
                  </div>
                  <p onClick={handlePopupToggle}>Add comment, quantity & priority</p>
                  {showPopup && (
                    <div className="flex flex-col justify-center items-center h-full absolute inset-0 bg-transparent z-auto">
                      <div className="border w-[30%] rounded-lg bg-gray-100">
                        <div className="flex justify-between items-center bg-blue-200 border-b p-2">
                          <p className="font-bold text-2xl">Add comment, quantity, priority</p>
                          <RxCross2 className="hover:text-red-500" onClick={handlePopupToggle} />
                        </div>
                        <div className="flex justify-evenly my-2">
                          <img className="h-32 w-24 rounded-lg" src={item.src} alt={item.id} />
                          <div className="flex flex-col justify-end">
                            <label className="flex flex-col">Comment</label>
                            <input placeholder="Enter comments" className="border text-center h-32 w-80 rounded-md" />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="flex flex-col">
                            <span className="font-semibold text-xl">Priority:</span>
                            <select className="p-2 border rounded-md">
                              <option>Lowest</option>
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>
                              <option>Highest</option>
                            </select>
                          </div>
                          <div className="flex flex-col mx-4">
                            <span className="font-semibold text-xl">Needs</span>
                            <input className="border rounded-md w-20 p-2" />
                          </div>
                          <div className="flex flex-col mx-4">
                            <span className="font-semibold text-xl">Has:</span>
                            <input className="border rounded-md w-20 p-2" />
                          </div>
                        </div>
                        <div className="flex justify-end my-6">
                          <button className="border p-2 rounded-md hover:bg-red-500 hover:text-white" onClick={handlePopupToggle}>
                            Cancel
                          </button>
                          <button className="border p-2 rounded-md mx-4 w-16 bg-blue-900 text-white">Save</button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    {Array.from({ length: totalStars }, (v, i) => (
                      <Star key={i} filled={i < rating} onClick={() => setRating(i + 1)} />
                    ))}
                    <p>The rating is {rating} out of {totalStars}.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your wishlist is currently empty.
            </h2>
            <Link to="/products" className="mt-5 px-8 py-3 font-bold text-white text-xl bg-sky-700 border-2 rounded-full">
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
