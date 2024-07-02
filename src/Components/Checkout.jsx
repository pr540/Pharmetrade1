// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";


// function Checkout({ topMargin }) {
//   const [isActive, setIsActive] = useState(true);
//   const [ischeck, setIsCheck] = useState(false);

//   const handleClick = () => {
//     setIsActive(true);
//     setIsCheck(!ischeck);
//   };
//   const handleCheck = () => {
//     setIsCheck(!ischeck);
//     setIsActive(!isActive);
//   };

//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div
//       style={{ marginTop: `${topMargin}px` }}
//       className="bg-gray-200  md:w-screen lg:h-fit lg:text-md lg:text-lg text-gray-500 p-8"
//     >
//       <h1 className="ml-20 lg:text-2xl lg:mb-2 text-black">
//         PharmaTrade {`>`} Checkout
//       </h1>
//       <div className="bg-white rounded-lg p-8 pl-24  md:w-full lg:h-full">
//         <h1 className="lg:text-4xl font-semibold text-black lg:mb-10 ">
//           Checkout
//         </h1>
//         <div className="lg:flex lg:items-center lg:justify-center lg:text-xl lg:mb-10">
//           <h1>
//             Have a coupon?
//             <a href="#" className="text-cart underline">
//               {" "}
//               CLICK HERE TO ENTER YOUR CODE
//             </a>
//           </h1>
//         </div>
//         <div className="lg:flex lg:flex-row gap-20">
//           {/* right div  */}
//           <div>
//             <form>
//               <h1 className="lg:mb-8 lg:text-3xl font-semibold text-black">
//                 Billing Details
//               </h1>
//               <div className=" md:flex  md:flex-row  md:gap-2 lg:gap-20">
//                 <div className=" md:flex gap-2 lg:mb-2 md:flex-col">
//                   <label>First name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md  p-3 md:w-96 md:h-fit"
//                     placeholder="Enter firstname"
//                   />
//                 </div>
//                 <div className=" md:flex gap-2 lg:mb-2 md:flex-col">
//                   <label>Last name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md  p-3 md:w-96 md:h-fit"
//                     placeholder="Enter firstname"
//                   />
//                 </div>
//               </div>
//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>Company name(Optional)</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>Country / Region </label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex  lg:mb-2 gap-2 md:flex-col">
//                 <label>Street Adress</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex  lg:mb-2 gap-2 md:flex-col">
//                 <label>Town / city </label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>State / Country</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>Postal code </label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>Email</label>
//                 <input
//                   required
//                   type="email"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>Phone</label>
//                 <input
//                   required
//                   type="number"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//               <div className="md:flex lg:mb-2  gap-2 md:flex-col">
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
//                     className="ml-2 text-lg text-gray-700 w-[800px] md:h-fit"
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

//               <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
//                 <label>Additonal Info</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder=""
//                   className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
//                 />
//               </div>
//             </form>
//           </div>
//           {/* left div  */}
//           <div className="bg-gray-100 md:w-fit p-8 md:h-fit">
//             <h1 className="lg:text-4xl font-semibold text-black lg:mb-10">
//               Your Order{" "}
//             </h1>
//             <div>
//               <div className="lg:flex lg:flex-row mb-8 lg:gap-10">
//                 <div>
//                   <h1>Zahler Real Calm Multivitamin × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="lg:flex lg:flex-row mb-8 lg:gap-24">
//                 <div>
//                   <h1>Oral irrigator Electric × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="lg:flex lg:flex-row mb-8 lg:gap-56">
//                 <div>
//                   <h1>Subtotal </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="lg:flex lg:flex-row mb-8 lg:gap-56">
//                 <div>
//                   <h1>Total </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//             </div>



//             <div className="mb-4 w-full text-black">
//               <h2 className="border-b pb-2 border-gray-300 font-bold">SHIPPING METHODS</h2>
//               <div className="flex justify-between p-4">
//               <span className="">$0.00</span><span>Shipping Method</span>
//               </div>
//             </div>
//             <div className="bg-white mb-8 p-4 border-black  lg:w-full lg:h-full">
//               <div className=" ">
//                 <div className="lg:flex lg:flex-row gap-2 items-center mb-4">
//                   <button
//                     className={
//                       isActive
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4  border-black border-2 rounded-full"
//                     }
//                     onClick={handleClick}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Details</h1>
//                 </div>
//                 {isActive && (
//                   <div>
//                     <p className="mb-8">
//                       Make your payment directly into our bank <br></br>
//                       account. Please use your Order ID as the <br></br>
//                       payment reference. Your order will not be <br></br>
//                       shipped until the funds have cleared in our <br></br>
//                       account.
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//               <div className=" ">
//                 <div className="lg:flex lg:flex-row gap-2 items-center mb-4">
//                   <button
//                     className={
//                       ischeck
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4  border-black border-2 rounded-full"
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
//                       Your personal data will be used to process <br></br>
//                       your order, support your experience <br></br>
//                       throughout this website, and for other<br></br>
//                       spurposes described in our{" "}
//                       <a href="#" className="text-cart underline">
//                         privacy policy.
//                       </a>
//                       <br></br>
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="lg:w-full lg:flex items-center justify-center">
//               <button className=" bg-pink-500 px-4 py-2 rounded-3xl text-black">
//                 <Link to='/order'>Place order</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ topMargin }) {
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setIsCheck(!ischeck);
  };
  const handleCheck = () => {
    setIsCheck(!ischeck);
    setIsActive(!isActive);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{ marginTop: `${topMargin}px` }}
      className="bg-gray-200  md:w-screen lg:h-fit lg:text-md lg:text-lg text-gray-500 p-8"
    >
      <h1 className="ml-20 lg:text-2xl lg:mb-2 text-black">
        PharmaTrade {`>`} Checkout
      </h1>
      <div className="bg-white rounded-lg p-8 pl-24  md:w-full lg:h-full">
        <h1 className="lg:text-4xl font-semibold text-black lg:mb-10 ">
          Checkout
        </h1>
        <div className="lg:flex lg:items-center lg:justify-center lg:text-xl lg:mb-10">
          <h1>
            Have a coupon?
            <a href="#" className="text-cart underline">
              {" "}
              CLICK HERE TO ENTER YOUR CODE
            </a>
          </h1>
        </div>
        <div className="lg:flex lg:flex-row gap-20">
          {/* right div  */}
          <div>
            <form>
              <h1 className="lg:mb-8 lg:text-3xl font-semibold text-black">
                Billing Details
              </h1>
              <div className=" md:flex  md:flex-row  md:gap-2 lg:gap-20">
                <div className=" md:flex gap-2 lg:mb-2 md:flex-col">
                  <label>First name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md  p-3 md:w-96 md:h-fit"
                    placeholder="Enter firstname"
                  />
                </div>
                <div className=" md:flex gap-2 lg:mb-2 md:flex-col">
                  <label>Last name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md  p-3 md:w-96 md:h-fit"
                    placeholder="Enter firstname"
                  />
                </div>
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Company name(Optional)</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Country / Region </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex  lg:mb-2 gap-2 md:flex-col">
                <label>Street Adress</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex  lg:mb-2 gap-2 md:flex-col">
                <label>Town / city </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>State / Country</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Postal code </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Email</label>
                <input
                  required
                  type="email"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Phone</label>
                <input
                  required
                  type="number"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className="md:flex lg:mb-2  gap-2 md:flex-col">
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
                    className="ml-2 text-lg text-gray-700 w-[800px] md:h-fit"
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

              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Additonal Info</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
            </form>
          </div>
          {/* left div  */}
          <div className="bg-gray-100 md:w-fit p-8 md:h-fit">
            <h1 className="lg:text-4xl font-semibold text-black lg:mb-10">
              Your Order{" "}
            </h1>
            <div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-10 ">
                <div>
                  <h1>Zahler Real Calm Multivitamin × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-24 justify-between">
                <div>
                  <h1>Oral irrigator Electric × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-56 justify-between">
                <div>
                  <h1>Subtotal </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-56 justify-between">
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
            <div className="bg-white mb-8 p-4 border-black  lg:w-full lg:h-full">
              <div className=" ">
                <div className="lg:flex lg:flex-row gap-2 items-center mb-4">
                  <button
                    className={
                      isActive
                        ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
                        : "w-4 h-4  border-black border-2 rounded-full"
                    }
                    onClick={handleClick}
                  >
                    {" "}
                  </button>{" "}
                  <h1> Details</h1>
                </div>
                {isActive && (
                  <div>
                    <p className="mb-8">
                      Make your payment directly into our bank <br></br>
                      account. Please use your Order ID as the <br></br>
                      payment reference. Your order will not be <br></br>
                      shipped until the funds have cleared in our <br></br>
                      account.
                    </p>{" "}
                  </div>
                )}
              </div>
              <div className=" ">
                <div className="lg:flex lg:flex-row gap-2 items-center mb-4">
                  <button
                    className={
                      ischeck
                        ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
                        : "w-4 h-4  border-black border-2 rounded-full"
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
                      Your personal data will be used to process <br></br>
                      your order, support your experience <br></br>
                      throughout this website, and for other<br></br>
                      spurposes described in our{" "}
                      <a href="#" className="text-cart underline">
                        privacy policy.
                      </a>
                      <br></br>
                    </p>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-full lg:flex items-center justify-center">
              <button className=" bg-green-600 px-4 py-2 rounded-3xl text-black">
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
