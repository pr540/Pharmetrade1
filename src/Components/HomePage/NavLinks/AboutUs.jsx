import React from 'react'
import background_image from "../../../assets/homepharma.png";
import about from "../../../assets/AboutusPharma.png"


const AboutUs = ({ topMargin }) => {
  return (
    <div
    className="h-screen w-full flex justify-center items-center"
    style={{
      marginTop: `${topMargin}px`,
    }}
  >
    <img
      src={background_image}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />

    <div className="w-[80%] h-full flex">
      <div className="w-[65%] h-full  flex justify-center mt-6 ">
        <img src={about} className="h-[430px] " />
      </div>
      <div className="w-[35%] h-full flex flex-col -mt-5 justify-center">
        <h2 className="text-3xl text-blue-900 font-semibold">
          About Us
        </h2>
        <p className="my-2">
        At Pharmetrade, we are committed to transforming the pharmaceutical industry by creating
         a dynamic and interactive marketplace. Our platform empowers users to buy, sell, and bid
          on pharmaceutical products with ease and confidence.
        </p>
        <p>
        We prioritize transparency, security, and user satisfaction, ensuring that every transaction
         meets the highest standards of quality and reliability. Our mission is to facilitate a 
         seamless trading experience that connects buyers and sellers worldwide, fostering innovation
          and growth in the pharmaceutical sector.
        </p>
      </div>
    </div>
  </div>
  )
}

export default AboutUs
