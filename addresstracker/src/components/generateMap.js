import { useContext, useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../../node_modules/leaflet/dist/leaflet.css";
import L from 'leaflet'
import AppContext from '../context/context';

export default function GenerateMap() {
    const {datas} = useContext(AppContext)
    const [position, setPosition] = useState(['', ''])

    useEffect(() => {
        console.log(datas[0].data.location.lat)
        // setPosition([datas[0].data.locaion.lat, datas[0].data.locaion.lat])
    }, [datas])
    const myIcon = L.icon({
        iconUrl: 'https://cdn.icon-icons.com/icons2/1258/PNG/512/1495574559-map-location-solid-style-01_84581.png',
        iconSize: [60, 60],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41]
    })
    return(
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: '70vh'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}