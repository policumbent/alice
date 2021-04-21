import { IGData } from './Graph/types';

export interface IData extends IGData {
  time: number;
  distance: number;
  gear: number;
  altitude: number;
  cpuTemp: number;
  accX: number;
  accXMax: number;
  accY: number;
  accYMax: number;
  accZ: number;
  accZMax: number;
  timestamp: number;
}

export interface IHistory {
  chart: IGData[];
  miniChart: IGData[];
}

export interface IWeather {
  windSpeed: number;
  windDirection: number;
  temperature: number;
  pressure: number;
  timestamp: number;
}
