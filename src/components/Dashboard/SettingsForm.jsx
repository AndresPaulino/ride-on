import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
import { useState, useRef } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function SettingsForm() {
  const { user } = useStateContext();

  const [bike, setBike] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'bike') {
      setBike(value);
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'city') {
      setCity(value);
    }
  };

  const bikes = [
    {
      value: 'Honda Shadow',
      label: 'Honda Shadow',
    },
    {
      value: 'Indian Scout',
      label: 'Indian Scout',
    },
    {
      value: 'Harley Davidson',
      label: 'Harley Davidson',
    },
    {
      value: 'Yamaha',
      label: 'Yamaha',
    },
  ];

  const currentPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      city,
      bike_model: bike,
    };

    console.log(data);

    axios
      .put(`${process.env.REACT_APP_DB_URL}/settings/${user.id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='w-full pb-10 sm:pl-[10rem] align-middle items-center bg-gray-800'>
      {/* Logo */}
      <div className='flex flex-col w-full align-middle items-center'>
        <div className='flex justify-center pt-12 rounded'>
          <a
            href='/home'
            className='rounded py-2 px-4 text-2xl font-bold text-primary drop-shadow-all bg-quinary font-dancing'
          >
            RideOn
          </a>
        </div>
      </div>
      {/* Dashboard Container */}
      <div className='px-12 pt-5 flex align-middle items-start justify-center w-full'>
        <div className='drop-shadow-all bg-white p-2 my-4 rounded w-full max-w-lg'>
          <h1 className='text-xl font-bold text-primary'>Hey, {user.user_name}</h1>
          <h1 className='text-gray-700'>Welcome to your settings page</h1>
        </div>
      </div>
      {/* Settings Form */}
      <Box
        component='form'
        noValidate
        autoComplete='off'
        className='flex flex-col bg-gray-800 px-12 align-middle items-center w-full'
        onSubmit={handleSubmit}
      >
        {/* Names */}
        <div className='flex flex-col justify-center align-middle items-start bg-white p-6 py-5 rounded drop-shadow-all max-w-lg'>
          <div className='flex gap-5 mb-5'>
            <TextField
              id='first_name'
              label='First Name'
              name='firstName'
              variant='outlined'
              size='small'
              value={firstName}
              onChange={handleChange}
            />
            <TextField
              id='last_name'
              label='Last Name'
              name='lastName'
              variant='outlined'
              size='small'
              value={lastName}
              onChange={handleChange}
            />
          </div>
          {/* City */}
          <div className='flex mb-5 gap-5'>
            <div className='w-full md:mr-3'>
              <TextField
                id='city'
                label='City'
                name='city'
                variant='outlined'
                size='small'
                value={city}
                onChange={handleChange}
              />
            </div>
            {/* Bike Model */}
            <div className='w-full'>
              <TextField
                id='bike_model'
                select
                label='Bike Model'
                value={bike}
                name='bike'
                size='small'
                onChange={handleChange}
                helperText='Please select your bike model'
              >
                {bikes.map((bike) => (
                  <MenuItem key={bike.value} value={bike.value}>
                    {bike.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2 mr-2'>
              <TextField
                id='current_password'
                label='Current Password'
                type='password'
                autoComplete='current-password'
                size='small'
                margin='normal'
                ref={currentPasswordRef}
              />
            </div>
            <div className='w-1/2 mt-4 ml-2'>
              <TextField
                id='confirm_password'
                label='Conrirm Password'
                type='password'
                size='small'
                ref={confirmPasswordRef}
              />
            </div>
          </div>
          <div className='mt-4 flex '>
            <button className='rounded py-2 px-4 text-primary drop-shadow-all bg-quinary hover:bg-quinaryDark hover:text-textColor'>
              Save Changes
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default SettingsForm;
