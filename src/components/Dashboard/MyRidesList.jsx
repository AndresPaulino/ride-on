import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from '../../context/StateContext';

function MyRidesList() {
  const { user } = useStateContext();
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8080/myrides/${user.id}`, user)
        .then((res) => {
          setRides(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [user]);

  return (
    <article>
      {rides.map((ride) => {
        return (
          <Link to={`/rides/${ride.id}`} key={ride.id}>
          <div key={ride.id} className='flex flex-col w-full'>
            <div className='flex justify-between w-full text-primary p-2 border-b-[1px] border-quinaryDark cursor-pointer hover:bg-gray-100 transition-all hover:border-0 hover:scale-105'>
              <h2>{ride.ride_title}</h2>
              <h2>{ride.ride_date}</h2>
            </div>
            </div>
          </Link>
        );
      })}
    </article>
  );
}

export default MyRidesList;
