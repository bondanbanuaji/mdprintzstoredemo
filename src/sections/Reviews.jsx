import React, { useEffect } from 'react';
import { reviewdata } from '../export';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };
    
      useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: 'ease-in-out',
        })
    
        AOS.refresh();
    
      }, [])

  return (
    <div id="testimonials" className='w-full lg:px-20 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" 
        className='text-xl font-semibold capitalize text-themepurple'>1300+ Customer Reviews
      </h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" 
        className='font-semibold text-black text-[42px] leading-[50px] text-center capitalize'>Our Customer Love</h1>
        <div data-aos="zoom-in" data-aos-delay="300" className='w-full mt-10'>
          <Slider className='w-full' {...settings}>
            {
              reviewdata.map((item, index) => (
                <div>
                  <div key={index} className="flex flex-col items-center justify-center gap-4 p-3 lg:p-10">
                    <img src={item.img} alt="" 
                    className='rounded-full w-[100px] m-auto'/>
                    <div className='flex items-center justify-center gap-1'>
                      <FaStar className='text-themepurple' />
                      <FaStar className='text-themepurple' />
                      <FaStar className='text-themepurple' />
                      <FaStar className='text-themepurple' />
                      <FaStar className='text-themepurple' />
                    </div>
                    <p className='text-lg text-center text-gray-500'>{item.para}</p>
                    <div className='flex items-center justify-center gap-5'>
                      <FaQuoteLeft className='fill-themepurple size-16' />
                      <div className='flex flex-col items-start justify-center w-full'>
                        <h1 className='text-xl font-semibold text-black capitalize'>{item.name}</h1>
                        <h1 className='text-gray-500 capitalize'>{item.post}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
    </div>
  )
}

export default Reviews