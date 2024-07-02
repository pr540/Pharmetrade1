import React, { useState } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";

// import Otp from './Otp';
import { Link } from "react-router-dom";
const Confirmpassword = () => {
  const [Newpassword, setNewpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const NewpasswordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!Newpassword) {
      errors.Newpassword = "Email is required";
    } else if (!NewpasswordRegex.test(Newpassword)) {
      errors.Newpassword = "Email is not valid";
    }

    if (!Confirmpassword) {
      errors.Confirmpassword = "confirmpassword is required";
    } else if (!Confirmpassword.length < 6) {
      errors.Confirmpassword =
        "confirmpassword  must be at least 6 characters long";
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
      setNewpassword("");
      setConfirmpassword("");
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
        <img src={logo} style={{ width: "220px" }} />

        <div className=" h-full flex justify-center items-center">
          <div className="bg-white w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex justify-center  my-8"
            >
              <div className="w-[70%] h-full flex flex-col ">
                <div className=" flex items-center justify-between  my-5">
                  <label htmlFor=" *newpassword" className="text-[18px]">
                    New password{" "}
                  </label>

                  <input
                    type="New password"
                    id="New password"
                    value={Newpassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                    className="p-2 border border-gray-500 rounded-lg"
                    style={{
                      ...(errors.Newpassword && { border: "1px solid red" }),
                    }}
                  />
                </div>

                <div className="flex  items-center justify-between my-2 ">
                  <label htmlFor="Confirm password" className="text-[18px]">
                    Confirm password{" "}
                  </label>
                  <input
                    type="Confirmpassword"
                    id="Confirmpassword"
                    value={Confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    className="p-2 border border-gray-500 rounded-lg"
                    style={{
                      ...(errors.Confirmpassword && {
                        border: "1px solid red",
                      }),
                    }}
                  />
                </div>

                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmpassword;
