import React from 'react'
import Banner from '../compnents/Banner'
import Header from '../compnents/Header'
import Image from 'next/image'
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";
function page() {
  return (
    <div className='text-[#2a254b]'>
        <Banner />
        <Header />
    <div className='flex justify-center items-center text-center w-[60%] mx-auto my-8 mb-8'>
        <h1 className='text-5xl'>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
    </div>

    <div className="flex mt-16 justify-start items-start h-auto w-full text-[#2a254b] laptop-max:flex-col laptop-max:justify-center laptop-max:items-center">
    <div className="w-[65%] flex flex-col justify-between items-center tablet-max:w-full">
      <div className="p-5  flex flex-col justify-between items-start leading-8 w-[80%]">
    <h1 className="text-[32px] my-3 ">From a studio in London to a global brand with over 400 outlets</h1>
    <p className="text-[16px] my-3 text-[#8c89a2]">When we started Avion, the idea was simple. Make high quality furniture 
    affordable and available for the mass market. </p>
    <p className="text-[16px] my-3 text-[#8c89a2]">Handmade, and lovingly crafted furniture and homeware is what we live, 
    breathe and design so our Chelsea boutique become the hotbed for the 
    London interior design community.</p>
    </div>
    <Button className='!bg-black/5 justify-self-start  text-[#2a254b] mt-16 rounded-none ml-0 laptop-max:w-[80%] laptop-max:mb-2'>Get in touch</Button>
    </div>
    <Image className="laptop-max:w-[500px] laptop-max:h-[500px] laptop-max:mb-0" src="/home7.svg" width={700} height={740} alt="chair image" />
    </div>


    <div className="flex justify-start items-start h-auto w-full text-[#2a254b] laptop-max:flex-col laptop-max:justify-center laptop-max:items-center">
    <Image className="laptop-max:w-[500px] laptop-max:h-[500px] laptop-max:mb-0" src="/about.png" width={700} height={740} alt="chair image" />
    <div className="w-[65%] flex flex-col justify-between items-center tablet-max:w-full">
      <div className="p-5  flex flex-col justify-between items-start leading-8 w-[80%]">
    <h1 className="text-[32px] my-3 ">Our service isn’t just personal, it’s actually hyper personally exquisite</h1>
    <p className="text-[16px] my-3 text-[#8c89a2]">When we started Avion, the idea was simple. Make high quality furniture 
    affordable and available for the mass market.  </p>
    <p className="text-[16px] my-3 text-[#8c89a2]">Handmade, and lovingly crafted furniture and homeware is what we live, 
    breathe and design so our Chelsea boutique become the hotbed for the 
    London interior design community.</p>
    </div>
    <Button className='!bg-black/5  text-[#2a254b] mt-16 rounded-none ml-0 laptop-max:w-[80%] laptop-max:mb-2'>Get in touch</Button>
    </div>
    </div>

    <div className="w-full mt-16 flex flex-col justify-between items-center mx-auto p-5 max-w-[1200px] text-[#2a254b]">
      <h2 className="my-2 text-2xl">What makes our brand different</h2>
      <div className="flex justify-center items-center h-auto gap-4 my-12 flex-wrap laptop-max:h-100">

      <div className="flex flex-col items-start justify-start w-[270px] leading-6 ">
      <TbTruckDelivery className="text-xl my-2" />
      <h2 className="text-xl">Next day as standard</h2>
      <p className="text-[16px]">Order before 3pm and get your orderthe next day as standard</p>
      </div>

      <div className="flex flex-col  w-[270px] h-[124px] leading-6">
      <FaRegCheckCircle className="text-xl my-2" />
      <h2 className="text-xl">Made by true artisans</h2>
      <p className="text-lg">Handmade crafted goods made with real passion and craftmanship</p>
      </div>

      <div className="flex flex-col w-[270px] h-[124px] leading-6">
      <BsCreditCard className="text-xl my-2" />
      <h2>Unbeatable prices</h2>
      <p className="text-[16px]">For our materials and quality you won’t find better prices anywhere</p>
      </div>

      <div className="flex flex-col w-[270px] h-[124px] leading-6">
      <PiPlantLight className="text-xl my-2" />
      <h2>Recycled packaging</h2>
      <p className="text-[16px]">We use 100% recycled packaging to ensure our footprint is manageable</p>
      </div>
      </div>
      
    </div>

    <div className="relative w-full mt-16 h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/about2.svg')" }}>
  {/* Overlay Content */}
  <div className="absolute inset-0 w-[50%] mx-auto flex flex-col justify-center leading-10 tablet-max:flex-col tablet-max:justify-start tablet-max:items-start items-center text-white tablet-max:ml-7 tablet-max:w-full">
  <h1 className='text-5xl mt-16 tablet-max:text-3xl mb-10'>Join the club and get the benefits</h1>
  <h1 className='text-xl text-center tablet-max:lg mb-10 tablet-max:mb-3 tablet-max:text-start'> Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more.</h1>
  <div className="flex justify-between mb-10 tablet-max:mb-3 items-center gap-8 text-white text-lg tablet-max:w-full tablet-max:flex-col tablet-max:justify-start tablet-max:items-start">
  <span className="flex items-center gap-2 ">
    <MdOutlineCheckCircleOutline className="text-xl" />
    Exclusive offers
  </span>
  <span className="flex items-center gap-2">
    <MdOutlineCheckCircleOutline className="text-xl" />
    Free events
  </span>
  <span className="flex items-center gap-2">
    <MdOutlineCheckCircleOutline className="text-xl" />
    Large discounts
  </span>
</div>

<div className="flex tablet-max:flex ">
  <Input
    className="rounded-none text-[#2a254b] tablet-max:w-[200px] tablet-max:mr-0 tablet-max:h-[30px] !placeholder-[#8c89a2] h-[80%] w-[400px] p-5 !bg-white"
    placeholder="your@email.com"
  />
  <Button
    className="rounded-none hover:bg-[#2a254b] tablet-max:h-[35px] bg-[#2a254b] tablet-max:ml-0 text-white h-[80%] p-5 tablet-max:w-[50px]"
  >
    Sign up
  </Button>
</div>
  

  </div>
</div>




    </div>
  )
}

export default page