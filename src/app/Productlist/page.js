import React from 'react'
import Banner from '../compnents/Banner';
import Link from 'next/link';
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { LuMenu } from "react-icons/lu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
function page() {
  return (
    <div>
       <Banner />
       <ShoppingHeader />
        <div className='flex w-full text-[#2a254b] laptop-max:flex-col laptop-max:justify-center laptop-max:items-center laptop-max:w-full desktop-max:flex-col desktop-max:justify-center desktop-max:items-center'>
        <Image className="" src="/shopping1.png" width={720} height={760} alt="chair image" />
        {/* wrapper */}
        <div className='w-[602px] p-[50px] flex flex-col laptop-max:w-[95%]'>
        
        
        <div className='leading-[70px]'>
        <h1 className='text-[32px] laptop-max:[24px]'>The Dandy Chair</h1>
        <p className='text-[24px] laptop-max:[20px]'>£250</p>
        </div>

        <p className=' my-5 laptop-max:my-2' >Description</p>
        <p className='text-[#8c89a2] my-2 laptop-max:my-0'>A timeless design, with premium materials features as one of our most 
        popular and iconic pieces. The dandy chair is perfect for any stylish 
        living space with beech legs and lambskin leather upholstery</p>

        <ul className='text-[#8c89a2] my-5 laptop-max:my-2'>
            <li> Premium material</li>
            <li> Handmade upholstere</li>
            <li>Quality timeless classic</li>
        </ul>
        <p className='my-5 laptop-max:my-2'>Dimensions</p>


        <div className='grid grid-cols-3 grid-rows-2'>
        <p>Height</p>
        <p>Width</p>
        <p>Depth</p>
        <p className='text-[#8c89a2]'>110cm</p>
        <p className='text-[#8c89a2]'>75cm</p>
        <p className='text-[#8c89a2]'>50cm</p>
        
        </div>
        {/* last buttons */}
        <div className='flex justify-between items-center py-5 tablet-max:flex-col '>
        <div className='flex items-center h-auto w-auto tablet-max:flex tablet-max:w-[95%]'>
        <p className='tablet-max:text-xl'>Amount</p>&nbsp;
        <Button className='!bg-black/10 text-[#2a254b] rounded-none mx-auto h-[70%] w-[50%] p-5'>-</Button>
        <p className='text-xl'>1</p>
        <Button className='!bg-black/10 text-[#2a254b] rounded-none mx-auto h-[70%] w-[50%] p-5'>+</Button>
        </div>

        <div className='tablet-max:w-[95%] tablet-max:mt-3'>
        <Button className="rounded-none hover:bg-[#2a254b] bg-[#2a254b] text-white tablet-max:w-[95%]  h-[90%] p-5">Add to Cart</Button>
        </div>
        </div>

        <div >
        
        </div>
        </div>
        </div>

        <div className="min-h-[750px] w-[95%] mx-auto mt-10 pag-6 flex flex-col justify-start items-start text-[#2a254b] tablet-max:mb-10">
    {/* heading div */}
    <div className="w-full">
      <h1 className="text-[32px]">New ceramics</h1>
    </div>
    {/* product div */}
    <div className="flex w-full h-[90%] justify-between tablet-max:flex-col ">
      {/* card 1 */}
      <div className="flex justify-between items-center w-[48%] tablet-max:w-full">
      <div className="flex flex-col ">
      <Image className="my-3" src="/home.png" width={300} height={400} alt="chair image" />
      </div>

       {/* card 2 */}
       <div className="flex flex-col ml-5">
      <Image className="my-3" src="/home2.png" width={300} height={400} alt="chair image" />
      </div>
      </div>
      {/* <div className="min-w-1"></div> */}
      <div className="flex justify-between items-center w-[48%] tablet-max:w-full">
      {/* card 3 */}
      <div className="flex flex-col  ">
      <Image className="my-3" src="/home3.png" width={300} height={400} alt="chair image" />
      </div>

      {/* card 4 */}
      <div className="flex flex-col ml-5">
      <Image className="my-3" src="/home4.png" width={300} height={400} alt="chair image" />
      </div>
      </div>
    </div>
    {/* Button div */}
    <Link className='!bg-black/10 text-[#2a254b] text-center rounded-none mx-auto p-6 mt-8 w-[20%] tablet-max:w-full' href='/Productist'>
    View Collection
    </Link>

    </div>

    <div className="w-full flex flex-col justify-between items-center mx-auto p-5 max-w-[1200px] text-[#2a254b]">
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

    <div className="min-h-[480px] flex flex-col  w-[full] bg-[#F9F9F9]">
<div className="min-h-[365px] w-[95%] bg-white text-[#2a254b] mx-auto my-auto justify-between items-center pt-[68px]">
    {/* Text of that section */}
    <div className="flex flex-col ">
    <h1 className="text-[36px] text-center">Join the club and get the benefits</h1>
    <p className="text-[16px] text-center w-[30%] tablet-max:w-full mx-auto mt-5">Sign up for our newsletter and receive exclusive offers on new 
    ranges, sales, pop up stores and more</p>
    </div>
    {/* signup button */}
    <div className="flex justify-center items-center mt-6">
    <Input className="rounded-none text-[#2a254b] !placeholder-[#8c89a2] h-[90%] w-[450px] p-5 !bg-black/5" 
        placeholder="your@email.com" />
        <Button className="rounded-none hover:bg-[#2a254b] bg-[#2a254b] text-white  h-[90%] p-5">Sign up</Button>
    </div>
</div>
</div>
    </div>
  )
}

export default page


export function ShoppingHeader(){
    return (

        <div className='h-[100px] w-[95%] mx-auto text-lg tablet-max:h-[50px]'>
        {/* Header icons section   */}
        <div className='w-[100%] flex justify-between items-center p-5'>
        <Link href='/' >
        <h1 className='text-xl '>Avion</h1>
        </Link>
        <div className='flex w-[100%] justify-center gap-5 text-[#8c89a2] py-4 mobile-max:hidden tablet-max:hidden '>
        <Link href='/'>Plant pots</Link>
        <Link href='/'>Ceramics</Link>
        <Link href='/'>Tables</Link>
        <Link href='/'>Chairs</Link>
        <Link href='/'>Crockery</Link>
        <Link href='/'>Tableware</Link>
        <Link href='/'>Cutlery</Link>
        </div>
        <div className='flex gap-2 text-[#2a254b]'>
        <IoIosSearch className='mobile-max:hidden tablet-max:hidden text-[#2a254b] cursor-pointer' />
        <Link  href='/ShoppingCart'>
        <MdOutlineShoppingCart className='mobile-max:hidden tablet-max:hidden cursor-pointer' />
        </Link>
        <FaRegUserCircle className='mobile-max:hidden tablet-max:hidden cursor-pointer'/>
        <IoIosSearch className='hidden mobile-max:block tablet-max:block cursor-pointer'/>
        
        <Sheet className='hidden mobile-max:block tablet-max:block cursor-pointer text-[#2a254b]'>
      <SheetTrigger ><LuMenu  className='hidden text-[#2a254b] mobile-max:block tablet-max:block cursor-pointer'/></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription className='flex flex-col text-[#2a254b] justify-center items-start gap-5'>
          <div className='flex gap-5 text-[#2a254b] text-xl justify-between w-full'>
        <Link  href='/ShoppingCart'>
        <MdOutlineShoppingCart className='text-[#2a254b] cursor-pointer' />
        </Link>
        <FaRegUserCircle className='text-[#2a254b] cursor-pointer'/>
        </div>

        <div className='flex justify-between items-center w-full text-xl'>
    <Link href='/Productlist'>Product List</Link> 
    <Link  href='/About'>About</Link> 
    </div>
        <Link  href='/'>Plant pots</Link>
        <Link  href='/'>Ceramics</Link>
        <Link  href='/'>Tables</Link>
        <Link  href='/'>Chairs</Link>
        <Link  href='/'>Crockery</Link>
        <Link  href='/'>Tableware</Link>
        <Link  href='/'>Cutlery</Link>
        
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    
        </div>
        </div>
       
    
        </div>
      )
}