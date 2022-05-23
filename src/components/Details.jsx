import { useState, useEffect } from 'react';
import axios from 'axios';
import RideCardDetails from './RideCardDetails';

function Details() {
  const [rideDetails, setRideDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:8080/rides/:id')
        .then((res) => {
          setRideDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <article>
      <div>
        <RideCardDetails rideDetails={rideDetails} />
      </div>
    </article>
  );
}

export default Details;
