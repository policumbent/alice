export interface IExtra {
  bgColor: string;
  name: string;
  unit?: string;
  value?: number | string;
}

export interface IWCard {
  bgColor: string;
  name: [string, string];
  unit?: [string, string];
  value: [number?, number?];
}
