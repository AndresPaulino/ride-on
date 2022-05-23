import { useState, useEffect } from 'react';
import axios from 'axios';

function RideDetailsComments() {
  const comments = [
    {
      id: 1,
      user: {
        id: 1,
        profile_img: 'https://randomuser.me/api/portraits/men/90.jpg',
        username: 'johndoe',
      },
      comment: 'This is a comment',
      created_at: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        profile_img: 'https://randomuser.me/api/portraits/men/97.jpg',
        username: 'johndoe',
      },
      comment: 'This is a comment',
      created_at: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 3,
      user: {
        id: 3,
        profile_img: 'https://randomuser.me/api/portraits/men/94.jpg',
        username: 'johndoe',
      },
      comment: 'lorem ipsum lorem ipsum sdfkl something here just regular random text for you to see',
      created_at: '2020-06-01T00:00:00.000Z',
    },
  ];

  return (
    <div className='py-10'>
      <ul className='flex flex-col px-5'>
        {comments.map((comment) => (
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
