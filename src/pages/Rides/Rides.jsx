import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import RidesList from '../../components/RidesList';

function Rides() {


  return (
    <section className='bg-white'>
      <nav className='z-50'>
        <NavigationBar />
      </nav>
      <div className='h-[90rem] max-w-[90rem] mx-auto border-x-2'>
        <RidesList />
      </div>
      
      
    </section>
  );
}

export default Rides;
