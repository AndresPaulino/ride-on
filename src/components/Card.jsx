import {Link} from 'react-router-dom';


function Card({ blog }) {

  const { title, background } = blog;

  return (
    <div className='w-full p-5'>
      <Link className='block h-56 group' to='/blog'>
        <div
          className='relative flex items-end h-full transition bg-gray-100 border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8 bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className='bg-gray-900 flex justify-start align-middle items-center bg-opacity-25'>
            <p className='text-md shadow-xl text-textColor font-bold'>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
