import React from 'react';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';

function RidesCard({ ride }) {
  const { id, profileImg, author, title, date, address, address_2 } = ride;

  return (
    <article className='clearfix open mb-5 border-l-4 rounded-b-md border-primary m-4'>
      <Link to='/rides' className='title p-4 rounded-lg shadow-sm shadow-indigo-100 flex'>
        <div className='main-content mt-2 flex-col relative'>
          {/* Author */}
          <div className='author flex'>
            <div className='author-image'>
              <img src={profileImg} alt='profile' className='rounded-full h-12 w-12' />
            </div>
            <div className='author-name flex justify-center items-center ml-4 font-semibold text-primary'>{author}</div>
          </div>
          {/* Ride Title */}
          <div className='ride-title flex justify-center items-center pt-4 max-w-sm'>
            <h2 className='text-4xl font-semibold'>{title}</h2>
          </div>
          {/* Ride Details */}
          <div className='ride-description flex items-center pt-12'>
            {/* Participants and Time Left */}
            <div className='flex-col pb-4'>
              {/* Time Left */}
              <div className='time-left border-2 rounded-lg py-1 px-2 text-primary bg-quinary items-center justify-center flex max-w-fit'>
                <h4 className='text-sm font-semibold'>2 days left</h4>
              </div>
              {/* Participants */}
              <div className='py-1 px-1'>
                <PeopleIcon className='text-primary mr-2' />
                <span className=' font-semibold text-primary align-middle'>27</span>
                <span className='align-middle'> participants</span>
              </div>
            </div>
            {/* Address and Launch Date */}
            <div className='flex-col pb-4 text-right absolute right-1'>
              {/* Address */}
              <div className='py-1 px-1 text-primary items-center justify-center flex-col'>
                <h5 className='text-sm'>{address}</h5>
                <h5>{address_2}</h5>
              </div>
              {/* Launch Date */}
              <div className='py-1 px-1'>
                <CalendarMonthIcon className='text-primary' />
                <span className='font-semibold text-primary align-middle'>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default RidesCard;
