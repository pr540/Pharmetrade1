import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import nature from "../assets/nature.png";
import logo from "../assets/pharmalogo.png";
import arrowleft from "../assets/leftarr.png";
import heart from "../assets/love.png";
import gal from "../assets/gal.png";
import ProductDetails from "./ProductDetails";
import Img2 from "../assets/img2.png";
import addcart from "../assets/addcart.png";
import fav from "../assets/fav.png";
import other from "../assets/other.png";
import PRight from "./PRight";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import product from '../assets/Icons/Product_icon.png';
import phone from '../assets/Icons/phone_icon.png';
import report from '../assets/Icons/report_icon.png';
import ScrollToTop from "./ScrollToTop";

// const cartItems = [
//   { id: 1, name: "Item 1", quantity: 2 },
//   { id: 2, name: "Item 2", quantity: 1 },
//   { id: 3, name: "Item 3", quantity: 3 },
// ];

function Items({ onClose, topMargin, addCart, cartItems, setCartItems }) {
  const [count, setCount] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState("div1");
  const [img, setimg] = useState(nature);
  const [show, setshow] = useState(1);
  // const [isCartVisible, setIsCartVisible] = useState(false);
  const { id } = useParams();
  const images = Array(8).fill(nature);

  const [selectedMl, setSelectedMl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showViewCart, setShowViewCart] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddToCart = () => {
    setShowViewCart(true);
    setIsItemAdded(true);
  };

  const mlOptions = [250, 350, 500];
  const colorOptions = [
    { color: "sky-500", textColor: "text-sky-500" },
    { color: "green-500", textColor: "text-green-500" },
    { color: "orange-400", textColor: "text-orange-400" },
  ];

  const clearSelection = () => {
    setSelectedMl(null);
    setSelectedColor(null);
  };

  function handleCart(index) {
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
    navigate("/cart");
    // setIsCartVisible(!isCartVisible);
  }

  const components = {
    div1: (
      <div>
        {/* <h2> Vitamin - C</h2>
        <h2> Syrup</h2>
        <h2> 1000Mg</h2>
        <h2> Nature</h2> */}
        <button>shell</button>
      </div>
    ),
    div2: (
      <div>
        <button>marble</button>
      </div>
    ),
    // div3: (
    //   <div>
    //     <h2>Review</h2>
    //   </div>
    // ),
  };

  let navigate = useNavigate();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div
      className=" pb-2 inset-0 border-4 border-black bg-white overflow-y-auto bg-opacity-100 flex flex-col justify-center items-center w-full h-full mt-8 font-sans"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="pb-2 rounded-lg flex gap-20 mt-40 justify-around bg-white h-full w-full">
        <div className="w-[40%] h-full">
          <div className="flex flex-col ml-16 -mt-10">
            <div className="bg-gray-200 border rounded-lg w-68 h-[500px] flex justify-center items-center">
              <img src={img} className=" object-contain " />
            </div>
            <div className="flex mt-4 overflow-y-scroll">
              <img
                onClick={() => setimg(Img2)}
                src={Img2}
                className="w-20 mx-2 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-28"
              />
              <img
                onClick={() => setimg(nature)}
                src={nature}
                className="w-20 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-28"
              />
              <img
                onClick={() => setimg(Img2)}
                src={Img2}
                className="w-20 mx-2 bg-gray-200 border rounded-lg hover:border-sky-500 hover:border-2 h-28"
              />
              {/* <img
                onClick={() => setimg(nature)}
                src={nature}
                className="w-28 h-36"
              /> */}
            </div>
          </div>
        </div>

        <div className="w-[60%]">
          <div>
            <h1 className="text-3xl font-semibold text-box">
              Vitamin C(1000IU) Cap X
            </h1>
            {/* <h3 className="text-3xl font-semibold text-box">$9.99</h3> */}
            <h3 className="text-orange-400 font-light text-lg mb-2">
              UPN Member Price{" "}
              <span className="text-orange-400 font-semibold">$25.00</span>
            </h3>

            <p className="text-sky-500 font-semibold text-[30px] my-2">
              $30.00-$40.00
            </p>
          </div>

          <div className="flex flex-col text-[20px] border-y-2 w-[400px] py-4 mb-2">
            <div className="flex items-center ">
              <TbSquareRoundedCheckFilled className="text-sky-500  mr-1" />
              <span>In Stock</span>
              <div className="flex">
                <p className="text-sky-500 font-semibold ml-4">NDC/UPC:</p>
                <span>6545555</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                <p className="text-sky-500 font-semibold ">SKU:</p>
                <span>6545555</span>
              </div>
              <div className="flex">
                <p className="text-sky-500 font-semibold ml-4">
                  Expiration Date:
                </p>
                <span>20/06/2025</span>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[550px] h-[220px] flex flex-col justify-center items-center border rounded-lg bg-gray-200">
              <div className="flex flex-row p-1 items-center gap-2">
                <button
                  onClick={() => setCount((prevCount) => prevCount - 1)}
                  className="bg-gray-500 text-white border px-4 text-[20px] py-1 rounded-full"
                >
                  -
                </button>
                <h2 className="text-xl bg-gray-100 border rounded-lg w-32 flex justify-center py-1">
                  {count}
                </h2>
                <button
                  onClick={() => setCount((prevCount) => prevCount + 1)}
                  className="bg-blue-900 text-white border px-4 text-[20px] py-1 rounded-full"
                >
                  +
                </button>

                <button
                  className="bg-sky-500 w-60 border rounded-full font-semibold p-3 text-white flex justify-center"
                  onClick={handleAddToCart}
                >
                  <FiShoppingCart className="text-[20px] mx-1" />
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-row gap-2 mt-3">
                <button
                  className={`w-60 text-white font-semibold text-xl border rounded-full p-3 flex justify-center ${
                    isItemAdded ? "bg-green-500" : "bg-gray-500"
                  }`}
                  onClick={() => handleCart(id)}
                >
                  View Cart
                </button>
                <button className="w-60 bg-blue-900 text-white font-semibold text-xl border rounded-full p-3 flex justify-center">
                  More Offers
                </button>
              </div>
              <button className="bg-orange-400 mt-2 w-[480px] text-white font-semibold text-xl border rounded-full p-3 flex justify-center">
                {/* <FiShoppingCart className="text-[20px] mt-1 mx-1" /> */}
                Buy Now
              </button>
            </div>

            <div className="flex my-8">
              <div className="flex text-[17px] ">
                <p className="text-blue-400 mt-2 mr-2">
                  <FaRegHeart />
                </p>
                <p className="underline">Add to wishlist 68</p>
              </div>
              <div className="flex text-[17px] ml-2">
                <p className="text-blue-400 mt-2 mr-2">
                  <FaRegHeart />
                </p>
                <p className="underline">Add to compare</p>
              </div>
              <div className="flex text-[17px] ml-2">
                <p className="text-blue-400 mt-2 mr-2">
                  <MdOutlineMail />
                </p>
                <p className="underline">Ask about product </p>
              </div>
            </div>

            <div className="bg-gray-100 p-2 w-[550px] border rounded-lg my-5 flex text-sky-400">
              <p>
                <CiDiscount1 className=" text-3xl" />
              </p>
              <p className=" text-[20px]  font-semibold">
                Add 15 products to cart and get 10$ discount
              </p>
            </div>
          </div>

          <div className=" w-full flex justify-center flex-col ">
            <div className="w-[90%] flex items-center justify-between p-4  bg-gray-100 rounded-lg">
              <span className="text-lg font-semibold">Ship to</span>
              <button
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="text-lg"
              >
                {" "}
                Calculate Shipping Cost
                {isFormVisible ? "˄" : "˅"}
              </button>
            </div>
            {isFormVisible && (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col  w-full  p-4  bg-gray-100 rounded-lg"
              >
                <div className="w-full mb-4">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="United States"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="state"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Please select a region, state or province"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                    htmlFor="postalCode"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 w-60  font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-600"
                >
                  Calculate
                </button>
              </form>
            )}

            <div className=" w-[90%] mt-3  bg-white space-y-4">
              <h1 className="text-xl font-bold">Quick Overview</h1>
              <p>
                The Ordinary's Azelaic Acid 10% Suspension Brightening Cream is
                a multi-functional formula great for those looking for solutions
                for dullness, uneven tone, and textural irregularities.
              </p>
              <div className="border-t border-gray-200 pt-4 text-[18px] font-sans">
                <div className="p-4 bg-gray-100 rounded-lg mr-4">
                  <p className="font-semibold text-gray-600">SOLD BY</p>
                  <p className="text-red-600">Manda</p>
                  <p className="hover:text-red-600">Company Website</p>
                  <div className="flex flex-col">
                    <div className="flex  items-center space-x-2 hover:text-red-500">
                      <img src={product} className="w-fit h-10"/>
                      <span className=" font-semibold">17 PRODUCTS</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-red-500">
                      <img src={phone} className="w-fit h-10"/>
                      <span>Contact Seller</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-red-500">
                      <img src={report} className="w-fit h-8"/>
                      <span>Report Product</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full my-8">
        <div className="w-[80%] ml-10 text-blue-900 border-y-2 font-semibold text-xl p-4 flex justify-between ">
          <h1 onClick={() => setshow(1)}>PRODUCT DETAILS </h1>
          <span>|</span>
          <h1 onClick={() => setshow(2)}>RATINGS & REVIEWS</h1>
          <span>|</span>
          <h1 onClick={() => setshow(3)}>ALTERNATIVES</h1>
          <span>|</span>
          <h1 onClick={() => setshow(4)}>CUSTOMERS ALSO BOUGHT</h1>
          <span>|</span>
          <h1 onClick={() => setshow(5)}>SIMILAR PRODUCTS</h1>
        </div>
      </div>

      <div className="h-full w-full   mb-20 ">
        {show == 1 && <ProductDetails />}
        {show == 2 && (
          <div className="flex  justify-center items-center flex-col ml-10">
            <h2 className="text-3xl font-bold text-blue-900">
              RATINGS & REVIEWS
            </h2>
          </div>
        )}
        {show == 3 && (
          <div>
            <h2 className="text-3xl font-bold text-blue-900">ALTERNATIVES</h2>
            <div className="flex justify-center w-full h-full">
              <div className="w-[90%]">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="w-full max-w-lg border p-2 rounded-xl"
                      // onClick={handleClick}
                    >
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
                        <div className="text-foot text-xs">
                          UPN member price:
                        </div>
                        <div className="text-lg font-semibold">$45.00</div>
                      </div>
                      <ul className="flex flex-row justify-around gap-5 py-4">
                        <li>
                          <img
                            src={addcart}
                            alt="Add to cart"
                            className="size-8"
                          />
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
            </div>
          </div>
        )}
        {show == 4 && (
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              CUSTOMERS ALSO BOUGHT
            </h2>
          </div>
        )}
        {show == 5 && (
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              SIMILAR PRODUCTS
            </h2>
          </div>
        )}
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default Items;
