import { useContext, useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../../node_modules/leaflet/dist/leaflet.css";
import L from 'leaflet'
import AppContext from '../context/context';

export default function GenerateMap() {
    const {datas} = useContext(AppContext)
    const [Position, setPosition] = useState({
        lat: '',
        lng: ''
    })

    useEffect(() => {
        const positionObj = {};
        positionObj.lat = datas[0].data.location.lat;
        positionObj.lng = datas[0].data.location.lng;
        setPosition(positionObj);
    }, [datas])
    const myIcon = L.icon({
        iconUrl: 'https://cdn.icon-icons.com/icons2/1258/PNG/512/1495574559-map-location-solid-style-01_84581.png',
        iconSize: [60, 60],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    })
    return(
        <>
            <MapContainer center={[Position.lat, Position.lng]} zoom={13} scrollWheelZoom={false} style={{height: '70vh'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={Position} icon={myIcon}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}