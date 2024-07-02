import React from 'react';

function Order({topMargin}) {
  return (
    <div className='bg-slate-100 p-10' 
    style={{ marginTop: `${topMargin}px ` }}>
      <div className='bg-white border-1 rounded-r-md m-10 w-[95%] p-10'>
        <h2  className='text-4xl font-bold my-2'> Order Received</h2>
        <div className='bg-slate-100 w-[95%] m-10  my-12 '>
          <div className='p-10 border-b-2 border-white'>
            <h4 className='text-xl'>Order Number:</h4>
          </div>
          
          <div  className='p-10 border-b-2 border-white'>
     
            <h4 className='text-xl'>Date:</h4>
          </div>
          
          <div className='p-10 border-b-2 border-white'>
           {/* style={{ padding: '10px',borderBottom:'2px solid white' }}> */}
            <h4 className='text-xl'>Total:</h4>
          </div>
          
          <div className='p-10' >
            <h4 className='text-xl'>Payment Method:</h4>
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-4xl font-bold my-12' >Order Details</h2>
          <div className='grid w-full gap-6 grid-cols-2'>
            
           
            <div className='flex justify-start grid-cols-1 grid-rows-1 '>

            <h3 className='text-xl font-semibold'>Product</h3>
            </div>
            <div  className='flex justify-start grid-cols-2 grid-rows-1 '>

            <h3 className='text-xl font-semibold'>Total</h3>
            </div>
           
          
         
          <div  className ='flex justify-start grid-cols-2 grid-rows-4 '>
            <h5  className='text-xl'>Product Name</h5>
          </div>
            <div className ='flex justify-start grid-cols-2 grid-rows-4 '>
              
            <h5  className='text-xl'>Syrup</h5>
            </div>

          <div className ='flex justify-start grid-cols-2 grid-rows-4 '> 
            <h5  className='text-xl font-semibold'>Subtotal</h5>
            </div>
            <div className ='flex justify-start grid-cols-2 grid-rows-4 '>
            <h5  className='text-xl'>$:</h5>
            </div>
         
            <div className='flex justify-start grid-cols-2 grid-rows-4' >
            <h5  className='text-xl font-semibold'>Payment Method:</h5>

            </div>
            <div  className ='flex justify-start grid-cols-2 grid-rows-4 '
            >

            <h5  className='text-xl '>Check Payments</h5>
            </div>
          {/* </div>
          <div style={{ display: 'grid', width: '100%' }}> */}
            <div className ='flex justify-start grid-cols-2 grid-rows-4 '>

            <h5  className='text-xl font-semibold'>Total:</h5>
            </div>
            <div className ='flex justify-start grid-cols-2 grid-rows-4 '>

            <h5  className='text-xl'>$</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;