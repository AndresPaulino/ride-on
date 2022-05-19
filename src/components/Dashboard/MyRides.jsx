import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function MyRides() {
  const [active, setActive] = useState(true);

  return (
    <section className='flex flex-col'>
      {/* Headers */}
      <div className='flex justify-between'>
        <div className='flex'>
          <NavLink
            to='/dashboard'
            className={`mr-3 pb-1 border-primary ${active ? 'border-b-2' : ''}`}
            onClick={() => setActive(true)}
          >
            My Rides
          </NavLink>
          <NavLink
            to='/dashboard'
            className={`mr-3 pb-1 border-primary ${!active ? 'border-b-2' : ''}`}
            onClick={() => setActive(false)}
          >
            Past Rides
          </NavLink>
        </div>
        <div className='flex'>
          <h1>Search</h1>
        </div>
        {/* Rides List */}
      </div>
    </section>
  );
}

export default MyRides;
