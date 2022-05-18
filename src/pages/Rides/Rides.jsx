import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import RidesList from '../../components/RidesList';

function Rides() {


  return (
    <section>
      <nav className='z-50'>
        <NavigationBar />
      </nav>
      <RidesList />
      
      
    </section>
  );
}

export default Rides;
