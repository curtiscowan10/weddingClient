import React, {useMemo} from 'react'
import {location} from '../../../../constants/VenueConstants';
import CircularProgress from '@mui/material/CircularProgress';
import './Map.scss';

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? 'null',
  });
  const center = useMemo(() => ({ lat: location.lat, lng: location.lng }), []);
  
  if (!isLoaded) return <CircularProgress />;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={12}
    />
  );
}

export default Map;