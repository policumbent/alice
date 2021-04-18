import { LatLngTuple } from 'leaflet';

export interface View {
  position: LatLngTuple;
  zoom: number;
}

export function createView(track?: string): View {
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

export interface ILeafletMap {
  track: string;
  options: any;
  position: LatLngTuple;
  bikeName: string;
}
