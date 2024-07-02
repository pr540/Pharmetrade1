import React from "react";
import { Link } from "react-router-dom";
import addcart from "../assets/addcart.png";
import fav from "../assets/fav.png";
import nature from "../assets/img1.png";
import other from "../assets/other.png";
import Items from "./Items";
// import { useNavbarContext } from "./NavbarContext";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  // const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const images = Array(4).fill(nature);

  // const handleClick = (event) => {
  //   event.stopPropagation();
  //   console.log("Clicked to open Items");
  //   setPop(true);
  // };

  // const handleClose = (event) => {
  //   event.stopPropagation();
  //   console.log("Clicked to close Items");
  //   setPop(false);
  // };
  return (
    <div className="w-full h-full flex justify-center mb-20">
      <div className="h-full w-[90%] ">
        <h2 className="text-3xl font-bold text-blue-900">PRODUCT DETAILS</h2>
        <div>
          <h4 className="text-2xl font-semibold my-5">Description</h4>
          <div className="h-full w-[85%]  font-medium space-y-2">
            <p className="font-normal text-[20px] font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
            <p className="font-normal text-[20px] font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              voluptate in fugit!
            </p>
            <p className="font-normal text-[20px] font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              aliquam in quisquam. Cumque cupiditate laudantium deleniti culpa
              illum adipisci eos quis fuga neque dolor repellendus, ullam autem,
              dolores architecto voluptate tempore reprehenderit quidem. Quae
              quia distinctio rerum saepe officiis quasi ex explicabo qui optio
              libero? In autem praesentium necessitatibus corrupti?
            </p>
            <p className="font-normal text-[20px] font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              molestiae fugiat optio recusandae praesentium consectetur earum !
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-3">Product Form</h2>
            <span className="font-normal text-[20px]">Tablet</span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-4">Directions for Use:</h2>
            <span className="font-normal text-[20px]">
              Take one tablet daily or as directed by your physician.
            </span>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold mt-4">Safety Information:</h2>
            <div className="p-6">
              <ul className="font-normal list-disc font-sans text-[20px] pl-5 space-y-2">
                <li>Keep out of reach of children</li>
                <li>Use under medical supervision</li>
                <li>Do not exceed the recommended dose</li>
                <li>Store in a cool, dry place away from direct sunlight</li>
                <li>
                  Pregnant or nursing mothers, children, and people with medical
                  conditions must consult a physician before taking this
                  supplement
                </li>
                <li>
                  Do not use if the product appears to be tampered with or the
                  seal is broken
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 text-blue-900">
          RATINGS & REVIEWS
        </h2>

        <h2 className="text-2xl font-bold mt-10 text-blue-900">ALTERNATIVES</h2>

        {/* <div>
          <div className="w-full">
            
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full max-w-lg border p-2 rounded-xl"
                  onClick={handleClick}>
                  <Link to="/detailspage">
                    <div className="flex justify-center">
                      <img
                        src={img}
                        alt={`nature-${index}`}
                        className="h-48 w-36 pl-3 bg-foots rounded-lg"
                      />
                    </div>
                  </Link>
                  <div className="w-full py-2">
                    <h2 className="text-fonts">SKU 6545555</h2>
                    <h1 className="text-fonts">$50.99</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full px-1">
                    <div className="text-foot text-xs">UPN member price:</div>
                    <div className="text-lg font-semibold">$45.00</div>
                  </div>
                  <ul className="flex flex-row justify-around gap-5 py-4">
                    <li>
                      <img src={addcart} alt="Add to cart" className="size-8" />
                    </li>
                    <li>
                      <img src={fav} alt="Favorite" className="size-8" />
                    </li>
                    <li>
                      <img src={other} alt="Other" className="size-8" />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <h2 className="text-2xl font-bold mt-10 text-blue-900">
          CUSTOMERS ALSO BOUGHT
        </h2>
        <h2 className="text-2xl font-bold mt-10 text-blue-900">
          SIMILAR PRODUCTS
        </h2>
      </div>
    </div>
  );
};

export default ProductDetails;
