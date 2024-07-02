import React, { useState, useRef } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";
import Changepassword from "./Changepassword";
// import OTP2 from './OTP2';
import { Link } from "react-router-dom";

const OTPInput = ({ length, onChangeOTP }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); 
    if (value) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
      onChangeOTP(newOTP.join(""));
    }
  };

  const handleBackspace = (element, index) => {
    if (element.value === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          value={data}
          maxLength="1"
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) =>
            e.key === "Backspace" && handleBackspace(e.target, index)
          }
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-[22px] h-[22px] flex  border rounded-md border-gray-500  mx-1"
        />
      ))}
    </div>
  );
};
const Signin = () => {
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleOTPChange = (otp) => {
    console.log("Current OTP:", otp);
  };

  const validate = () => {
    let errors = {};
    const email_idRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email_id) {
      errors.email_id = "Email is required";
    } else if (!email_idRegex.test(email_id)) {
      errors.email_id = "Email is not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted successfully");
      // Reset form
      setEmail_id("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="h-screen w-screen">
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

      <div className="w-full h-full ">
        <Link to="/">
          <img src={logo} style={{ width: "220px" }} />
        </Link>
        <div className=" h-full flex justify-center items-center">
          <div className="bg-white w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
            <h2 className="text-blue-900 text-[25px] font-bold my-10">
              Sign-In
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex justify-center"
            >
              <div className="w-[60%] h-full flex flex-col ">
                <div className=" flex items-center justify-between  my-5">
                  <label htmlFor=" *email" className="text-[18px]">
                    <span className="text-red-600"> *</span>Email/Phone
                  </label>
                  <input
                    type="email_id"
                    id="email_id"
                    value={email_id}
                    onChange={(e) => setEmail_id(e.target.value)}
                    className="p-2 border border-gray-500 rounded-lg"
                    style={{
                      ...(errors.email_id && { border: "1px solid red" }),
                    }}
                  />
                </div>
                <div className=" flex items-center justify-between my-2 ">
                  <label htmlFor="password" className="text-[18px]">
                    <span className="text-red-600">*</span>Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-500 rounded-lg"
                    style={{
                      ...(errors.password && { border: "1px solid red" }),
                    }}
                  />
                </div>

                <div className="flex justify-between items-center my-4">
                  <h5 className="text-[18px] ml-1">Enter OTP</h5>
                  <OTPInput length={6} onChangeOTP={handleOTPChange} />
                </div>

                <div className="text-red-500 text-[18px] my-4 flex justify-center">
                  {" "}
                  <span className="text-black">Note :</span>* Fields are
                  mandatory
                </div>
                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
                  >
                    Sign In
                  </button>
                </div>

                <div className="flex justify-center mb-2">
                  <label className="text-[18px] text-blue-700">
                    <Link
                      to="/password"
                    >
                      Forget Password{" "}
                    </Link>
                  </label>
                </div>
                <div className="flex justify-center mb-8">
                  <label className="text-[18px]">
                    <Link
                      to="/signup"
                    >
                      {" "}
                      Create Account/ Signup
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
