import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import MyRides from './MyRides';

function DashboardMain() {
  const { user } = useStateContext();
  const background = '../../assets/images/orange_bg.jpg';

  return (
    <main className='bg-gray-800 w-full h-screen sm:pl-[10rem]'>
      {/* Logo */}
      <div className='flex flex-col w-full sm:justify-start sm:items-start sm:pl-[3.5rem]'>
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
      <div className='px-14 pt-5'>
        <div className='drop-shadow-all bg-white p-2 my-4 rounded'>
          <h1 className='text-xl font-bold text-primary'>Hi, {user.user_name}</h1>
          <h1 className='text-gray-700'>Welcome to your dashboard</h1>
        </div>
      </div>
      {/* Blocks container */}
      <div className='flex justify-between bg-white py-5 mx-14 rounded drop-shadow-all'>
        <Link
          to='/rides'
          className='flex flex-col items-center justify-end rounded h-[10rem] w-1/3 p-4 m-2 bg-quinary text-gray-900 hover:bg-quinaryDark border-gray-300 hover:text-textColor align-bottom drop-shadow-all'
        >
          <h1>Find Rides</h1>
        </Link>
        <Link
          to='/rides'
          className='flex flex-col items-center justify-end rounded h-[10rem] w-2/3 p-4 m-2 bg-quinary text-gray-900 hover:bg-quinaryDark border-gray-300 hover:text-textColor drop-shadow-all'
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h1>Connect With Others</h1>
        </Link>
      </div>

      <div className='my-4 rounded p-2 bg-white drop-shadow-all mx-14'>
        <MyRides />
      </div>
    </main>
  );
}

export default DashboardMain;