import React from 'react'
import Header from '../compnents/Header'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function page() {
  return (
    <div>
        <Header/>
        <div className="text-[#2a254b] w-[85%]">
        <div className="w-[85%] flex flex-col mx-auto my-8 laptop-max:flex-col">
  <h1 className="text-2xl w-full mb-8">Your shopping cart</h1>
  <div className="w-full grid grid-cols-3 gap-4 laptop-max:grid-cols-2">
    {/* First Row */}
    <div className="h-[20px] flex items-center">Product</div>
    <div className="h-[20px] flex items-center justify-center">Quantity</div>
    <div className="h-[20px] flex items-center justify-center laptop-max:hidden">Total</div>

    {/* Divider */}
    <hr className="w-[95%] col-span-3 my-2 laptop-max:col-span-2" />

    {/* Product Item 1 */}
    <div className="flex gap-4 justify-center items-center">
      <Image src="/cart1.png" width={110} height={135} alt="vase" />
      <div>
        <h1 className="text-[20px]">Graystone vase</h1>
        <p className="text-[14px]">A timeless ceramic vase with a tri-color grey glaze.</p>
        <p className="laptop-max:hidden">£85</p>
      </div>
    </div>
    <div className="flex items-center justify-center">1</div>
    <div className="flex items-center justify-center laptop-max:hidden">£85</div>

    {/* Product Item 2 */}
    <div className="flex gap-4 justify-center items-center">
      <Image src="/cart2.png" width={110} height={135} alt="vase" />
      <div>
        <h1 className="text-[20px]">Basic white vase</h1>
        <p className="text-[14px]">Beautiful and simple this is one for the classics</p>
        <p className="laptop-max:hidden">£125</p>
      </div>
    </div>
    <div className="flex items-center justify-center">1</div>
    <div className="flex items-center justify-center laptop-max:hidden">£125</div>

    {/* Divider */}
    <hr className="w-[95%] col-span-3 my-2 laptop-max:col-span-2" />

    {/* Subtotal Section */}
    <div className="flex flex-col justify-end items-end w-[88%] leading-10  col-span-3 laptop-max:col-span-2">
      <h1 className="flex justify-start text-xl leading-10 ">
        <span className="text-[#857acc]">Subtotal &nbsp;</span> £210
      </h1>
      <p className="text-[#857acc] text-sm leading-10">
        Taxes and shipping are calculated at checkout
      </p>
      <Button className="bg-[#2a254b] hover:bg-[#2a254b] rounded-none text-lg p-6 laptop-max:w-[220px]">
        Go to Checkout
      </Button>
    </div>
  </div>
</div>


 
</div>
</div>
  )
}

export default page