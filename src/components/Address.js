import React from "react";
import GoogleMapReact from 'google-map-react';
import "./Address.css";
import HomeIcon from '@material-ui/icons/Home';

const defaultValue = {
  api_key: "AIzaSyBVoVuCh0rFVpS7Qd--jDYNZeTZMiHKnu0",
  center: { lat: 13.7815867, lng: 100.5297023 },
  zoom: 14,
};

const AnyReactComponent = (props) => <div><HomeIcon colo /></div>;

function Address() {
  return (
    <div className="container__address">
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: defaultValue.api_key }}
          defaultCenter={defaultValue.center}
          defaultZoom={defaultValue.zoom}
        >
          <AnyReactComponent
            lat={defaultValue.center.lat}
            lng={defaultValue.center.lng}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Address;
