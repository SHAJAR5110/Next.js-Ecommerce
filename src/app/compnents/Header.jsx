'use client'
import React from 'react'
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  
  return (

    <div className='h-[132px] w-[95%] mx-auto text-lg tablet-max:h-[70px]'>
    {/* Header icons section   */}
    <div className='w-[100%] flex justify-between items-center p-5'>
    <IoIosSearch className='mobile-max:hidden tablet-max:hidden text-[#2a254b] cursor-pointer' />
    <Link href='/' >
        <h1 className='text-xl '>Avion</h1>
        </Link>
    <div className='flex gap-4 items-center text-[#2a254b]'>
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
    <hr className='mobile-max:hidden tablet-max:hidden'></hr>
    {/* Header navigation section   */}
    <div className='flex w-[100%] justify-center gap-5 text-[#8c89a2] py-4 mobile-max:hidden tablet-max:hidden '>
    <Link href='/'>Plant pots</Link>
    <Link href='/'>Ceramics</Link>
    <Link href='/'>Tables</Link>
    <Link href='/'>Chairs</Link>
    <Link href='/'>Crockery</Link>
    <Link href='/'>Tableware</Link>
    <Link href='/'>Cutlery</Link>

    </div>

    </div>
  )
}

