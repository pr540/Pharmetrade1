


import React, { useState } from "react";
import logoImage from "../assets/logo2.png";
import background_image from "../assets/homepharma.png";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";
import { BiCaretUp } from "react-icons/bi";
// import DatePicker from 'react-datepicker';
import OTP2 from "./OTP2";


function getSteps() {
  return ["Personal-Info", "Business-Info", "Address-Info", "Done"];
}

const Signup = () => {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [formData, setFormData] = useState({
    FullName: "",
    User_Id: "",
    newsletter: false,
    confirmPassword: "",
    upnMember: "",

    shopName: "",
    legalBusinessName: "",
    dbaName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    seller: "",
    buyer: "",
    buyerseller: "",
    Email_id: "",
    Phone_number: "",
    password: "",
    Bussinessphone: "",
    Bussiness_Fax: "",
    Bussiness_Email: "",
    DEA: "",
    Bussiness_License: "",
    NPI: "",
    NCPDP: "",
    Federal: "",
    Address1: "",
    Address: "",
    City: "",
    State: "",
  });
  const [errors, setErrors] = useState({});
  const steps = getSteps();


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep = (step) => {
    let newErrors = {};
    if (step === 0) {
      if (!formData.FullName) newErrors.FullName = "Full name is required.";
      if (!formData.User_Id) newErrors.User_Id = "UserId is required.";
      if (!formData.Email_id) newErrors.Email_id = "Email_id is required";
      if (!formData.Phone_number)
        newErrors.Phone_number = "Phone_number is required";
      if (!formData.password) newErrors.password = "Password is required.";
      if (!formData.confirmPassword)
        newErrors.confirmPassword = "Confirm password is required";
    } else if (step === 1) {
      if (!formData.shopName) newErrors.shopName = "Shop name is required.";
      if (!formData.legalBusinessName)
        newErrors.legalBusinessName = "Legal business name is required.";
      if (!formData.dbaName) newErrors.dbaName = "DBA name is required.";
      if (!formData.address) newErrors.address = "Address is required.";
      if (!formData.Address) newErrors.Address = "Address is require";
      if (!formData.city) newErrors.city = "City is required.";
      if (!formData.state) newErrors.state = "State is required.";
      if (!formData.zip) newErrors.zip = "Zip is required.";
      if (!formData.DEA) newErrors.DEA = "DEA is required";
      if (!formData.Bussinessphone)
        newErrors.BusinessPhone = "bussinessphone is required";
      if (!formData.Bussiness_Fax)
        newErrors.Bussiness_Fax = "Bussiness_Fax is required";
      if (!formData.Bussiness_Email)
        newErrors.Bussiness_Email = " Bussiness_Email is required";
    } else if (step === 2) {
      if (!formData.NCPDP) newErrors.NCPDP = "NCPDP is required";
      if (!formData.Federal) newErrors.Federal = "Federal is required";
      if (!formData.Bussiness_License)
        newErrors.Bussiness_License = "Bussiness_License is required";
      if (!formData.NPI) newErrors.NPI = "NPI is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleOTPChange = (otp) => {
  //   console.log("Current OTP:", otp);
  // };

  const isStepOptional = (step) => step === 1 || step === 2 || step === 3;

  const isStepSkipped = (step) => skippedSteps.includes(step);

 
  const navigate = useNavigate();

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === 0 && usertype === "buyer") {
        setActiveStep(3);
      } else if (activeStep === steps.length - 1) {
        navigate('/app');
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkippedSteps((prevSkippedSteps) =>
          prevSkippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
    }
  };



  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const activeStep =()=>{

  // }

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps((prevSkippedSteps) => [...prevSkippedSteps, activeStep]);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };


  const [usertype, setusertype] = useState("");

  const handleusertypechange = (value) => {
    // alert("handl usertypkjsdcnc");
    setusertype(value);
    // if (value === "buyer") {
    //   if(validateStep(0)==1)
    //     ;
    //   setActiveStep(3);
    // }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="FullName"
                  placeholder="FullName"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.FullName && { border: "1px solid red" }),
                  }}
                />
              </div>

              <div>
                <input
                  id="User_Id"
                  placeholder="UserId"
                  name="User_Id"
                  value={formData.User_Id}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.User_Id && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
            </div>
            <div className="personal_info  flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="Email_id"
                  placeholder="Emailid"
                  name="Email_id"
                  value={formData.Email_id}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Email_id && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
              <div>
                <input
                  id="Phone_number"
                  placeholder="Phonenumber"
                  name="Phone_number"
                  value={formData.Phone_number}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Phone_number && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className=" p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.password && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>

              <div>
                <input
                  id="confirm-password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.confirmPassword && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
            </div>
            <div className=" flex flex-row justify-evenly">
              <div className="">
                <input type="checkbox" name="upnMember" required />{" "}
                <label>Are you a UPN Member</label>
                {errors.upnMember && (
                  <div className="text-red-600 flex">{errors.upnMember}</div>
                )}
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center ">
                  <input
                    type="radio"
                    id="seller"
                    name="usertype"
                    value="seller"
                    checked={usertype === "seller"}
                    onChange={(e) => handleusertypechange(e.target.value)}
                  />
                  <label htmlFor="seller" className="">
                    Seller
                  </label>
                </div>
                <div className="flex items-center ml-2">
                  <input
                    type="radio"
                    id="buyer"
                    name="usertype"
                    value="buyer"
                    checked={usertype === "buyer"}
                    onChange={(e) => handleusertypechange(e.target.value)}
                  />
                  <label htmlFor="buyer" className="">
                    Buyer
                  </label>
                </div>
                <div className="flex items-center ml-2">
                  <input
                    type="radio"
                    id="buyer-seller"
                    name="usertype"
                    value="buyer-seller"
                    checked={usertype === "buyer-seller"}
                    onChange={(e) => handleusertypechange(e.target.value)}
                  />
                  <label htmlFor="buyer-seller" className="">
                    Buyer/Seller
                  </label>
                </div>
              </div>
            </div>
            <div className=" mx-4 my-4">
              <input
                type="checkbox"
                id="checkbox"
                name="upnmember"
                // value={formData.checkbox}
                // onChange={handleInputChange}
              />{" "}
              <span>
                Please accept PharmEtrade{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Terms & Conditions
                </Link>
              </span>
            </div>

            <OTP2 />
          </div>
        );
      case 1:
        return (
          <div>
            <div className="flex flex-row  my-4 justify-evenly">
              <select className="p-2 border w-52 border-gray-500 rounded-lg">
                <option value="option1">Prescription Drug Seller</option>
                <option value="option2">General Merchandise Seller</option>
              </select>

              <div>
                <input
                  id="shop-name"
                  placeholder="Shop Name"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleInputChange}
                  className="p-2 border  border-gray-500 rounded-lg"
                  style={{
                    ...(errors.shopName && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="legal-business-name"
                  placeholder="Legal Business Name"
                  name="legalBusinessName"
                  value={formData.legalBusinessName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.legalBusinessName && {
                      border: "1px solid red",
                    }),
                  }}
                />
              </div>
              <div>
                <input
                  id="dba-name"
                  placeholder="DBA Name"
                  name="dbaName"
                  value={formData.dbaName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.dbaName && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>

            {/* Bussinessphone */}

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="business-phone"
                  placeholder="Business-phone"
                  name="Businessphone"
                  value={formData.BusinessPhone}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.BusinessPhone && { border: "1px solid red" }),
                  }}
                />
              </div>
              <div>
                <input
                  id="Bussiness_Fax"
                  placeholder="Bussiness Fax"
                  name="Bussiness_Fax"
                  value={formData.Bussiness_Fax}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Bussiness_Fax && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
            {/* bussiness phone end */}

            {/* address1 ---start */}
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id=" Bussiness_Email"
                  placeholder=" Bussiness Email"
                  name=" Bussiness_Email"
                  value={formData.Bussiness_Email}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Bussiness_Email && { border: "1px solid red" }),
                  }}
                />
              </div>

              {/* address1 ---end */}

              {/* address2 ---start */}
              <div>
                <input
                  id="Address"
                  placeholder="Address "
                  name="Address"
                  value={formData.Address}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Address && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>

            {/* address2--end */}

            {/* city---start */}
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="city"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.city && { border: "1px solid red" }),
                  }}
                />
              </div>

              {/* city--end */}

              {/* state--start */}

              <div>
                <input
                  id="state"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.state && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
            {/* state--end */}

            {/* ZIP- start */}
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.zip && { border: "1px solid red" }),
                  }}
                />
              </div>
              {/* zip---end */}

              {/* DEA---start */}
              <div>
                <input
                  id="DEA"
                  placeholder="DEA"
                  name="DEA"
                  value={formData.DEA}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.DEA && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
            {/* DEA ---end */}
          </div>
        );
      case 2:
        return (
          <div>
            {/* Address */}

            <div className="flex flex-row my-4 justify-evenly">
              <div className="flex flex-col">
                <span> DEA-Expiration-Date</span>

                <input
                  type="date"
                  className="p-2 border w-52 border-gray-500 rounded-lg"
                />
              </div>
              {/* pharmacy_license---start */}
              <div>
                <input
                  id="Bussiness_License"
                  placeholder="Bussiness License"
                  name="Bussiness_License"
                  value={formData.Bussiness_License}
                  onChange={handleInputChange}
                  className="p-2 border mt-6 border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Bussiness_License && {
                      border: "1px solid red",
                    }),
                  }}
                />
              </div>

              {/* Pharmacy-license---end */}
            </div>

            <div className="flex flex-row my-4  justify-evenly">
              <div className="flex flex-col">
                <span> Bussiness-Expiration-Date</span>

                <input
                  type="date"
                  className="p-2 border w-52 border-gray-500 rounded-lg"
                />
              </div>

              <input
                id="NPI"
                placeholder="NPI"
                name="NPI"
                value={formData.NPI}
                onChange={handleInputChange}
                className="p-2 border mt-5 border-gray-500 rounded-lg"
                style={{
                  ...(errors.NPI && { border: "1px solid red" }),
                }}
              />
            </div>

            <div className="flex flex-row my-4  justify-evenly">
              <div className="flex flex-col">
                <span className="ml-5">DEA-Licence Copy(jpg,png,png)</span>

                <input type="file" className="p-2 w-52 ml-3" />
                <div className="flex ml-3">
                  <BiCaretUp />
                  <span> File types:jpg,jpeg,png</span>
                </div>
                <div className="flex ml-3">
                  <BiCaretUp />
                  <span> File Size:jpg,jpeg,png</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span>State Licence Copy(jpg,png,png)</span>

                <input type="file" className="p-2  w-52 " />
                <div className="flex ml-3">
                  <BiCaretUp />
                  <span> File types:jpg,jpeg,png</span>
                </div>
                <div className="flex ml-3">
                  <BiCaretUp />
                  <span> File Size:jpg,jpeg,png</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <input
                  id="NCPDP"
                  placeholder="ncpdp"
                  name="NCPDP"
                  value={formData.NCPDP}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.NCPDP && { border: "1px solid red" }),
                  }}
                />
              </div>
              {/* NCPDP ---end */}

              <div>
                <input
                  id="Federal"
                  placeholder="Federal Tax ID"
                  name="Federal"
                  value={formData.Federal}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-500 rounded-lg"
                  style={{
                    ...(errors.Federal && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="my-6">
            <div className="flex justify-center items-center">
              Thank you for registering!
            </div>
            <div className="flex justify-center ">
              Your registration is completed.
            </div>
          </div>
        );
    }
  };

  return (
    <div className="">
      <div className=" h-screen w-screen">
        <img
          src={background_image}
          alt="Background"
          className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
        />

        <div className="w-full h-full ">
          <Link to="/">
            <img src={logoImage} alt="Logo" style={{ width: "220px" }} />
          </Link>
          <div className="h-full flex justify-center items-center">
            <div className="bg-white w-[40%] p-8 rounded-lg shadow-lg">
              <span className="text-blue-900 text-[25px]  text-center font-bold  my-5   flex justify-center items-center  ">
                SignUp
              </span>
              <div className="flex my-6">
                {steps.map((label, index) => (
                  <div
                    key={label}
                    className="flex  items-center flex-1 flex-col"
                    //  style={stepStyle}
                  >
                    <div
                      className=" w-11 h-11 border rounded-full bg-blue-900 text-white flex justify-center items-center"
                      style={{
                        // ...circleStyle,

                        ...(activeStep === index ? activeCircleStyle : {}),
                        // ...(isStepSkipped(index) ? skippedCircleStyle : {}),
                        // ...(isStepCompleted(index)? completedCircleStyle : {})
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-base">{label}</div>
                  </div>
                ))}
              </div>

              {getStepContent(activeStep)}
              <div className="flex justify-evenly">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  // style={buttonStyle}
                  className="bg-blue-900 w-24 text-white h-10 cursor-pointer font-semibold border rounded-lg my-4"
                >
                  Back
                </button>
                {isStepOptional(activeStep) && (
                  <button
                    onClick={handleSkip}
                    className="bg-blue-900 w-24 text-white h-10 cursor-pointer font-semibold border rounded-lg my-4"
                  >
                    Skip
                  </button>
                )}

                <button
                  onClick={handleNext}
                  className="bg-blue-900 w-24 text-white h-10 cursor-pointer font-semibold border rounded-lg my-4"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const activeCircleStyle = {
  backgroundColor: "#037d50",
};

export default Signup;

