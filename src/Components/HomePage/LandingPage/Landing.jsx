// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Nav from "../Layout/Nav";
// import BackgroundImage from "../../../assets/Icons/banner-12 1.png";
// import { useState, useEffect, useRef } from "react";
// import Footers from "../../Footers";
// import Product from "../../Product";
// import Sliders from "./Sliders";
// import Landing2 from "./Landing2";
// import PLefts from "../../PLefts";
// function Landing({ topMargin, wishList, addCart }) {
//   return (
//     <div className=" w-full font-sans">
//       <div className=" w-full">
//         <div
//           className=" h-fit  background-animation"
//           style={{
//             marginTop: `${topMargin}px`,
//           }}
//         >
//           <div className="mt-1 ">
//             <p className="text-left md:pt-6 lg:pt-14 md:ml-20  lg:ml-36 lg:text-4xl text-white w-fit">
//               <div className=" bounce-in-top overflow-hidden">
//                 <span className="text-4xl  text-white  font-extralight">
//                   Your{" "}
//                 </span>
//                 <br></br>
//               </div>
//               <div className="my-2 bounce-in-top">
//                 <span className="font-semibold text-white mb-3 text-3xl">
//                   Trusted Online
//                 </span>
//                 <br></br>
//               </div>
//               <div className="mb-2 bounce-in-top">
//                 <span className="font-semibold text-white mt-5 text-3xl">
//                   {" "}
//                   Market Place
//                 </span>
//                 <br></br>
//               </div>
//               <div>
//                 <p className="font-extralight text-[26px] bounce-in-top text-white mb-2">
//                   to <span className="font-medium ">Buy</span>,{" "}
//                   <span className="font-medium">Sell</span> &{" "}
//                   <span className="font-medium">Bid</span> on{" "}
//                   <span className=" font-medium ">Overstock{" "}</span>&{" "}
//                 </p>
//               </div>
//               <p className="text-white text-[26px] pb-2 bounce-in-top font-light">
//                 Short Date Prescription Medications
//               </p>
//             </p>
//           </div>
//         </div>
//         <div className="w-full bg-slate-200 px-6">
//           <Landing2  addCart={addCart} wishList={wishList} />
//           <Sliders  addCart={addCart} wishList={wishList} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing2 from "./Landing2";
import Sliders from "./Sliders";
import banner1 from "../../../assets/BannerText1.png";
import banner2 from "../../../assets/BannerText2.jpg";
import banner3 from "../../../assets/BannerText3.jpg";
import banner4 from "../../../assets/BannerText4.jpg";
import "./Landing.css";

function Landing({ topMargin, wishList, addCart }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,       // Auto play slides
    autoplaySpeed: 3000,  // Slide change interval (3 seconds)
  };

  return (
    <div className="w-full font-sans">
      <div className="w-full">
        <div
          className="h-fit"
          style={{
            marginTop: `${topMargin}px`,
          }}
        >
          <div className="w-full relative h-[350px] overflow-hidden">
            <Slider {...settings}>
              <div>
                <img
                  src={banner1}
                  alt="Carousel Image 1"
                  className="w-full h-[350px]"
                />
              </div>
              <div>
                <img
                  src={banner2}
                  alt="Carousel Image 2"
                  className="w-full h-[350px]"
                />
              </div>
              <div>
                <img
                  src={banner3}
                  alt="Carousel Image 3"
                  className="w-full h-[350px]"
                />
              </div>
              <div>
                <img
                  src={banner4}
                  alt="Carousel Image 4"
                  className="w-full h-[350px]"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-full bg-slate-200 px-6">
          <Landing2 addCart={addCart} wishList={wishList} />
          <Sliders addCart={addCart} wishList={wishList} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
