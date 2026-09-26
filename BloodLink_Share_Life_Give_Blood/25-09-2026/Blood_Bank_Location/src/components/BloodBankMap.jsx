import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

import "./BloodBankMap.css";

const bloodBanks = [
  {
    id: 1,
    name: "City Blood Bank",
    lat: 23.0225,
    lng: 72.5714,
  },
  {
    id: 2,
    name: "Red Cross Blood Bank",
    lat: 23.0300,
    lng: 72.5800,
  },
  {
    id: 3,
    name: "Life Care Blood Bank",
    lat: 23.0100,
    lng: 72.5650,
  },
];

const center = {
  lat: 23.0225,
  lng: 72.5714,
};

const BloodBankMap = () => {
  return (
    <div className="map-container">

      <h2>Nearby Blood Banks</h2>

      <LoadScript
        googleMapsApiKey={
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        } >
        <GoogleMap
          mapContainerClassName="google-map"
          center={center}
          zoom={13} >

          {bloodBanks.map((bank) => (
            <Marker
              key={bank.id}
              position={{
                lat: bank.lat,
                lng: bank.lng,
              }}
              title={bank.name}
            />
          ))}

        </GoogleMap>
      </LoadScript>

    </div>
  );
};

export default BloodBankMap;