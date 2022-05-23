import { useState, useEffect } from 'react';
import { useStateContext } from '../../context/StateContext';
import axios from 'axios';

function Settings({ open, setOpen}) {
  const { user } = useStateContext();

  const handleSubmit = (e) => {};

  return (
    <article>
      <div>
        <form action={handleSubmit}>
          <label htmlFor='name'>First Name:</label>
          <input type='text' name='first_name' id='first_name' value={user.name} />
          <label htmlFor='name'>Last Name:</label>
          <input type='text' name='last_name' id='last_name' value={user.name} />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={user.email} />
          <label htmlFor='city'>City</label>
          <input type='text' name='city' id='city' value={user.city} />
          <label htmlFor='profile picture'>Profile Picture</label>
          <input type='file' name='profile_picture' id='profile_picture' value={user.profile_picture} />
          <button type='submit'>Submit</button>
        </form>
        <h1>Settings</h1>
      </div>
    </article>
  );
}

export default Settings;
