import React, { useState } from 'react';

function UpsShipping() {
  const [formData, setFormData] = useState({
    accessLicenseNumber: '',
    userId: '',
    password: '',
    shipperNumber: '',
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { accessLicenseNumber, userId, password, shipperNumber } = formData;

    if (!accessLicenseNumber || !userId || !password || !shipperNumber) {
      setMessage('All fields are must be required.');
      setIsError(true);
    } else {
      setMessage('UPS Shipping details saved successfully.');
      setIsError(false);
    }
  };

  return (
    <div className=' w-[calc(100%-288px)] px-4'>
      {message && (
        <div className={`my-4 p-2 text-lg ${isError ? 'text-red-500' : 'text-green-500'} bg-green-50`}>
          {message}
        </div>
      )}
      <div className='flex justify-between border-b border-black my-5 p-4'>
        <h1 className='text-xl text-blue-900 font-semibold'>MARKETPLACE UPS CONFIGURATION</h1>
        <button 
          className='border rounded-full w-24 bg-blue-900 text-white h-9'
          onClick={handleSubmit}
        >
          SAVE
        </button>
      </div>

      <div className='w-full flex flex-col justify-center'>

      <div className="w-[80%] flex justify-between text-gray-600 my-6">
        <div className="flex flex-col">
          <label className="text-xl">
            Access License Number:<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            name="accessLicenseNumber"
            className='border rounded-md h-10 w-96'
            value={formData.accessLicenseNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">
            User Id:<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            name="userId"
            className='border rounded-md h-10 w-96'
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-[80%] flex justify-between text-gray-600 my-6">
        <div className="flex flex-col">
          <label className="text-xl">
            Password:<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            name="password"
            className='border rounded-md h-10 w-96'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">
            Shipper Number:<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            name="shipperNumber"
            className='border rounded-md h-10 w-96'
            value={formData.shipperNumber}
            onChange={handleChange}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default UpsShipping;
