import {Link} from 'react-router-dom';


function Card({ city }) {
  return (
    <div className='w-full p-5'>
      <Link class='block h-56 group' to='/blog'>
        <div class='relative flex items-end h-full transition bg-gray-100 border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8'>
          <div class=''>
            <p class='mt-4 text-xl font-bold sm:text-2xl'>{city}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
