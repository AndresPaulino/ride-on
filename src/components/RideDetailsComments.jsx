import { useState, useEffect } from 'react';
import axios from 'axios';

function RideDetailsComments({ rideDetails }) {
  const [rideComments, setRideComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      await axios
        .get(`http://localhost:8080/rides/${rideDetails.id}/comments`)
        .then((res) => {
          console.log(res.data);
          setRideComments(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchComments();
  }, [rideDetails.id]);

  return (
    <div className='py-10'>
      <ul className='flex flex-col px-5'>
        {rideComments.map((comment) => (
          <li className='flex my-3' key={comment.id}>
            <div className='flex min-w-1/4 rounded-full'>
              <img
                className='w-12 mr-3 min-w-12 max-h-12 rounded-full'
                src={comment.user.profile_img}
                alt='profile_img'
              />
            </div>
            <div className='flex flex-col w-full ml-2 border-b-[1px] border-gray-200'>
              <div className='flex justify-between mb-2'>
                <h3 className='flex font-semibold'>{comment.user.username}</h3>
                <span>3 days ago</span>
              </div>
              <p className='flex pb-2'>{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RideDetailsComments;
