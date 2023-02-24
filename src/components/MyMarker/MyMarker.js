import React from "react";
import "./MyMarker.css";
import MarkerIcon from "../../Assets/icon-location.svg"

const MyMarker = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return <img id="MapMarker" src={MarkerIcon}></img>;
};

export default MyMarker;
