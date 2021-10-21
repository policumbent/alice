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
  connected: boolean;
}

export interface IHistory {
  chart: IGData[];
  miniChart: IGData[];
}

export interface IWeather {
  humidity: number;
  pressure: number;
  temperature: number;
  timestamp: number;
  wind_direction: number;
  wind_speed: number;
}
