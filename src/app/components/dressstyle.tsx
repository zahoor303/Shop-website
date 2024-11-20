import React from 'react'
import Image from 'next/image'
import casual from "@/app/assests/causal.png"
import formal from "@/app/assests/formal.png"
import party from "@/app/assests/party.png"
import gym from "@/app/assests/gym.png"

const DressStyle = () => {
  return (
    <>
    <div>
        <div className='bg-[#F0F0F0] h-[975px] w-full grid grid-cols-1 my-[50px] mx-[16px] rounded-[20px] md:w-auto md:h-[866px] md:rounded-[40px] md:mx-[100px]'>
            <h1 className='font-bold text-[32px] leading-[36px] mx-[56px] mt-[40px] mb-[28px] flex justify-center text-center md:w-[687px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:mx-auto md:mt-[70px]' style={{fontFamily:"integral"}}>BROWSE BY DRESS STYLE</h1>
        <div className='relative flex flex-wrap flex-col-1 gap-4 mx-[24px] mb-[27px] md:flex-wrap flex-col-2 md:mx-[64px] justify-center items-center'>
            <Image src={casual} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[307px] md:h-[289px]'/>
            <Image src={formal} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[584px] md:h-[289px]'/>
            <Image src={party} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[584px] md:h-[289px]'/>
            <Image src={gym} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[307px] md:h-[289px]'/>
        </div>
        
        </div>
     </div>
    </>
  )
}

export default DressStyle
