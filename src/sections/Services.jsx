import React, { useEffect } from 'react';

import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })

    AOS.refresh();
  }, [])

  return (
    <div className='w-full px-5 pt-0 lg:px-20 pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 '>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-center justify-center gap-2'>
        <img src={shipping} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl font-semibold text-black'>Pengiriman ke Seluruh Dunia</h1>
        <h1 className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-center justify-center gap-2'>
        <img src={payment} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl font-semibold text-black'>Pembayaran 100% Aman</h1>
        <h1 className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-center justify-center gap-2'>
        <img src={refund} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl font-semibold text-black'>Jaminan Pengembalian Dana</h1>
        <h1 className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-center justify-center gap-2'>
        <img src={gift} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl font-semibold text-black'>Hadiah & Promo Menarik</h1>
        <h1 className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  )
}

export default Services