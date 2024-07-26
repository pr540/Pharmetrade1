import React from 'react'
import background_image from "../../../assets/homepharma.png";
import contact from "../../../assets/ContactPharma.png"


const Contactus = ({ topMargin }) => {
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
        <img src={contact} className="h-[430px] " />
      </div>
      <div className="w-[35%] h-full flex flex-col -mt-5 justify-center">
        <h2 className="text-3xl text-blue-900 font-semibold">
          Contact Us
        </h2>
        <p className="my-2">
        We value your feedback and are here to assist you with any questions or concerns. 
        Please feel free to reach out to our support team via email at {" "}
        <span className='text-blue-900 underline hover:text-green-500'>support@pharmetrade.com </span>{" "} 
        or call us at 123-456-7890. 
        </p>
        <p>
        You can also visit our Help Center on our website for more information and resources. 
        Connect with us on social media to stay updated on the latest news and developments at Pharmetrade. 
        Your satisfaction is our priority, and we look forward to serving you.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Contactus
