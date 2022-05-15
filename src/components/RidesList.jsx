import React, { useState, useEffect } from 'react';
import SearchRides from './SearchRides';
import RidesCard from './RidesCard';
import axios from 'axios';

function RidesList() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:8080/rides')
        .then((res) => {
          setRides(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className='bg-white'>
      <SearchRides />
      {console.log(rides)}
      <div className='flex-col w-full'>
        {rides.map((ride) => (
          <RidesCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
}

export default RidesList;
