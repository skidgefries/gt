import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

function Map({ apiKey }) {
  const MapComponent = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  )));

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${AIzaSyDnqzvG0A1JmiMvayhbt_T_5IXtRO0DiHQ}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default Map;