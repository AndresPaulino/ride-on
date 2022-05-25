import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function MapFrame() {
  const [zoom, setZoom] = useState(13);
  const [lat, setLat] = useState(25.761681);
  const [lng, setLng] = useState(-80.191788);
  const [markers, setMarkers] = useState([]);

  return (
    <div className='leaflet-container'>
      <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer url='https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=EgISFZBX6b1lb24zEhEd' />
      </MapContainer>
    </div>
  );
}

export default MapFrame;
