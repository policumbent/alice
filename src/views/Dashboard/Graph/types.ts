import { ccData, ccOpts1, ccOpts2, ccOpts3, ccOpts4 } from './costants';

export interface IData {
  [key: string]: number;

  cadence: number;
  heartrate: number;
  power: number;
  speed: number;
}

export function createData(d: any): IData {
  const { heartrate, cadence, power, speed } = d;
  return { heartrate, cadence, power, speed };
}

export interface IChart {
  data: IData;
  history: IData[];
}

export interface ICardChart {
  data: IData;
  history: IData[];
  opts: ccOpts1 | ccOpts2 | ccOpts3 | ccOpts4;
  state: ccData;
  type: string;
}
