import React, { useEffect } from 'react';

import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import pay1 from '../assets/pay-1.jpg';
import pay2 from '../assets/pay-2.jpg';
import pay3 from '../assets/pay-3.jpg';
import pay4 from '../assets/pay-4.jpg';

import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      })
  
      AOS.refresh();
  
    }, [])
  

  return (
    <div id="contact" className='flex flex-col items-center justify-center w-full'>
      {/* 1stbox */}
      <div data-aos="zoom-in" data-aos-delay="100"
      className='grid items-center justify-center w-full grid-cols-2 gap-10 px-10 py-8 bg-themepurple lg:px-20 lg:grid-cols-6'>
        <img src={client1} alt="" 
        className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
        <img src={client2} alt="" 
        className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
        <img src={client3} alt="" 
        className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
        <img src={client4} alt="" 
        className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
        <img src={client5} alt="" 
        className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
        <img src={client6} alt="" 
        className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
      </div>
      {/* 2ndbox */}
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-5 grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delat="200"
        className='flex flex-col items-start justify-center gap-10 grow'>
          <div className='flex flex-col items-start justify-center gap-4'>
            <h1 className='text-4xl italic font-bold underline text-themepurple'> MDPrintz</h1>
            <p className='text-justify text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, sed ipsum facere minus velit eius!</p>
          </div>
          <div className='flex flex-col items-start justify-center gap-4'>
            <h1 className='text-xl font-semibold text-black capitalize'>Download Our App</h1>
            <div className='flex items-center justify-center gap-4'>
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <h1 className='text-xl font-semibold text-black capitalize'>
            Usefull links
            <h1>
              <ul className='flex flex-col items-start justify-center gap-2 mt-8 '>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
              </ul>
            </h1>
          </h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <h1 className='text-xl font-semibold text-black capitalize'>
            Usefull links
            <h1>
              <ul className='flex flex-col items-start justify-center gap-2 mt-8 '>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
              </ul>
            </h1>
          </h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <h1 className='text-xl font-semibold text-black capitalize'>
            Usefull links
            <h1>
              <ul className='flex flex-col items-start justify-center gap-2 mt-8 '>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
              </ul>
            </h1>
          </h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <h1 className='text-xl font-semibold text-black capitalize'>
            Usefull links
            <h1>
              <ul className='flex flex-col items-start justify-center gap-2 mt-8 '>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
                <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
              </ul>
            </h1>
          </h1>
        </div>
      </div>
      
      {/* 3rdbox */}
      <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
        <hr className='py-3 border-t border-gray-300' />
        <div className='flex flex-col items-center justify-between w-full gap-10 lg:flex-row lg:gap-4'>
          <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
            <img src={pay1} alt="" 
            className='w-[50px] rounded-lg' />
            <img src={pay2} alt="" 
            className='w-[50px] rounded-lg' />
            <img src={pay3} alt="" 
            className='w-[50px] rounded-lg' />
            <img src={pay4} alt="" 
            className='w-[50px] rounded-lg' />
          </div>
          <div className='lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow'>
            <h1 className='text-2xl font-semibold text-black'>Subscribe Newsletter</h1>
            <div>
              <input type="email" placeholder="Enter Valid Email" 
              className='w-full px-6 py-3 capitalize rounded-l-lg lg:w-auto' />
              <button className='w-full px-6 py-3 font-semibold text-white rounded-r-lg bg-themepurple lg:w-auto hover:bg-themeyellow hover:text-black'>Submit</button>
            </div>
          </div>
          <div className='lg:w-[20%] w-full'>
            <p className='text-center text-gray-500 lg:text-end'>2025 Powered by MDPrintz All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* Scroll Top */}
      <div id="icon-box" className="fixed p-3 text-white rounded-full cursor-pointer bg-themepurple hover:bg-themeyellow hover:text-black lg:bottom-6 right-6 bottom-6">
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>
    </div>
  )
}

export default Footer