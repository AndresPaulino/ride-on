import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/heroVideo.mp4';

function HeroBanner() {
  return (
    <section className='flex relative align-middle justify-center items-center -mb-20'>
      {/* Video */}
      <div className='-z-10'>
        <video className='absolute top-0 left-0 w-full h-full object-cover z-50' autoPlay loop muted playsInline>
          <source src={heroVideo} type='video/mp4' />
        </video>
      </div>

      {/* Banner Info */}
      <div className='w-full flex h-70v bg-no-repeat bg-cover bg-center flex-col justify-center items-center align-middle'>
        {/* Hero Content */}
        <div className='flex flex-col justify-center items-center'>
          {/* Hero Title */}
          <div className='bg-slate-900 bg-opacity-75 py-2 px-4 mb-4 shadow-xl'>
            <h1 className='text-4xl font-semibold text-textColor'> Welcome to RideOn </h1>
          </div>
          <div className='bg-slate-900 bg-opacity-75 py-2 px-4 shadow-xl'>
            <h1 className='text-md font-semibold text-textColor'> Find your next ride today! </h1>
          </div>
          {/* Buttons */}
          <div className='flex mt-16 justify-center'>
            <Link to='/rides'>
              <button
                className='bg-quinary text-whit hover:text-textColor hover:bg-quinaryDark
                    block px-3 py-2 mr-8 rounded-md font-medium shadow-lg focus:outline-none transition duration-150 ease-in-out'
              >
                Get Started
              </button>
            </Link>

            <Link to='/'>
              <button
                className='bg-quinary text-whit hover:text-textColor hover:bg-quinaryDark
                    block px-3 py-2 rounded-md font-medium shadow-lg focus:outline-none transition duration-150 ease-in-out'
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/* <div className='w-full absolute bottom-0 sm:bottom-[-10px] md:bottom-[-20px] lg:bottom-[-30px] xl:bottom-[-50px]'>
          <svg viewBox='0 0 1440 319'>
            <path fill='#fff' fill-opacity='1' d='M0,64L720,256L1440,96L1440,320L720,320L0,320Z'></path>
          </svg>
        </div> */}
      </div>
    </section>
  );
}

export default HeroBanner;
