import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Markerposition from "../LeafletMarker/LeafletMarker"

const LeafletMap = (props) => {
  const [mapLocation, setMapLocation] = useState([51.505, -0.09]);
  useEffect(() => {
    if (props.ParentToChildData.length != 0) {
      setMapLocation([
        props.ParentToChildData.location.lat,
        props.ParentToChildData.location.lng,
      ]);
      


    }
  }, [props]);

  return (
    <MapContainer
      style={{ height: "65%", width: "100%" }}
      center={mapLocation}
      zoom={2}
      scrollWheelZoom={true}
      
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Markerposition address={mapLocation}></Markerposition>
    </MapContainer>
  );
};

export default LeafletMap;
