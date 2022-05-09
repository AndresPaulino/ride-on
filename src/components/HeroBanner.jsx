import React from 'react';

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
          <p className='text-xl font-bold text-white'>
            A place to meet, ride, and share your travels with others. 
          </p>

          {/* Hero Buttons */}
          <div className='flex justify-center mt-8'>
            <button className='px-8 py-4 bg-white border-2 border-white rounded-lg shadow-lg'>Get Started</button>
            <button className='ml-4 px-8 py-4 bg-white border-2 border-white rounded-lg shadow-lg'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
