import React from 'react';
import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
import { useState, useRef } from 'react';

function ProfilePicture() {
  const { user } = useStateContext();

  const [image, setImage] = useState('');

  const handleChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: user.id,
      profile_img: image,
    };
    axios
      .post('/api/users/update-profile-picture', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='w-full pb-5 sm:pl-[10rem] flex align-middle justify-center items-center bg-gray-800'>
      <div className='flex flex-col align-middle justify-center items-center bg-white w-full max-w-lg rounded py-5 drop-shadow-all'>
        <img className='w-48 h-auto rounded-full mb-5' src={user.profile_img} alt='profile' />
        <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center align-middle items-center gap-5'>
          <label
            htmlFor='profile_img'
            className='text-primary bg-quinary py-2 px-4 rounded hover:bg-quinaryDark hover:text-textColor cursor-pointer'
          >
            Choose Picture
          </label>
          <input type='file' name='profile_img' id='profile_img' className='hidden' onChange={handleChange} />
          <button className='bg-quinary hover:bg-quinaryDark hover:text-textColor px-4 py-2 rounded text-primary drop-shadow-all '>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePicture;
