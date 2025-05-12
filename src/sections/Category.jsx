import React, { useEffect } from 'react';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
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
        <div
            id="category"
            className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex flex-col items-center gap-20"
        >
            <div className="grid items-start justify-center w-full grid-cols-1 gap-10 lg:grid-cols-6">

                {/* TEXT SECTION - Kolom 1 */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    className="lg:col-span-1 flex flex-col justify-center items-start gap-[20px] text-left"
                >
                    <h1 className="text-xl font-semibold text-themepurple">Favorites Item</h1>
                    <h1 className="text-black font-semibold text-[42px] leading-[50px] lg:text-start">
                        Popular Category
                    </h1>
                    <button className="px-8 py-5 font-semibold text-white rounded-lg mt-[40px] bg-themepurple hover:bg-themeyellow hover:text-black">
                        VIEW ALL
                    </button>
                </div>

                {/* CATEGORY IMAGES - Kolom 2–6 */}
                <div className="grid w-full grid-cols-1 gap-10 lg:col-span-5 lg:grid-cols-5">
                    <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col items-center gap-6">
                        <img src={cat1} alt="cat1" className="rounded-full cursor-pointer" />
                        <h1 className="text-xl font-semibold text-black cursor-pointer hover:text-themepurple">Kategori 1</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col items-center gap-6">
                        <img src={cat2} alt="cat2" className="rounded-full cursor-pointer" />
                        <h1 className="text-xl font-semibold text-black cursor-pointer hover:text-themepurple">Kategori 2</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col items-center gap-6">
                        <img src={cat3} alt="cat3" className="rounded-full cursor-pointer" />
                        <h1 className="text-xl font-semibold text-black cursor-pointer hover:text-themepurple">Kategori 3</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col items-center gap-6">
                        <img src={cat4} alt="cat4" className="rounded-full cursor-pointer" />
                        <h1 className="text-xl font-semibold text-black cursor-pointer hover:text-themepurple">Kategori 4</h1>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col items-center gap-6">
                        <img src={cat5} alt="cat5" className="rounded-full cursor-pointer" />
                        <h1 className="text-xl font-semibold text-black cursor-pointer hover:text-themepurple">Kategori 5</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category