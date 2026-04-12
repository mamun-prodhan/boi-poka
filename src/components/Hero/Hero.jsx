import React from 'react';
import HeroImg from '../../assets/banner-bookvibe.png';

const Hero = () => {
    return (
       <div className="hero bg-[#131313]/5 rounded-xl px-5 md:px-30 py-5 md:py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
                <img
                src={HeroImg}
                className='max-w-[318px] w-full'
                />
            </div>
            <div className='flex-1'>
            <h1 className="text-3xl md:text-5xl font-bold md:leading-14">Books to freshen up your bookshelf</h1>
            <button className="btn px-7 py-6 mt-12 text-white bg-[#23BE0A]">View The List</button>
            </div>
        </div>
        </div>
    );
};

export default Hero;