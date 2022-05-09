import React from 'react';

function Card({ item }) {

    console.log(item);
  return (
    <div className='w-full p-5'>
      <a class='block h-56 group' href='/blog'>
        <div class='relative flex items-end h-full transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8'>
          <div class='lg:group-hover:opacity-0 lg:group-hover:absolute'>
            
                      <p class='mt-4 text-xl font-bold sm:text-2xl'>{item}</p>
          </div>

          <div class='absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative'>
                      <p class='text-2xl font-bold'>{item}</p>

            <p class='mt-4 text-lg font-medium leading-relaxed'>
              Datepicker input using Flatpickr with a button that clears the selected date.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
