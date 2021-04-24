import L, { LatLngTuple } from 'leaflet';
import { defViews } from './constants';

export interface View {
  position: LatLngTuple;
  zoom: number;
}

export function createView(track?: string): View {
  switch (track) {
    case 'orbassano':
      return defViews.orbassano;
    case 'balocco':
      return defViews.balocco;
    default:
      return defViews.battleMontain;
  }
}

export interface mapOpts {
  circle: { start: LatLngTuple; end: LatLngTuple; catching: LatLngTuple; radius: number };
  icon: L.Icon;
  style: any;
  tile: { url: string; attribution: string; apiKey: string };
  view: View;
}

export interface ILeafletMap {
  track: string;
  options: mapOpts;
  position: LatLngTuple;
  bikeName: string;
}
