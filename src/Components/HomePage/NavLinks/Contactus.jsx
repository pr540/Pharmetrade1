// import React from 'react'
// import background_image from "../../../assets/homepharma.png";
// import contact from "../../../assets/ContactPharma.png"


// const Contactus = ({ topMargin }) => {
//   return (
//     <div
//     className="h-screen w-full flex justify-center items-center"
//     style={{
//       marginTop: `${topMargin}px`,
//     }}
//   >
//     <img
//       src={background_image}
//       style={{
//         width: "100%",
//         height: "100%",
//         objectFit: "cover",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//       }}
//     />

//     <div className="w-[80%] h-full flex">
//       <div className="w-[60%] h-full  flex justify-center mt-6 ">
//       </div>
//       <div className="w-[40%] h-full flex flex-col ">
//         <h2 className="text-3xl text-blue-900 font-semibold">
//           Contact Us
//         </h2>

        
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Contactus


import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import background_image from '../../../assets/homepharma.png';
import contact from '../../../assets/ContactPharma.png';

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
        alt="Background"
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

      <div className="w-full h-full flex mb-8">
        <div className="w-[60%] h-full flex justify-center p-8">
          {/* Add your map component here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192339493165!2d144.96305781531677!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d54b59b8a456!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616504744606!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="w-[40%] h-full flex flex-col p-6  bg-opacity-75 rounded-lg shadow-lg">
          <h2 className="text-3xl text-blue-900 font-semibold mb-4">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4">
            <TextField
              label="Enter Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
            <button className='text-white p-2 rounded-lg bg-blue-900'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
