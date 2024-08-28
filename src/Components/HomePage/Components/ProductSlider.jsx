// Slider.js
import React, { useRef, useState, useEffect, useContext } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import addcart from "../../../assets/cartw_icon.png";
import emptyHeart from "../../../assets/Wishlist1_icon.png";
import filledHeart from "../../../assets/wishlist2_icon.png";
import comp from "../../../assets/CompareNav2.png";
import nature from "../../../assets/img1.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context";

const ProductSlider = ({ data, Title, addCart, wishList, productList }) => {
  console.log("data", data)
  const [rating, setRating] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState({});
  const [cartQuantities, setCartQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(true)
  const {fetchCartData, fetchWishListData} = useContext(AppContext)
  useEffect(() => {
    fetch(
      "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Product/GetAll"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const totalStars = 5;
  const images = Array(115).fill(nature);

  const carouselContainer = useRef(null);
  const naviagte = useNavigate();
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
  // const handleCart = (index) => {
  //   const currentQuantity = cartQuantities[index] || 0;
  //   if (currentQuantity === 0) {
  //     const prolist = {
  //       id: index,
  //       src: images[index],
  //       price: "$50.99",
  //       rate: "SKU 6545555",
  //       rates: "UPN member price:",
  //       ratesupn: "$45.00",
  //     };
  //     addCart(prolist);
  //   }
  //   setCartQuantities((prev) => ({
  //     ...prev,
  //     [index]: currentQuantity + 1,
  //   }));
  // };

  const localData = JSON.parse(localStorage.getItem("login"));
  const customerId = localData?.userId;

  const handleCart = async(index) => {
    // console.log("Adding to cart:", index);
    // const prolist = {
    //   id: index,
    //   src: images[index],
    //   price: "$50.99",
    //   rate: "SKU 6545555",
    //   rates: "UPN member price:",
    //   ratesupn: "$45.00",
    // };
    // addCart(prolist);
    console.log(cartQuantities);
    const cartData = {
      customerId: customerId, // Replace with actual customer ID
      productId: data[index].productID,
      quantity: cartQuantities[index],
      isActive: 1,
    };
    console.log(cartData);
    try {
      const response = await fetch(
        "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Cart/Add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const responseData = await response.json();
      console.log("Product added to cart:", responseData);
      // setProductData(response)
      fetchCartData()
      window.location.reload()
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleQuantityChange = (index, delta) => {
    setCartQuantities((prev) => {
      const newQuantity = (prev[index] || 0) + delta;
      if (newQuantity <= 0) {
        const updatedQuantities = { ...prev };
        delete updatedQuantities[index];
        return updatedQuantities;
      }
      return { ...prev, [index]: newQuantity };
    });
  };

  const handleClick = async (index) => {
    setFavoriteItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    // const prolist = {
    //   id: index,
    //   src: images[index],
    //   price: "$50.99",
    //   rate: "SKU 6545555",
    //   rates: "UPN member price:",
    //   ratesupn: "$45.00",
    // };
    // wishList(prolist);
    const jsondata = {
      wishListId: "0",
      productId: data[index].productID,
      customerId: customerId,
      isActive: 1
    }
    // addCart(jsondata);


    try {
      const response = await fetch(
        'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/WishList/Add',
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsondata),
        }
      );
      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${JSON.stringify(
            errorDetails
          )}`
        );
      }
      const result = await response.json();
      console.log("WISHLISTData===", result);
      fetchWishListData()
    } catch (error) {
      // console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  // const handleproductdetiails = () => {
  //   naviagte(`/detailspage/${productID}`);
  // };
  const handleProductDetails = (productID) => {
    naviagte(`/detailspage/${productID}`);
  };

  const Star = ({ filled, onClick }) => (
    <span
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "25px", color: "orange" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );
  return (
    <div className="flex mt-6 flex-col justify-center pb-4 gap-2">
      <div className="flex justify-between ml-4 font-semibold text-[22px]">
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
      <div className="w-full p-4 flex justify-center bg-white">
        <div
          ref={carouselContainer}
          className="flex w-full gap-6 overflow-x-scroll snap-x snap-mandatory"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="snap-center border rounded-sm bg-white shrink-0"
            >
              <div className="relative bg-slate-100 m-2">
                <img
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling to parent
                    handleClick(index);
                  }}
                  src={favoriteItems[index] ? filledHeart : emptyHeart}
                  className="absolute h-7 w-7 right-1 p-1 cursor-pointer"
                  alt="Favorite Icon"
                />
                <img
                  src={comp}
                  className="absolute h-7 w-7 bottom-0 right-1 p-1"
                />

                {/* <img
                  src={item.imageUrl}
                  // onClick={() => naviagte(`/detailspage/${index}`)}
                  onClick={()=>handleproductdetiails}
                  alt={item.name}
                  className="h-48 w-48 object-contain rounded-lg hover:cursor-pointer"
                /> */}
                <img
                  src={item.imageUrl}
                  onClick={() => handleProductDetails(item.productID)} // Assuming item.id is the product ID
                  alt={item.name}
                  className="h-48 w-48 object-contain rounded-lg hover:cursor-pointer"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between flex-col font-medium">
                  <h2 className="text-black font-bold">{item.productName}</h2>
                  <div className="flex gap-1 items-center">
                    <h3 className="text-black font-semibold">
                      ${item.salePrice}
                    </h3>
                    <span className="text-[10px] line-through">
                      (${item.priceName})
                    </span>
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
                </div>
                <div
                onClick={() => handleCart(index)}
                className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center  cursor-pointer"
              >
                <img src={addcart} className="h-7 p-1" />
                <p className="text-white font-semibold">ADD</p>
              </div>
                {/* {cartQuantities[index] ? (
                  <div className="flex text-white justify-between items-center px-3 gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      disabled={(cartQuantities[index] || 0) <= 0}
                      className="bg-blue-900 w-[30px]  p-1 rounded-lg"
                    >
                      -
                    </button>
                    <span className="px-2 text-black">
                      {cartQuantities[index]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="bg-blue-900 w-[30px]  p-1 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => handleCart(index)}
                    className="bg-blue-900 flex gap-1 p-1 rounded-lg justify-center items-center mt-2 cursor-pointer"
                  >
                    <img src={addcart} className="h-7 p-1" />
                    <p className="text-white font-semibold">ADD</p>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
