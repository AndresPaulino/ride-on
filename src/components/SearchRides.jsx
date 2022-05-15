import React from 'react';

function SearchRides() {
  return (
    <div className='pt-20 w-full'>
      <div className='flex justify-center w-full'>
        <div className='mb-3 xl:w-96'>
          <div className='input-group relative flex items-stretch w-full mb-4 rounded'>
            <input
              type='search'
              className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none'
              placeholder='Search'
            />
            <span
              className='input-group-text flex items-center p-2 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded'
              id='basic-addon2'
            ></span>
            {/* Search Button */}
            <button
              className='bg-quinary text-whit hover:text-textColor hover:bg-quinaryDark
                    block px-3 py-2 rounded-md shadow-lg focus:outline-none transition duration-150 ease-in-out'
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchRides;
