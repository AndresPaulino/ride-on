import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import MyRides from './MyRides';
import MapFrame from '../MapFrame';
import group from '../../assets/images/group.jpg';
import solo from '../../assets/images/motorcycle_solo.jpg';

function DashboardMain({ settings, profile }) {
  const { user } = useStateContext();

  return (
    <main className='bg-gray-800 w-full h-full sm:pl-[10rem] flex flex-col items-center px-12'>
      {/* Logo */}
      <div className='flex flex-col w-full'>
        <div className='flex justify-center pt-12 rounded'>
          <a
            href='/home'
            className='rounded py-2 px-4 text-2xl font-bold text-primary drop-shadow-all bg-quinary font-dancing'
          >
            RideOn
          </a>
        </div>
      </div>
      {/* Dashboard Container */}
      <div className='pt-5 flex align-middle items-start justify-center w-full max-w-2xl'>
        <div className='drop-shadow-all bg-white p-2 my-4 rounded w-full'>
          <h1 className='text-xl font-bold text-primary'>Hey, {user.user_name}</h1>
          <h1 className='text-gray-700'>Welcome to your dashboard</h1>
        </div>
      </div>
      {/* Blocks container */}
      <div className='flex justify-between bg-white py-5 mx-14 rounded drop-shadow-all w-full max-w-2xl'>
        <Link
          to='/rides'
          className='flex flex-col items-center justify-end rounded h-[10rem] w-1/3 p-4 m-2 bg-quinary border-gray-300 text-textColor align-bottom drop-shadow-all bg-center bg-cover bg-no-repeat font-semibold shadow-md transition-all hover:scale-105'
          style={{
            backgroundImage: `url('${solo}')`,
          }}
        >
          <h1>Find Rides</h1>
        </Link>
        <Link
          to='/rides'
          className='flex flex-col items-center justify-end rounded h-[10rem] w-2/3 p-4 m-2 border-gray-300 text-textColor drop-shadow-all bg-center bg-cover bg-no-repeat font-semibold shadow-md transition-all hover:scale-105'
          style={{
            backgroundImage: `url('${group}')`,
          }}
        >
          <h1>Connect With Others</h1>
        </Link>
      </div>

      <div className='my-4 rounded p-2 bg-white drop-shadow-all mx-14 w-full max-w-2xl'>
        <MyRides />
      </div>
      <div className='flex justify-center align-middle items-center mx-14 pb-24 w-full max-w-2xl'>
        <MapFrame />
      </div>
    </main>
  );
}

export default DashboardMain;
