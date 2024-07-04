import React, {useState} from "react";

const ManageShipping = () => {

  const [fedexChecked, setFedexChecked] = useState(true);
  const [upsChecked, setUpsChecked] = useState(true);

  const handleFedexChange = () => {
    setFedexChecked(!fedexChecked);
  };

  const handleUpsChange = () => {
    setUpsChecked(!upsChecked);
  };
  return (
    <div className=" w-[calc(100%-288px)] h-full justify-center flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col my-8">
          <h1 className="text-2xl text-blue-900 font-semibold ">
            Multiship Shipping
          </h1>
        </div>
        <div className="w-full flex justify-between">
          <h2 className=" text-2xl text-gray-600 font-semibold">
            {" "}
            Allowed Shipping
          </h2>
          <button
            className="border rounded-full w-24 bg-blue-900 text-white h-9"
          >
            SAVE
          </button>
        </div>
        <div>
      <label>
        <input
          type="checkbox"
          checked={fedexChecked}
          onChange={handleFedexChange}
        />
        FedEx Express
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={upsChecked}
          onChange={handleUpsChange}
        />
        UPS Shipping
      </label>
    </div>
      </div>
    </div>
  );
};

export default ManageShipping;
