import React from 'react'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

//leaflet marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});
//location data
const maplocations = [
  {
    name:'Smart Dustbin Zone - Sector 1',
    description:'Iot in sector1',
    lat:22.5726,
    lng:88.3639
  },
  {
    name:'Tree plantation Area - Zone B',
    description:'240 Installed smart waste managment system',
    lat:22.5746,
    lng:88.3500
  },
  {
    name:'Smart Dustbin Zone - Sector 6',
    description:'250 Installed smart waste managment system',
    lat:22.5689,
    lng:88.3500
  },
  {
    name:'Water purification plant',
    description:'Installed smart waste managment system',
    lat:22.5728,
    lng:88.3636
  },
  {
    name:'Smart Dustbin Zone - Sector 1',
    description:'Installed smart waste managment system',
    lat:22.5726,
    lng:88.3639
  },

];

const Mapview = () => {
  const position = [51.505, -0.09]
  return <>
    <div className='mt-4' style={{width:'100%',height:'400px'}}>
     <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'100%',height:'100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {maplocations.map((loc)=>(
      <Marker position={[loc.lat,loc.lng]}>
      <Popup>
       <strong>{loc.name}</strong>
       <br/>
       {loc.description}
      </Popup>
    </Marker>

    ))}
    
  </MapContainer>
    </div>
  </>
}

export default Mapview