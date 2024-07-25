import React from 'react'

const EditFields = () => {
  return (

    <div className="w-full h-full justify-center overflow-x-hidden flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col mb-4">
          <h1 className="text-2xl font-normal text-gray-600 ">EDIT PRODUCT</h1>
          <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
        </div>
        {/* section1 start */}

        <div className="flex  w-full Largest:w-[80%] flex-row justify-between">
          <div className="flex flex-col  gap-5 items-center text-gray-600  ">
          <div className="flex flex-col">
              <label className="text-base">Product ID</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Status</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Qty Confirmed</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Website</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>

          {/* section1 end */}

          {/* section2 start */}
          <div className="flex flex-col gap-5 items-center text-gray-600 ">
          <div className="flex flex-col">
              <label className="text-base">Thumbnail<span className="text-red-600 text-xl">*</span></label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="">Type<span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base"> Qty Pending</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex  flex-col">
              <label className="text-base"> Action</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>

          {/* section2 end */}

          {/* section3 start */}

          <div className="flex flex-col  gap-5 items-baseline text-gray-600 ">
          <div className="flex flex-col">
              <label className="text-base">Name</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">SKU</label>
              <input
                type="text"
                id="Upn_Mem"
                className="w-44 h-8 border-slate-300 border "
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Price</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            
          </div>

          {/* section3 end */}

          {/* section4 start */}
          <div className="flex flex-col  gap-5 items-center text-gray-600 ">
          <div className="flex flex-col">
              <label className="text-base">Attribute Set</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="">
                Qty<span className="text-red-600 text-xl ">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Created At</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>
          {/* section-5 start */}
          <div className="flex flex-col gap-5  items-center text-gray-600 ">
            <div className="flex flex-col">
              <label className="">
                Product Status<span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Qty Sold</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Visibility</label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>
          {/* section-5 end */}
        </div>
        </div>
        </div>
  )
}

export default EditFields
