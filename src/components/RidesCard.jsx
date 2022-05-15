import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RidesCard() {
  return (
    <article className='clearfix open mb-5 border-l-4 rounded-b-md border-primary m-4'>
      <Link to='/rides' className='title p-4 rounded-lg shadow-sm shadow-indigo-100 flex'>
        <div className='main-content mt-2 flex-col'>
          {/* Author */}
          <div className='author flex'>
            <div className='author-image'>
              <img
                src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                alt='profile'
                className='rounded-full h-12 w-12'
              />
            </div>
            <div className='author-name flex justify-center items-center ml-4 font-semibold text-primary'>
              Henry Johnson
            </div>
          </div>
          {/* Ride Title */}
          <div className='ride-title flex justify-center items-center pt-4'>
            <h2 className='text-4xl font-semibold'>The Hammocks to Cafe 27</h2>
          </div>
          {/* Ride Details */}
          <div className='ride-description flex items-center py-4'>
            {/* Participants and Time Left */}
            <div className='flex-col pb-4'>
              {/* Time Left */}
              <div className='time-left border-2 rounded-lg py-1 px-1 text-primary bg-quinary items-center justify-center flex max-w-fit'>
                <h4 className='text-sm font-semibold'>2 days left</h4>
              </div>
              {/* Participants */}
              <div className='py-1 px-1'>
                <span className=' font-semibold text-primary'>27</span>
                <span> participants</span>
              </div>
            </div>
            {/* Address and Launch Date */}
            <div className='flex-col pb-4'>
              {/* Address */}
              <div className='py-1 px-1 text-primary items-center justify-center flex-col'>
                <h5 className='text-sm'>123 Main St</h5>
                <h5>Miami, FL 33198</h5>
              </div>
              {/* Launch Date */}
              <div className='py-1 px-1'>
                <FontAwesomeIcon icon='fa-solid fa-calendar' />
                <span className=' font-semibold text-primary'>May 20, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default RidesCard;
