import React from "react";
import background_image from "../../../assets/homepharma.png";
import whypharma from "../../../assets/WhyPharma.png";

const WhyPharma = ({ topMargin }) => {
  return (
    <div
      className=" relative w-full flex justify-center items-center"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div
        className={`flex w-full z-[-1] top-0  absolute justify-center items-center`}
      >
        <img className="w-full" src={background_image} />
      </div>

      <div className="w-[80%] h-full flex">
        <div className="w-[65%] h-full flex justify-center mt-6 ">
          <img src={whypharma} className="h-[430px] " />
        </div>
        <div className="w-[35%] h-full flex flex-col -mt-5 justify-center">
          <h2 className="text-3xl text-blue-900 font-semibold">
            Why PharmEtrade
          </h2>
          <p className="my-2">
            Pharmetrade revolutionizes the pharmaceutical marketplace with an
            all-in-one platform for seamless buyer and seller interactions.
            Users can list products, place bids, and communicate directly with
            sellers, ensuring a streamlined and secure transaction process.
          </p>
          <p>
            As the go-to destination for pharmaceutical trading, Pharmetrade
            offers a comprehensive solution for buying, selling, and bidding on
            products. Join us today and experience the future of pharmaceutical
            commerce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPharma;
