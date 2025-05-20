import React, { useEffect } from 'react';

import insta1 from '../assets/insta-1.jpg';
import insta2 from '../assets/insta-2.jpg';
import insta3 from '../assets/insta-3.jpg';
import insta4 from '../assets/insta-4.jpg';
import insta5 from '../assets/insta-5.jpg';
import insta6 from '../assets/insta-6.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Insta = () => {

    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      })
  
      AOS.refresh();
  
    }, [])
  

  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delays="100" 
      className='text-xl font-semibold capitalize text-themepurple' >Facebook Marketplace
      </h1>
      <h1 data-aos="zoom-in" data-aos-delay="200"
        className='font-semibold text-black text-[42px] leading-[50px] text-center capitalize'>
        Follow On Facebook
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300"
        className='grid w-full grid-cols-2 gap-6 mt-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6'>
        <img src={insta1} alt="" className='rounded-lg' />
        <img src={insta2} alt="" className='rounded-lg' />
        <img src={insta3} alt="" className='rounded-lg' />
        <img src={insta4} alt="" className='rounded-lg' />
        <img src={insta5} alt="" className='rounded-lg' />
        <img src={insta6} alt="" className='rounded-lg' />
      </div>
      <button data-aos="zoom-in" data-aos-delay="400"
      className='px-8 py-3 mt-12 font-semibold text-white uppercase rounded-lg bg-themepurple hover:bg-themeyellow hover:text-black'> #Mdprintz </button>
    </div>
  )
}

export default Insta