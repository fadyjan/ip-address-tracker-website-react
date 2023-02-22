import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios";

const Header = (props) => {
  const [locationinfo, setLocationinfo] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue,setInputValue] = useState()
  useEffect(() => {
    if (isClicked == true) {
      console.log(inputValue)
      axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_DtKgWgDkO9L8NcHLk52OAJhvJ3LAM&ipAddress=${inputValue}`
        )
        .then((response) => {
          console.log(response.data);
          setLocationinfo(response.data)
          props.onSaveHandler (response.data)
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("IF")
      setIsClicked(false)
    }
    console.log("UseEffectCalled")
  },[isClicked]);

  const HandleClick = ()=>{
    let InputValue = document.getElementById("InputElement").value 
    setInputValue(InputValue)
    setIsClicked(true)
  }
  return (
    <div id="HeaderCover">
      <h1 style={{ color: "white" }}>IP Address Tracker</h1>
      <div id="InputWrapper">
        <input
          id="InputElement"
          placeholder="Search for any IP or Domain"
        ></input>
        <button id="BtnElement" onClick={()=>{HandleClick()}}></button>
      </div>
      <div id="OutterInfoWrapper">
        <div id="InnerInfoWrapper">
          <div className="ChildInfo">
            <h1 className="ChildHeader">IP ADDRESS</h1>
            {locationinfo && <h1>{locationinfo.ip}</h1> }
          </div>
          <div className="ChildInfo">
            <h1 className="ChildHeader">LOCATION</h1>
            <h1>{locationinfo &&locationinfo.location.country}</h1>
          </div>
          <div className="ChildInfo">
            <h1 className="ChildHeader">TIMEZONE</h1>
            <h1>{locationinfo &&locationinfo.location.timezone}</h1>
          </div>
          <div className="ChildInfo">
            <h1 className="ChildHeader">ISP</h1>
            <h1>{locationinfo &&locationinfo.isp}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
