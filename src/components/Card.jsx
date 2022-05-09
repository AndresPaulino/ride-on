import React from 'react';

function Card() {
  return (
    <div className='w-full p-5'>
      <a href='/' className='w-100 overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl'>
        <div className='p-8 pt-40 text-white bg-black bg-opacity-40'>
          <h5 className='text-2xl font-bold'>MIAMI</h5>
        </div>
      </a>
    </div>
  );
}

export default Card;
