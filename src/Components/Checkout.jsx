import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ topMargin }) {
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  return (
    <div
      style={{ marginTop: `${topMargin}px` }}
      className="bg-gray-200 w-full h-fit text-lg text-gray-500 p-8"
    >
      <h1 className="text-2xl mb-2 text-black">
        PharmEtrade {`>`} Checkout
      </h1>
      <div className="bg-white rounded-lg p-8 w-full h-full">
        <h1 className="text-2xl font-semibold text-black mb-6">
          Checkout
        </h1>
        <div className="flex justify-center items-center mb-8">
          <h1>
            Have a coupon?
            <a href="#" className="text-cart underline">
              {" "}
              CLICK HERE TO ENTER YOUR CODE
            </a>
          </h1>
        </div>
        <div className="flex flex-row w-full gap-10">
          {/* right div  */}
          <div className="w-[65%]">
            <form>
              <h1 className="mb-8 text-xl font-semibold text-black">
                Billing Details
              </h1>
              <div className="flex flex-row w-full gap-2">
                <div className="flex gap-2 mb-2 w-full flex-col">
                  <label>First name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1  h-fit"
                    placeholder="Enter firstname"
                  />
                </div>
                <div className="flex gap-2 mb-2 w-full flex-col">
                  <label>Last name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md p-1 h-fit"
                    placeholder="Enter lastname"
                  />
                </div>
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Company name (Optional)</label>
                <input
                  type="text"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Country / Region</label>
                <input
                  required
                  type="text"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Street Address</label>
                <input
                  required
                  type="text"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Town / City</label>
                <input
                  required
                  type="text"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>State / Country</label>
                <input
                  required
                  type="text"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Postal code</label>
                <input
                  required
                  type="text"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Email</label>
                <input
                  required
                  type="email"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
              </div>
              <div className="flex mb-2 gap-2 flex-col">
                <label>Phone</label>
                <input
                  required
                  type="number"
                  className="border-check border-2 rounded-md p-1 w-full h-fit"
                />
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
          {/* left div  */}
          <div className="bg-gray-100 w-[35%] p-8 h-fit">
            <h1 className="text-4xl font-semibold text-black mb-10">
              Your Order
            </h1>
            <div>
              <div className="flex flex-row mb-8 gap-10">
                <div>
                  <h1>Zahler Real Calm Multivitamin × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="flex flex-row mb-8 gap-24 justify-between">
                <div>
                  <h1>Oral irrigator Electric × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="flex flex-row mb-8 gap-56 justify-between">
                <div>
                  <h1>Subtotal </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="flex flex-row mb-8 gap-56 justify-between">
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
            <div className="bg-white mb-8 p-4 border-black w-full h-fit">
              <div className="mb-4">
                <div className="flex flex-row gap-2 items-center mb-4">
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
                    <p className="mb-8">
                      Make your payment directly into our bank 
                      account. Please use your Order ID as the 
                      payment reference. Your order will not be 
                      shipped until the funds have cleared in our
                      account.
                    </p>{" "}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex flex-row gap-2 items-center mb-4">
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
                      Your personal data will be used to process
                      your order, support your experience 
                      throughout this website, and for other 
                      purposes described in our{" "}
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
              <button className="bg-green-600 px-4 py-2 rounded-3xl text-black">
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
