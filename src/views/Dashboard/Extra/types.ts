export interface Weather {
  pressure: number;
  temperature: number;
  windDirection: number;
  windSpeed: number;
}

export interface IExtra {
  altitude: number;
  distance: number;
  gear: number;
  showExtra: boolean;
  time: number;
  weather: Weather;
}
