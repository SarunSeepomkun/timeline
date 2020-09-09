import React from "react";
import GoogleMapReact from "google-map-react";
// import HomeIcon from '@material-ui/icons/Home';
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";

const defaultProps = {
  center: {
    lat: 13.7815867,
    lng: 100.5297023,
  },
  zoom: 16,
};

function Address() {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBVoVuCh0rFVpS7Qd--jDYNZeTZMiHKnu0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <PersonPinCircleIcon
          color="secondary"
          style={{ width: "6vh", height: "5vh" }}
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        ></PersonPinCircleIcon>
      </GoogleMapReact>
    </div>
  );
}

export default Address;
