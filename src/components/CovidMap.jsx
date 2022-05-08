import React from "react";
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CovidMap = (countries) => {
    console.log(countries)
    return <MapContainer style={{height: "90vh"}} zoom={2} center={[20,100]}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true}
        minZoom={2}></TileLayer>
    </MapContainer>;
};

export default CovidMap;