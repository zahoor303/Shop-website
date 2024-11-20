import React from 'react';
import { Star, Search, X,  ShoppingCart,  ContactRound, } from 'lucide-react';
import Image from 'next/image';
import Group  from "@/app/assests/Group.png" ;
import zara from "@/app/assests/zara-logo-1 1.png";
import gucci from "@/app/assests/gucci-logo-1 1.png" ;
import prada from "@/app/assests/prada-logo-1 1.png" ;
import celvin from "@/app/assests/celvin.png";
import tshirt from "@/app/assests/tshirt.png";
import pants from "@/app/assests/pants.png";
import checkshirt from "@/app/assests/checkshirt.png";
import sleeveshirt from "@/app/assests/sleeveshirt.png";
import dresses from "@/app/assests/dresses.png";
import line4 from "@/app/assests/Line 4.png";
import vshit from "@/app/assests/vshirt.png";
import oshit from "@/app/assests/0shirt.png";
import shorts from "@/app/assests/shorts.png";
import bpants from "@/app/assests/bpants.png";
import happy from "@/app/assests/happy.png";
import NEW  from "@/app/assests/NEW ARRAVAL.png";
import top from "@/app/assests/top.png";
import FIND from "@/app/assests/FIND CLOTHES THAT MATCHES YOUR STYLE.png";
import SHOP from "@/app/assests/SHOP.CO.png";
import Hero from './hero';
import DressStyle from './dressstyle';


const HomePage = () => {
  return (
    <div className="min-h-screen w-screen bg-white  " >
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-1 px-4 sm:text-base sm:py-2 relative">
  Sign up and get 20% off on your first order
  <span className="underline ml-1 cursor-pointer">Sign Up Now</span>
  <X className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer" />
</div>


      {/* Navigation */}
<nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 border-b text-black">
  <div className="flex items-center gap-4 sm:gap-8">
    <div>
      <Image src={SHOP} alt='' />
    </div>
    <div className="hidden sm:flex gap-4 sm:gap-6">
      <span className="cursor-pointer">Shop v</span>
      <span className="cursor-pointer">On Sale</span>
      <span className="cursor-pointer">New Arrivals</span>
      <span className="cursor-pointer">Brands</span>
    </div>
  </div>
  <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
    <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2">
      <Search className="w-4 h-4" />
      <input
        type="text"
        placeholder="Search for products..."
        className="bg-transparent outline-none ml-2 w-full sm:w-64"
      />
    </div>
    <ShoppingCart className="w-6 h-6 cursor-pointer" />
    <ContactRound className="w-6 h-6 cursor-pointer" />
  </div>
</nav>


{/* hero section */}
     <Hero/> 


      {/* Brand Logos */}
      <div className="flex flex-wrap justify-around items-center px-4 sm:px-16 py-8 border-y bg-black">
  <Image src={Group} alt="Versace" className="h-8" />
  <Image src={zara} alt="Zara" className="h-8" />
  <Image src={gucci} alt="Gucci" className="h-8" />
  <Image src={prada} alt="Prada" className="h-8" />
  <Image src={celvin} alt="Calvin Klein" className="h-8" />
</div>


      <div className='line-through'>
  <Image src={line4} alt='' className='space-x-4'/>
</div>

      {/* NEW ARRIVALS */}
<section className="px-6 py-4">
  {/* Section Heading */}
  <div className="flex justify-center items-center mb-8 ">

    <Image src={NEW} alt="New Arrivals" />
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">

    {[
      {
        name: "T-shirt with Tape Details",
        price: 120,
        rating: 4.5,
        reviews: 8/2,
        image: tshirt,
      },
      {
        name: "Skinny Fit Jeans",
        price: 240,
        oldPrice: 260,
        rating: 4.8,
        reviews: 10/2,
        image: pants,
      },
      {
        name: "Checkered Shirt",
        price: 180,
        rating: 4.4,
        reviews: 9/2,
        image: checkshirt,
      },
      {
        name: "Sleeve Striped T-shirt",
        price: 130,
        oldPrice: 160,
        rating: 4.6,
        reviews: 9.5/2,
        image: sleeveshirt,
      },
    ].map((product, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-medium mb-2 text-lg">{product.name}</h3>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price}</span>
          {product.oldPrice && (
            <>
              <span className="text-gray-400 line-through">
                ${product.oldPrice}
              </span>
              <span className="text-red-500 text-sm">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </span>
            </>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* View All Button */}
  <div className="text-center mt-8">
    <button className="bg-white text-black py-3 px-8 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
      View All
    </button>
  </div>
</section>

<div className='line-through'>
  <Image src={line4} alt='' className=''/>
</div>

        {/* Top Selling Section */}
<section className="px-6 py-6">
  <div className="flex justify-center items-center">
    <Image src={top} alt="Top Selling" />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">


    {[
      {
        name: "Vertical Striped Shirt",
        price: 212,
        oldPrice: 232,
        image: vshit, // Assign the correct image variable
        rating: 5,
        reviews: 25/5,
      },
      {
        name: "Courage Graphic T-Shirt",
        price: 145,
        image: bpants,
        rating: 4,
        reviews: 8/2,
      },
      {
        name: "Loose Fit Bermuda Shorts",
        price: 180,
        image: oshit,
        rating: 3,
        reviews: 15/5,
      },
      {
        name: "Faded Skinny Jeans",
        price: 210,
        image: shorts,
        rating: 4.5,
        reviews: 8/2,
      },
    ].map((product, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="font-medium mb-2">{product.name}</h3>
        <div className="flex gap-2 items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">${product.price}</span>
          {product.oldPrice && (
            <>
              <span className="text-gray-400 line-through">${product.oldPrice}</span>
              <span className="text-red-500 text-sm">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </span>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
  {/* View All Button */}
  <div className="text-center mt-8">
    <button className="bg-white text-black py-3 px-8 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
      View All
    </button>
  </div>
</section>

<div className='line-through'>
  <Image src={line4} alt='' className=''/>
</div>

      {/* Browse by Style Section */}
       <section className="px-12 py-12  text-black">
        <h2 className="text-3xl font-bold mb-6"></h2>
        <div className="">
          <div className="">
            <div className="">
              <Image src={dresses} alt="Casual Style" className="   rounded-sm" />
            </div>
          </div>
        </div>
      </section> 

      {/* <DressStyle/> */}

      <div className='line-through'>
  <Image src={line4} alt='' className=''/>
</div>


{/* Customer Reviews Section */}
<section className="px-6 py-12 bg-white text-black">
  {/* Heading */}
  <div className="text-center mb-8">
    <Image src={happy} alt="" className="" />
  </div>

  <div className='line-through'>
  <Image src={line4} alt='' className=''/>
</div>

  {/* Reviews Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Sarah M.✅",
        review: `"I'm blown away by the quality and style of the clothes I received from Shop.co! From casual wear to formal attire, everything I've bought has exceeded my expectations."`,
        rating: 5,
      },
      {
        name: "Alex K.✅",
        review: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co! Their diverse collection caters to a variety of tastes and preferences."`,
        rating: 4,
      },
      {
        name: "James L.✅",
        review: `"The customer service always goes the extra mile. I'm thrilled to have found a brand that combines style, quality, and a great shopping experience."`,
        rating: 5,
      },
    ].map((customer, index) => (
      <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Name and Rating */}
        <div className="flex items-center mb-4">
          <p className="font-bold text-black mr-2">{customer.name}</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < customer.rating ? "fill-yellow-400" : "fill-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-600 italic">{customer.review}</p>
      </div>
    ))}
  </div>
</section>


<div className='line-through'>
  <Image src={line4} alt='' className=''/>
</div>


      {/* Newsletter  */}
<section className="bg-black text-white px-4 sm:px-6 py-8">
  <div className="max-w-screen-lg mx-auto py-6 px-4 sm:px-8 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-6">
  <h1 className='w-[551px] h-[94px] text-[40px] font-bold leading-[45px] text-white'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
       <div className='w-[349px] h-[108px] flex flex-col gap-[14px]'>
        <div className="flex items-center">
       <div className="absolute text-[#818181] text-base ml-5"/>
        <input type="text" name='text' placeholder='Enter your email address' className='w-[349px] h-12 py-3 px-4 gap-[12px] text-base pl-10 rounded-[62px] bg-white'/>
         </div>
         <button className="w-[349px] h-[46px] py-3 px-4 rounded-[62px] bg-white text-black text-base
        font-medium leading-[21.6px]">Subscribe to Newsletter</button>
      </div>
  </div>
</section>

    </div> 
  );
};

export default HomePage;
