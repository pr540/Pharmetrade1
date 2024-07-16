

import React, { useEffect, useState } from "react";
import "../App.css";
import logoImage from "../assets/logo2.png";
import background_image from "../assets/homepharma.png";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";

// import DatePicker from 'react-datepicker';
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

function getSteps() {
  return ["Personal-Info", "User-Info", "Bussiness-Info1", "Bussiness-Info-2"];
}

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [accountType, setAccountType] = useState("");

  const userTypes = [
    "Prescription Drug Seller",
    "General Merchandise Seller",
    "Vendor",
    "Normal Customer",
  ];

  const accountTypes = {
    default: ["Buyer", "Seller", "Buyer/Seller"],
    normalCustomer: ["buyer"],
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setAccountType("");
  };
  useEffect(() => {
    if (userType === "Normal Customer") {
      setAccountType("buyer");
    }
  }, [userType]);

  const getAccountTypes = () => {
    return userType === "Normal Customer"
      ? accountTypes.normalCustomer
      : accountTypes.default;
  };

  const [isActive, setIsActive] = useState(true);

  const handleOptionClick = () => {
    setIsActive(true);
    // setIsCheck(!ischeck);
  };

  const [Visible, setVisible] = useState(false);

  const handleVisibleClick = () => {
    setVisible(true);
  };

  const [buyerVisible, setBuyerVisible] = useState(false);

  const handlebuyerclick = () => {
    setBuyerVisible(true);
  };

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email_id: "",
    Phone_number: "",
    password: "",
    confirmPassword: "",
    upnMember: "",

    shopName: "",
    legalBusinessName: "",
    dbaName: "",
    address1: "",
    city: "",
    State: "",
    zip: "",
    seller: "",
    buyer: "",
    buyerseller: "",
    newsletter: false,

    BusinessPhone: "",
    Business_Fax: "",
    Business_Email: "",
    DEA: "",
    Pharmacy_License: "",
    Bussiness_License: "",
    NPI: "",
    NCPDP: "",
    Federal_Tax_ID: "",
    Address1: "",
    Address: "",
  });
  const [errors, setErrors] = useState({});
  const steps = getSteps();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(userType, "user");
  const validateStep = (step) => {
    let newErrors = {};
    if (step === 0) {
      if (!formData.First_Name)
        newErrors.First_Name = "First name is required.";
      if (!formData.Last_Name) newErrors.Last_Name = "Last name is required.";

      if (!formData.Email_id) newErrors.Email_id = "Email_id is required";
      if (!formData.Phone_number)
        newErrors.Phone_number = "Phone_number is required";
      if (!formData.password) newErrors.password = "Password is required.";
      if (!formData.confirmPassword)
        newErrors.confirmPassword = "Confirm password is required";
    } else if (step === 2) {
      if (!formData.shopName && userType != "Vendor" && userType!="General Merchandise Seller")
        newErrors.shopName = "Shop name is required.";
      if (!formData.legalBusinessName)
        newErrors.legalBusinessName = "Legal business name is required.";
      if (!formData.State) newErrors.State = "Shop name is required.";
      if (!formData.city) newErrors.city = "Shop name is required.";

      if (!formData.dbaName && userType != "Vendor" && userType!="General Merchandise Seller")
        newErrors.dbaName = "DBA name is required.";
      if (!formData.BusinessPhone)
        newErrors.BusinessPhone = "bussinessphone is required";
      if (!formData.Business_Fax)
        newErrors.Business_Fax = "Bussiness_Fax is required";
      if (!formData.Business_Email)
        newErrors.Business_Email = " Bussiness_Email is required";

      if (!formData.zip) newErrors.zip = "Zip is required.";
      if (!formData.Address1) newErrors.Address1 = "Address is require";
      if (!formData.city) newErrors.city = "City is required.";
      if (!formData.State) newErrors.State = "State is required.";
    } else if (step === 3) {
      if (!formData.DEA) newErrors.DEA = "DEA is required";
      if (!formData.Pharmacy_License)
        newErrors.Pharmacy_License = "Pharmacy_License is required";
      if (!formData.NCPDP) newErrors.NCPDP = "NCPDP is required";
      if (!formData.Federal_Tax_ID)
        newErrors.Federal_Tax_ID = "Federal is required";

      if (!formData.NPI) newErrors.NPI = "NPI is required";
    }

    setErrors(newErrors);
    console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const isStepOptional = (step) => step === 1 || step === 2 || step === 3;

  const isStepSkipped = (step) => skippedSteps.includes(step);

  const navigate = useNavigate();

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === 1 && usertype === "buyer") {
        setActiveStep(3);
      } else if (activeStep === steps.length - 1 || (activeStep==1 && userType==="Normal Customer")) {
        navigate("/app");
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

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps((prevSkippedSteps) => [...prevSkippedSteps, activeStep]);
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const [usertype, setusertype] = useState("");

  const handleusertypechange = (value) => {
    setusertype(value);
  };
  console.log(typeof usertype,"hmm");

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <TextField
                  label="First Name"
                  id="outlined-size-small"
                  name="First_Name"
                  value={formData.First_Name}
                  onChange={handleInputChange}
                  error={!!errors.First_Name}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Last Name"
                  id="outlined-size-small"
                  name="Last_Name"
                  value={formData.Last_Name}
                  onChange={handleInputChange}
                  error={!!errors.Last_Name}
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <TextField
                  label="Email ID"
                  id="outlined-size-small"
                  name="Email_id"
                  value={formData.Email_id}
                  onChange={handleInputChange}
                  error={!!errors.Email_id}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Phone Number"
                  id="outlined-size-small"
                  name="Phone_number"
                  value={formData.Phone_number}
                  onChange={handleInputChange}
                  error={!!errors.Phone_number}
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <TextField
                  label="Password  "
                  id="outlined-size-small"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Confirm password"
                  id="outlined-size-small"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={!!errors.confirmPassword}
                  size="small"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="p-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userType"
                >
                  User Type
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select User Type</option>
                  {userTypes.map((type,index) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4  ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Account Type
                </label>
                {getAccountTypes().map((type) => (
                  <div key={type} className="flex ml-4 items-center mb-2">
                    <input
                      type="radio"
                      id={type}
                      name="accountType"
                      value={type}
                      checked={accountType === type}
                      onChange={(e) =>
                        setAccountType(e.target.value) &&
                        handleusertypechange(e.target.value)
                      }
                      className="mr-2 leading-tight flex"
                    />
                    <label htmlFor={type} className="text-gray-700">
                      {type}
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <input type="checkbox" className="mr-2 leading-tight ml-4" />
                <label className="text-gray-700 "> Are you a UPN Member</label>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="flex flex-row  my-4 justify-evenly">
              <div className={`${(userType==="Vendor" || userType==="General Merchandise Seller")  ? "hidden":""}`}>
                
                  <TextField
                    label="Shop Name"
                    id="outlined-size-small"
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleInputChange}
                    error={!!errors.shopName}
                    size="small"
                  />
               
              </div>
              <div className={`${(userType==="Vendor" || userType==="General Merchandise Seller")  ? "hidden":""}`}>
                  <TextField
                    label="DBA"
                    id="outlined-size-small"
                    name="dbaName"
                    value={formData.dbaName}
                    onChange={handleInputChange}
                    error={!!errors.dbaName}
                    size="small"
                  />
                </div>
              
            </div>

            {/* Address */}
            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <TextField
                  label="Legal Bussiness Name"
                  id="outlined-size-small"
                  name="legalBusinessName"
                  value={formData.legalBusinessName}
                  onChange={handleInputChange}
                  error={!!errors.legalBusinessName}
                  size="small"
                />
              </div>
              <div>
                <TextField
                  label="Address1"
                  id="outlined-size-small"
                  name="Address1"
                  value={formData.Address1}
                  onChange={handleInputChange}
                  error={!!errors.Address1}
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel id="demo-select-small-label">State</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="State"
                    value={formData.State}
                    name="State"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"State1"}>state1</MenuItem>
                    <MenuItem value={"State2"}>state2</MenuItem>
                    <MenuItem value={"State3"}>state3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* <div>
                <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel id="demo-select-small-label">City</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    name="city"
                    label="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>city1</MenuItem>
                    <MenuItem value={20}>city2</MenuItem>
                    <MenuItem value={30}>city3</MenuItem>
                  </Select>
                </FormControl>
              </div> */}
               <div>
                <TextField
                  label="City"
                  id="outlined-size-small"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  error={!!errors.city}
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <TextField
                  label="Zip"
                  id="outlined-size-small"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  error={!!errors.zip}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Business Phone"
                  id="outlined-size-small"
                  name="BusinessPhone"
                  value={formData.BusinessPhone}
                  onChange={handleInputChange}
                  error={!!errors.BusinessPhone}
                  placeholder="Enter your business phone"
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row  my-4 justify-evenly">
              <div>
                <TextField
                  label="Bussiness Fax"
                  id="outlined-size-small"
                  name="Business_Fax"
                  value={formData.Business_Fax}
                  onChange={handleInputChange}
                  error={!!errors.Business_Fax}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Bussiness Email"
                  id="outlined-size-small"
                  name="Business_Email"
                  value={formData.Business_Email}
                  onChange={handleInputChange}
                  error={!!errors.Business_Email}
                  size="small"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="my-2 w-full flex flex-col justify-center items-center ">
            <div className="flex flex-row w-[500px]   my-3 justify-between">
              <div>
                <TextField
                  label="DEA"
                  id="outlined-size-small"
                  name="DEA"
                  value={formData.DEA}
                  onChange={handleInputChange}
                  error={!!errors.DEA}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Pharmacy License"
                  id="outlined-size-small"
                  name="Pharmacy_License"
                  value={formData.Pharmacy_License}
                  onChange={handleInputChange}
                  error={!!errors.Pharmacy_License}
                  size="small"
                  // style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="flex flex-row w-[500px] justify-between ">
              <div className="w-[45%] flex flex-col">
                <span className="text-xs">DEA Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  id="outlined-size-small"
                  // style={{ width: "104%" }}
                  size="small"
                />
              </div>

              <div className="w-[45%] flex flex-col">
                <span className="text-xs">Pharmacy Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  id="outlined-size-small"
                  // style={{ width: "93%", marginLeft: "-2px" }}
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row w-[500px] justify-between ">
              <div className=" w-[45%]">
                <span className="text-xs">DEA License Copy(jpg,png,jpeg) </span>
                <TextField
                  label=""
                  type="file"
                  id="outlined-size-small"
                  // style={{ width: "109%", fontSize: "5px" }}
                  size="small"
                />
              </div>

              <div className="w-[45%]">
                <span className="text-xs">
                  Pharmacy License Copy(jpeg,jpg,png){" "}
                </span>
                <TextField
                  label=""
                  type="file"
                  id="outlined-size-small"
                  // style={{ width: "104%", marginLeft: "-2px" }}
                  size="small"
                />
              </div>
            </div>

            <div className="flex flex-row w-[500px]  my-3 justify-between">
              <div>
                <TextField
                  label="NPI"
                  id="outlined-size-small"
                  name="NPI"
                  value={formData.NPI}
                  onChange={handleInputChange}
                  error={!!errors.NPI}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="NCPDP"
                  id="outlined-size-small"
                  name="NCPDP"
                  value={formData.NCPDP}
                  onChange={handleInputChange}
                  error={!!errors.NCPDP}
                  size="small"
                  // style={{ width: "101%" }}
                />
              </div>
            </div>

            <div className="flex w-[500px] flex-row my-2 justify-start ">
              <div>
                <TextField
                  label="Federal Tax ID"
                  id="outlined-size-small"
                  name="Federal_Tax_ID"
                  value={formData.Federal_Tax_ID}
                  onChange={handleInputChange}
                  error={!!errors.Federal_Tax_ID}
                  size="small"
                />
              </div>
            </div>
            <div className=" w-[500px]">
              <div>
                <input type="checkbox" className=" leading-tight " />
                <label className="text-gray-700  ">
                  {" "}
                  Signup for News letters
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className=" leading-tight "
                  onClick={handleVisibleClick}
                />
                <label className="text-gray-700 ">
                  Accepts Terms& Conditions for Pharmetrade
                </label>
              </div>{" "}
              {Visible && (
                <div>
                  <div className="flex justify-center items-center ">
                    {/* <h5 className="text-[18px] ml-1">Enter OTP</h5> */}
                    <TextField
                      id="standard-basic"
                      label="Enter Captcha"
                      variant="standard"
                    />

                    {/* <OTPInput length={6}  /> */}
                  </div>
                </div>
              )}
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
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "220px", margin: "5px" }}
            />
          </Link>
          <div className="h-[80%]  flex justify-center items-center">
            <div className="bg-white w-[600px] px-12 py-6 rounded-lg shadow-lg">
              <span className="text-blue-900 text-[25px]  text-center font-bold     flex justify-center items-center  ">
                SignUp
              </span>
              <div className="flex my-4">
                {steps.map((label, index) => (
                  <div
                    key={label}
                    className="flex  items-center flex-1 flex-col"
                  >
                    <div
                      className=" w-11 h-11 border rounded-full bg-blue-900 text-white flex justify-center items-center"
                      style={{
                        ...(activeStep === index ? activeCircleStyle : {}),
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-base">{label}</div>
                  </div>
                ))}
              </div>

              {getStepContent(activeStep)}
              <div className="flex justify-evenly m-2">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  // style={buttonStyle}
                  className="bg-blue-900 w-24 text-white h-10 cursor-pointer font-semibold border rounded-lg my-4"
                >
                  Back
                </button>
                {/* {isStepOptional(activeStep) && (

                  <button
                    onClick={handleSkip}
                    className="bg-blue-900 w-24 text-white h-10 cursor-pointer font-semibold border rounded-lg my-4"
                  >
                    Skip
                  </button>
                )} */}

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
