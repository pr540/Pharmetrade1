import React, { useEffect, useState } from "react";
import "../App.css";
import logoImage from "../assets/logo2.png";
import back from "../assets/Previous1_icon.png";
import next from "../assets/Next1_icon.png";
import background_image from "../assets/homepharma.png";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";

// import DatePicker from 'react-datepicker';
import FormControl from "@mui/material/FormControl";
import {
  Box,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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
    normalCustomer: ["Buyer"],
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setAccountType("");
    if (activeStep === 1) {
      console.log("hello user");
      validateStep(activeStep);
    }
  };
  useEffect(() => {
    if (userType === "Normal Customer") {
      setAccountType("Buyer");
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
    DEA_Expiration_Date: "",
    DEA_License_Copy: "",
    Pharmacy_License: "",
    Pharmacy_Expiration_Date: "",
    Pharmacy_License_Copy: "",
    Bussiness_License: "",
    NPI: "",
    NCPDP: "",
    Federal_Tax_ID: "",
    Address1: "",
    Address: "",
  });
  const [errors, setErrors] = useState({});
  const steps = getSteps();
  const [uploadedFile, setUploadedFile] = useState("");
  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (files) {
      setUploadedFile(URL.createObjectURL(files[0]));
    }
    if (activeStep === 1) {
      console.log("which step");
      validateStep(activeStep);
    }
  };

  console.log(activeStep, "user");
  const validateStep = (step) => {
    console.log("heheh", step);
    let newErrors = {};
    if (step === 0) {
      const regex = /^[a-zA-Z\s']+$/;
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!formData.First_Name.match(regex))
        newErrors.First_Name = "First name is required.";
      if (!formData.Last_Name) newErrors.Last_Name = "Last name is required.";

      const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!formData.Email_id.match(regexp))
        newErrors.Email_id = "Email_id is required";
      const regphn = /^(?:\+1\s?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

      if (!formData.Phone_number.match(regphn))
        newErrors.Phone_number = "Phone_number is required";
      if (!formData.password.length)
        newErrors.password = ".";
      else if (!formData.password.match(passwordRegex))
        newErrors.password =
          "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.";

      if (!formData.confirmPassword.length)
        newErrors.confirmPassword = "Confirm password is required.";
      else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";
    } else if (step === 1) {
      if (!userType) newErrors.userType = "User Type is required";

      if (!accountType) newErrors.accountType = "Account Type is required";

      if (
        (userType === "Prescription Drug Seller" ||
          !formData.upnMember ||
          userType === "Vendor" ||
          userType === "Normal Customer") &&
        !selectedValue
      )
        newErrors.upnMember = "UPN Member selection is required";
    } else if (step === 2) {
      if (
        !formData.shopName &&
        userType != "Vendor" &&
        userType != "General Merchandise Seller" &&
        userType != "Normal Customer"
      )
        newErrors.shopName = "Shop name is required.";
      if (!formData.legalBusinessName && userType != "Normal Customer")
        newErrors.legalBusinessName = "Legal business name is required.";

      if (
        !formData.dbaName &&
        userType != "Vendor" &&
        userType != "General Merchandise Seller" &&
        userType != "Normal Customer"
      )
        newErrors.dbaName = "DBA name is required.";
      if (!formData.BusinessPhone && userType != "Normal Customer")
        newErrors.BusinessPhone = "bussinessphone is required";
      if (!formData.Business_Fax && userType != "Normal Customer")
        newErrors.Business_Fax = "Bussiness_Fax is required";
      if (!formData.Business_Email && userType != "Normal Customer")
        newErrors.Business_Email = " Bussiness_Email is required";

      if (!formData.zip) newErrors.zip = "Zip is required";
      if (!formData.Address1) newErrors.Address1 = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.State) newErrors.State = "State is required";
    } else if (step === 3) {
      if (
        !formData.DEA &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Normal Customer"
      )
        newErrors.DEA = "DEA is required";
      if (
        !formData.DEA_Expiration_Date &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Normal Customer"
      )
        newErrors.DEA_Expiration_Date = "DEA_Expiration_Date is required";
      // if (
      //   !formData.DEA_License_Copy &&
      //   userType != "General Merchandise Seller"
      //   && userType != "Vendor"
      // )
      //   newErrors.DEA_License_Copy = "DEA_License_Copy is required";
      if (
        !formData.Pharmacy_Expiration_Date &&
        userType !== "General Merchandise Seller" &&
        userType !== "Vendor" &&
        userType !== "Normal Customer"
      ) {
        newErrors.Pharmacy_Expiration_Date =
          "Pharmacy Expiration Date is required";
      } 
      // if (
      //   !formData.Pharmacy_License_Copy &&
      //   userType != "General Merchandise Seller"
      //   && userType != "Vendor" && userType != "Normal Customer"
      // )
      //   newErrors.Pharmacy_License_Copy = "Pharmacy_License_Copy is required";
      if (
        !formData.Pharmacy_License &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Normal Customer"
      )
        newErrors.Pharmacy_License = "Pharmacy_License is required";
      if (
        !formData.NCPDP &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Normal Customer"
      )
        newErrors.NCPDP = "NCPDP is required";
      if (
        !formData.Federal_Tax_ID &&
        userType != "General Merchandise Seller" &&
        userType != "Normal Customer"
      )
        newErrors.Federal_Tax_ID = "Federal is required";
      if (
        !formData.NPI &&
        userType != "General Merchandise Seller" &&
        userType != "Vendor" &&
        userType != "Normal Customer"
      )
        newErrors.NPI = "NPI is required";
    }

    setErrors(newErrors);
    console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(errors);
  const isStepOptional = (step) => step === 1 || step === 2 || step === 3;

  const isStepSkipped = (step) => skippedSteps.includes(step);

  const navigate = useNavigate();

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === 1 && usertype === "buyer") {
        setActiveStep(3);
      } else if (
        activeStep === steps.length
        // || (activeStep == 1 && userType === "Normal Customer")
      ) {
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
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);

    // if(!activeStep){
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // }
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps((prevSkippedSteps) => [...prevSkippedSteps, activeStep]);
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, "");

    // Format as 3-3-4
    let formattedPhoneNumber = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += "-";
      }
      formattedPhoneNumber += phoneNumber[i];
    }
    return formattedPhoneNumber;
  };

  const [usertype, setusertype] = useState("");

  const handleusertypechange = (value) => {
    setusertype(value);
    if (activeStep === 1) {
      console.log("hello user");
      validateStep(activeStep);
    }
  };
  console.log(typeof usertype, "hmm");

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
                  label="Email ID/User ID"
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
                  value={formatPhoneNumber(formData.Phone_number)}
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
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  size="small"
                />
              </div>

              <div>
                <TextField
                  label="Confirm Password"
                  id="outlined-size-small"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={!!errors.confirmPassword}
                  size="small"
                />
              </div>
            </div>
            <div className="flex text-red-500 items-center justify-center flex-col">
              {errors?.password?.length>1 && 
              <div className="w-[80%]">
                {errors.password}
              </div>
              }
              {/* {errors.confirmPassword && 
              <div>
                {errors.confirmPassword}
              </div>
              } */}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="p-4">
              <div className="mb-4">
                <label
                  className=" flex gap-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userType"
                >
                  User Type
                  <div className="text-red-400">
                    {errors.userType && <div>{errors.userType}</div>}
                  </div>
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select User Type</option>
                  {userTypes.map((type, index) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4  ">
                <label className=" flex gap-2 text-gray-700 text-sm font-bold mb-2">
                  Account Type
                  <div className="text-red-400">
                    {errors.accountType && <div>{errors.accountType}</div>}
                  </div>
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

              {/* <div className={${userType === "Vendor" ? "" :""}}>
              <input type="checkbox" className="mr-2 leading-tight ml-4" />
              <label className= "text-gray-700 "> Are you a UPN Member</label>
            </div> */}

              <div
                className={`${
                  userType === "General Merchandise Seller"
                    ? " opacity-50 pointer-events-none"
                    : ""
                } flex items-center`}
              >
                <label className="text-gray-700">
                  <span className="text-red-500">*</span>Are you a UPN Member
                </label>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <div>
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      size="small"
                      slotProps={{ input: { "aria-label": "A" } }}
                    />
                    <span>YES</span>
                  </div>
                  <div>
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      size="small"
                      slotProps={{ input: { "aria-label": "B" } }}
                    />
                    <span>NO</span>
                  </div>
                </Box>
              </div>
              <span>
                {errors.upnMember && (
                  <span className="text-red-500">{errors.upnMember}</span>
                )}
              </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 gap-4 align-middle">
            <div
              className={`${
                userType === "Vendor" ||
                userType === "Normal Customer" ||
                userType === "General Merchandise Seller"
                  ? "hidden"
                  : ""
              }`}
            >
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

            <div
              className={`${userType === "Normal Customer" ? "hidden" : ""}`}
            >
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
            </div>
            <div
              className={`${
                userType === "Vendor" ||
                userType === "Normal Customer" ||
                userType === "General Merchandise Seller"
                  ? "hidden"
                  : ""
              }`}
            >
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

            <div>
              <FormControl
                sx={{ minWidth: 223 }}
                size="small"
                error={!!errors.State}
              >
                <InputLabel id="demo-select-small-label">State</InputLabel>
                <Select
                  id="demo-select-small"
                  label="State"
                  value={formData.State}
                  name="State"
                  onChange={handleInputChange}

                  // error={!!errors.State}
                >
                  <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                  <MenuItem value={"State1"}>State1</MenuItem>
                  <MenuItem value={"State2"}>State2</MenuItem>
                  <MenuItem value={"State3"}>State3</MenuItem>
                </Select>
                {/* {errors.State && {errors.State}} */}
              </FormControl>
            </div>

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

            {/* Address */}

            <div
              className={`${userType === "Normal Customer" ? "hidden" : ""}`}
            >
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

            <div
              className={`${userType === "Normal Customer" ? "hidden" : ""}`}
            >
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
            </div>

            <div
              className={`${userType === "Normal Customer" ? "hidden" : ""}`}
            >
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
                  inputProps={{ tabIndex: "1" }}
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
                  inputProps={{ tabIndex: "4" }}

                  tabIndex={4}
                />
              </div>
            </div>
            <div className="flex flex-row w-[500px] justify-between ">
              <div className="w-[45%] flex flex-col">
                <span className="text-xs">DEA Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  name="DEA_Expiration_Date"
                  value={formData.DEA_Expiration_Date}
                  onChange={handleInputChange}
                  id="outlined-size-small"
                  error={!!errors.DEA_Expiration_Date}
                  size="small"
                  inputProps={{ tabIndex: "2" }}
                  tabIndex={2}
                />
              </div>

              <div className="w-[45%] flex flex-col">
                <span className="text-xs">Pharmacy Expiration Date</span>
                <TextField
                  label=""
                  type="date"
                  name="Pharmacy_Expiration_Date"
                  id="outlined-size-small"
                  value={formData.Pharmacy_Expiration_Date}
                  error={!!errors.Pharmacy_Expiration_Date}
                  onChange={handleInputChange}
                  size="small"
                  inputProps={{ tabIndex: "5" }}
                  tabIndex={5}
                />
              </div>
            </div>

            <div className="flex flex-row w-[500px] justify-between ">
              <div className=" w-[45%]">
                <span className="text-xs">DEA License Copy(jpg,png,jpeg) </span>
                <TextField
                  label=""
                  type="file"
                  onChange={handleInputChange}
                  name="DEA_License_Copy"
                  id="outlined-size-small"
                  value={formData.DEA_License_Copy}
                  error={!!errors.DEA_License_Copy}
                  size="small"
                  inputProps={{ tabIndex: "3" }}
                  tabIndex={3}
                />
              </div>

              <div className="w-[45%]">
                <span className="text-xs">
                  Pharmacy License Copy(jpeg,jpg,png){" "}
                </span>
                <TextField
                  label=""
                  type="file"
                  onChange={handleInputChange}
                  name="Pharmacy_License_Copy"
                  id="outlined-size-small"
                  value={formData.Pharmacy_License_Copy}
                  error={!!errors.Pharmacy_License_Copy}
                  size="small"
                  inputProps={{ tabIndex: "6" }}
                  tabIndex={6}
                />
                {/* {formData.Pharmacy_License_Copy && (
                  <span className="text-sm mt-2">
                    {formData.Pharmacy_License_Copy.name}
                  </span>
                )} */}
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
                  inputProps={{ tabIndex: "7" }}
                  tabIndex={7}
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
                  inputProps={{ tabIndex: "8" }}
                  tabIndex={8}

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
                  inputProps={{ tabIndex: "9" }}
                  tabIndex={9}
                />
              </div>
            </div>
            <div className=" w-[500px]">
              <div>
                <input
                  type="checkbox"
                  className=" leading-tight "
                  inputProps={{ tabIndex: "10" }}
                  tabIndex={10}
                />
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
                  inputProps={{ tabIndex: "11" }}
                  tabIndex={11}
                />
                <label className="text-gray-700 ml-1 ">
                  Please Accepts for PharmEtrade{" "}
                  <Link to="/" className="text-red-500">
                    Terms& Conditions{" "}
                  </Link>
                </label>
              </div>
              {/* {Visible && (
                <div>
                  <div className="flex justify-center items-center ">
                    {/* <h5 className="text-[18px] ml-1">Enter OTP</h5> 
                    <TextField
                      id="standard-basic"
                      label="Enter Captcha"
                      variant="standard"
                      tabIndex={12}
                    />

                    {/* <OTPInput length={6}  /> 
                  </div>
                </div>
              )} */}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full flex justify-center">
            <div className="">
              Thank you for registering as
              <span className="font-bold text-green-500"> {userType} </span>,
              You are successfully registered.
              <p>If you have any queries contact us. Help @PharmEtrade.com</p>
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
              <span
                className={`text-blue-900 ${
                  activeStep == 4 ? "hidden" : ""
                } text-[25px]  text-center font-bold     flex justify-center items-center  `}
              >
                SignUp
              </span>
              <div className={`flex my-4 ${activeStep == 4 ? "hidden" : ""}  `}>
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
              <div className="flex justify-around m-2">
                <button
                  onClick={handleBack}
                  className={`${activeStep === 0 ? "opacity-50 " : ""} ${
                    activeStep === 4 ? "hidden" : ""
                  } bg-blue-900 w-24 p-2 flex justify-center text-white h-10 cursor-pointer font-semibold border rounded-lg my-4 `}
                >
                  <img src={back} className="w-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="bg-blue-900 w-24 h-10 cursor-pointer  border rounded-lg my-4 flex items-center justify-center"
                >
                  {activeStep === 4 ? (
                    <div className="text-white font-bold">
                      Go To Home
                    </div>
                  ) : (
                    <img src={next} alt="Next" className="w-6" />
                  )}
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
