import React, { useState, useEffect } from 'react';
import SearchRides from './SearchRides';
import RidesCard from './RidesCard';
import RideModal from './RideModal';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RidesList() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_DB_URL}/rides`)
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
    <div className='bg-white h-full'>
      <SearchRides />
      <div className='flex flex-wrap justify-center'>
        <RideModal />
      </div>
      <div className='flex-col w-full'>
        {rides.map((ride) => (
          <Link to={`/rides/${ride.id}`} key={ride.id}>
            <RidesCard ride={ride} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RidesList;
