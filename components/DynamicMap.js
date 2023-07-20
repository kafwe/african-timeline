'use client'

import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, containerClassName, ...rest }) => {
  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '60%',
    margin: '2rem auto',
  };

  const mapStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className={containerClassName} style={containerStyle}>
      <MapContainer style={mapStyle} className={className} {...rest}>
        {children(ReactLeaflet, Leaflet)}
      </MapContainer>
    </div>
  );
}

export default Map;
