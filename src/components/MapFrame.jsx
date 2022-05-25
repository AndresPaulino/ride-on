import { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import mapPin from '../assets/images/icons/map-pin.svg';

// Set marker using icon prop
const markerIcon = new L.Icon({
  iconUrl: mapPin,
  iconSize: [50, 50],
  popupAnchor: [0, -41],
});

function MapFrame() {
  const [zoom, setZoom] = useState(8);
  const [lat, setLat] = useState(25.761681);
  const [lng, setLng] = useState(-80.191788);
  const [rides, setRides] = useState([]);

  const { user } = useStateContext();

  // Get ride markers for user on page load
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8080/myrides/${user.id}`, user)
        .then((res) => {
          res.data.forEach((ride) => {
            setRides((rides) => [...rides, ride]);
          });
          console.log(rides);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [user]);

  return (
    <div className='leaflet-container'>
      <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer url='https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=EgISFZBX6b1lb24zEhEd' />
        {rides.map((ride, index) => {
          return (
            <Marker key={index} position={[ride.lat, ride.lng]} icon={markerIcon}>
              <Popup>
                <div>
                  <h2 className='text-primary'>{ride.ride_title}</h2>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MapFrame;
