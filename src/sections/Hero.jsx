import React, { useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, []);

  return (
    <div id="hero"
      className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'
    >
      <Slider className='w-full' {...settings}>
        {/* Slide 1 */}
        <div>
          <div className='w-full lg:px-20 px-5 lg-h[700px] h-[600px] 
          flex flex-col justify-center items-start gap-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${dslr})` }}>
            <h1 data-aos="zoom-in" data-aos-delay="50"
              className='px-6 py-2 text-xl border rounded-lg text-themeyellow border-themeyellow'>
              Diskon hingga 80%
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100"
              className='text-white lg:text-[120px] text-[60px]
            uppercase font-bold lg:leading-[120px] leading-[70px]'>
              Kamera DSLR <br /> 360°
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="50"
              className='text-2xl text-white'>
              100% <span className='font-semibold text-themeyellow'>Gadget Elektronik Terpercaya</span>
            </h1>
            <button data-aos="zoom-in" data-aos-delay="200"
              className='px-6 py-3 font-semibold text-black rounded-lg bg-themeyellow'>
              KOLEKSI ONLINE
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className='w-full lg:px-20 px-5 lg-h[700px] h-[600px] 
          flex flex-col justify-center items-start gap-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${earbuds})` }}>
            <h1 data-aos="zoom-in" data-aos-delay="50"
              className='px-6 py-2 text-xl border rounded-lg text-themeyellow border-themeyellow'>
              Diskon hingga 80%
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100"
              className='text-white lg:text-[120px] text-[60px]
            uppercase font-bold lg:leading-[120px] leading-[70px]'>
              Earbuds <br /> Nirkabel
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="50"
              className='text-2xl text-white'>
              100% <span className='font-semibold text-themeyellow'>Gadget Elektronik Terpercaya</span>
            </h1>
            <button data-aos="zoom-in" data-aos-delay="200"
              className='px-6 py-3 font-semibold text-black rounded-lg bg-themeyellow'>
              KOLEKSI ONLINE
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className='w-full lg:px-20 px-5 lg-h[700px] h-[600px] 
          flex flex-col justify-center items-start gap-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${headset})` }}>
            <h1 data-aos="zoom-in" data-aos-delay="50"
              className='px-6 py-2 text-xl border rounded-lg text-themeyellow border-themeyellow'>
              Diskon hingga 80%
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100"
              className='text-white lg:text-[120px] text-[60px]
            uppercase font-bold lg:leading-[120px] leading-[70px]'>
              Headset <br /> Terbaik
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="50"
              className='text-2xl text-white'>
              100% <span className='font-semibold text-themeyellow'>Gadget Elektronik Terpercaya</span>
            </h1>
            <button data-aos="zoom-in" data-aos-delay="200"
              className='px-6 py-3 font-semibold text-black rounded-lg bg-themeyellow'>
              KOLEKSI ONLINE
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
