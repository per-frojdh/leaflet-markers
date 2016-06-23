import React from 'react';
import { CircleMarker } from 'react-leaflet';

const MapMarkers = ({map, layerContainer, markers}) => {
    const items = markers.map((marker, index) => {
        return (
          <CircleMarker
            map={map}
            layerContainer={layerContainer}
            key={index}
            center={[marker.latitude, marker.longitude]}
            />
      );
    });
    return <div style={{display: 'none'}}>{items}</div>;
};

export default MapMarkers;
