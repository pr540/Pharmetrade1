// Slider.js
import React, { useRef } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";

const OfferSlider = ({ images, Title }) => {
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
    <div className="flex flex-col justify-center gap-10 mt-4">
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
          {images.map((img, index) => (
            <div key={index} className="snap-center shrink-0 ">
              <img src={img} className=" w-[250px] Laptop:w-[320px] shadow-sm shadow-slate-100 Largest:h-[200px] h-[180px] rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSlider;
