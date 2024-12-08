import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
function Banner() {
  return (
     
     <div className='h-[41px] w-full aboveDesktop:w-full bg-[#2A254B] text-white flex justify-end laptop-max:min-w-full'>
     <div className='w-[60%] flex items-center justify-between tablet-max:w-full '>
     <h1 className='flex'> <TbTruckDelivery className='text-xl'/> &nbsp; Free delivery on all orders over £50 with code easter checkout</h1>
      <RxCross2 className='mr-2 cursor-pointer'/>
     </div>
     </div>
  )
}

export default Banner