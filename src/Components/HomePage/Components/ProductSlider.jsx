// Slider.js
import React, { useRef } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import addcart from "../../../assets/cart1_icon.png";
import fav from "../../../assets/Wishlist1_icon.png";
import other from "../../../assets/compare1_Icon.png";

const ProductSlider = ({ data, Title }) => {
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
  return (
    <div className="flex mt-12 flex-col justify-center gap-10 ">
      <div className="flex justify-between ml-10 text-fonts font-semibold text-3xl">
        <p>{Title}</p>

        <div className="flex justify-end mr-14 gap-2">
          <button
            className="bg-foots rounded-full p-2"
            onClick={() => navigation("left")}
          >
            <img src={left} className="w-4 h-4" />
          </button>
          <button
            className="bg-foots rounded-full px-2 py-2"
            onClick={() => navigation("right")}
          >
            <img src={right} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full px-5 flex justify-center">
        <div
          ref={carouselContainer}
          className=" flex w-[97%] gap-4  overflow-x-scroll snap-x snap-mandatory"
        >
          {data.map((item, index) => (
            <div key={index} className="snap-center shrink-0 ">
              <img
                src={item.img}
                className="h-52 w-48 object-contain rounded-xl bg-foots"
              />
              <div>
                <h2 className="text-foot">{item.name}</h2>
                <h3 className="font-semibold text-box-blue">{item.price}</h3>
              </div>
              <div className="flex flex-row border justify-center bg-gray-100 border-gray-300 shadow-md rounded-xl p-2 lg:w-48 gap-5 items-center mt-3  mb-2">
                <div>
                  <img src={addcart} className="h-8 p-1 " />
                </div>
                <div>
                  <img src={fav} className="h-8 p-1" />
                </div>
                <div>
                  <img src={other} className="h-8 p-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
