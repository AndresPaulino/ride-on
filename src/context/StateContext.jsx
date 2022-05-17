import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

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

  return <Context.Provider value={{ user, failedAuth }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
