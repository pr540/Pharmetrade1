// import React,{useState} from 'react';
// import image1 from '../../../assets/nature.png';
// import wishlist from '../../../assets/Wishlist1_icon.png';
// import compare from '../../../assets/compare1.png';
// import next from "../../../assets/Next_icon.png";
// import previous from "../../../assets/Previous_icon.png";

// const offersData = [
//   {
//     image: image1,
//     discount: '50% Off',
//     title: 'Nature Image',
//     price: '$280',
//   },
//   {
//     image: image1,
//     discount: '50% Off',
//     title: 'Nature Image',
//     price: '$280',
//   },
//   // You can add more offers here
//   {
//     image: image1,
//     discount: '30% Off',
//     title: 'Nature Image 2',
//     price: '$300',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   },
//   {
//     image: image1,
//     discount: '10% Off',
//     title: 'Nature Image 3',
//     price: '$500',
//   }
// ];

// const Offers = ({ topMargin }) => {

//   const images = Array(56).fill(image1);
//   const itemsPerPage = 10;
//   const [currentPage, setCurrentPage] = useState(1);

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
//   return (
//     <div
//       className="h-screen w-full flex flex-col justify-center items-center overflow-y-auto bg-gray-200"
//       style={{
//         marginTop: ${topMargin}px,
//       }}
//     >
//       <div className="w-full h-full bg-gray-200 mb-8 mt-6">
//         <div className="  h-full  p-5 ">
//           <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5 gap-3">
//             {offersData.map((offer, index) => (
//               <div key={index} className="border rounded-lg w-60 h-72  bg-white p-2">
//                 <div className="flex justify-end mb-2">
//                   <p className="rounded-md bg-yellow-300 w-16 text-center text-black">{offer.discount}</p>
//                 </div>
//                 <div className="flex justify-center items-center mb-2">
//                   <img src={offer.image} className="w-32 h-36" />
//                 </div>
//                 <div className="flex justify-center flex-col items-center mb-2">
//                   <p className="font-semibold">{offer.title}</p>
//                   <span>{offer.price}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <button className="bg-blue-900 border text-sm font-medium rounded-md text-white p-1">Add to cart</button>
//                   <div className="flex gap-2 mt-2">
//                     <img src={wishlist} className="w-5 h-5  " />
//                     <img src={compare} className="w-5 h-5" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
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

// export default Offers;



import React, { useState } from 'react';
// import image1 from '../../../assets/nature.png';
import wishlist from '../assets/Wishlist1_icon.png';
import compare from '../assets/CompareNav2.png'
import next from "../assets/Next_icon.png";
import previous from "../assets/Previous_icon.png";
import cart from '../assets/cartw_icon.png'
import image2 from '../assets/offers_1.png'
import image3 from '../assets/offers_2.png'
import image4 from '../assets/offers_3.png'
const offersData = [
  {
    image: image4,
    discount: '50% Off',
    title: 'Nature Image',
    price: '$280',
  },
  {
    image: image2,
    discount: '50% Off',
    title: 'Nature Image',
    price: '$280',
  },
  {
    image: image3,
    discount: '30% Off',
    title: 'Nature Image 2',
    price: '$300',
  },
  {
    image: image4,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  {
    image: image2,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  {
    image: image3,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  {
    image: image4,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  {
    image: image2,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  {
    image: image3,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  {
    image: image4,
    discount: '10% Off',
    title: 'Nature Image 3',
    price: '$500',
  },
  // Additional offers can be added here...
];

const Offers = ({ topMargin }) => {
  const itemsPerPage = 10;
  // const images = Array(115).fill(image1);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = offersData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(offersData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div
      className=" w-full flex flex-col justify-center items-center overflow-y-auto mt-8 bg-gray-200"
      style={{
        marginTop: `${topMargin}px`
      }}
    >
      <div className="w-full h-full bg-gray-200 mb-5 mt-8">
        <div className="h-full p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {currentItems.map((offer, index) => (
              <div key={index} className="flex flex-col border rounded-lg w-60 h-80 bg-white">
                <div className='flex justify-between'>
                <div className="flex flex-row justify-center text-center  bg-yellow-300 w-20 rounded-l-xl rounded-b-full pb-8">
                  <p className="pb-3 mt-3 text-black font-semibold">{offer.discount}</p>
                </div>
                <div className='m-3'>
                <img src={wishlist} className="w-5 h-5" />

                  </div>
                  </div>
                <div className="flex justify-center items-center -mt-5">
                  <img src={offer.image} className="w-60 h-40" />
                </div>
                <div className="flex justify-center flex-col items-center mb-1">
                  <p className="font-semibold text-xl">{offer.title}</p>
                  <span className=''>{offer.price}</span>
                </div>
                <div className="flex justify-between mx-2">
                  <button className=" items-center justify-center px-2 flex gap-1 bg-blue-900 border text-sm font-medium rounded-md text-white p-1">
                  <img src={cart} className='w-4 h-4'/>
                  Add to cart</button>
                  <div className="flex gap-2 ">
                    <img src={compare} className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" />
        </button>
        <span className="mx-2 px-4 flex items-center bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" />
        </button>
      </div> */}
    </div>
  );
}

export default Offers;