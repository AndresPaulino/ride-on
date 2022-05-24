import { useStateContext } from '../../context/StateContext';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function SettingsForm() {
  const { user } = useStateContext();

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <div className='w-full h-screen sm:pl-[10rem] align-middle items-center'>
      {/* Logo */}
      <div className='flex flex-col w-full sm:pl-[3.5rem] align-middle items-center'>
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
      <div className='px-14 pt-5 max-w-lg align-middle items-center'>
        <div className='drop-shadow-all bg-white p-2 my-4 rounded'>
          <h1 className='text-xl font-bold text-primary'>Hey, {user.user_name}</h1>
          <h1 className='text-gray-700'>Welcome to your settings page</h1>
        </div>
      </div>
      {/* Settings Form */}
      <Box
        component='form'
        noValidate
        autoComplete='off'
        className='flex flex-col px-14 bg-white align-middle items-center'
      >
        <div className='flex flex-col justify-center align-middle items-start bg-white p-10 rounded drop-shadow-all max-w-lg'>
          <div className='flex gap-5 mb-5'>
            <TextField id='first_name' label='First Name' variant='outlined' size='small' />
            <TextField id='last_name' label='Last Name' variant='outlined' size='small' />
          </div>
          <div className='flex gap-5 mb-5'>
            <div className='w-1/2'>
              <TextField id='city' label='City' variant='outlined' size='small' />
            </div>
            <div className='w-1/2'>
              <TextField
                id='bike_model'
                select
                label='Bike Model'
                value={currency}
                size='small'
                onChange={handleChange}
                helperText='Please select your bike model'
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2 mr-2'>
              <TextField
                id='current_password'
                label='Password'
                type='password'
                autoComplete='current-password'
                size='small'
                margin='normal'
              />
            </div>
            <div className='w-1/2 mt-4 ml-2'>
              <TextField id='confirm_password' label='Conrirm Password' type='password' size='small' />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default SettingsForm;
