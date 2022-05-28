import React from 'react';
import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
import { useState } from 'react';

function ProfilePicture() {
  const { user } = useStateContext();

  const [image, setImage] = useState(user.profile_img);
  const [imageFile, setImageFile] = useState(null);

  const handleImagePreview = (event) => {
    setImageFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  // Handle upload for logged in user
  const handleSubmitUpload = (event) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'hos3vnjf');

    console.log(imageFile);

    axios.post('https://api.cloudinary.com/v1_1/elysium-devleopers/image/upload', formData).then((res) => {
      console.log(res);
    });

    event.preventDefault();
  };

  return (
    <div className='w-full pb-5 sm:pl-[10rem] flex align-middle justify-center items-center bg-gray-800'>
      <div className='flex flex-col align-middle justify-center items-center bg-white w-full max-w-lg rounded py-5 drop-shadow-all'>
        <h2 className='text-primary font-semibold mb-5'>Change Profile Image</h2>
        <img className='w-48 h-auto rounded-full mb-5' src={image} alt='profile' />
        <form
          onSubmit={handleSubmitUpload}
          className='flex flex-col w-full justify-center align-middle items-center gap-5'
        >
          <label
            htmlFor='profile_img'
            className='text-primary bg-quinary py-2 px-4 rounded hover:bg-quinaryDark hover:text-textColor cursor-pointer drop-shadow-all'
          >
            Choose Picture
          </label>
          <input
            onChange={handleImagePreview}
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
