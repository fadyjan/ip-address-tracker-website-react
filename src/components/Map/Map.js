import React, { useEffect, useState } from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import MyMarker from "../MyMarker/MyMarker";
export default function Map(props) {
  const [mapLocation, setMapLocation] = useState({
    center: [17, 18],
    zoom: 12,
  });

  useEffect(() => {
    if (props.ParentToChildData.length != 0) {
      setMapLocation({
        center: [
          props.ParentToChildData.location.lat,
          props.ParentToChildData.location.lng,
        ],zoom:12
      });
    }
  }, [props]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultZoom={mapLocation.zoom}
        center={mapLocation.center}
      >
        {mapLocation && (
          <MyMarker
            key={1}
            lat={mapLocation.center[0]}
            lng={mapLocation.center[1]}
            text={1}
            tooltip={"Hello"}
          />
        )}
      </GoogleMapReact>
    </div>
  );
}
