import React, { useState } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";

// import Otp from './Otp';
import { Link } from "react-router-dom";
const Password = () => {
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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
        
        <img src={logo} style={{ width: "220px" }} />
      
      <div className=" h-full flex justify-center items-center">
        <div className="bg-white  w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex justify-center my-8"
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
              {/* <div className=" flex items-center justify-between my-2 ">
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
              </div> */}

              <div className="flex justify-center my-2">
                <button
                  type="submit"
                  className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
                >
                  <Link to='/changepassword'>
                  Submit
                  </Link>
                </button>
              </div>

              <div className=" text-[18px] my-4 flex justify-center">
                {" "}
                {/* <span className="text-black">Note :</span>*  */}
                Having trouble logging in get help
              </div>

              {/* <div>
                <span
                  style={{
                    color: "black",
                    position: "absolute",
                    marginLeft: "-160px",
                    marginBottom: "10px",
                    marginTop: "5px",
                  }}
                >
                  {" "}
                  Forget your password{" "}
                  <Link to="/Reset" style={{ textDecoration: "none" }}>
                    Reset
                  </Link>
                </span>

                <div>
                  <span
                    style={{
                      color: "black",
                      position: "absolute",
                      marginLeft: "-160px",
                      marginBottom: "-10px",
                      marginTop: "30px",
                    }}
                  >
                    {" "}
                    Having trouble logging in{" "}
                    <Link to="/get help" style={{ textDecoration: "none" }}>
                      get help
                    </Link>
                  </span>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Password;
