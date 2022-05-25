import { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function MapFrame() {
  const [zoom, setZoom] = useState(13);
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [markers, setMarkers] = useState([]);

  return (
    <div className='leaflet-container ml-14'>
      <MapContainer center={[42.585444, 13.257684]} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
          url='https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=EgISFZBX6b1lb24zEhEd'
        />
      </MapContainer>
    </div>
  );
}

export default MapFrame;
