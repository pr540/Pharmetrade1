// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Checkout({ topMargin }) {
//   const [isActive, setIsActive] = useState(true);
//   const [ischeck, setIsCheck] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);

//   const handleClick = () => {
//     setIsActive(true);
//     setIsCheck(!ischeck);
//   };

//   const handleCheck = () => {
//     setIsCheck(!ischeck);
//     setIsActive(!isActive);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div
//       style={{ marginTop: `${topMargin}px` }}
//       className="bg-slate-200 w-full h-fit text-lg text-black px-12 py-2"
//     >
//       <h1 className="text-2xl mb-2 text-black">PharmEtrade {`>`} Checkout</h1>
//       <div className="bg-white rounded-lg p-4 w-full h-full">
//         <h1 className="text-2xl font-semibold text-black mb-2">Checkout</h1>
//         <div className="flex justify-center items-center mb-4">
//           <h1>
//             Have a coupon?
//             <a href="#" className="text-cart underline">
//               {" "}
//               CLICK HERE TO ENTER YOUR CODE
//             </a>
//           </h1>
//         </div>
//         <div className="flex flex-row w-full gap-10">
//           {/* right div  */}
//           <div className="w-[65%]">
//             <form>
//               <h1 className="mb-4 text-xl font-semibold text-black">
//                 Billing Details
//               </h1>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex gap-2 mb-2 w-full flex-col">
//                   <label>First name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1  h-fit"
//                     placeholder="Enter FirstName"
//                   />
//                 </div>
//                 <div className="flex gap-2 mb-2 w-full flex-col">
//                   <label>Last name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 h-fit"
//                     placeholder="Enter LastName"
//                   />
//                 </div>
//               </div>
//               {/* <div className="flex mb-2 gap-2 flex-col">
//                 <label>Company name (Optional)</label>
//                 <input
//                   type="text"
//                   className="border-check border-2 rounded-md p-1 w-full h-fit"
//                 />
//               </div>
//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Country / Region</label>
//                 <input
//                   required
//                   type="text"
//                   className="border-check border-2 rounded-md p-1 w-full h-fit"
//                 />
//               </div> */}
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Street Address</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Town / City</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>State / Country</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Postal code</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//               <div className="flex mb-2 gap-2 w-full flex-col">
//                 <label>Email</label>
//                 <input
//                   required
//                   type="email"
//                   className="border-check border-2 rounded-md p-1 w-full h-fit"
//                 />
//               </div>
//               <div className="flex mb-2 gap-2 w-full flex-col">
//                 <label>Phone</label>
//                 <input
//                   required
//                   type="number"
//                   className="border-check border-2 rounded-md p-1 w-full h-fit"
//                 />
//               </div>
//               </div>
//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Subscribe for SMS updates</label>
//                 <div className="flex">
//                   <input
//                     type="checkbox"
//                     id="consentCheckbox"
//                     className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label
//                     htmlFor="consentCheckbox"
//                     className="ml-2 text-lg text-gray-700 w-full"
//                   >
//                     By checking this box and entering your phone number above,
//                     you consent to receive marketing text messages (e.g.{" "}
//                     <span className="font-semibold">promos</span>,{" "}
//                     <span className="font-semibold">cart reminders</span>) from{" "}
//                     <span className="font-semibold">[company name]</span> at the
//                     number provided, including messages sent by autodialer.
//                     Consent is not a condition of purchase. Msg & data rates may
//                     apply. Msg frequency varies. Unsubscribe at any time by
//                     replying STOP or clicking the unsubscribe link (where
//                     available).{" "}
//                     <a href="#" className="text-blue-600 hover:underline">
//                       Privacy Policy
//                     </a>{" "}
//                     &{" "}
//                     <a href="#" className="text-blue-600 hover:underline">
//                       Terms of Service
//                     </a>
//                     .
//                   </label>
//                 </div>
//               </div>

//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Additional Info</label>
//                 <input
//                   required
//                   type="text"
//                   className="border-check border-2 rounded-md p-3 w-full h-fit"
//                 />
//               </div>
//             </form>
//           </div>
//           {/* left div  */}
//           <div className="bg-gray-100 w-[35%] p-4 h-fit">
//             <h1 className="text-2xl font-semibold text-black mb-2">
//               Your Order
//             </h1>
//             <div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Zahler Real Calm Multivitamin × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Oral irrigator Electric × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Subtotal </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Total </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-4 w-full text-black">
//               <h2 className="border-b pb-2 border-gray-300 font-bold">
//                 SHIPPING METHODS
//               </h2>
//               <div className="flex justify-between p-4">
//                 <span className="">$0.00</span>
//                 <span>Shipping Method</span>
//               </div>
//             </div>
//             <div className="bg-white mb-4 p-4 border-black w-full h-fit">
//               <div className="mb-4">
//                 <div className="flex flex-row gap-2 items-center mb-2">
//                   <button
//                     className={
//                       isActive
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4 border-black border-2 rounded-full"
//                     }
//                     onClick={handleClick}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Details</h1>
//                 </div>
//                 {isActive && (
//                   <div>
//                     <p className="mb-4">
//                       Make your payment directly into our bank account. Please
//                       use your Order ID as the payment reference. Your order
//                       will not be shipped until the funds have cleared in our
//                       account.
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <div className="flex flex-row gap-2 items-center mb-2">
//                   <button
//                     className={
//                       ischeck
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4 border-black border-2 rounded-full"
//                     }
//                     onClick={handleCheck}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Check payments</h1>
//                 </div>
//                 {ischeck && (
//                   <div>
//                     <p>
//                       Your personal data will be used to process your order,
//                       support your experience throughout this website, and for
//                       other purposes described in our{" "}
//                       <a href="#" className="text-cart underline">
//                         privacy policy.
//                       </a>
//                       <br />
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <button className="bg-blue-900 px-4 py-2 rounded-3xl text-white font-semibold">
//                 <Link to="/order">Place order</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;





import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ topMargin }) {
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCountry: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  const details = {
    name: "Ram",
    lastname: 'Manda',
    Address: "Dollars",
    City: "Dollars",
    State: "US",
    Country: 'US',
    Pin: '78906',
    email: "ram@gmail.com",
    phone: 7894561230
  };

  const handleClick = () => {
    setIsActive(true);
    setIsCheck(!ischeck);
  };

  const handleCheck = () => {
    setIsCheck(!ischeck);
    setIsActive(!isActive);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUseAddress = () => {
    setFormData({
      ...formData,
      firstName: details.name,
      lastName: details.lastname,
      streetAddress: details.Address,
      townCity: details.City,
      stateCountry: details.State,
      postalCode: details.Pin,
      email: details.email, // You might want to update this based on your requirements
      phone: details.phone  // You might want to update this based on your requirements
    });
  };

  return (
    <div
      style={{ marginTop: `${topMargin}px` }}
      className="bg-slate-200 w-full h-fit text-lg text-black px-12 py-2"
    >
      <h1 className="text-2xl mb-2 text-black">PharmEtrade {`>`} Checkout</h1>
      <div className="bg-white rounded-lg p-4 w-full h-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-black mb-2">Checkout</h1>
            <div className="flex mb-4">
              <h1>
                Have a coupon?
                <a href="#" className="text-cart underline">
                  {" "}
                  CLICK HERE TO ENTER YOUR CODE
                </a>
              </h1>
            </div>
            <h1 className="mb-4 text-xl font-semibold">
              Billing Details
            </h1>
          </div>
          <div className="border shadow-md rounded-md w-[60%]">
            <div className="p-2 mx-4">
              <h1 className="border-b-2">Your Address</h1>
              <div className="border rounded-md flex  my-2 p-3 bg-pink-50 border-orange-200">
                <input type="radio" checked className="mr-2" /> {" "}

                <div className="flex items-center justify-center">
                  <h1 className="font-semibold">{details.name},</h1>
                  <h1 className="text-base mx-1">{details.lastname},</h1>
                  <p className="text-base">{details.Address},</p>
                  <p className="text-base mx-1">{details.City},</p>
                  <p className="text-base">{details.State},</p>
                  <p className="text-base mx-1">{details.Country},</p>
                  <p className="text-base">{details.Pin},</p>
                  <p className="text-base mx-1">{details.email},</p>
                  <p className="text-base" >{details.phone}</p>
                </div>
              </div>

              <button
                className="border rounded-full  h-8 text-sm w-32 bg-blue-900 text-white"
                onClick={handleUseAddress}
              >
                Use this address
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-10">
          <div className="w-[65%]">
            <form>
              <div className="flex flex-row w-full gap-2">
                <div className="flex gap-2 mb-2 w-full flex-col">
                  <label>First name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 h-fit"
                    placeholder="Enter FirstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="flex gap-2 mb-2 w-full flex-col">
                  <label>Last name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 h-fit"
                    placeholder="Enter LastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="flex mb-2 gap-2 w-full flex-col">
                  <label>Street Address</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 w-full h-fit"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  />
                </div>
                <div className="flex mb-2 gap-2 w-full flex-col">
                  <label>Town / City</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 w-full h-fit"
                    value={formData.townCity}
                    onChange={(e) => setFormData({ ...formData, townCity: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="flex mb-2 gap-2 w-full flex-col">
                  <label>State / Country</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 w-full h-fit"
                    value={formData.stateCountry}
                    onChange={(e) => setFormData({ ...formData, stateCountry: e.target.value })}
                  />
                </div>
                <div className="flex mb-2 gap-2 w-full flex-col">
                  <label>Postal code</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 w-full h-fit"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="flex mb-2 gap-2 w-full flex-col">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    className="border-check border-2 rounded-md p-1 w-full h-fit"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="flex mb-2 gap-2 w-full flex-col">
                  <label>Phone</label>
                  <input
                    required
                    type="Phone_number"
                    className="border-check border-2 rounded-md p-1 w-full h-fit"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Subscribe for SMS updates</label>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="consentCheckbox"
                    className="ml-2 text-lg text-gray-700 w-full"
                  >
                    By checking this box and entering your phone number above,
                    you consent to receive marketing text messages (e.g.{" "}
                    <span className="font-semibold">promos</span>,{" "}
                    <span className="font-semibold">cart reminders</span>) from{" "}
                    <span className="font-semibold">[company name]</span> at the
                    number provided, including messages sent by autodialer.
                    Consent is not a condition of purchase. Msg & data rates may
                    apply. Msg frequency varies. Unsubscribe at any time by
                    replying STOP or clicking the unsubscribe link (where
                    available).{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>
                    .
                  </label>
                </div>
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Additional Info</label>
                <input
                  required
                  type="text"
                  className="border-check border-2 rounded-md p-3 w-full h-fit"
                />
              </div>
            </form>
          </div>
          <div className="bg-gray-100 w-[35%] p-4 h-fit mt-5 ">
            <h1 className="text-xl font-semibold text-black mb-2">
              Your Order
            </h1>
            <div>
              <div className="flex flex-row mb-4 gap-4 justify-between">
                <div>
                  <h1>Zahler Real Calm Multivitamin × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="flex flex-row mb-4 gap-4 justify-between">
                <div>
                  <h1>Oral irrigator Electric × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="flex flex-row mb-4 gap-4 justify-between">
                <div>
                  <h1>Subtotal </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="flex flex-row mb-4 gap-4 justify-between">
                <div>
                  <h1>Total </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full text-black">
              <h2 className="border-b pb-2 border-gray-300 font-bold">
                SHIPPING METHODS
              </h2>
              <div className="flex justify-between p-4">
                <span className="">$0.00</span>
                <span>Shipping Method</span>
              </div>
            </div>
            <div className="bg-white mb-4 p-4 border-black w-full h-fit">
              <div className="mb-4">
                <div className="flex flex-row gap-2 items-center mb-2">
                  <button
                    className={
                      isActive
                        ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
                        : "w-4 h-4 border-black border-2 rounded-full"
                    }
                    onClick={handleClick}
                  >
                    {" "}
                  </button>{" "}
                  <h1> Details</h1>
                </div>
                {isActive && (
                  <div>
                    <p className="mb-4">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>{" "}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex flex-row gap-2 items-center mb-2">
                  <button
                    className={
                      ischeck
                        ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
                        : "w-4 h-4 border-black border-2 rounded-full"
                    }
                    onClick={handleCheck}
                  >
                    {" "}
                  </button>{" "}
                  <h1> Check payments</h1>
                </div>
                {ischeck && (
                  <div>
                    <p>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our{" "}
                      <a href="#" className="text-cart underline">
                        privacy policy.
                      </a>
                      <br />
                    </p>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-blue-900 px-4 py-2 rounded-3xl text-white font-semibold">
                <Link to="/order">Place order</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;