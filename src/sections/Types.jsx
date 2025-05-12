import React, { useEffect } from 'react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Types = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })

    AOS.refresh();

  }, [])
  return (
    <div className='w-full px-5 lg:px-20 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-end justify-center gap-6 p-10 bg-center bg-cover rounded-lg'
      style={{ backgroundImage: `url(${banner1})` }}>
        <h1 className='px-6 py-2 text-lg border rounded-lg text-themeyellow border-themeyellow'>
          60% Off
          </h1>
          <h1 className='text-4xl font-semibold text-white text-end'>Wireless <br /> Devices</h1>
          <button className='px-6 py-3 font-semibold text-black rounded-lg bg-themeyellow'>
            Shop Now
          </button>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-end justify-center gap-6 p-10 bg-center bg-cover rounded-lg'
      style={{ backgroundImage: `url(${banner2})` }}>
        <h1 className='px-6 py-2 text-lg border rounded-lg text-themeyellow border-themeyellow'>
          60% Off
          </h1>
          <h1 className='text-4xl font-semibold text-white text-end'>Wireless <br /> Devices</h1>
          <button className='px-6 py-3 font-semibold text-black rounded-lg bg-themeyellow'>
            Shop Now
          </button>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col items-end justify-center gap-6 p-10 bg-center bg-cover rounded-lg'
      style={{ backgroundImage: `url(${banner3})` }}>
        <h1 className='px-6 py-2 text-lg border rounded-lg text-themeyellow border-themeyellow'>
          60% Off
          </h1>
          <h1 className='text-4xl font-semibold text-white text-end'>Wireless <br /> Devices</h1>
          <button className='px-6 py-3 font-semibold text-black rounded-lg bg-themeyellow'>
            Shop Now
          </button>
      </div>
    </div>
  )
}

export default Types