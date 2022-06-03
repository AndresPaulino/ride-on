import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from '../../components/Details';
import NavigationBar from '../../components/NavigationBar';
import RideDetailsCommentForm from '../../components/RideDetailsCommentForm';
import RideDetailsComments from '../../components/RideDetailsComments';

function RideDetails(props) {
  const [rideDetails, setRideDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_DB_URL}/rides/${props.match.params.id}`)
        .then((res) => {
          setRideDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [props.match.params.id]);
  return (
    <>
      <nav>
        <NavigationBar />
      </nav>
      <main className='bg-white py-14'>
        <Details rideDetails={rideDetails} />
        <RideDetailsCommentForm rideDetails={rideDetails} />
        <RideDetailsComments rideDetails={rideDetails} />
      </main>
    </>
  );
}

export default RideDetails;
