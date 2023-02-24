import React, { useEffect, useState } from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import MyMarker from "../MyMarker/MyMarker";
export default function Map(props) {
  const [mapLocation, setMapLocation] = useState(false);

  useEffect(() => {
    if (props.ParentToChildData.length != 0) {
      setMapLocation(props.ParentToChildData.location);
    }
  }, [props]);
  let defaultProps = {
    center: {
      lat: 17,
      lng: 18,
    },
    zoom: 0,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={
          mapLocation
            ? { "lat": mapLocation.lat, "lng": mapLocation.lng }
            : defaultProps.center
        }
        defaultZoom={defaultProps.zoom}
      >
        {mapLocation && (
          <MyMarker
            key={1}
            lat={mapLocation.lat}
            lng={mapLocation.lng}
            text={1}
            tooltip={"Hello"}
          />
        )}
      </GoogleMapReact>
    </div>
  );
}
