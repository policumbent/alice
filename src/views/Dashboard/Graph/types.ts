import { ccData, ccOpts1, ccOpts2, ccOpts3, ccOpts4 } from './costants';

export interface IGData {
  [key: string]: number | boolean;

  cadence: number;
  heartrate: number;
  power: number;
  speed: number;
}

export function createData(d: any): IGData {
  const { heartrate, cadence, power, speed } = d;
  return { heartrate, cadence, power, speed };
}

export interface IChart {
  data: IGData;
  history: IGData[];
  isLogged: boolean;
}

export interface ICardChart {
  data: IGData;
  history: IGData[];
  opts: ccOpts1 | ccOpts2 | ccOpts3 | ccOpts4;
  state: ccData;
  type: string;
  isLogged: boolean;
}
