import { useRef } from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';

function ModalForm({ onClose }) {
  const { user } = useStateContext();
  const { id, user_name, profile_img } = user;
  
  const titleRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const descriptionRef = useRef();
  const fromRef = useRef();

  // convert date to ISO format
  const convertDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    const monthName = months[month - 1];
    const newDate = `${monthName} ${day}, ${year}`;
    return newDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let seconds = new Date(dateRef.current.value).getTime() / 1000;
    // let date = new Date(0).setUTCSeconds(seconds);

    const ride_title = titleRef.current.value;
    const ride_address = addressRef.current.value;
    const ride_date = convertDate(dateRef.current.value);
    const ride_time = timeRef.current.value;
    const ride_description = descriptionRef.current.value;
    const ride_from = fromRef.current.value;

    // Form Validation
    if (!ride_title || !ride_address || !ride_date || !ride_time || !ride_description || !ride_from) {
      alert('Please fill out all fields');
      return;
    }

    const data = {
      id,
      user_name,
      profile_img,
      ride_title,
      ride_address,
      ride_date,
      ride_time,
      ride_description,
      ride_from,
    };

    await axios
      .post('http://localhost:8080/rides', data)
      .then(() => {
        onClose();
        window.location = '/rides';
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='p-4 max-w-lg mx-auto bg-gray-900 shadow-2xl'>
      <form
        className='w-full bg-gray-900 shadow-4xl flex-col justify-center align-middle items-center'
        onSubmit={handleSubmit}
      >
        {/* Title Input */}
        <div>
          <label className='text-white mb-2'>Title</label>
          <input
            className='w-full bg-white p-2 rounded-lg'
            type='text'
            placeholder='Title'
            name='ride_title'
            ref={titleRef}
          />
        </div>
        {/* Ride From Input */}
        {/* Date Input */}
        {/* Time Input */}
        <div className='flex justify-between'>
          {/* Ride From */}
          <div className='flex-col my-4 max-w-[8rem]'>
            <label className='text-white mb-2'>Ride From</label>
            <input
              className='w-full bg-white p-2 rounded-lg'
              type={'search'}
              placeholder='Ride From'
              name='ride_from'
              ref={fromRef}
            />
          </div>
          {/* Date */}
          <div className='flex-col my-4 max-w-[10rem]'>
            <label className='text-white mb-0 block'>Date</label>
            <input className='w-full bg-white p-2 rounded-lg' type={'date'} placeholder='Date' ref={dateRef} />
          </div>
          {/* Time */}
          <div className='max-w-[8rem] my-4'>
            <label className='text-white mb-2 flex-col '>Time</label>
            <input className='w-full bg-white p-2 rounded-lg' type={'time'} placeholder='Time' ref={timeRef} />
          </div>
        </div>
        {/* Address */}
        <div>
          <label className='text-white mb-2'>Address</label>
          <input className='w-full bg-white p-2 rounded-lg' type={'address'} placeholder='Address' ref={addressRef} />
        </div>
        {/* Description */}
        <div className='flex-col justify-start align-top items-start my-4'>
          <label className='text-white mb-2'>Description</label>
          <input
            className='w-full h-36 bg-white p-2 rounded-lg'
            type={'description'}
            placeholder='Description'
            ref={descriptionRef}
          />
        </div>
        {/* Buttons */}
        <div className='flex justify-between my-4'>
          <button
            className='w-full mr-2 bg-quinary hover:bg-quinaryDark hover:text-textColor p-2 rounded-lg'
            onClick={onClose}
          >
            Cancel
          </button>
          <button className='w-full ml-2  bg-quinary hover:bg-quinaryDark hover:text-textColor p-2 rounded-lg'>
            Create Ride
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalForm;
