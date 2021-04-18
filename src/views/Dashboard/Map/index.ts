import LeafletMap from './LeafletMap';
import marker from './assets/taurus_icon.png';
import L from 'leaflet';
import { createView } from './types';

const options = {
  view: createView(),
  style: { height: 'inherit' },
  tile: {
    url:
      'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=5adf6850b4034fb3a71eff6eeab5d818',
    atribution:
      '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apiKey: '5adf6850b4034fb3a71eff6eeab5d818',
  },
  circle: {
    start: [40.393431, -117.043385],
    end: [40.466338, -117.062507],
    catching: [40.476676, -117.065328],
    radius: 200,
  },
  icon: new L.Icon({
    iconUrl: marker,
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [60, 19], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [30, 10], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, -7], // point from which the popup should open relative to the iconAnchor
  }),
};

export { LeafletMap, options };
