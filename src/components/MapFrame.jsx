import { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function MapFrame() {
  const [zoom, setZoom] = useState(13);
  const [lat, setLat] = useState(25.761681);
  const [lng, setLng] = useState(-80.191788);
  const [markers, setMarkers] = useState([]);

  const { user } = useStateContext();

  const handleMarkers = (lat, lng) => {
    const newMarkers = [...markers, [lat, lng]];
    setMarkers(newMarkers);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8080/myrides/${user.id}`, user)
        .then((res) => {
          console.log(res.data);
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
      </MapContainer>
    </div>
  );
}

export default MapFrame;
