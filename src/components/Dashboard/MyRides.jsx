import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MyRidesList from './MyRidesList';
import SearchIcon from '@mui/icons-material/Search';

function MyRides() {
  const [active, setActive] = useState(true);

  return (
    <section className='flex flex-col'>
      {/* Headers */}
      <div className='flex justify-between'>
        <div className='flex'>
          <NavLink
            to='/dashboard'
            className={`mr-3 pb-1 border-quinary text-primary ${active ? 'border-b-2' : ''}`}
            onClick={() => setActive(true)}
          >
            My Rides
          </NavLink>
          <NavLink
            to='/dashboard'
            className={`mr-3 pb-1 border-quinary ${!active ? 'border-b-2' : ''}`}
            onClick={() => setActive(false)}
          >
            Past Rides
          </NavLink>
        </div>
        <div className='flex max-w-2 justify-center align-middle items-center text-primary'>
          <SearchIcon />
          <input type='text' placeholder='Search' className='w-[5rem] text-primary focus:border-none' />
        </div>
      </div>
      {/* Rides List */}
      <div className='py-8 shadow-lg drop-shadow-all'>{active ? <MyRidesList /> : <MyRidesList />}</div>
    </section>
  );
}

export default MyRides;
