import React from 'react';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <section>
      {/* Container */}
      <div
        className='w-full flex h-screen bg-no-repeat bg-cover bg-center flex-col justify-center items-center'
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/790076/pexels-photo-790076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        {/* Hero Content */}
        <div className='container mx-auto px-4 py-16'>
          {/* Hero Heading */}
          <h1 className='text-3xl font-bold text-white'>Welcome to RideOn</h1>
          {/* Hero Subheading */}
          <p className='text-xl font-bold text-white'>A place to meet, ride, and share your travels with others.</p>

          {/* Hero Buttons */}
          <div className='flex mt-8 justify-center md:justify-start'>
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
      </div>
    </section>
  );
}

export default HeroBanner;
