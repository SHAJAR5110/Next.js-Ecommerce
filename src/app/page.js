import Image from "next/image";
import Header from "./compnents/Header";
import { Button } from "@/components/ui/button";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
export default function Home() {
  return (
   <div>
    <Header />
    {/* Landing Page Content */}
    <div className="flex m-6 tablet-max:m-0 tablet-max:w-full laptop-max:flex-col w-[95%]">
    <div className="flex tablet-max:flex-col items-center text-white justify-center bg-[#2A254B] mx-auto w-[75%] tablet-max:h-[100%] tablet-max:w-full laptop-max:h-full" >
    {/* Content */}
    <div className="w-[80%] flex flex-col justify-between h-[100%] p-8 leading-5 tablet-max:w-full">
    <div className="flex flex-col justify-between h-[20%] my-6 ">
    <h1 className="text-4xl tablet-max:lg w-[90%]">
    The furniture brand for the 
    future, with timeless designs
    </h1>
    <Link href='/Productlist'>
    <Button className='!bg-white/20 text-white rounded-none p-6 mt-8 w-[30%] tablet-max:w-[100%] tablet-max:hidden'>View Collection</Button>
    
    </Link>
    </div>
    <h1 className=" flex h-[20%] w-[90%] font-[Satoshi] text-lg my-4 tablet-max:w-[100%] tablet-max:mb-5">A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies</h1>
    <Button className=' hidden !bg-white/20 text-white rounded-none p-6 mt-8 h-[30%] w-[30%] tablet-max:w-[100%] tablet-max:block tablet-max:m-2 tablet-max:mx-2 text-center tablet-max:p-4'>View Collection</Button>
    </div>
    
    </div>
    {/* chair image */}
    <div className=" flex laptop-max:mx-auto laptop-max:w-full laptop-max:h-full laptop-max:justify-center laptop-max:hidden
    ">
    <Image className="tablet-max:hidden" src="/home1.jpeg" width={500} height={500} alt="chair image" />
    </div>
    </div>

    {/* Second section */}
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

    {/* Third section */}
    <div className="min-h-[750px] w-[95%] mx-auto pag-6 flex flex-col justify-start items-start text-[#2a254b] tablet-max:mb-10">
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
    <Link className='!bg-black/10 text-[#2a254b] text-center rounded-none mx-auto p-6 mt-8 w-[20%] tablet-max:w-full' href='/Productlist'>
    View Collection
    </Link>

    </div>

    {/* Fourth section */}
   
    <div className="min-h-[760px] w-[95%] mx-auto flex flex-col justify-start items-start text-[#2a254b] tablet-max:">
    {/* heading div */}
    <div className="w-full">
      <h1 className="text-[32px]">Our popular products</h1>
    </div>
    {/* product div */}
    <div className="flex w-full h-[90%] my-5 justify-between">
      {/* card 1 */}
      <div className="flex flex-col w-auto tablet-max:hidden">
      <Image className="my-3" src="/sofa.svg" width={650} height={450} alt="chair image" />
      </div>

       {/* card 2 */}
       <div className="flex flex-col ">
      <Image className="my-3" src="/home.png" width={300} height={400} alt="chair image" />
      </div>

      {/* card 3 */}
      <div className="flex flex-col ">
      <Image className="my-3" src="/home6.png" width={300} height={400} alt="chair image" />
      </div>

    </div>
    {/* Button div */}
    <Link className='!bg-black/10 text-[#2a254b] text-center rounded-none mx-auto p-6 mt-8 w-[20%] tablet-max:w-full' href='/Productlist'>
    View Collection
    </Link>
    
   

    </div>

    {/* Fifth section */}
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

    {/* Sixth section */}
    <div className="flex justify-start items-start h-auto w-full text-[#2a254b] laptop-max:flex-col laptop-max:justify-center laptop-max:items-center">
    <div className="w-[65%] flex flex-col justify-between items-center tablet-max:w-full">
      <div className="p-5  flex flex-col justify-between items-start leading-8 w-[80%]">
    <h1 className="text-[32px] my-3 ">From a studio in London to a global brand with over 400 outlets</h1>
    <p className="text-[16px] my-3 text-[#8c89a2]">When we started Avion, the idea was simple. Make high quality furniture 
    affordable and available for the mass market. </p>
    <p className="text-[16px] my-3 text-[#8c89a2]">Handmade, and lovingly crafted furniture and homeware is what we live, 
    breathe and design so our Chelsea boutique become the hotbed for the 
    London interior design community.</p>
    </div>
    <Button className='!bg-black/5  text-[#2a254b] mt-16 rounded-none ml-0 laptop-max:w-[80%] laptop-max:mb-2'>Get in touch</Button>
    </div>
    <Image className="laptop-max:w-[500px] laptop-max:h-[500px] laptop-max:mb-0" src="/home7.svg" width={740} height={740} alt="chair image" />
    </div>

   </div>
  );
}
