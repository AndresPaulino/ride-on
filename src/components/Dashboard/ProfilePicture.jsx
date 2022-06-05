import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function ProfilePicture() {
  const { user } = useStateContext();

  const [image, setImage] = useState(user.profile_img);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

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
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'hos3vnjf');

    console.log(imageFile);

    axios.post('https://api.cloudinary.com/v1_1/elysium-devleopers/image/upload', formData).then((res) => {
      axios
        .put(`${process.env.REACT_APP_DB_URL}/upload/${user.id}`, {
          profile_img: res.data.secure_url,
        })
        .then((res) => {
          notifySuccess();
          setTimeout(() => {
            window.location = '/settings';
          }, 2000);
        })
        .catch((err) => {
          notifyError();
        });
    });
  };

  // Error Toast
  const notifyError = () =>
    toast.error(error, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // Success Toast
  const notifySuccess = () =>
    toast.success('Profile picture uploaded', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className='w-full pb-5 sm:pl-[10rem] flex align-middle justify-center items-center bg-gray-800 px-12 sm:px-0'>
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

      {/* Toast Values */}
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default ProfilePicture;
