import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';

// icons for the markers
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // fix when zoom in zoom out the marker dont move
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map: React.FC = () => {
  const position: LatLngTuple = [20.1471135, 99.8531809]; // center point mae jan

  // markers initialization (where they are)
  const markers: { id: number, position: LatLngTuple, popup: string }[] = [
    { id: 1, position: [20.1471135, 99.8531809], popup: 'Marker 1: Mae Jan' },
    { id: 2, position: [19.9206, 99.8556], popup: 'Marker 2: Location 2' },
    { id: 3, position: [19.9006, 99.8356], popup: 'Marker 3: Location 3' },
  ];

  // main map

  return (
    <MapContainer center={position} zoom={14} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map(marker => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

