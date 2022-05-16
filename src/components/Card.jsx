import { Link } from 'react-router-dom';

function Card({ blog }) {
  const { title, background } = blog;

  return (
    <div className='w-full p-5'>
      <Link className='block h-56 group' to='/blog'>
        <div
          className='relative flex items-end h-full transition bg-gray-100 border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#111827] p-8 bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className='flex justify-start align-middle items-center'>
            <p
              className='text-md shadow-xl text-gray-200 font-bold'
              style={{
                textShadow: '0px 5px 20px #000',
              }}
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
