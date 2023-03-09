import React, { useEffect, useMemo } from "react"
import { Marker, Popup, useMap } from "react-leaflet"

const LeafletMarker = (props) => {
    const map = useMap()
    
    useEffect(() => {
      map.flyTo(props.address, 12, {
        animate: true,
      })
    }, [map, props.address])
  return (
    <>
    <Marker position={props.address}>
      <Popup>This is the location of the IP Address or Domain</Popup>
    </Marker>
  </>
  )
}

export default LeafletMarker