import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/heroVideo.mp4';

function HeroBanner() {
  return (
    <section className='flex relative align-middle justify-center items-center -mb-28'>
      {/* Video */}
      <div className='-z-10'>
        <video className='absolute -top-5 left-0 w-full h-full object-cover' autoPlay loop muted playsInline>
          <source src={heroVideo} type='video/mp4' />
        </video>
      </div>

      {/* Banner Info */}
      <div className='w-full flex h-[40rem] bg-no-repeat bg-cover bg-center flex-col justify-center items-center align-middle'>
        {/* Hero Content */}
        <div className='flex flex-col justify-center items-center'>
          {/* Hero Title */}
          <div className='py-2 mb-4 shadow-xl'>
            <h1
              className='text-5xl font-semibold text-textColor font-dancing'
              style={{
                textShadow: '0px 5px 10px #000',
              }}
            >
              Welcome to <span className='font-dancing text-quinaryDark'>RideOn</span>
            </h1>
          </div>
          <div className='py-2 px-4 text shadow-xl'>
            <h1
              className='text-md font-semibold text-textColor'
              style={{
                textShadow: '0px 5px 10px #000',
              }}
            >
              {' '}
              Find a ride to your next adventure{' '}
            </h1>
          </div>
          {/* Buttons */}
          <div className='flex mt-16 justify-center'>
            <Link to='/rides'>
              <button
                className='bg-quinary text-whit hover:text-textColor hover:bg-quinaryDark
                    block px-3 py-2 mr-8 rounded-md font-medium shadow-xl focus:outline-none transition duration-150 ease-in-out'
              >
                Get Started
              </button>
            </Link>

            <Link to='/'>
              <button
                className='bg-quinary text-whit hover:text-textColor hover:bg-quinaryDark
                    block px-3 py-2 rounded-md font-medium shadow-xl focus:outline-none transition duration-150 ease-in-out'
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
