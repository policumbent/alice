import { useState, useEffect } from 'react';

import { LatLng, LatLngTuple } from 'leaflet';
import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet';

interface View {
  position: LatLngTuple;
  zoom: number;
}

function createView(track: string): View {
  switch (track) {
    case 'bm':
      return { position: [40.433212, -117.053714], zoom: 12 };
    case 'orbassano':
      return { position: [45.009978, 7.560453], zoom: 16 };
    case 'balocco':
      return { position: [45.478673, 8.300212], zoom: 14 };
    default:
      return { position: [40.433212, -117.053714], zoom: 12 };
  }
}

interface ILeafletMap {
  track: string;
  options: any;
  position: LatLng;
  bikeName: string;
}

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
