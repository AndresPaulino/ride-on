import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import RidesList from '../../components/RidesList';
import RidesCard from '../../components/RidesCard';

function Rides() {
  return (
    <section>
      <nav>
        <NavigationBar />
      </nav>
          <RidesList />
            <RidesCard />
      
    </section>
  );
}

export default Rides;
