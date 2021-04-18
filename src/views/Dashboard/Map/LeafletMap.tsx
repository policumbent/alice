import { useState, useEffect } from 'react';

import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet';
import { ILeafletMap, createView } from './types';

const LeafletMap = (props: ILeafletMap) => {
  const { position, options, track, bikeName } = props;

  // opzioni per la mappa
  const { tile, style, circle } = options;
  const view = createView(track);

  // Position marker on map
  const [markerPosition, setMarkerPosition] = useState(position);

  // Updates position when a new one is passed
  useEffect(() => {
    setMarkerPosition(position);
  }, [position]);

  return (
    <Map style={style} center={view.position} zoom={view.zoom}>
      <TileLayer
        url={tile.url}
        attribution={tile.attribution}
        apikey={tile.apiKey}
        minZoom={4}
        maxNativeZoom={17}
        maxZoom={17}
      />
      <Circle center={circle.start} radius={circle.radius} color={'yellow'}>
        <Popup>
          <b>Start zone</b>
        </Popup>
      </Circle>
      <Circle center={circle.end} radius={circle.radius} color={'red'}>
        <Popup>
          <b>Timing zone</b>
        </Popup>
      </Circle>
      <Circle center={circle.catching} radius={circle.radius} color={'blue'}>
        <Popup>
          <b>Catching zone</b>
        </Popup>
      </Circle>
      <Marker key={bikeName} position={markerPosition} icon={options.icon}>
        <Popup>
          <b>TaurusX</b>
        </Popup>
      </Marker>
    </Map>
  );
};

export default LeafletMap;
