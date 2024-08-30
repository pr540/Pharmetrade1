// import React, { useState, useRef, useEffect, useContext } from "react";
// import background_image from "../assets/homepharma.png";
// import logo from "../assets/Icons/logo2.png";
// import { Link, useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material";
// import refresh from "../assets/reload-arrow (1).png";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { InputAdornment, IconButton } from "@mui/material";
// import { loginCustomer, setAuthToken } from "../Api/Api";
// import Password from "./Password";
// // import { AppContext } from "../context";
// const OTPInput = ({ length, onChangeOTP }) => {
//   const [otp, setOTP] = useState(new Array(length).fill(""));
//   const inputRefs = useRef([]);

//   const handleChange = (element, index) => {
//     // const{cartItems} = useContext(AppContext)
//     const value = element.value.replace(/[^0-9]/g, "");
//     if (value) {
//       const newOTP = [...otp];
//       newOTP[index] = value;
//       setOTP(newOTP);
//       if (index < length - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//       onChangeOTP(newOTP.join(""));
//     }
//   };

//   const handleBackspace = (element, index) => {
//     if (element.value === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus();
//       }
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       {otp.map((data, index) => (
//         <input
//           key={index}
//           type="text"
//           value={data}
//           maxLength="1"
//           onChange={(e) => handleChange(e.target, index)}
//           onKeyDown={(e) =>
//             e.key === "Backspace" && handleBackspace(e.target, index)
//           }
//           ref={(el) => (inputRefs.current[index] = el)}
//           className="w-[22px] h-[22px] flex border rounded-md border-gray-500 mx-1"
//         />
//       ))}
//     </div>
//   );
// };

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [formData, setFormData] = useState({ captcha: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     localStorage.clear();

//   }, [])
  

//   const nav = useNavigate();

//   const handleOTPChange = (otp) => {
//     console.log("Current OTP:", otp);
//   };
//   function generateCaptcha() {
//     return Math.floor(10000 + Math.random() * 90000).toString();
//   }
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRefresh = () => {
//     // Logic to refresh captcha
//     setCaptcha(generateCaptcha()); // Example new captcha value
//   };

//   const validate = () => {
//     let errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(email)) {
//       errors.email = "Email is not valid";
//     }

//     if (!password) {
//       errors.password = "Password is required";
//     }
//     if (!formData.captcha) {
//       errors.captcha = "captcha is required";
//     } else if (formData.captcha != captcha) {
//       errors.captcha = "captcha not matched";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validate()) {
//       // Handle form submission
//       console.log("Form submitted successfully");
//       // Reset form
//       setEmail("");
//       setPassword("");
//       setFormData({ captcha: "" });
//       setErrors({});
//     }
//   };
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleLogin = async () => {
//     const url =
//       "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Login";
//     const data = {
//       UserName: "sofiya@gmail.com",
//       Password: "sofiya@16",
//     };

//     try {
//       const response = await fetch(
//         url + `?UserName=${email}&Password=${password}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Login successful:", result);
//       localStorage.setItem("login", JSON.stringify(result));
      
//       // If you only want to store the first name
//       localStorage.setItem("firstname", result.firstname);
//       setToken(result);
//       // const logindata = {firstname:result.firstname}
//       // localStorage.setItem("login", logindata);
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };
//   if (token) {
//     nav("/");
//   }

//   return (
//     <div className="h-screen w-screen ">
//       <img
//         src={background_image}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -1,
//         }}
//       />

//       <div className="w-full h-75% ml-2 ">
//         <Link to="/">
//           <img src={logo} style={{ width: "220px" }} />
//         </Link>
//         <div className="h-full flex justify-center items-center">
//           <div className="bg-white w-[550px] border rounded-lg flex flex-col justify-center items-center shadow-lg">
//             <h2 className="text-blue-900 text-[25px] font-bold my-8">
//               Sign-In
//             </h2>
//             <form
//               onSubmit={handleSubmit}
//               className="w-full h-full flex flex-col justify-center items-center"
//             >
//               <div className="w-[60%] justify-center items-center h-full flex flex-col">
//                 <div className="flex w-[80%] items-center justify-center">
//                   <TextField
//                     label="Email"
//                     id="outlined-size-small"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     error={!!errors.email}
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="flex w-[80%] items-center justify-center my-4">
//                   <TextField
//                     className="w-full"
//                     label="Password"
//                     id="outlined-size-small"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     error={!!errors.password}
//                     helperText={password.length > 0 && errors.password}
//                     size="small"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPassword}
//                             edge="end"
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </div>

//                 <div className="flex justify-center items-center my-2">
//                   <div className="flex border rounded-md bg-slate-200 p-2 mx-2">
//                     <div className="text-xl font-bold mt-1">{captcha}</div>
//                     <button
//                       onClick={handleRefresh}
//                       className="bg-gray-500 text-white w-8 mx-1 h-8"
//                     >
//                       <img src={refresh} alt="Refresh" />
//                     </button>
//                   </div>
//                   <TextField
//                     name="captcha"
//                     type="text"
//                     value={formData.captcha}
//                     onChange={handleInputChange}
//                     className="p-2 mx-2"
//                     id="standard-basic"
//                     label="Enter Captcha"
//                     variant="standard"
//                     error={!!errors.captcha}
//                     helperText={formData.captcha != captcha && errors.captcha}
//                   />
//                 </div>

//                 <div className="flex justify-center my-2">
//                   <button
//                     type="submit"
//                     onClick={() => handleLogin()}
//                     className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
//                   >
//                     Sign In
//                   </button>
//                 </div>

//                 <div className="flex justify-center mb-4 w-96">
//                   <label className="text-[18px] text-blue-900">
//                     <Link to="/password">Forgot Password /</Link>
//                   </label>
//                   <label className="text-[18px] ">
//                     New Customer ?{" "}
//                     <Link className="underline hover:text-red-500" to="/signup">
//                       Start Here
//                     </Link>
//                   </label>
//                   {/* <label className="text-[18px] text-blue-900">
//                     <Link to="/changepassword">Change Password </Link>
//                   </label> */}
//                 </div>
//                 {/* <div className="flex justify-center mb-8">
//                   <label className="text-[18px] ">
//                     New Customer ?{" "}
//                     <Link className="underline hover:text-red-500" to="/signup">
//                       Start Here
//                     </Link>
//                   </label>
//                 </div> */}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;


import React, { useState, useRef, useEffect } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/Icons/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { Alert, TextField } from "@mui/material";
import refresh from "../assets/reload-arrow (1).png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";
import Password from "./Password";
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
          className="w-[22px] h-[22px] flex border rounded-md border-gray-500 mx-1"
        />
      ))}
    </div>
  );
};

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({ captcha: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    localStorage.clear();

  }, [])
  

  const nav = useNavigate();

  const handleOTPChange = (otp) => {
    console.log("Current OTP:", otp);
  };
  function generateCaptcha() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRefresh = () => {
    // Logic to refresh captcha
    setCaptcha(generateCaptcha()); // Example new captcha value
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    }
    if (!formData.captcha) {
      errors.captcha = "captcha is required";
    } else if (formData.captcha != captcha) {
      errors.captcha = "captcha not matched";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      const success = await handleLogin();
      if(success==0)
        return ;
      console.log("Form submitted successfully");
      // Reset form
      setEmail("");
      setPassword("");
      setFormData({ captcha: "" });
      setErrors({});
    }
    // else
    // {
    //   alert("Please enter necessary fields....");
    //   return;
    // }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async () => {
    const url =
      "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/api/Customer/Login";
    const data = {
      UserName: "sofiya@gmail.com",
      Password: "sofiya@16",
    };

    try {
      const response = await fetch(
        url + `?UserName=${email}&Password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        alert("check your Email and Password");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Login successful:", result);
      localStorage.setItem("login", JSON.stringify(result));

      // If you only want to store the first name
      localStorage.setItem("firstname", result.firstname);
      setToken(result);
      // const logindata = {firstname:result.firstname}
      // localStorage.setItem("login", logindata);
      return 1;
    } catch (error) {
      console.error("Error during login:", error);
      return 0;
    }
  };
  if (token) {
    nav("/");
  }

  return (
    <div className="h-screen w-screen ">
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

      <div className="w-full h-75% ml-2 ">
        <Link to="/">
          <img src={logo} style={{ width: "220px" }} />
        </Link>
        <div className="h-full flex justify-center items-center">
          <div className="bg-white w-[550px] border rounded-lg flex flex-col justify-center items-center shadow-lg">
            <h2 className="text-blue-900 text-[25px] font-bold my-8">
              Sign-In
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <div className="w-[60%] justify-center items-center h-full flex flex-col">
                <div className="flex w-[80%] items-center justify-center">
                  <TextField
                    label="Email"
                    id="outlined-size-small"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="flex w-[80%] items-center justify-center my-4">
                  <TextField
                    className="w-full"
                    label="Password"
                    id="outlined-size-small"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={password.length > 0 && errors.password}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="flex justify-center items-center my-2">
                  <div className="flex border rounded-md bg-slate-200 p-2 mx-2">
                    <div className="text-xl font-bold mt-1">{captcha}</div>
                    <button
                      onClick={handleRefresh}
                      className="bg-gray-500 text-white w-8 mx-1 h-8"
                    >
                      <img src={refresh} alt="Refresh" />
                    </button>
                  </div>
                  <TextField
                    name="captcha"
                    type="text"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    className="p-2 mx-2"
                    id="standard-basic"
                    label="Enter Captcha"
                    variant="standard"
                    error={!!errors.captcha}
                    helperText={formData.captcha != captcha && errors.captcha}
                  />
                </div>

                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
                  >
                    Sign In
                  </button>
                </div>

                <div className="flex justify-center mb-4 w-96">
                  <label className="text-[18px] text-blue-900">
                    <Link to="/password">Forgot Password /</Link>
                  </label>
                  <label className="text-[18px] ">
                    New Customer ?{" "}
                    <Link className="underline hover:text-red-500" to="/signup">
                      Start Here
                    </Link>
                  </label>
                  {/* <label className="text-[18px] text-blue-900">
                    <Link to="/changepassword">Change Password </Link>
                  </label> */}
                </div>
                {/* <div className="flex justify-center mb-8">
                  <label className="text-[18px] ">
                    New Customer ?{" "}
                    <Link className="underline hover:text-red-500" to="/signup">
                      Start Here
                    </Link>
                  </label>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

