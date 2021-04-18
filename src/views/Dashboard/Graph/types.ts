export interface IData {
  [key: string]: number;

  cadence: number;
  heartrate: number;
  power: number;
  speed: number;
}
export interface IChart {
  data: IData;
  history: IData[];
}

// TODO: fill it with correct type
export interface ICardChart {
  data: IData;
  history: IData[];
  opts: any;
  state: any;
  type: string;
}
