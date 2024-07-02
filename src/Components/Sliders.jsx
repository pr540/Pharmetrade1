import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import right from "../assets/arrowright.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import left from "../assets/arrowleft.png";
import mobile from "../assets/mobile.png";
import { useNavbarContext } from "./NavbarContext";
import screen1 from "../assets/Icons/Screen dummy-1.png";
import screen2 from "../assets/Icons/Screen dummy-2.png";
import screen3 from "../assets/Icons/Screen dummy-3.png";
import screen4 from "../assets/Icons/Screen dummy-4.png";
import other from "../assets/other.png";
import addcart from "../assets/addcart.png";
import fav from "../assets/love.png";
import mask from "../assets/mask.png";
import covid from "../assets/covid.png";
import { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Content from "./Content";

function Sliders() {
  const searchBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bounce-in-top");
          } else {
            entry.target.classList.remove("bounce-in-top");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (searchBarRef.current) {
      observer.observe(searchBarRef.current);
    }

    return () => {
      if (searchBarRef.current) {
        observer.unobserve(searchBarRef.current);
      }
    };
  }, []);
  const [images] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
    screen1,
  ]);
  const mobiles = [mobile, mobile, mobile, mobile, mobile];
  const screens = [mask, covid, covid, mask];
  const { pop } = useNavbarContext();
  const [showAll, setShowAll] = useState(screens.slice(0, 4));
  const [curIndex, setCurIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    console.log("prev");
    const nextInd = curIndex + 2;
    if (nextInd < screens.length) {
      const nextVisibleImages = screens.slice(nextInd, nextInd + 2);
      setShowAll(nextVisibleImages);
      setCurIndex(nextInd);
    }
  };

  const handlePrevious = () => {
    const previousInd = curIndex - 2;
    console.log("next");
    if (previousInd >= 0) {
      const previousVisibleImages = screens.slice(previousInd, previousInd + 2);
      setShowAll(previousVisibleImages);
      setCurIndex(previousInd);
    }
  };

  const handleClickNext = () => {
    console.log("prev");
    const nextInd = currentIndex + 5;
    if (nextInd < images.length) {
      const nextVisibleImages = images.slice(nextInd, nextInd + 5);
      setVisibleImages(nextVisibleImages);
      setCurrentIndex(nextInd);
    }
  };

  const handleClickPrevious = () => {
    const previousInd = currentIndex - 5;
    console.log("next");
    if (previousInd >= 0) {
      const previousVisibleImages = images.slice(previousInd, previousInd + 5);
      setVisibleImages(previousVisibleImages);
      setCurrentIndex(previousInd);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
    <div className="pl-20">
      <div className="flex flex-col justify-center gap-10 mt-5 ">
        {/* <button className="text-xl "><img src={covid} className='w-24'/></button> */}

        <div>
          <div className="flex flex-row justify-center text-fonts font-semibold text-3xl items-center">
            <p>Special offers</p>
          </div>
          <div className="flex justify-end mr-20 gap-2">
            <button className="bg-foots rounded-full p-2 ">
              <img src={left} className="w-4 h-4" onClick={handlePrevious} />
            </button>
            <button className="bg-foots rounded-full px-2 py-2">
              <img src={right} className="w-4 h-4" onClick={handleNext} />
            </button>
          </div>
        </div>
        {/* <Carousel
          className="w-[90%] mx-auto border-x"
          infiniteLoop
          swipeable
          useKeyboardArrows
          showArrows
          showStatus={false}
          showIndicators
          showThumbs={false}
        >
          {screens.map((items) => (
            <div>
              {items.map((item) => (
                <img
                  src={item}
                  className="rounded-lg p-2"
                  style={{ width: "70vh" }}
                />
              ))}
            </div>
          ))}
        </Carousel> */}
        <div className=" md:grid md:grid-cols-3  md:w-screen xl:flex xl:items-center ml-20 xl:flex-row xl:gap-4 xl:w-full ">
          {showAll.map((items) => (
            <div style={{ width: "45vh" }}>
              <img src={items} className="md:w-80 md:h-52 rounded-lg" />
            </div>
          ))}
        </div>

        {/* <button className="text-xl ml-4"><img src={right} className='w-24'/></button> */}
      </div>

      <div className="flex flex-col justify-center gap-10 mt-5 ">
        {/* <button className="text-xl "><img src={left} className='w-24'/></button> */}

        <div>
          <div className="flex justify-between mr-20 gap-2">
            <h1 className="ml-20 mt-10 text-3xl font-semibold text-fonts">
              {" "}
              New Product
            </h1>
            <div className="flex items-center ">
              <button className="flex items-center bg-foots rounded-full px-2 py-2">
                <img
                  src={left}
                  onClick={handleClickPrevious}
                  className="w-4 h-4"
                />
              </button>
              <button className="bg-foots rounded-full px-2 py-2">
                <img
                  src={right}
                  onClick={handleClickNext}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:grid-rows-2 xl:ml-20 xl:flex overflow-x-scroll snap-x snap-mandatory xl:gap-10 ">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="snap-center shrink-0 first:ml-4 last:mr-4"
            >
              <div className="">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="h-64 w-56 object-contain rounded-xl bg-foots"
                />
                <div>
                  <h2 className="text-foot">Nature Mask</h2>
                  <h3 className="font-semibold text-box-blue">$99.00</h3>
                </div>
                <div className="flex flex-row gap-5 items-center mt-3 ml-10 mb-2">
                  <div>
                    <img
                      src={addcart}
                      className="h-10 border bg-foots p-1 rounded-full"
                    />
                  </div>
                  <div>
                    <img
                      src={fav}
                      className="h-10 border bg-foots p-1 rounded-full"
                    />
                  </div>
                  <div>
                    <img
                      src={other}
                      className="h-10 border bg-foots p-1 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="text-xl ml-4"><img src={right} className='w-24'/></button> */}
      </div>
      <div
        className={
          pop
            ? " getTouchs md:w-screen xl:w-100% relative h-fit md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
            : " getTouchs md:ml-0 md:w-screen md:h-fit xl:w-100% relative h-fit md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
        }
      >
        <div className="border-2 md:p-0 border-white w-auto md:h-fit md:w-auto xl:w-auto xl:h-80 lg:ml-4 lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
          <p className="absolute xl:top-4 z-5 left-1/3 h-fit bg-box-blue text-white px-4 py-2 rounded-md  text-3xl">
            Get in touch{" "}
          </p>
          <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-96 ">
            <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
              <div
                ref={searchBarRef}
                className="relative flex items-center w-full max-w-md"
              >
                <div className="md:w-screen xl:w-fit xl:pl-8 ">
                  <ul className="md:text-xl xl:text-3xl text-white font-light bounce-in-top w-fit">
                    <li className="w-fit bounce-in-top">Manage Inventory</li>
                    <li className="bounce-in-top">Increase cash flow </li>
                    <li className="bounce-in-top">Grow you business</li>
                    <li className="bounce-in-top">
                      Promote products and deals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 pr-36 mt-7 justify-between items-center">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full h-14 px-5"
              />
              <input
                type="text"
                placeholder="Enter Your Contact"
                className="w-96 h-14 px-5"
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-96 h-14 px-5"
              />
              <button className="bg-box-blue text-white rounded-lg w-fit p-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:w-screen xl:w-fit">
        <div className="flex justify-center items-center w-fit mt-32">
          {mobiles.map((item, key) => {
            return (
              <div key={key} className=" mr-4">
                <img
                  src={item}
                  alt={`Mobile ${key}`}
                  className=" hover:scale-110 transition duration-300 ease-in-out rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="bg-blue-900 mt-8 cursor-pointer text-white font-semibold p-4 flex justify-center text-[20px]" onClick={scrollToTop}>Back To Top</div>
    </>
  );
}

export default Sliders;