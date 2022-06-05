import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import DotLoader from 'react-spinners/DotLoader';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('token');

      if (!token) {
        setFailedAuth(true);
        window.location = '/';
      }

      await axios
        .get(`${process.env.REACT_APP_DB_URL}/current`, {
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
    return (
      <div className='flex justify-center items-center h-screen'>
        <DotLoader size={100} color='#f4a261' />
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <Context.Provider value={{ user, failedAuth }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
