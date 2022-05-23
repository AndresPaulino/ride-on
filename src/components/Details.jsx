import RideCardDetails from './RideCardDetails';

function Details(rideDetails) {
  return (
    <article>
      <div>
        <RideCardDetails rideDetails={rideDetails} />
      </div>
    </article>
  );
}

export default Details;
