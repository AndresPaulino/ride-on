import React from 'react';
import { useStateContext } from '../../context/StateContext';
import MyRides from './MyRides';

function DashboardMain() {
  const { user } = useStateContext();

  return (
    <main className='bg-white w-full h-screen'>
      {/* Dashboard Container */}
      <div className='px-14 pt-24'>
        <div>
          <h1 className='text-xl font-bold text-gray-800'>Hi, {user.user_name}</h1>
        </div>
        <h1>Welcome to your dashboard</h1>
      </div>
      {/* Blocks container */}
      <div className='flex justify-between py-5 px-12'>
        <div className='flex flex-col items-center justify-center border rounded h-[10rem] w-1/3 p-4 m-2'>
          <h1>Find Rides</h1>
        </div>
        <div className='flex flex-col items-center justify-center border rounded h-[10rem] w-2/3 p-4 m-2'>
          <h1>Connect With Others</h1>
        </div>
      </div>
      <div className='m-2 px-12'>
        <MyRides />
      </div>
    </main>
  );
}

export default DashboardMain;
