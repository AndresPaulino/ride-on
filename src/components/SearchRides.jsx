import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchRides() {
  return (
    <div className='pt-20 w-full'>
      <div className='flex justify-center w-full'>
        <div className='mb-3 xl:w-96'>
          <div className='input-group relative flex items-stretch w-full mb-4 rounded'>
            <input
              type='search'
              className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded rounded-r-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none'
              placeholder='Search'
            />
            {/* Search Button */}
            <button
              className='relative flex items-center px-2 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border bg-quinary hover:bg-quinaryDark border-solid border-gray-300 rounded rounded-l-none transition ease-in-out duration-150 hover:text-white focus:outline-none focus:shadow-outline focus:border-primary'
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchRides;
