import React from 'react';
import SearchRides from './SearchRides';
import RidesCard from './RidesCard';

function RidesList() {
  const rides = [
    {
      id: 1,
      profileImg:
        'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'Andres Paulino',
      title: 'The Hammocks to Cafe 27',
      date: 'May 20, 2022',
      address: '123 Main St',
      address_2: 'Miami, FL 33198',
    },
    {
      id: 2,
      profileImg:
        'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'Hector Hernandez',
      title: 'The Hammocks to Hog Heaven',
      date: 'May 20, 2022',
      address: '78392 Off St',
      address_2: 'Miami, FL 33198',
    },
    {
      id: 3,
      profileImg:
        'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'Hector Hernandez',
      title: 'Miami to Ft. Lauderdale',
      date: 'May 27, 2022',
      address: '123 Rear St',
      address_2: 'Miami, FL 33198',
    },
  ];

  return (
    <div>
      <SearchRides />
      <div className='flex-col w-full'>
        {rides.map((ride) => (
          <RidesCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
}

export default RidesList;
