import React, { useState } from "react";
import logoImage from "../assets/logo2.png";
import background_image from "../assets/homepharma.png";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";
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

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkippedSteps((prevSkippedSteps) =>
        prevSkippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
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
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>

                <input
                  id="FullName"
                  placeholder="FullName"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.User_Id && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
            </div>
            <div
              className="personal_info"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>
                <input
                  id="Email_id"
                  placeholder="Emailid"
                  name="Email_id"
                  value={formData.Email_id}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.Phone_number && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id="password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.confirmPassword && { border: "1px solid red" }),
                  }}
                  required
                />
              </div>
            </div>
            <div style={checkboxContainerStyle}>
              <label style={{ fontFamily: "sans" }}>
                <input
                  type="checkbox"
                  name="upnMember"
                  style={{
                    marginTop: "-32px",
                    marginLeft: "60px",
                    marginRight: "10px",
                  }}
                  required
                />
                Are you a UPN Member
              </label>
              {errors.upnMember && (
                <div style={errorStyle}>{errors.upnMember}</div>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "56px",
                }}
              >
                <div style={{ fontFamily: "sans" }}>
                  <input
                    type="radio"
                    name="usertyperadio"
                    value="buyer"
                    checked={usertype === "buyer"}
                    onChange={() => {
                      handleusertypechange("buyer");
                    }}
                  />
                  buyer
                </div>
                <div style={{ fontSize: "sans" }}>
                  <input
                    type="radio"
                    name="usertyperadio"
                    value="seller"
                    checked={usertype === "seller"}
                    onChange={() => {
                      handleusertypechange("seller");
                    }}
                  />
                  seller
                </div>
                <div style={{ fontFamily: "sans" }}>
                  <input
                    type="radio"
                    name="usertyperadio"
                    value="buyer/seller"
                    checked={usertype === "buyer/seller"}
                    onChange={() => {
                      handleusertypechange("buyer/seller");
                    }}
                  />
                  buyer/seller
                </div>
              </div>
            </div>

            <div style={checkboxContainerStyle}>
              <label
                style={{
                  fontFamily: "sans ",
                  fontSize: "17px",
                  marginLeft: "82px",
                }}
              >
                <input
                  type="checkbox"
                  name="upnmember"
                  onChange={handleInputChange}
                  style={{
                    paddingTop: "-50px",
                    marginBottom: "-100px",
                    marginLeft: "-22px",
                    marginRight: "12px",
                    position: "absolute",
                    flexDirection: "row",
                    display: "flex",
                    marginTop:'5px'
                  }}
                />
                Please accept PharmEtrade{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Terms & Conditions
                </Link>
                <OTP2 />
              </label>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="" style={{ display: "flex", flexDirection: "row" }}>
              <select
                style={{
                  selectStyle,
                  padding: "6px",
                  marginTop: "6px",
                  margin: "6px",
                  height: "35px",
                  marginLeft: "50px",
                  borderRadius: "4px",
                  width: "220px",
                  marginBottom: "-60px",
                }}
              >
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
                  style={{
                    ...inputStyle,
                    marginLeft: "6px",
                    ...(errors.shopName && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id="legal-business-name"
                  placeholder="Legal Business Name"
                  name="legalBusinessName"
                  value={formData.legalBusinessName}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.dbaName && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>

            {/* Bussinessphone */}

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id="business-phone"
                  placeholder="Business-phone"
                  name="Businessphone"
                  value={formData.BusinessPhone}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.Bussiness_Fax && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
            {/* bussiness phone end */}

            {/* address1 ---start */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id=" Bussiness_Email"
                  placeholder=" Bussiness Email"
                  name=" Bussiness_Email"
                  value={formData.Bussiness_Email}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.Address && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>

            {/* address2--end */}

            {/* city---start */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id="city"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
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
                  style={{
                    ...inputStyle,
                    marginLeft: "20px",
                    ...(errors.state && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
            {/* state--end */}

            {/* ZIP- start */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
                    marginTop: "10px",
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
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    width: "200px",
                    height: "10px",
                    marginBottom: "5px",
                    marginTop: "10px",
                    marginLeft: "22px",
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

            <div style={{ display: "flex", flexDirection: "row" }}>
              <label
                style={{
                  fontFamily: "sans",
                  position: "absolute",
                  marginLeft: "62px",
                  paddingBottom: "10px",
                  fontSize: "15px",
                }}
              >
                DEA-Expiration-Date
              </label>
              <input
                type="date"
                // value={startDate ? startDate.toLocaleDateString() : ''}
                // onFocus={() => setShowCalendar(true)}
                placeholder="Expiration_Date"
                style={{
                  marginLeft: "62px",
                  height: "29px",
                  width: "216px",
                  marginTop: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              {/* pharmacy_license---start */}
              <div>
                <input
                  id="Bussiness_License"
                  placeholder="Bussiness License"
                  name="Bussiness_License"
                  value={formData.Bussiness_License}
                  onChange={handleInputChange}
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    width: "200px",
                    height: "10px",
                    marginTop: "20px",
                    marginBottom: "5px",
                    marginLeft: "22px",
                    ...(errors.Bussiness_License && {
                      border: "1px solid red",
                    }),
                  }}
                />
              </div>

              {/* Pharmacy-license---end */}
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label
                  style={{
                    fontFamily: "sans",
                    position: "absolute",
                    marginLeft: "62px",
                    paddingBottom: "10px",
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  Bussiness-licence-Expiration-Date
                </label>

                <input
                  type="date"
                  placeholder="Expiration_Date"
                  style={{
                    marginLeft: "62px",
                    height: "29px",
                    width: "216px",
                    marginTop: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <input
                id="NPI"
                placeholder="NPI"
                name="NPI"
                value={formData.NPI}
                onChange={handleInputChange}
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "200px",
                  height: "10px",
                  marginBottom: "5px",
                  marginTop: "20px",
                  marginLeft: "22px",
                  ...(errors.NPI && { border: "1px solid red" }),
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* <h6 style={{ marginLeft: '68px' }}>DEA License Copy ( jpg, jpeg, png )</h6> */}
              <label
                style={{
                  fontFamily: "sans",
                  position: "absolute",
                  marginLeft: "62px",
                  paddingBottom: "10px",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
              >
                DEA License Copy ( jpg, jpeg, png )
              </label>

              <input
                id="file"
                placeholder="file"
                name="file"
                type="file"
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  // border: '1px solid #ccc',
                  // borderRadius: '4px',
                  width: "250px",
                  height: "45px",
                  marginBottom: "3px",
                  marginLeft: "52px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              />

              <label
                style={{
                  fontFamily: "sans",
                  position: "absolute",
                  marginLeft: "62px",
                  marginTop: "60px",
                  fontSize: "15px",
                }}
              >
                <BiCaretUp /> Allowed File Types: jpg,jpeg,png
              </label>
              <label
                style={{
                  fontFamily: "sans",
                  position: "absolute",
                  marginLeft: "62px",
                  marginTop: "90px",
                  fontSize: "15px",
                }}
              >
                {" "}
                <BiCaretUp /> Maximum File Size Allowed:7MB
              </label>

              <label
                style={{
                  fontFamily: "sans",
                  position: "absolute",
                  marginLeft: "302px",
                  paddingBottom: "10px",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
              >
                State License Copy ( jpg, jpeg, png )
              </label>

              <input
                id="file"
                placeholder="file"
                name="file"
                type="file"
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  width: "200px",
                  height: "45px",
                  marginBottom: "5px",
                  marginLeft: "-8px",
                  marginTop: "20px",
                }}
              />
            </div>
            <label
              style={{
                fontFamily: "sans",
                position: "absolute",
                marginLeft: "6px",
                paddingBottom: "30px",
                fontSize: "15px",
              }}
            >
              <BiCaretUp /> Allowed File Types: jpg,jpeg,png
            </label>
            <label
              style={{
                fontFamily: "sans",
                position: "absolute",
                marginLeft: "6px",
                paddingTop: "20px",
                fontSize: "15px",
              }}
            >
              {" "}
              <BiCaretUp /> Maximum File Size Allowed:7MB
            </label>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  id="NCPDP"
                  placeholder="ncpdp"
                  name="NCPDP"
                  value={formData.NCPDP}
                  onChange={handleInputChange}
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    width: "200px",
                    height: "10px",
                    marginBottom: "5px",
                    marginLeft: "60px",
                    fontSize: "16px",
                    marginTop: "80px",
                    // marginBottom:'10px',
                    textAlign: "center",
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
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    width: "220px",
                    height: "10px",
                    marginBottom: "5px",
                    marginTop: "80px",
                    marginLeft: "22px",
                    ...(errors.Federal && { border: "1px solid red" }),
                  }}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 style={{ fontFamily: "sans" }}>Thank you for registering!</h2>
            <p style={{ fontFamily: "sans" }}>
              Your registration is completed.
            </p>
          </div>
        );
      default:
        return "Welcome to Our Website";
    }
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "200px",
    height: "10px",
    marginBottom: "5px",
    marginLeft: "60px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
    // border:'2px solid red',
    marginLeft: "60px",
    display: "flex",
  };

  const checkboxContainerStyle = {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  };

  const checkboxLabelStyle = {
    marginLeft: "10px",
  };

  const selectStyle = {
    width: "200px",
    height: "10px",
    marginLeft: "2px",
    border: "1px solid #ccc",
    borderRadius: "4px",

    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",

    height: "10px",
    marginBottom: "-10px",
    // marginLeft: '60px'
  };

  return (
    <div style={containerStyle}>
      <div style={logoContainerStyle}>
        {/* <Link to='/'>
        <img src={logoImage} alt="Logo" style={logoStyle} />
        </Link> */}
        {/* <Link to='/'>
        <img src={logoImage} style={logoStyle} />
        </Link> */}

      </div>
      <div style={backgroundContainerStyle}>
        <img
          src={background_image}
          alt="Background"
          style={backgroundImageStyle}
        />

<div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
      }}>
        <Link to='/'>
          <img src={logoImage} alt="Logo" style={{ width: '180px', }} />
        </Link>
      </div>
        <div style={formContainerStyle}>
          <h1 style={titleStyle}>SignUp</h1>
          <div style={stepperContainerStyle}>
            {steps.map((label, index) => (
              <div key={label} style={stepStyle}>
                <div
                  style={{
                    ...circleStyle,
                    ...(activeStep === index ? activeCircleStyle : {}),
                    // ...(isStepSkipped(index) ? skippedCircleStyle : {}),
                    // ...(isStepCompleted(index)? completedCircleStyle : {})
                  }}
                >
                  {index + 1}
                </div>
                <div style={labelStyle}>{label}</div>
              </div>
            ))}
          </div>

          {getStepContent(activeStep)}
          <div style={buttonContainerStyle}>
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              style={buttonStyle}
            >
              Back
            </button>
            {isStepOptional(activeStep) && (
              <button
                onClick={handleSkip}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#36218B",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "20px",
                  // marginLeft: '150px',
                  marginRight: "14px",
                  marginBottom: "30px",
                }}
              >
                Skip
              </button>
            )}

            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                backgroundColor: "#36218B",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
                // marginLeft: '150px',
                marginRight: "362px",
                marginBottom: "30px",
              }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
};

const logoContainerStyle = {
  position: "absolute",
  top: "20px",
  left: "20px",
};

// const logoStyle = {
//   width: "180px",
// };

const backgroundContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "relative",
};

const backgroundImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
};

const formContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "80%",
  maxWidth: "600px",
  textAlign: "center",
  marginTop: "90px",
  marginBottom: "30px",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "10px",
  marginTop: "-10px",
  color: "#202878",
};

const stepperContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};

const stepStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
};

const circleStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "#36218B",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
};

const activeCircleStyle = {
  backgroundColor: "#037d50",
};

const skippedCircleStyle = {
  backgroundColor: "#f0ad4e",
};
// const completedCircleStyle ={
//   backgroundColor: '#388E3C'
// }

const labelStyle = {
  fontSize: "12px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#36218B",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
  marginLeft: "200px",
  marginRight: "10px",
  marginBottom: "30px",
};

export default Signup;
