import { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';

function RideDetailsCommentForm(props) {
  const [comment, setComment] = useState('');
  const { user } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/rides/${props.match.params.id}/comments`, {
        comment,
        userId: user.id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
  );
}

export default RideDetailsCommentForm;
