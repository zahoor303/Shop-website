"use client"
import React from 'react';
import Image from 'next/image';
import couple from "@/app/assests/couple.jpg";
import vector2 from "@/app/assests/Vector (3).png"
import { useEffect } from 'react';
// import gsap from 'gsap';

const Hero = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row w-screen  justify-between items-center h-auto lg:h-[663px] mt-[25px] bg-[#F2F0F1] px-4 lg:px-12">

    <div className='w-[600px] h-[550px] flex flex-col ml-[70px] gap-[40px] '>
        <div className='w-[577px] h-[173px] mt-24 '>
        <h1 className=' text-[64px] font-bold leading-[64px]' >FIND CLOTHES THAT MATCHES YOUR STYLE</h1></div>
        <p className='w-[545px] h-[33px] text-base font-normal leading-[22px] text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='w-[210px] h-[52px] py-[16px] px-[54px] gap-[12px] rounded-[62px] bg-black text-base font-medium leading-[21.6px] text-white hover:bg-[#818181] style={{fontFamily:"Satoshi-Light"}}'>Shop Now</button>

        <div className='flex justify-evenly w-[596px] h-[74px] mt-14 gap-[32px]'>
        <div className="w-[151px] h-[74px]">
            <h1 className='text-[40px] font-bold leading-[54px] text-left'>200+</h1>
            <p className='text-base font-normal leading-[22px] text-left text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>International Brands</p>
            </div> 
        <div className="w-[166px] h-[74px]">
            <h1 className='text-[40px] font-bold leading-[54px] text-left'>2000+</h1>
            <p className='text-base font-normal leading-[22px] text-left text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>High-Quality Products</p>
            </div>
        <div className="w-[171px] h-[74px]">
            <h1 className='text-[40px] font-bold leading-[54px] text-left'>30,000+</h1>
            <p className='text-base font-normal leading-[22px] text-left text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>Happy Customers</p>
            </div>
    </div>
    </div>

   
 <div className="relative w-[500px] h-[663px] sm:flex flex-col right-8">
  <Image 
    src={couple}
    alt="heroImage"
    className="w-[500px] h-[663px] bg-[#F2F0F1] flex " 
  />

  <div className="vector absolute top-60 left-2">
    <Image 
      src={vector2} 
      alt="vector"
      layout='responsive'
      className="w-[56px] h-[56px]" 
    />
  </div>

  <div className="vector absolute top-[70px]  right-1">
    <Image 
      src={vector2} 
      alt="vector"
      className="w-[104px] h-[104px]  " 
    />
  </div>
</div>
    </div> 

    </> 
)}

export default Hero