import { useEffect } from 'react';
import axios from 'axios';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddParticipant from './AddParticipant';

function RidesCard({ ride }) {
  const { id, profile_img, user_name, ride_date, address1, address2, ride_participants, ride_time, ride_title } = ride;

  const handleIncrement = async (e) => {
    e.preventDefault();

    const data = {
      id,
      participants: ride_participants,
    };

    await axios.post('http://localhost:8080/rides/add-participants', data).catch((err) => {
      console.log(err);
    });
  };

  return (
    <article className='clearfix open mb-5 border-l-4 rounded-md border-primary m-4'>
      <div className='title p-4 rounded-lg shadow-sm shadow-indigo-100 flex hover:border-primary hover:rounded-r-lg hover:border-r-[20px] transition-all hover:ease-in-out hover:delay-200 relative'>
        <div className='main-content mt-2 flex-col relative w-full'>
          {/* Author */}
          <div className='author flex relative'>
            <div className='author-image'>
              <img src={profile_img} alt='profile' className='rounded-full h-12 w-12' />
            </div>

            <div className='author-name flex justify-center items-center ml-4 font-semibold text-primary'>
              {user_name}
            </div>
            <div className='flex items-center absolute right-0'>
              <AddParticipant id={id} increment={handleIncrement} />
            </div>
          </div>
          {/* Ride Title */}
          <div className='ride-title flex justify-start items-left pt-4 w-96'>
            <h2 className='text-4xl font-semibold'>{ride_title}</h2>
          </div>
          {/* Ride Details */}
          <div className='ride-description flex items-center pt-12'>
            {/* Participants and Time Left */}
            <div className='flex-col pb-4'>
              {/* Time Left */}
              <div className='time-left border-2 rounded-lg py-1 px-2 text-primary bg-quinary items-center justify-center flex'>
                <h4 className='text-sm font-semibold'>2 days left</h4>
              </div>
              {/* Participants */}
              <div className='py-1 px-1'>
                <PeopleIcon className='text-primary mr-2' />
                <span className=' font-semibold text-primary align-middle'>{ride_participants}</span>
                <span className='align-middle'> participants</span>
              </div>
              <div>
                <AccessTimeIcon className='text-primary ml-1 mr-2' />
                <span className='font-semibold text-primary align-middle'>{ride_time}</span>
              </div>
            </div>
            {/* Address and Launch Date */}
            <div className='flex-col pb-4 text-right absolute right-1'>
              {/* Address */}
              <div className='py-1 px-1 text-primary items-center justify-center flex-col'>
                <h5 className='text-sm'>{address1}</h5>
                <h5>{address2}</h5>
              </div>
              {/* Launch Date */}
              <div className='py-1 px-1'>
                <CalendarMonthIcon className='text-primary' />
                <span className='font-semibold text-primary align-middle'>{ride_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RidesCard;
