import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignIn from './SignUp';

function FetchUser() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('token');

      console.log(token);

      if (!token) {
        setFailedAuth(true);
        return (window.location = '/');
      }

      await axios
        .get('http://localhost:8080/current', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setFailedAuth(true);
        });
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className='text-white'>{`${JSON.stringify(user)}`}</div>;
}

export default FetchUser;
