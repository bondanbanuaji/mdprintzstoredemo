import React, { useEffect } from 'react';
import { products } from '../export'

import { FaStar, FaRegHeart } from 'react-icons/fa'
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';

import AOS from 'aos'
import 'aos/dist/aos.css'
import Category from './Category';

const Productsgrid = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })

    AOS.refresh();

  }, [])

  return (
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100"
        className='text-xl font-semibold text-themepurple'>Browser Collections
      </h1>
      <h1 data-aos="zoom-in" data-aos-delay="200"
        className='text-black font-semibold text-[42px] leading-[50px] text-center'>
        Trending Products
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300"
        className='grid items-center justify-center w-full grid-cols-1 gap-10 mt-10 lg:grid-cols-4'>
        {
          products.map((item, index) => (
            <div id="product-box" key={index} className='relative flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg cursor-pointer'>
              <img src={item.img} alt="" />
              <div id="icons" className='absolute flex items-center justify-center gap-3 top-[20px]'>
                <div className='p-3 text-white rounded-full bg-themepurple hover:bg-themeyellow hover:text-black'>
                  <MdOutlineRemoveRedEye />
                </div>
                <div className='p-3 text-white rounded-full bg-themepurple hover:bg-themeyellow hover:text-black'>
                  <FaRegHeart />
                </div>
                <div className='p-3 text-white rounded-full bg-themepurple hover:bg-themeyellow hover:text-black'>
                  <MdAddShoppingCart />
                </div>
              </div>
              <h1 className='text-lg font-semibold text-gray-400'>{item.category}</h1>
              <h1 className='text-xl font-semibold text-black'>{item.name}</h1>
              <h1 className='text-lg font-semibold text-themepurple'>{item.price}</h1>
              <div className='w-full mt-2'>
                <hr />
                <div className='flex items-center justify-between gap-6 mt-3'>
                  <div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-themepurple' />
                    <FaStar className='text-themepurple' />
                    <FaStar className='text-themepurple' />
                    <FaStar className='text-themepurple' />
                    <FaStar className='text-themepurple' />
                  </div>
                  <button className='px-4 py-2 text-white bg-green-500 rounded-lg text-[13px] font-semibold'>SALE 14%</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <button date-aos="zoom-in" data-aos-delay="400" 
      className='px-8 py-3 mt-8 font-semibold text-white rounded-lg bg-themepurple hover:bg-themeyellow hover:text-black'>View More</button>
    </div>
  )
}

export default Productsgrid