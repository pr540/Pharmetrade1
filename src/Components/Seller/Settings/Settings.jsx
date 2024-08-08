import React, { useState, useRef } from "react";
import { AiFillCamera } from "react-icons/ai"; // Importing camera icon from react-icons

const Settings = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "logo") {
          setLogo(reader.result);
        } else if (type === "banner") {
          setBanner(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full bg-slate-200  flex justify-center items-center">
      <div className="w-[95%] h-full mt-8">
        <p className="text-2xl text-blue-900 font-semibold">Settings</p>
        <div className="w-full bg-white border-gray-400 rounded-lg border my-4 p-4 flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left side: Profile photo, name, and designation */}
          <div className=" flex items-center mb-4 md:mb-0">
            <div className="w-32 h-32 relative bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
              <img
                src={profileImage || "https://via.placeholder.com/64"}
                alt="Profile"
                className="w-full h-full object-cover  "
              />
              <button
                onClick={handleCameraClick}
                className="absolute bottom-0 right-0 p-1 bg-blue-900 rounded-full text-white"
              >
                <AiFillCamera className="w-10 h-10" />
              </button>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
            <div className="ml-4 flex items-center space-x-2 text-[18px]">
              <button className="bg-blue-900 text-white p-4 rounded">
                UserName: Sofiya Khan
              </button>
              <button className="bg-blue-900 text-white p-4  rounded">
                Designation:Developer
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white border-gray-400 rounded-lg border my-4 p-4 flex flex-col md:flex-row items-center md:items-start ">
          <div className="flex flex-col mx-4">
            <span className="mt-2 text-xl text-black">Company Logo</span>
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, "logo")}
              />
              <div className="w-80 h-32 bg-gray-200 flex items-center justify-center rounded-lg">
                {logo ? (
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500 ">Upload Logo</span>
                )}
              </div>
            </label>
          </div>
          <div className="flex flex-col  mt-4 md:mt-0">
            <span className="mt-2 text-xl text-black">Company Banner</span>
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, "banner")}
              />
              <div className="w-64 h-16 bg-gray-200 flex items-center justify-center rounded-lg">
                {banner ? (
                  <img
                    src={banner}
                    alt="Company Banner"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500">Upload Banner</span>
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
