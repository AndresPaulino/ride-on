import React from 'react';
import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
import { useState } from 'react';

function ProfilePicture() {
  const { user } = useStateContext();

  const [image, setImage] = useState(user.profile_img);

  const handleImageChange = (e) => {
    console.log(e.target.files[0].name);
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_id: user.id,
      profile_img: image.name,
    };
    axios
      .post('http://localhost:8080/update-profile-img', data)
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
        <h2 className='text-primary font-semibold mb-5'>Change Profile Image</h2>
        <img className='w-48 h-auto rounded-full mb-5' src={image} alt='profile' />
        <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center align-middle items-center gap-5'>
          <label
            htmlFor='profile_img'
            className='text-primary bg-quinary py-2 px-4 rounded hover:bg-quinaryDark hover:text-textColor cursor-pointer drop-shadow-all'
          >
            Choose Picture
          </label>
          <input
            onChange={handleImageChange}
            type='file'
            accept='image/*'
            name='profile_img'
            id='profile_img'
            label='File'
            className='hidden'
          />
          <button className='bg-quinary hover:bg-quinaryDark hover:text-textColor px-4 py-2 rounded text-primary drop-shadow-all '>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePicture;
