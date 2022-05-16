import React from 'react';

function ModalForm() {
  return (
    <div className='p-4 max-w-lg mx-auto bg-gray-900 shadow-2xl'>
      <form className='w-full bg-gray-900 shadow-4xl flex-col justify-center align-middle items-center'>
        {/* Title Input */}
        <div>
          <label className='text-white mb-2'>Title</label>
          <input className='w-full bg-white p-2 rounded-lg' type='text' placeholder='Title' />
        </div>
        {/* Ride From Input */}
        {/* Date Input */}
        {/* Time Input */}
        <div className='flex justify-between'>
          {/* Ride From */}
          <div className='flex-col my-4 max-w-[8rem]'>
            <label className='text-white mb-2'>Ride From</label>
            <input className='w-full bg-white p-2 rounded-lg' type={'search'} placeholder='Ride From' />
          </div>
          {/* Date */}
          <div className='flex-col my-4 max-w-[10rem]'>
            <label className='text-white mb-0 block'>Date</label>
            <input className='w-full bg-white p-2 rounded-lg' type={'date'} placeholder='Date' />
          </div>
          {/* Time */}
          <div className='max-w-[8rem] my-4'>
            <label className='text-white mb-2 flex-col '>Time</label>
            <input className='w-full bg-white p-2 rounded-lg' type={'time'} placeholder='Time' />
          </div>
        </div>
        {/* Address */}
        <div>
          <label className='text-white mb-2'>Address</label>
          <input className='w-full bg-white p-2 rounded-lg' type={'address'} placeholder='Address' />
        </div>
        {/* Description */}
        <div className='flex-col justify-start align-top items-start my-4'>
          <label className='text-white mb-2'>Description</label>
          <input className='w-full h-36 bg-white p-2 rounded-lg' type={'description'} placeholder='Description' />
        </div>
        {/* Buttons */}
        <div className='flex justify-between my-4'>
          <button className='w-full mr-2 bg-quinary hover:bg-quinaryDark hover:text-textColor p-2 rounded-lg'>Cancel</button>
          <button className='w-full ml-2  bg-quinary hover:bg-quinaryDark hover:text-textColor p-2 rounded-lg'>Create Ride</button>
        </div>
      </form>
    </div>
  );
}

export default ModalForm;
