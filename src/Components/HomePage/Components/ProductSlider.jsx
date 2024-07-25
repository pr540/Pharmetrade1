// Slider.js
import React, { useRef, useState } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import addcart from "../../../assets/cart1_icon.png";
import fav from "../../../assets/Wishlist1_icon.png";
import comp from "../../../assets/Compare2_icon.png";

const ProductSlider = ({ data, Title }) => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const carouselContainer = useRef(null);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const Star = ({ filled, onClick }) => (
    <span onClick={onClick} style={{ cursor: "pointer", fontSize: "25px" }}>
      {filled ? "★" : "☆"}
    </span>
  );
  return (
    <div className="flex mt-12 flex-col justify-center pb-4 gap-6 ">
      <div className="flex justify-between ml-4 text-fonts font-semibold text-3xl">
        <p>{Title}</p>

        <div className="flex justify-end mr-14 gap-2">
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("left")}
          >
            <img src={left} className="w-4 h-4" />
          </button>
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("right")}
          >
            <img src={right} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full px-4 flex justify-center ">
        <div
          ref={carouselContainer}
          className=" flex w-full gap-6 overflow-x-scroll snap-x snap-mandatory"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="snap-center border rounded-lg bg-gray-200 shrink-0"
            >
              <div className="relative rounded-t-lg   bg-white">
                <img src={fav} className="absolute h-6 right-1 p-1" />
                <img src={comp} className="absolute h-6 bottom-0 right-1 p-1" />

                <img
                  src={item.img}
                  className="h-48 w-48  object-contain rounded-lg "
                />
              </div>
              <div className=" p-2 rounded-b-lg">
                <div className="flex justify-between  flex-col font-medium">
                  <h2 className="text-black font-bold">{item.name}</h2>
                  <div className="flex  justify-between items-center">
                    <div className="flex gap-2">
                      <h3 className=" text-gray-600 line-through">
                        {item.price}
                      </h3>
                      <h3 className=" text-gray-600">{"$50.00"}</h3>
                    </div>
                    <div>
                      <img src={addcart} className="h-7 p-1 " />
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
                  {/* <p>The rating is {rating} out of {totalStars}.</p> */}
                </div>
                {/* <div className="flex  border-gray-300   items-center">
                  {/* <div className="flex items-center ">
                    <img src={addcart} className="h-8 p-1 " />
                    <p className="text-blue-900 font-semibold">Add to Cart</p>
                  </div> 
                  {/* <div>
                    <img src={fav} className="h-8 p-1" />
                  </div>
                  <div>
                    <img src={other} className="h-8 p-1" />
                  </div> 
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

// import React, { useRef, useEffect } from "react";
// import left from "../../../assets/arrowleft.png";
// import right from "../../../assets/arrowright.png";
// import addcart from "../../../assets/cart1_icon.png";
// import fav from "../../../assets/Wishlist1_icon.png";
// import other from "../../../assets/compare1_Icon.png";

// const ProductSlider = ({ data, Title }) => {
//   const carouselContainer = useRef(null);

//   const navigation = (dir) => {
//     const container = carouselContainer.current;
//     const scrollAmount =
//       dir === "left"
//         ? container.scrollLeft - (container.offsetWidth + 20)
//         : container.scrollLeft + (container.offsetWidth + 20);

//     container.scrollTo({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const container = carouselContainer.current;
//       const scrollAmount = container.scrollLeft - (container.offsetWidth + 20);

//       if (scrollAmount <= 0) {
//         container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
//       } else {
//         container.scrollTo({ left: scrollAmount, behavior: "smooth" });
//       }
//     }, 3000); // Adjust the interval duration as needed

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex mt-12 flex-col justify-center pb-4 gap-10">
//       <div className="flex justify-between ml-4 text-fonts font-semibold text-3xl">
//         <p>{Title}</p>

//         <div className="flex justify-end mr-14 gap-2">
//           <button
//             className="bg-white rounded-sm p-2"
//             onClick={() => navigation("left")}
//           >
//             <img src={left} className="w-4 h-4" />
//           </button>
//           <button
//             className="bg-white rounded-sm p-2"
//             onClick={() => navigation("right")}
//           >
//             <img src={right} className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//       <div className="w-full px-4 flex justify-center">
//         <div
//           ref={carouselContainer}
//           className="flex w-full gap-6 overflow-x-scroll snap-x snap-mandatory"
//         >
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="snap-center border rounded-lg bg-gray-200 shrink-0"
//             >
//               <div className="relative rounded-t-lg bg-white">
//                 <img src={fav} className="absolute h-7 p-1" />

//                 <img
//                   src={item.img}
//                   className="h-48 w-48 object-contain rounded-lg"
//                 />
//               </div>
//               <div className="p-2 rounded-b-lg">
//                 <div className="flex justify-between flex-col font-medium">
//                   <h2 className="text-black font-bold">{item.name}</h2>
//                   <div className="flex gap-2">
//                     <h3 className="text-gray-600 line-through">{item.price}</h3>
//                     <h3 className="text-gray-600">{"$50.00"}</h3>
//                   </div>
//                 </div>
//                 <div className="flex border-gray-300 items-center">
//                   <div className="flex items-center">
//                     <img src={addcart} className="h-8 p-1" />
//                     <p className="text-blue-900 font-semibold">Add to Cart</p>
//                   </div>
//                   {/* <div>
//                     <img src={fav} className="h-8 p-1" />
//                   </div>
//                   <div>
//                     <img src={other} className="h-8 p-1" />
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSlider;
