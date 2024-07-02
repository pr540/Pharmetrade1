// import React, { useState } from "react";
// // import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";

// function Wishlist({ topMargin, wishItems, setWishItems }) {
//   const [quantities, setQuantities] = useState(wishItems.map(() => 1));
// // console.log(wishItems)
//   function handleremove(index) {
//     const filtered = wishItems.filter((_, i) => i !== index);
//     setWishItems(filtered);

//     const updatedQuantities = quantities.filter((_, i) => i !== index);
//     setQuantities(updatedQuantities);
//   }

//   return (
//     <div className="ml-10 font-sans" style={{
//         marginTop: `${topMargin}px`,
//       }}>

//       <div className="">
//       <h1 className="text-2xl m-10"> Wishlist</h1>
//       {wishItems.length > 0 && (
//         <div className="flex flex-col  gap-6">
//           {wishItems.map((item, index) => (

//             <div
//               key={index}
//               className="border rounded-lg  justify-evenly flex h-56 p-4 max-w-6xl bg-white shadow-md"
//             >

//               <img
//                 className="h-40 w-44   rounded-lg"
//                 src={item.src}
//                 alt={item.id}
//               />
//               <div className="flex flex-col justify-center">
//                 <h3 className="text-2xl font-semibold">Vitamin C(1000IU) Cap X</h3>
//                 <p className="text-blue-950 text-2xl">${item.price}</p>

//                 <p className="font-bold text-2xl">${item.price}</p>
//                 <p className="text-xl pt-2"> Mfr. India Pvt.Ltd</p>
//               </div>
//               <div className="  flex flex-col  justify-between ">
//               <button
//                 className="font-semibold text-3xl p-0"
//                 onClick={() => handleremove(index)}
//               >
//                 {/* <RxCross2 /> */}
//                 <FaHeart className="text-red-600"/>
//                 {}
//               </button>
//               <button className=" text-lg bg-blue-500 w-32 h-14 rounded-full">Add To Cart</button>
//               {/* <button className="justify-between text-lg bg-blue-500 w-28 rounded-2xl">Buy Now</button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;

import React, { useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Wishlist({ topMargin, wishItems, setWishItems }) {
  const [quantities, setQuantities] = useState(wishItems.map(() => 1));
  // console.log(wishItems)
  function handleremove(index) {
    const filtered = wishItems.filter((_, i) => i !== index);
    setWishItems(filtered);

    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(updatedQuantities);
  }
  // function handleCart(index) {
  //   const prolist = {
  //     id: index,
  //     src: images[index],
  //     price: "$50.99",
  //     rate: "SKU 6545555",
  //     rates: "UPN member price:",
  //     ratesupn: "$45.00",
  //   };
  //   addCart(prolist);
  // }

  return (
    <div className="   bg-gray-200 p-8" style={{ marginTop: `${topMargin}px` }}>
      <h1 className="text-2xl mb-2"> Pharmetrade {">"} Wishlist</h1>
      <div className=" w-full h-full bg-white rounded-lg shadow-lg p-4">
        <h1 className="text-2xl m-5"> Wishlist</h1>
        {wishItems.length > 0 ? (
          <div className="flex flex-col  gap-6">
            {wishItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg  justify-evenly flex h-56 p-4 max-w-6xl bg-white shadow-md"
              >
                <img
                  className="h-40 w-44   rounded-lg"
                  src={item.src}
                  alt={item.id}
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold">
                    Vitamin C(1000IU) Cap X
                  </h3>
                  <p className="text-blue-950 text-2xl">{item.price}</p>

                  <p className="font-bold text-2xl">{item.price}</p>
                  <p className="text-xl pt-2"> Mfr. India Pvt.Ltd</p>
                </div>
                <div className="  flex flex-col  justify-between ">
                  <button
                    className="font-semibold text-3xl p-0"
                    onClick={() => handleremove(index)}
                  >
                    {/* <RxCross2 /> */}
                    <FaHeart className="text-red-600" />
                    {}
                  </button>
                  <button
                    className=" text-lg bg-blue-500 w-32 h-14 rounded-full"
                    // onClick={handleCart(index)}
                  >
                    Add To Cart
                  </button>
                  {/* <button className="justify-between text-lg bg-blue-500 w-28 rounded-2xl">Buy Now</button> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your wishlist is currently empty.
            </h2>
            <Link
              to="/products"
              className="mt-5 px-8 py-3 font-bold text-white text-xl bg-sky-700 border-2 rounded-full"
            >
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
