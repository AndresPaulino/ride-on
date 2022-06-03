import { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';

function RideDetailsCommentForm({ rideDetails }) {
  const [comment, setComment] = useState('');
  const { user } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datePosted = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    await axios
      .post(`${process.env.REACT_APP_DB_URL}/rides/${rideDetails.id}/comments`, {
        user_comment: comment,
        user_id: user.id,
        ride_id: rideDetails.id,
        profile_img: user.profile_img,
        user_name: user.user_name,
        created: datePosted,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setComment('');
  };

  return (
    <>
      <div className='pt-8 px-7'>
        <h2 className='text-primary text-lg font-semibold'>Join the discussion</h2>
      </div>

      <div className='flex pt-8 px-7'>
        <div className='profile_img w-12 rounded-full mr-4'>
          <img src={user.profile_img} alt='profile_img' className='rounded-full' />
        </div>
        <div className='flex flex-col w-full items-end'>
          <textarea
            className='w-full h-24 px-4 py-2 border-2 border-primary rounded-md resize-none overflow-hidden'
            placeholder='Add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className='w-fit bg-quinary text-primary hover:text-white py-2 mt-4 px-2 rounded-md hover:bg-quinaryDark'
            onClick={handleSubmit}
          >
            Add Comment
          </button>
        </div>
      </div>
    </>
  );
}

export default RideDetailsCommentForm;
