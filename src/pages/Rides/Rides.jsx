import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import RidesList from '../../components/RidesList';

function Rides() {
  return (
    <section>
      <nav>
        <NavigationBar />
      </nav>
        <RidesList />
      
    </section>
  );
}

export default Rides;
